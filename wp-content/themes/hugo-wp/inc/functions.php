<?php

use ColibriWP\Theme\AssetsManager;
use ColibriWP\Theme\Core\Hooks;
use ColibriWP\Theme\Core\Utils;
use ColibriWP\Theme\Defaults;
use ColibriWP\Theme\Theme;

require_once get_template_directory() . "/inc/vendor/autoload.php";


function hugo_wp_page_builder_components($components)
{
    $namespace = "ColibriWP\\Theme\\BuilderComponents";

    $components = array_merge($components, array(

        'css' 					=> "{$namespace}\\CSSOutput",

        // header components
        'header' 				=> "{$namespace}\\Header",

        // footer components
        'footer' 				=> "{$namespace}\\Footer",

        // page content
        'main' 					=> "{$namespace}\\MainContent",
        'single' 				=> "{$namespace}\\SingleContent",
        'content'				=> "{$namespace}\\PageContent",
        'front-page-content'	=> "{$namespace}\\FrontPageContent",
        // sidebar
        'sidebar' 				=> "{$namespace}\\Sidebar",
        // 404
        'page-not-found' 		=> "{$namespace}\\PageNotFound",

        // woo
        'main-woo' 				=> "{$namespace}\\WooContent",
    ));

    return $components;
}

function hugo_wp_default_components($components)
{

    $namespace = "ColibriWP\\Theme\\Components";

    $components = array_merge($components, array(

        // header components
        'header' 				=> "{$namespace}\\Header",
        'logo' 					=> "{$namespace}\\Header\\Logo",
        'header-menu' 			=> "{$namespace}\\Header\\HeaderMenu",

        // inner page fragments
        'inner-nav-bar' 		=> "{$namespace}\\InnerHeader\\NavBar",
        'inner-top-bar' 		=> "{$namespace}\\InnerHeader\\TopBar",
        'inner-hero' 			=> "{$namespace}\\InnerHeader\\Hero",
        'inner-title' 			=> "{$namespace}\\InnerHeader\\Title",

        // front page fragments
        'front-hero' 			=> "{$namespace}\\FrontHeader\\Hero",
        'front-title' 			=> "{$namespace}\\FrontHeader\\Title",
        'front-subtitle' 		=> "{$namespace}\\FrontHeader\\Subtitle",
        'front-buttons' 		=> "{$namespace}\\FrontHeader\\ButtonsGroup",
        'top-bar-list-icons' 	=> "{$namespace}\\FrontHeader\\TopBarListIcons",
        'top-bar-social-icons' 	=> "{$namespace}\\FrontHeader\\TopBarSocialIcons",
        'front-nav-bar' 		=> "{$namespace}\\FrontHeader\\NavBar",
        'front-top-bar' 		=> "{$namespace}\\FrontHeader\\TopBar",
        'front-image' 			=> "{$namespace}\\FrontHeader\\Image",


        // footer components
        'footer' 				=> "{$namespace}\\Footer",
        'front-footer' 			=> "{$namespace}\\Footer\\FrontFooter",

        // general components
        'css' 					=> "{$namespace}\\CSSOutput",

        // page content
        'main' 					=> "{$namespace}\\MainContent",
        'single' 				=> "{$namespace}\\SingleContent",
        'content' 				=> "{$namespace}\\PageContent",
        'front-page-content' 	=> "{$namespace}\\FrontPageContent",
        'search' 				=> "{$namespace}\\PageSearch",
        'page-not-found' 		=> "{$namespace}\\PageNotFound",

        // inner content fragments

        //main content
        'main-loop' 			=> "{$namespace}\\MainContent\ArchiveLoop",
        'post-loop' 			=> "{$namespace}\\MainContent\PostLoop",
        'archive-loop' 			=> "{$namespace}\\MainContent\ArchiveLoop",
        'single-template' 		=> "{$namespace}\\MainContent\SingleItemTemplate",

        // sidebar
        'sidebar' 				=> "{$namespace}\\Sidebar",

        // woo
        'main-woo' 				=> "{$namespace}\\WooContent",
    ));

    return $components;
}

function hugo_wp_register_components($components = array())
{
    if (apply_filters('colibri_page_builder/installed', false)) {
        $components = hugo_wp_page_builder_components($components);
    } else {
        $components = hugo_wp_default_components($components);
    }

    return $components;
}

Hooks::prefixed_add_action('components', 'hugo_wp_register_components');
Theme::load(array(
    'themeRelativePath' 		=> '',
    'themeBaseRelativePath' 	=> 'inc/vendor/colibriwp/themebase/wp/'
));

/**
 * @return Theme
 */
function hugo_wp_theme()
{
    return Theme::getInstance();
}


/**
 * @return AssetsManager
 */
function hugo_wp_assets()
{
    return hugo_wp_theme()->getAssetsManager();
}


