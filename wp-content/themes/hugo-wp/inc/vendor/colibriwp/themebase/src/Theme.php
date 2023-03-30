<?php


namespace ColibriWP\Theme;


use ColibriWP\Theme\Core\ComponentInterface;
use ColibriWP\Theme\Core\Hooks;
use ColibriWP\Theme\Core\Utils;
use Exception;


class Theme {

    private static $instance = null;
    public static $slug = null;

    private static $theme_base_relative_path = "";
    private static $theme_root_relative_path = "";

    private $repository;
    private $customizer;
    private $assets_manager;
    private $plugins_manager;

    private $registered_menus = array();
    private $sidebars = array();

    private $themes_cache = array();

    public function __construct() {
        static::$instance = $this;
        Hooks::prefixed_do_action( 'boot' );

        $this->repository      = new ComponentsRepository();
        $this->customizer      = new Customizer( $this );
        $this->assets_manager  = new AssetsManager( $this );
        $this->plugins_manager = new PluginsManager( $this );

        add_action( 'after_setup_theme', array( $this, 'afterSetup' ), 20 );

    }

    public static function slug() {
      return str_replace('_', '-', self::$slug);
    }

    public static function prefix($str, $theme = true) {
      static::$slug = str_replace('-', '_', get_template());
      $slug = static::$slug ? static::$slug  : 'colibriwp';
      return $slug.($theme ? "_theme_" : "_").$str;
    }

    public static function resolveTemplateRelativePath($rel)
    {
        return trailingslashit(static::$theme_root_relative_path) . $rel;
    }

    public static function resolveThemeBaseTemplateRelativePath($rel)
    {
        return trailingslashit(static::$theme_base_relative_path) . $rel;
    }


    public static function load($data) {
        static::$theme_base_relative_path = $data['themeBaseRelativePath'];
        static::$theme_root_relative_path = $data['themeRelativePath'];
        Hooks::prefixed_add_action( 'components', array(__CLASS__, 'registerComponents'));
        static::getInstance();
    }

    public static function rootDirectory() {
        return get_template_directory() . "/" . static::$theme_root_relative_path;
    }

    public static function rootDirectoryUri() {
        return get_template_directory_uri() . "/" . static::$theme_root_relative_path;
    }

    /**
     * @return null|Theme
     */
    public static function getInstance() {
        if ( ! static::$instance ) {
            static::$instance = new static();
            Hooks::prefixed_do_action( 'theme_loaded', static::$instance );
        }
        return static::$instance;
    }

    public function modifyRegisteredSidebar( $sidebar ) {


        global $wp_registered_sidebars;

        $slug = self::$slug;

        $sidebar['before_widget'] .= sprintf('<!--%s_before_widget-->', $slug);
        $sidebar['after_widget']  .= sprintf('<!--%s_after_widget-->', $slug);
        $sidebar['after_title']   .= sprintf('<!--%s_after_title-->', $slug);


        $wp_registered_sidebars[ $sidebar['id'] ] = $sidebar;
    }

    public function wrapWidgetsContent( $params ) {
        global $wp_registered_widgets;

        $id                = $params[0]['widget_id'];
        $original_callback = $wp_registered_widgets[ $id ]['callback'];

        if ( is_admin() ) {
            return $params;
        }

        $wp_registered_widgets[ $id ]['callback'] = function ( $args, $widget_args = 1 ) use ( $original_callback ) {
            ob_start();
            call_user_func( $original_callback, $args, $widget_args );
            $content = ob_get_clean();

            $wrapper_start_added = false;
            $slug = self::$slug;
            if ( strpos( $content, '<!--'.$slug.'_after_title-->' ) !== false ) {
                $content             = str_replace( '<!--'.$slug.'_after_title-->',
                    '<div class="colibri-widget-content-container">',
                    $content );
                $wrapper_start_added = true;
            } else {
                if ( strpos( $content, '<!--'.$slug.'_before_widget-->' ) !== false ) {
                    $content = str_replace( '<!--'.$slug.'_before_widget-->',
                        '<div class="colibri-widget-content-container">',
                        $content );
                }
                $wrapper_start_added = true;
            }

            if ( $wrapper_start_added ) {
                $content = str_replace( '<!--'.$slug.'_after_widget-->',
                    '</div>',
                    $content );
            }

            echo $content;

        };

        return $params;
    }


