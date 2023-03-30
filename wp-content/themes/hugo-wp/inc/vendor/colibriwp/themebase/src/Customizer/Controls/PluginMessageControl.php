<?php


namespace ColibriWP\Theme\Customizer\Controls;


use ColibriWP\Theme\Core\Hooks;
use ColibriWP\Theme\PluginsManager;
use ColibriWP\Theme\Theme;
use ColibriWP\Theme\Translations;

class PluginMessageControl extends VueControl {

    public $type = 'colibri-plugin-message';
    
    public $builder_slug =  'colibri-page-builder';
	
	function __construct( $manager, $id, $args = array() ) {
		parent::__construct( $manager, $id, $args );
		$this->builder_slug = Hooks::prefixed_apply_filters( 'plugin_slug', 'colibri-page-builder' );
	}

    protected function printVueContent() {

        $this->addData();

        ?>
        <div class="plugin-message card">
            <p>
                <?php echo Translations::get( 'plugin_message', 'Colibri Page Builder' ); ?>
            </p>
            <?php if ( Theme::getInstance()->getPluginsManager()->getPluginState( $this->builder_slug ) === PluginsManager::NOT_INSTALLED_PLUGIN ): ?>
                <button data-colibri-plugin-action="install"
                        class="el-button el-link h-col el-button--primary el-button--small"
                        style="text-decoration: none">
                    <?php echo Translations::get( 'install_with_placeholder', 'Colibri Page Builder' ); ?>
                </button>
            <?php endif; ?>

            <?php if ( Theme::getInstance()->getPluginsManager()->getPluginState( $this->builder_slug ) === PluginsManager::INSTALLED_PLUGIN ): ?>
                <button data-colibri-plugin-action="activate"
                        class="el-button el-link h-col el-button--primary el-button--small"
                        style="text-decoration: none">
                    <?php echo Translations::get( 'activate_with_placeholder', 'Colibri Page Builder' ); ?>
                </button>
            <?php endif; ?>

            <p class="notice notice-large" data-colibri-plugin-action-message="1" style="display: none"></p>
        </div>
        <?php
    }

    public function addData() {

        if ( Hooks::prefixed_apply_filters( 'plugin-customizer-controller-data-added', false ) ) {
            return;
        }

        Hooks::prefixed_add_filter( 'plugin-customizer-controller-data-added', '__return_true' );

        $builder_slug  = $this->builder_slug;

        add_action( 'customize_controls_print_footer_scripts', function () use ($builder_slug) {        
        
        $plugins_manager = Theme::getInstance()->getPluginsManager();
            $data = array(
				"status"         => $plugins_manager->getPluginState( $builder_slug ),
				"install_url"    => $plugins_manager->getInstallLink( $builder_slug ),
				"activate_url"   => $plugins_manager->getActivationLink( $builder_slug ),
				"slug"   => $builder_slug,
                "messages"     => array(
                    "installing" => Translations::get( 'installing',
                        'Colibri Page Builder' ),
                    "activating" => Translations::get( 'activating',
                        'Colibri Page Builder' )
                ),
                "admin_url"    => add_query_arg( array(
                    'colibri_create_pages'       => '1',
                    'colibri_generator_callback' => 'customizer'
                ), admin_url() ),
            );
            ?>
            <script>
                window.colibri_plugin_status = <?php echo json_encode( $data ); ?>;
            </script>
            <?php
        }, PHP_INT_MAX );

    }
}
