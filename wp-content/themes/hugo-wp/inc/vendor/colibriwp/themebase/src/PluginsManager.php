<?php


namespace ColibriWP\Theme;


use ColibriWP\Theme\Core\Hooks;
use ColibriWP\Theme\Core\Tree;
use TGM_Plugin_Activation;

class PluginsManager {

    const INSTALLED_PLUGIN = "installed";
    const ACTIVE_PLUGIN = "active";
    const NOT_INSTALLED_PLUGIN = "not-installed";

    private $theme = null;
    /** @var Tree $plugins_data */
    private $plugins_data = array();
    private $tgmpa_config = array();

    public function __construct( $theme ) {

        if ( ! class_exists( 'TGM_Plugin_Activation' ) ) {
            require_once Theme::rootDirectory() . "/inc/class-tgm-plugin-activation.php";
        }
        $this->theme = $theme;
    }

    public function boot() {
        $data               = Hooks::prefixed_apply_filters( 'theme_plugins', array() );
        $this->tgmpa_config = Hooks::prefixed_apply_filters( 'tgmpa_config', array(
            'id'           => get_template(),
            'default_path' => '',
            'menu'         => 'tgmpa-install-plugins',
            'has_notices'  => false,
            'dismissable'  => true,
            'dismiss_msg'  => '',
            'is_automatic' => false,
            'message'      => '',
        ) );

        foreach ( $data as $slug => $plugin_data ) {
            $data[ $slug ] = $this->normalizePluginData( $plugin_data );
        }

        uasort( $data, function ( $a, $b ) {
            return (
                intval( $a['priority'] ) -
                intval( $b['priority'] )
            );
        } );

        $this->plugins_data = new Tree( $data );

        add_action( 'tgmpa_register', array( $this, 'tgmpaRegitster' ) );

		Hooks::add_wp_ajax( 'install_plugin', array($this,'installPluginAction'));
		
		add_action( 'wp_ajax_colibriwp_install_plugin', array($this,'installPluginAction'));

		Hooks::add_wp_ajax( 'activate_plugin', array($this,'activatePluginAction'));
		
		add_action( 'wp_ajax_colibriwp_activate_plugin', array($this,'activatePluginAction'));
    }
    
    function installPluginAction() {
		$slug = isset( $_REQUEST['slug'] ) ? wp_unslash( $_REQUEST['slug'] ) : false;

		if ( ! current_user_can( 'install_plugins', $slug ) ) {
			wp_send_json_error( array( 'error' => 'install_plugin_capability_missing' ) );
		}

		if ( ! function_exists( 'plugins_api' ) ) {
			include_once ABSPATH . 'wp-admin/includes/plugin-install.php';

		}

		if ( $slug && ( $path = $this->getPluginData( "{$slug}.plugin_path" ) ) ) {
			$api = plugins_api(
				'plugin_information',
				array(
					'slug'   => $slug,
					'fields' => array(
						'sections' => false,
					),
				)
			);

			if ( is_wp_error( $api ) ) {
				wp_send_json_error( array( 'error' => 'api_error', 'error_content' => $api ) );
			} else {

				if ( ! class_exists( 'Plugin_Upgrader' ) ) {
					/** Plugin_Upgrader class */
					require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
				}

				$upgrader = new \Plugin_Upgrader( new \Automatic_Upgrader_Skin() );
				$result   = $upgrader->install( $api->download_link );

				if ( $result !== true ) {
					wp_send_json_error( array( 'error' => 'installation_failed' ) );
				}


				$data = apply_filters( 'colibri_page_builder/plugin-installed', array(), $slug,
					$this->getPluginData( $slug ) );

				wp_send_json_success( $data );
			}
		}

		wp_send_json_error( array( 'error' => 'not_found' ) );
	}
	
    function activatePluginAction() {
		$slug = isset( $_REQUEST['slug'] ) ? $_REQUEST['slug'] : false;

		if ( $slug && ( $path = $this->getPluginData( "{$slug}.plugin_path" ) ) ) {
			$ac   = get_option( 'active_plugins' );
			$ac[] = $path;
			update_option( 'active_plugins', array_unique( $ac ) );
			$data = apply_filters( 'colibri_page_builder/plugin-activated', array(), $slug,
				$this->getPluginData( $slug ) );
			if ( isset( $data[ $slug ] ) ) {
				wp_send_json_success( $data[ $slug ] );
			} else {
				wp_send_json_success();
			}
		}

		wp_send_json_error();
	}

    private function normalizePluginData( $plugin_data ) {
        return array_merge( array(
            'name'             => '',
            'description'      => '',
            'required'         => false,
            'force_activation' => false,
            'is_automatic'     => false,
            'priority'         => 10,
            'plugin_path'      => ''
        ), $plugin_data );
    }

    public function getPluginData( $path = '', $default = null ) {
        return $this->plugins_data->findAt( $path, $default );
    }

    public function tgmpaRegitster() {
        $plugins     = $this->plugins_data->getData();
        $to_register = array();
        foreach ( $plugins as $slug => $plugin_data ) {
            $to_register[] = array_merge(
                $plugin_data,
                array(
                    'slug' => $slug
                )
            );
        }


        tgmpa( $to_register, $this->tgmpa_config );
    }

    public function getPluginState( $slug ) {
        $tgmpa     = TGM_Plugin_Activation::get_instance();
        $installed = $tgmpa->is_plugin_installed( $slug );
        $result    = static::NOT_INSTALLED_PLUGIN;

        if ( $installed ) {
            $result = static::INSTALLED_PLUGIN;

            if ( $tgmpa->is_plugin_active( $slug ) ) {
                $result = static::ACTIVE_PLUGIN;
            }
        }

        return $result;
    }

    public function getInstallLink( $slug ) {

        if ( $this->getPluginData( "$slug.source" ) ) {
            return $this->nonceURL(
                add_query_arg(
                    array(
                        'plugin'        => urlencode( $slug ),
                        'tgmpa-install' => 'install-plugin',
                    ),
                    TGM_Plugin_Activation::get_instance()->get_tgmpa_url()
                ),
                'tgmpa-install',
                'tgmpa-nonce'
            );
        }

        return add_query_arg(
            array(
                'action'   => 'install-plugin',
                'plugin'   => $slug,
                '_wpnonce' => wp_create_nonce( 'install-plugin_' . $slug ),
            ),
            network_admin_url( 'update.php' )
        );
    }

    private function nonceURL( $actionurl, $action = - 1, $name = '_wpnonce' ) {
        return add_query_arg( $name, wp_create_nonce( $action ), $actionurl );
    }

    public function getActivationLink( $slug ) {
        $tgmpa = TGM_Plugin_Activation::get_instance();
        if (isset($tgmpa->plugins[ $slug ])) {
            $path  = $tgmpa->plugins[ $slug ]['file_path'];

            return add_query_arg( array(
                'action'        => 'activate',
                'plugin'        => rawurlencode( $path ),
                'plugin_status' => 'all',
                'paged'         => '1',
                '_wpnonce'      => wp_create_nonce( 'activate-plugin_' . $path ),
            ), network_admin_url( 'plugins.php' ) );
        }
    }
}