     public static function page_builder_components( $components ) {
        $namespace = "ColibriWP\\Theme\\BuilderComponents";

        $components = array_merge( $components, array(

            'css'                => "{$namespace}\\CSSOutput",

            // header components
            'header'             => "{$namespace}\\Header",

            // footer components
            'footer'             => "{$namespace}\\Footer",

            // page content
            'main'               => "{$namespace}\\MainContent",
            'single'             => "{$namespace}\\SingleContent",
            'content'            => "{$namespace}\\PageContent",
            'front-page-content' => "{$namespace}\\FrontPageContent",
            // sidebar
            'sidebar'            => "{$namespace}\\Sidebar",
            // 404
            'page-not-found'     => "{$namespace}\\PageNotFound",

            // woo
            'main-woo'           => "{$namespace}\\WooContent",
        ) );

        return $components;
    }

     public static function  default_components( $components ) {

        $namespace = "ColibriWP\\Theme\\Components";

        $components = array_merge( $components, array(

            // header components
            'header'               => "{$namespace}\\Header",
            'logo'                 => "{$namespace}\\Header\\Logo",
            'header-menu'          => "{$namespace}\\Header\\HeaderMenu",

            // inner page fragments
            'inner-nav-bar'        => "{$namespace}\\InnerHeader\\NavBar",
            'inner-top-bar'        => "{$namespace}\\InnerHeader\\TopBar",
            'inner-hero'           => "{$namespace}\\InnerHeader\\Hero",
            'inner-title'          => "{$namespace}\\InnerHeader\\Title",

            // front page fragments
            'front-hero'           => "{$namespace}\\FrontHeader\\Hero",
            'front-title'          => "{$namespace}\\FrontHeader\\Title",
            'front-subtitle'       => "{$namespace}\\FrontHeader\\Subtitle",
            'front-buttons'        => "{$namespace}\\FrontHeader\\ButtonsGroup",
            'top-bar-list-icons'   => "{$namespace}\\FrontHeader\\TopBarListIcons",
            'top-bar-social-icons' => "{$namespace}\\FrontHeader\\TopBarSocialIcons",
            'front-nav-bar'        => "{$namespace}\\FrontHeader\\NavBar",
            'front-top-bar'        => "{$namespace}\\FrontHeader\\TopBar",
            'front-image'          => "{$namespace}\\FrontHeader\\Image",


            // footer components
            'footer'               => "{$namespace}\\Footer",
            'front-footer'         => "{$namespace}\\Footer\\FrontFooter",

            // general components
            'css'                  => "{$namespace}\\CSSOutput",

            // page content
            'main'                 => "{$namespace}\\MainContent",
            'single'               => "{$namespace}\\SingleContent",
            'content'              => "{$namespace}\\PageContent",
            'front-page-content'   => "{$namespace}\\FrontPageContent",
            'search'               => "{$namespace}\\PageSearch",
            'page-not-found'       => "{$namespace}\\PageNotFound",

            // inner content fragments

            //main content
            'main-loop'            => "{$namespace}\\MainContent\ArchiveLoop",
            'post-loop'            => "{$namespace}\\MainContent\PostLoop",
            'archive-loop'         => "{$namespace}\\MainContent\ArchiveLoop",
            'single-template'      => "{$namespace}\\MainContent\SingleItemTemplate",

            // sidebar
            'sidebar'              => "{$namespace}\\Sidebar",

            // woo
            'main-woo'             => "{$namespace}\\WooContent",
        ) );

        return $components;
    }

     public static function registerComponents( $components = array() ) {
        if ( apply_filters( 'colibri_page_builder/installed', false ) ) {
            $components = static::page_builder_components( $components );
        } else {
            $components = static::default_components( $components );
        }
        return $components;
    }


