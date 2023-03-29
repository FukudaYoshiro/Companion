<?php

use ColibriWP\Theme\Core\Hooks;
use ColibriWP\Theme\Core\Utils;
use ColibriWP\Theme\Defaults;
use ColibriWP\Theme\Translations;

$hugo_wp_front_page_designs = array();
$hugo_wp_slug        = "colibri-wp-page-info";

foreach ( Defaults::get( 'front_page_designs', array() ) as $design ) {
    if ( Utils::pathGet( $design, 'display', true ) ) {
        if ( Utils::pathGet( $design, 'meta.slug' ) === 'modern' ) {
            $hugo_wp_front_page_design = $design;
            break;
        }

    }
}

$colibri_get_started = array(
    'plugin_installed_and_active' => Translations::escHtml( 'plugin_installed_and_active' ),
    'activate'                    => Translations::escHtml( 'activate' ),
    'activating'                  => __( 'Activating', 'hugo-wp' ),
    'install_recommended'         => isset( $_GET['install_recommended'] ) ? $_GET['install_recommended'] : ''
);

wp_localize_script( $hugo_wp_slug, 'colibri_get_started', $colibri_get_started );

?>
<style>
    .hugo-admin-big-notice--container .action-buttons,
    .hugo-admin-big-notice--container .content-holder {
        display: flex;
        align-items: center;
    }


    .hugo-admin-big-notice--container .front-page-preview {
        max-width: 362px;
        margin-right: 40px;
    }

    .hugo-admin-big-notice--container .front-page-preview img {
        max-width: 100%;
        border: 1px solid #ccd0d4;
    }

</style>
<div class="hugo-admin-big-notice--container">
    <div class="content-holder">

        <div class="front-page-preview">
            <?php $hugo_wp_front_page_design_image = get_stylesheet_directory_uri() . "/screenshot.jpg"; ?>
            <img class="selected"
                 data-index="<?php echo esc_attr( $hugo_wp_front_page_design['index'] ); ?>"
                 src="<?php echo esc_url( $hugo_wp_front_page_design_image ); ?>"/>
        </div>
        <div class="messages-area">
            <div class="title-holder">
                <h1><?php esc_html_e( 'Would you like to install the pre-designed Hugo WP homepage?',
                        'hugo-wp' ) ?></h1>
            </div>
            <div class="action-buttons">
                <button class="button button-primary button-hero start-with-predefined-design-button">
                    <?php esc_html_e( 'Install the Hugo WP homepage', 'hugo-wp' ); ?>
                </button>
                <span class="or-separator">&ensp;<?php \ColibriWP\Theme\Translations::escHtmlE( 'or' ); ?>&ensp;</span>
                <button class="button-link hugo-maybe-later dismiss">
                    <?php esc_html_e( 'Maybe Later', 'hugo-wp' ); ?>
                </button>
            </div>
            <div class="content-footer ">
                <div>
                    <div class="plugin-notice">
                        <span class="spinner"></span>
                        <span class="message"></span>
                    </div>
                </div>
                <div>
                    <p class="description large-text">
                        <?php esc_html_e( 'This action will also install the Colibri Page Builder plugin.',
                            'hugo-wp' ); ?>
                    </p>
                </div>
            </div>
        </div>

    </div>
    <?php
    $hugo_wp_builder_slug = Hooks::prefixed_apply_filters( 'plugin_slug', 'colibri-page-builder' );

    wp_localize_script( $hugo_wp_slug , 'hugo_wp_builder_status', array(
        "status"         => hugo_wp_theme()->getPluginsManager()->getPluginState( $hugo_wp_builder_slug ),
        "install_url"    => hugo_wp_theme()->getPluginsManager()->getInstallLink( $hugo_wp_builder_slug ),
        "activate_url"   => hugo_wp_theme()->getPluginsManager()->getActivationLink( $hugo_wp_builder_slug ),
        "slug"           => $hugo_wp_builder_slug,
        "view_demos_url" => add_query_arg(
            array(
                    'page'        => 'hugo-page-info',
                'current_tab' => 'demo-import'
            ),
            admin_url( 'themes.php' )
        ),
        "messages"       => array(
            "installing" => \ColibriWP\Theme\Translations::get( 'installing',
                'Colibri Page Builder' ),
            "activating" => \ColibriWP\Theme\Translations::get( 'activating',
                'Colibri Page Builder' )
        ),
    ) );
    ?>
</div>
