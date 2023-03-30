<?php

namespace ColibriWP\Theme\Admin;

use ColibriWP\Theme\Core\Hooks;
use ColibriWP\Theme\Theme;
use ColibriWP\Theme\View;

$tabs            = View::getData( 'tabs', array() );
$current_tab     = View::getData( 'current_tab', null );
$url             = View::getData( 'page_url', null );
$welcome_message = View::getData( 'welcome_message', null );
$tab_partial     = View::getData( "tabs.{$current_tab}.tab_partial", null );
Hooks::prefixed_do_action( "before_info_page_tab_{$current_tab}" );

?>
<div class="colibri-admin-page wrap about-wrap full-width-layout mesmerize-page">

    <div class="colibri-admin-page--hero">
        <div class="colibri-admin-page--hero-intro colibri-admin-page-spacing ">
            <div class="colibri-admin-page--hero-logo">
                <img src="<?php echo esc_attr( Theme::getInstance()->getAssetsManager()->getBaseURL() . "/images/colibri-logo.png" ) ?>"
                     alt="logo"/>
            </div>
            <div class="colibri-admin-page--hero-text ">
                <?php if ( $welcome_message ): ?>
                    <h1><?php echo esc_html( $welcome_message ); ?></h1>
                <?php endif; ?>
            </div>
        </div>
        <?php if ( count( $tabs ) ): ?>
            <nav class="nav-tab-wrapper wp-clearfix">
                <?php foreach ( $tabs as $tab_id => $tab ) : ?>
                    <a class="nav-tab <?php echo ( $current_tab === $tab_id ) ? 'nav-tab-active' : '' ?>"
                       href="<?php echo esc_attr( add_query_arg( array( 'current_tab' => $tab_id ),
                           $url ) ); ?>">
                        <?php echo esc_html( $tab['title'] ); ?>
                    </a>
                <?php endforeach; ?>
            </nav>
        <?php endif; ?>
    </div>
    <?php if ( $tab_partial ): ?>
        <div class="colibri-admin-page--body colibri-admin-page-spacing">
            <div class="colibri-admin-page--content">
                <div class="colibri-admin-page--tab">
                    <div class="colibri-admin-page--tab-<?php echo esc_attr( $current_tab ); ?>">
                        <?php View::make( $tab_partial,
                            Hooks::prefixed_apply_filters( "info_page_data_tab_{$current_tab}",
                                array() ) ); ?>
                    </div>
                </div>

            </div>
            <div class="colibri-admin-page--sidebar">
                <?php View::make( 'admin/sidebar' ) ?>
            </div>
        </div>
    <?php endif; ?>
</div>