    public function afterSetup() {

        Defaults::load();
        Translations::load();
        ThemeTranslations::load();

        $this->registerMenus();

        $this->repository->load();
        $this->customizer->boot();
        $this->assets_manager->boot();
        $this->plugins_manager->boot();

        // hooks for handling the widget content wrapping
        add_action( 'register_sidebar', array( $this, 'modifyRegisteredSidebar' ) );
        add_filter( 'dynamic_sidebar_params', array( $this, 'wrapWidgetsContent' ) );


        add_action( 'widgets_init', array( $this, 'doInitWidgets' ) );
        add_action( 'admin_menu', array( $this, 'addThemeInfoPage' ) );
        add_action( 'admin_notices', array( $this, 'addThemeNotice' ) );


        Hooks::add_wp_ajax('disable_big_notice', function () {
            $slug = "colibri-wp-page-info";
            update_option( "{$slug}-theme-notice-dismissed", true );
        } );

        add_filter( 'language_attributes', array( $this, 'languageAttributes' ) );

        add_action( 'admin_enqueue_scripts', array( $this, 'enqueueAdminScripts' ), 0 );
    }
    
    
    private function registerMenus() {
        register_nav_menus( $this->registered_menus );
    }
    
    public function languageAttributes( $output ) {
        if ( apply_filters( 'colibri_page_builder/installed', false ) ) {
            return $output;
        }

        $theme_class = get_template() . "-theme";
        $output      .= " class='{$theme_class}'";
	
        return $output;
    }
    
        public function enqueueAdminScripts() {
        $slug ="colibri-wp-page-info";

        $this->getAssetsManager()->registerScript(
            $slug,
            $this->getAssetsManager()->getBaseURL() . "/admin/admin.js",
            array( 'jquery' ),
            false
        )->registerStyle(
            $slug,
            $this->getAssetsManager()->getBaseURL() . "/admin/admin.css" .
            false );
    }


    /**
     * @return AssetsManager
     */
    public function getAssetsManager() {
        return $this->assets_manager;
    }

    public function addThemeNotice() {

        global $pagenow;
        if ( $pagenow === "update.php" ) {
            return;
        }

        $slug = "colibri-wp-page-info";

        $dismissed            = get_option( "{$slug}-theme-notice-dismissed", false );
        $is_builder_installed = apply_filters( 'colibri_page_builder/installed', false );

        if ( get_option( 'extend_builder_theme', false ) ) {
            $dismissed = true;
        }

        if ( ! $dismissed && ! $is_builder_installed ) {
            wp_enqueue_style( $slug );
            wp_enqueue_script( $slug );
            wp_enqueue_script( 'wp-util' );


            ?>
            <div class="notice notice-success is-dismissible colibri-admin-big-notice notice-large">
                <?php View::make( "admin/admin-notice" ); ?>
            </div>
            <?php
        }

    }

    /**
     * @return PluginsManager
     */
    public function getPluginsManager() {
        return $this->plugins_manager;
    }

    public function addThemeInfoPage() {
        $tabs = Hooks::prefixed_apply_filters( 'info_page_tabs', array() );

        if ( ! count( $tabs ) ) {
            return;
        }

        $slug = "colibri-wp-page-info";

        $page_name = Hooks::prefixed_apply_filters( 'theme_page_name', Translations::get( 'theme_page_name' ) );
        add_theme_page(
            $page_name,
            $page_name,
            'activate_plugins',
            $slug,
            array( $this, 'printThemePage' )
        );

        add_action( 'admin_enqueue_scripts', array( $this, 'enqueueThemeInfoPageScripts' ), 20 );
    }

    public function enqueueThemeInfoPageScripts() {
        global $plugin_page;
        $slug = "colibri-wp-page-info";

        if ( $plugin_page === $slug ) {
            wp_enqueue_style( $slug );
            wp_enqueue_script( $slug );
        }
    }

