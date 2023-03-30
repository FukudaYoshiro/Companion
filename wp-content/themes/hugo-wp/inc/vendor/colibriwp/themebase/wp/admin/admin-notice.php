<?php

namespace ColibriWP\Theme\Admin;

use ColibriWP\Theme\Core\Hooks;
use ColibriWP\Theme\Defaults;
use ColibriWP\Theme\Theme;
use ColibriWP\Theme\Translations;

$front_page_designs = array();

foreach ( Defaults::get( 'front_page_designs', array() ) as $current_design ) {
    if ( \ColibriWP\Theme\Core\Utils::pathGet( $current_design, 'display', true ) ) {
        $front_page_designs[] = $current_design;
    }
}

?>

<div class="colibri-admin-big-notice--container">
    <div class="logo-holder">
        <h2><?php Translations::escHtmlE( 'start_with_a_front_page' ); ?></h2>
    </div>
    <div class="content-holder">
        <ul class="predefined-front-pages">
            <?php foreach ( $front_page_designs as $design_index => $current_design ): ?>
                <?php $design_selected = $design_index === 0 ? 'selected' : ''; ?>
                <li data-index="<?php echo esc_attr( $current_design['index'] ); ?>"
                    class="<?php echo esc_attr( $design_selected ); ?>">
                    <div class="predefined-front-page-card">
                        <div class="front-page-design-wrapper">
                            <div class="selected-badge"></div>
                            <?php $front_page_design_image_url = Hooks::prefixed_apply_filters(
                                'front_page_design_screenshot_url',
                                Theme::getInstance()->getAssetsManager()->getBaseURL() . "/images/front-page-{$current_design['index']}.jpg",
                                $current_design
                            ); ?>
                            <div class="design-preview-image"
                                 style="background-image: url(<?php echo esc_attr( $front_page_design_image_url ); ?>)"
                            ></div>
                        </div>
                        <div class="predefined-front-page-card-footer">
                            <h3 class="design-title">
                                <?php echo esc_html( $current_design['name'] ); ?>
                            </h3>
                        </div>
                    </div>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
    <div class="content-footer ">
        <div class="action-buttons">
            <button class="button button-primary button-hero start-with-predefined-design-button">
                <?php Translations::escHtmlE( 'start_with_selected_page' ); ?>
            </button>
            <span class="or-separator"><?php Translations::escHtmlE( 'or' ); ?> </span>
            <button class="button button-hero view-all-demos">
                <?php Translations::escHtmlE( 'check_all_demo_sites_page' ); ?>
            </button>
        </div>
        <div>
            <div class="plugin-notice">
                <span class="spinner"></span>
                <span class="message"></span>
            </div>
        </div>
        <div>
            <p class="description large-text"><?php Translations::escHtmlE( 'start_with_a_front_page_plugin_info' ); ?></p>
        </div>
    </div>
    <script type="text/javascript">
        <?php
        $builder_slug = Hooks::prefixed_apply_filters( 'plugin_slug', 'colibri-page-builder' );
        $plugins_manager = Theme::getInstance()->getPluginsManager();
        $builder_status = array(
            "status"         => $plugins_manager->getPluginState( $builder_slug ),
            "install_url"    => $plugins_manager->getInstallLink( $builder_slug ),
            "activate_url"   => $plugins_manager->getActivationLink( $builder_slug ),
            "slug"           => $builder_slug,
            "theme_slug" => Theme::$slug,
            "view_demos_url" => add_query_arg(
                array(
                    'page'        => 'colibri-wp-page-info',
                    'current_tab' => 'demo-import'
                ),
                admin_url( 'themes.php' )
            ),
            "messages"       => array(
                "installing" => Translations::get( 'installing',
                    'Colibri Page Builder' ),
                "activating" => Translations::get( 'activating',
                    'Colibri Page Builder' )
            ),
        ); ?>
        var colibri_builder_status = <?php echo wp_json_encode( $builder_status ); ?>;
    </script>
</div>