hugo_wp_theme()
    ->add_theme_support('automatic-feed-links')
    ->add_theme_support('title-tag')
    ->add_theme_support('post-thumbnails')
    ->add_theme_support('custom-logo', array(
        'flex-height' 	=> true,
        'flex-width' 	=> true,
        'width' 		=> 150,
        'height' 		=> 70,
    ))
    ->register_menus(array(
        'header-menu' => esc_html__('Header Menu', 'hugo-wp'),
        'footer-menu' => esc_html__('Footer Menu', 'hugo-wp'),
    ));


add_action('widgets_init', 'hugo_wp_register_sidebars');
function hugo_wp_register_sidebars()
{
    register_sidebar(array(
        'name' 			=> esc_html__('Blog sidebar widget area', 'hugo-wp'),
        'id' 			=> 'colibri-sidebar-1',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'before_title' 	=> '<h5 class="widgettitle">',
        'after_title' 	=> '</h5>',
        'after_widget' 	=> '</div>',
    ));

    if (function_exists('\is_shop')) {
        register_sidebar(array(
            'name' 			=> esc_html__('Woo Commerce left sidebar widget area', 'hugo-wp'),
            'id' 			=> 'hugo-ecommerce-left',
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'before_title' 	=> '<h5 class="widgettitle">',
            'after_title' 	=> '</h5>',
            'after_widget' 	=> '</div>',
        ));

    }
}

    if (!apply_filters('colibri_page_builder/installed', false)) {
        hugo_wp_assets()
            ->registerTemplateScript(
                "hugo-wp-theme",
                "/theme/theme.js",
                array('jquery', 'jquery-effects-slide', 'jquery-effects-core')
            )
            ->registerStylesheet("hugo-wp-theme", "/theme/theme.css")
            ->addGoogleFont("Open Sans", array("300", "400", "600", "700"))
            ->addGoogleFont(
                "Muli",
                array(
                    "300",
                    "300italic",
                    "400",
                    "400italic",
                    "600",
                    "600italic",
                    "700",
                    "700italic",
                    "900",
                    "900italic"
                )
            );
    }

    hugo_wp_assets()->registerTemplateStyle('hugo-wp-theme-extras', '/theme/extras.css', 'hugo-wp-theme');

    add_filter('colibri_page_builder/theme_supported', '__return_true');


//blog options

    function hugo_wp_show_post_meta_setting_filter($value)
    {

        $value = get_theme_mod('blog_post_meta_enabled', $value);

        return ($value == 1);
    }

    add_filter('colibri_show_post_meta', 'hugo_wp_show_post_meta_setting_filter');


    function hugo_wp_posts_per_row_setting_filter($value)
    {

        $value = get_theme_mod('blog_posts_per_row', $value);

        return $value;
    }

    add_filter('colibri_posts_per_row', 'hugo_wp_posts_per_row_setting_filter');

    function hugo_wp_archive_post_highlight_setting_filter($value)
    {

        $value = get_theme_mod('blog_post_highlight_enabled', $value);

        return $value;
    }

    add_filter('colibri_archive_post_highlight', 'hugo_wp_archive_post_highlight_setting_filter');


    function hugo_wp_blog_sidebar_enabled_setting_filter($value)
    {
        $default = Defaults::get('blog_sidebar_enabled', $value);
        $value = get_theme_mod('blog_sidebar_enabled', $default);

        return (intval($value) == 1);
    }

    Hooks::prefixed_add_filter('blog_sidebar_enabled', 'hugo_wp_blog_sidebar_enabled_setting_filter');
