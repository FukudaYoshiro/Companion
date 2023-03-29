<?php

use ColibriWP\Theme\PluginsManager;
use ColibriWP\Theme\Translations;

$hugo_wp_is_builder_installed = apply_filters( 'hugo_wp_page_builder/installed', false );

wp_enqueue_script( 'updates' );

function hugo_wp_get_setting_link( $setting ) {
    return esc_attr( hugo_wp_theme()->getCustomizer()->getSettingQuickLink( $setting ) );
}

?>

<div class="hugo-get-started__container hugo-admin-panel">
    <div class="hugo-get-started__section">
        <h2 class="col-title hugo-get-started__section-title">
            <span class="hugo-get-started__section-title__icon dashicons dashicons-admin-plugins"></span>
            <?php Translations::escHtmlE( 'get_started_section_1_title' ); ?>
        </h2>
        <div class="hugo-get-started__content">


            <?php foreach ( hugo_wp_theme()->getPluginsManager()->getPluginData() as $hugo_wp_recommended_plugin_slug => $hugo_wp_recommended_plugin_data ): ?>
                <?php
                $hugo_wp_plugin_state = hugo_wp_theme()->getPluginsManager()->getPluginState( $hugo_wp_recommended_plugin_slug );
                $hugo_wp_notice_type  = $hugo_wp_plugin_state === PluginsManager::ACTIVE_PLUGIN ? 'blue' : '';
                if ( isset( $hugo_wp_recommended_plugin_data['internal'] ) && $hugo_wp_recommended_plugin_data['internal'] ) {
                    continue;
                }
                ?>
                <div 
				
					class="hugo-notice <?php echo esc_attr( $hugo_wp_notice_type ); ?> plugin-card-<?php echo $hugo_wp_recommended_plugin_slug;?>">
                    <div class="hugo-notice__header">
                        <h3 class="hugo-notice__title"><?php echo esc_html( hugo_wp_theme()->getPluginsManager()->getPluginData( "{$hugo_wp_recommended_plugin_slug}.name" ) ); ?></h3>
                        <div class="hugo-notice__action">
                            <?php if ( $hugo_wp_plugin_state === PluginsManager::ACTIVE_PLUGIN ): ?>
                                <p class="hugo-notice__action__active"><?php Translations::escHtmlE( 'plugin_installed_and_active' ); ?> </p>
                            <?php else: ?>
                                <?php if ( $hugo_wp_plugin_state === PluginsManager::INSTALLED_PLUGIN ): ?>
                                    <a class="button button-large colibri-plugin activate-now" 
										data-slug="<?php echo $hugo_wp_recommended_plugin_slug;?>"
                                       href="<?php echo esc_url( hugo_wp_theme()->getPluginsManager()->getActivationLink( $hugo_wp_recommended_plugin_slug ) ); ?>">
                                        <?php Translations::escHtmlE( 'activate' ); ?>
                                    </a>
                                <?php else: ?>
                                    <a class="button button-large colibri-plugin install-now"
									   data-slug="<?php echo $hugo_wp_recommended_plugin_slug;?>"
                                       href="<?php echo esc_url( hugo_wp_theme()->getPluginsManager()->getInstallLink( $hugo_wp_recommended_plugin_slug ) ); ?>">
                                        <?php Translations::escHtmlE( 'install' ); ?>
                                    </a>
                                <?php endif; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                    <p class="hugo-notice__description"><?php echo esc_html( hugo_wp_theme()->getPluginsManager()->getPluginData( "{$hugo_wp_recommended_plugin_slug}.description" ) ); ?></p>


                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <div class="hugo-get-started__section">
        <h2 class="hugo-get-started__section-title">
            <span class="hugo-get-started__section-title__icon dashicons dashicons-admin-appearance"></span>
            <?php Translations::escHtmlE( 'get_started_section_2_title' ); ?>
        </h2>
        <div class="hugo-get-started__content">
            <div class="hugo-customizer-option__container">
                <div class="hugo-customizer-option">
                    <span class="hugo-customizer-option__icon dashicons dashicons-format-image"></span>
                    <a class="hugo-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( hugo_wp_get_setting_link( 'logo' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_set_logo' ); ?>
                    </a>
                </div>
                <div class="hugo-customizer-option">
                    <span class="hugo-customizer-option__icon dashicons dashicons-format-image"></span>
                    <a class="hugo-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( hugo_wp_get_setting_link( 'hero_background' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_change_hero_image' ); ?>
                    </a>
                </div>
                <div class="hugo-customizer-option">
                    <span class="hugo-customizer-option__icon dashicons dashicons-menu-alt3"></span>
                    <a class="hugo-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( hugo_wp_get_setting_link( 'navigation' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_change_customize_navigation' ); ?>
                    </a>
                </div>
                <div class="hugo-customizer-option">
                    <span class="hugo-customizer-option__icon dashicons dashicons-layout"></span>
                    <a class="hugo-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( hugo_wp_get_setting_link( 'hero_layout' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_change_customize_hero' ); ?>
                    </a>
                </div>
                <div class="hugo-customizer-option">
                    <span class="hugo-customizer-option__icon dashicons dashicons-admin-appearance"></span>
                    <a class="hugo-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( hugo_wp_get_setting_link( 'footer' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_customize_footer' ); ?>
                    </a>
                </div>
                <?php if ( $hugo_wp_is_builder_installed ): ?>
                    <div class="hugo-customizer-option">
                        <span class="hugo-customizer-option__icon dashicons dashicons-art"></span>
                        <a class="hugo-customizer-option__label"
                           target="_blank"
                           href="<?php echo esc_url( hugo_wp_get_setting_link( 'color_scheme' ) ); ?>">
                            <?php Translations::escHtmlE( 'get_started_change_color_settings' ); ?>
                        </a>
                    </div>
                    <div class="hugo-customizer-option">
                        <span class="hugo-customizer-option__icon dashicons dashicons-editor-textcolor"></span>
                        <a class="hugo-customizer-option__label"
                           target="_blank"
                           href="<?php echo esc_url( hugo_wp_get_setting_link( 'general_typography' ) ); ?>">
                            <?php Translations::escHtmlE( 'get_started_customize_fonts' ); ?>
                        </a>
                    </div>

                <?php endif; ?>
                <div class="hugo-customizer-option">
                    <span class="hugo-customizer-option__icon dashicons dashicons-menu-alt3"></span>
                    <a class="hugo-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( hugo_wp_get_setting_link( 'menu' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_set_menu_links' ); ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<?php



wp_print_request_filesystem_credentials_modal();
wp_print_admin_notice_templates();
