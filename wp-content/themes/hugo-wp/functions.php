<?php

/**
 *
 * Sets up theme defaults and registers support for various WordPress features.
 *
 */

if ( ! defined( 'HUGO_WP_THEME_REQUIRED_PHP_VERSION' ) ) {
	define( 'HUGO_WP_THEME_REQUIRED_PHP_VERSION', '5.6.0' );
}

add_action( 'after_switch_theme', 'hugo_wp_check_php_version' );

function hugo_wp_check_php_version() {
	// Compare versions.
	if ( version_compare( phpversion(), HUGO_WP_THEME_REQUIRED_PHP_VERSION, '<' ) ) :
		// Theme not activated info message.
		add_action( 'admin_notices', 'hugo_wp_php_version_notice' );

		// Switch back to previous theme.
		switch_theme( get_option( 'theme_switched' ) );

		return false;
	endif;
}

function hugo_wp_php_version_notice() {
	?>
    <div class="notice notice-alt notice-error notice-large">
        <h4><?php esc_html_e( 'Hugo WP theme activation failed!', 'hugo-wp' ); ?></h4>
        <p>
			<?php printf( esc_html__( 'You need to update your PHP version to use the %s.', 'hugo-wp' ),
				' <strong>Hugo WP</strong>' ); ?>
            <br/>
			<?php printf( esc_html__( 'Current php version is: %1$s and the mininum required version is %2$s',
				'hugo-wp' ),
				"<strong>" . esc_html(phpversion()) . "</strong>",
				"<strong>" . esc_html(HUGO_WP_THEME_REQUIRED_PHP_VERSION) . "</strong>" );
			?>

        </p>
    </div>
	<?php
}

if ( version_compare( phpversion(), HUGO_WP_THEME_REQUIRED_PHP_VERSION, '>=' ) ) {
	require_once get_template_directory() . "/inc/functions.php";
} else {
	add_action( 'admin_notices', 'hugo_wp_php_version_notice' );
}