//add_filter( 'blog_sidebar_enabled', 'hugo_wp_blog_sidebar_enabled_setting_filter' );

    function hugo_wp_override_with_thumbnail_image($value)
    {
        global $post;

        if (isset($post) && $post->post_type === 'post') {
            $value = get_theme_mod('blog_show_post_featured_image',
                Defaults::get('blog_show_post_featured_image', false));
            $value = (intval($value) === 1);
        }

        return $value;
    }

    add_filter('colibri_override_with_thumbnail_image', 'hugo_wp_override_with_thumbnail_image');

    function hugo_wp_print_archive_entry_class($class = "")
    {

        $classes = array("post-list-item", "h-col-xs-12", "space-bottom");
        $classes = array_merge($classes, explode(" ", $class));
        $classes = get_post_class($classes);

        $default = get_theme_mod('blog_posts_per_row', Defaults::get('blog_posts_per_row'));
        $postsPerRow = max(1, apply_filters('hugo_wp_posts_per_row', $default));


        $classes[] = "h-col-sm-12 h-col-md-" . (12 / intval($postsPerRow));

        $classes = apply_filters('hugo_wp_archive_entry_class', $classes);

        $classesText = implode(" ", $classes);

        echo esc_attr($classesText);
    }

    function hugo_wp_print_masonry_col_class($echo = false)
    {

        global $wp_query;
        $index = $wp_query->current_post;
        $hasBigClass = (is_sticky() || ($index === 0 && apply_filters('hugo_wp_archive_post_highlight', false)));
        $showBigEntry = (is_archive() || is_home());

        $class = "";
        if ($showBigEntry && $hasBigClass) {
            $class = "col-md-12";
        } else {
            $default = get_theme_mod('blog_posts_per_row', Defaults::get('blog_posts_per_row'));
            $postsPerRow = max(1, apply_filters('hugo_wp_posts_per_row', $default));

            $class = "col-sm-12.col-md-" . (12 / intval($postsPerRow));
        }

        if ($echo) {
            echo esc_attr($class);
        } else {
            return esc_attr($class);
        }


    }


    Hooks::prefixed_add_filter('info_page_tabs', 'hugo_wp_get_started_info_page_tab');

    function hugo_wp_get_started_info_page_tab($tabs)
    {

        $tabs['get-started'] = array(
            'title' => \ColibriWP\Theme\Translations::translate('get_started'),
            'tab_partial' => "admin/get-started"
        );

        return $tabs;
    }


    function hugo_wp_theme_plugins($plugins)
    {
        $theme_plugins = array();

        if (!function_exists('get_plugins')) {
            require_once ABSPATH . 'wp-admin/includes/plugin.php';
        }

        $installed_plugins = get_plugins();
        $is_cf_7_installed = false;

        foreach (array_keys($installed_plugins) as $plugin_path) {
            if (strpos($plugin_path, 'contact-form-7') === 0) {
                $is_cf_7_installed = true;
                break;
            }
        }

        if (!$is_cf_7_installed) {
            $theme_plugins = array_merge($theme_plugins, array(
                'forminator' => array(
                    'name' => 'Forminator',
                    'description' => \ColibriWP\Theme\Translations::translate('contact_form_plugin_description')
                )
            ));
        }

        $builder_plugin = 'colibri-page-builder';

        foreach ($installed_plugins as $key => $plugin_data) {
            if (strpos($key, 'colibri-page-builder-pro/') !== false) {
                $builder_plugin = 'colibri-page-builder-pro';

            }

            if (strpos($key, 'wpforms-') !== false) {
                unset($theme_plugins['contact-form-7']);
                $slug = Utils::arrayGetAt(explode("/", $key), 0);
                $theme_plugins[$slug] = array(
                    'name' => Utils::pathGet($plugin_data, 'Name', 'WP Forms'),
                    'description' => Utils::pathGet($plugin_data, 'Description'),
                );
            }
        }

        Hooks::prefixed_add_filter('plugin_slug', function ($slug) use ($builder_plugin) {
            return $builder_plugin;
        });

        $theme_plugins = array_merge(array(
            $builder_plugin => array(
                'name' => $builder_plugin === 'colibri-page-builder-pro' ? 'Colibri Page Builder PRO' : 'Colibri Page Builder',
                'description' => \ColibriWP\Theme\Translations::translate('page_builder_plugin_description'),
                'plugin_path' => "{$builder_plugin}/{$builder_plugin}.php"
            )
        ), $theme_plugins);

        return array_merge($plugins, $theme_plugins);
    }

    Hooks::prefixed_add_filter('theme_plugins', 'hugo_wp_theme_plugins');


    add_filter('http_request_host_is_external', 'hugo_wp_allow_internal_host', 10, 3);
    function hugo_wp_allow_internal_host($allow, $host, $url)
    {
        if ($host === 'extendstudio.net') {
            $allow = true;
        }

        return $allow;
    }

    add_action('wp_ajax_hugo_wp_front_set_predesign', function () {
        $predesign_index = isset($_REQUEST['index']) ? $_REQUEST['index'] : 0;
        $predesign_index = intval($predesign_index);
        $meta = array();

        foreach (Defaults::get('front_page_designs', array()) as $predesign) {
            if (intval($predesign['index']) === $predesign_index) {
                $meta = Utils::pathGet($predesign, 'meta', array());
                break;
            }
        }

        update_option('colibriwp_predesign_front_page_index', $predesign_index);
        update_option('colibriwp_predesign_front_page_meta', $meta);
    });

    /* WooCommerce support for latest gallery */
    if (class_exists('WooCommerce')) {
        hugo_wp_theme()
            ->add_theme_support('woocommerce')
            ->add_theme_support('wc-product-gallery-zoom')
            ->add_theme_support('wc-product-gallery-lightbox')
            ->add_theme_support('wc-product-gallery-slider');
    }

    function hugo_wp_override_main_row_class($classes)
    {
        return Defaults::get('templates.blog.row.layout-classes', $classes);
    }

    Hooks::prefixed_add_filter('main_row_class', 'hugo_wp_override_main_row_class', 10, 1);
    require_once __DIR__ . "/integration/colibri-page-builder/colibri-page-builder-integration.php";

