<?php


use ColibriWP\Theme\Core\Hooks;
use ColibriWP\Theme\Translations;
use ColibriWP\Theme\View;

$hugo_wp_tabs            = View::getData( 'tabs', array() );
$hugo_wp_current_tab     = View::getData( 'current_tab', null );
$hugo_wp_url             = View::getData( 'page_url', null );
$hugo_wp_welcome_message = View::getData( 'welcome_message', null );
$hugo_wp_tab_partial     = View::getData( "tabs.{$hugo_wp_current_tab}.tab_partial", null );
Hooks::prefixed_do_action( "before_info_page_tab_{$hugo_wp_current_tab}" );
$hugo_wp_slug        = "colibri-wp-page-info";
$colibri_get_started = array(
    'plugin_installed_and_active' => Translations::escHtml( 'plugin_installed_and_active' ),
    'activate'                    => Translations::escHtml( 'activate' ),
    'activating'                  => __( 'Activating', 'hugo-wp' ),
    'install_recommended'         => isset( $_GET['install_recommended'] ) ? $_GET['install_recommended'] : ''
);

wp_localize_script( $hugo_wp_slug, 'colibri_get_started', $colibri_get_started );
?>
<div class="hugo-admin-page wrap about-wrap full-width-layout mesmerize-page">

    <div class="hugo-admin-page--hero">
        <div class="hugo-admin-page--hero-intro hugo-admin-page-spacing ">
            <div class="hugo-admin-page--hero-logo">
                <img src="<?php echo esc_url( hugo_wp_theme()->getAssetsManager()->getBaseURL() . "/images/hugo-logo.png" ) ?>"
                     alt="logo"/>
            </div>
            <div class="hugo-admin-page--hero-text ">
                <?php if ( $hugo_wp_welcome_message ): ?>
                    <h1><?php echo esc_html( $hugo_wp_welcome_message ); ?></h1>
                <?php endif; ?>
            </div>
        </div>
        <?php if ( count( $hugo_wp_tabs ) ): ?>
            <nav class="nav-tab-wrapper wp-clearfix">
                <?php foreach ( $hugo_wp_tabs as $hugo_wp_tab_id => $hugo_wp_tab ) : ?>
                    <a class="nav-tab <?php echo ( $hugo_wp_current_tab === $hugo_wp_tab_id ) ? 'nav-tab-active' : '' ?>"
                       href="<?php echo esc_url( add_query_arg( array( 'current_tab' => $hugo_wp_tab_id ),
                           $hugo_wp_url ) ); ?>">
                        <?php echo esc_html( $hugo_wp_tab['title'] ); ?>
                    </a>
                <?php endforeach; ?>
            </nav>
        <?php endif; ?>
    </div>
    <?php if ( $hugo_wp_tab_partial ): ?>
        <div class="hugo-admin-page--body hugo-admin-page-spacing">
            <div class="hugo-admin-page--content">
                <div class="hugo-admin-page--tab">
                    <div class="hugo-admin-page--tab-<?php echo esc_attr( $hugo_wp_current_tab ); ?>">
                        <?php View::make( $hugo_wp_tab_partial,
                            Hooks::prefixed_apply_filters( "info_page_data_tab_{$hugo_wp_current_tab}",
                                array() ) ); ?>
                    </div>
                </div>

            </div>
            <div class="hugo-admin-page--sidebar">
                <?php View::make( 'admin/sidebar' ) ?>
            </div>
        </div>
    <?php endif; ?>
</div>