    public function printThemePage() {


        $tabs        = Hooks::prefixed_apply_filters( 'info_page_tabs', array() );
        $tabs_slugs  = array_keys( $tabs );
        $default_tab = count( $tabs_slugs ) ? $tabs_slugs[0] : null;

        $current_tab = isset( $_REQUEST['current_tab'] ) ? $_REQUEST['current_tab'] : $default_tab;
        $url         = add_query_arg
        (
            array(
                'page' => "colibri-wp-page-info",
            ),
            admin_url( "themes.php" )
        );

        $welcome_message = sprintf( Translations::translate( 'welcome_message' ), $this->getThemeHeaderData( 'Name' ) );
        $welcome_info    = Translations::translate( 'welcome_info' );


        View::make( "admin/page",
            array(
                'tabs'            => $tabs,
                'current_tab'     => $current_tab,
                'page_url'        => $url,
                'welcome_message' => Hooks::prefixed_apply_filters( 'info_page_welcome_message', $welcome_message ),
                'welcome_info'    => Hooks::prefixed_apply_filters( 'info_page_welcome_info', $welcome_info ),
            )
        );

    }
    
    

    public function getThemeHeaderData( $key, $child = false ) {

        $slug  = $this->getThemeSlug( $child );
        $theme = $this->getTheme( $slug );

        return $theme->get( $key );
    }


    public function getThemeSlug( $maybe_get_child = false ) {
        $slug  = get_template();
        $theme = $this->getTheme();
        if ( ! $maybe_get_child ) {
            $maybe_get_child = Hooks::prefixed_apply_filters( 'use_child_theme_header_data', $maybe_get_child );
        }

        if ( $maybe_get_child && $theme->get( 'Template' ) ) {
            $slug = get_stylesheet();
        }

        return $slug;

    }
    
    
    public function getTheme( $stylesheet = null ) {

        if ( ! array_key_exists( $stylesheet, $this->themes_cache ) ) {
            $this->themes_cache[ $stylesheet ] = wp_get_theme( $stylesheet );
        }

        return $this->themes_cache[ $stylesheet ];

    }

    public function doInitWidgets() {

        foreach ( $this->sidebars as $sidebar ) {
            register_sidebar( $sidebar );
        }
    }

    /**
     * @param $component_name
     *
     * @return ComponentInterface|null
     * @throws Exception
     */
    public function get( $component_name ) {


        $component = $this->repository->getByName( $component_name );

        if ( ! $component ) {
            throw new Exception( "Null component: `{$component_name}`" );
        }


        return $component;
    }

    /**
     * @return ComponentsRepository
     */
    public function getRepository() {
        return $this->repository;
    }

    /**
     * @param ComponentsRepository $repository
     */
    public function setRepository( $repository ) {
        $this->repository = $repository;
    }

    public function getVersion() {
        $theme = $this->getTheme();
        if ( $theme->get( 'Template' ) ) {
            $theme = $this->getTheme( $theme->get( 'Template' ) );
        }

        return $theme->get( 'Version' );
    }

    public function getTextDomain() {
        $theme = $this->getTheme();
        if ( $theme->get( 'Template' ) ) {
            $theme = $this->getTheme( $theme->get( 'Template' ) );
        }

        return $theme->get( 'TextDomain' );
    }

    /**
     * @return Customizer
     */
    public function getCustomizer() {
        return $this->customizer;
    }

    /**
     * @param string $feature
     * @param bool $args
     *
     * @return Theme
     */
    public function add_theme_support( $feature, $args = true ) {

        if ( $args !== true ) {
            add_theme_support( $feature, $args );
        } else {
            add_theme_support( $feature );
        }

        return $this;
    }

    /**
     * @param string $feature
     * @param bool $args
     *
     * @return Theme
     */
    public function register_menus( $menus ) {
        $this->registered_menus = array_merge( $this->registered_menus, $menus );

        return $this;
    }

    public function register_sidebars( $sidebar ) {

        $this->sidebars = array_merge( $this->sidebars, $sidebar );

        return $this;
    }

    public function contentWidth( $width = 1200 ) {
        global $content_width;
        $content_width = $width;
    }
}
