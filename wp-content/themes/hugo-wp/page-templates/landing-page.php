<?php
/*
 * Template Name: Landing Page Template
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
    <?php hugo_wp_theme()->get( 'css' )->render(); ?>
</head>

<body id="hugo" <?php body_class(); ?>>
<?php
if ( function_exists( 'wp_body_open' ) ) {
    wp_body_open();
} else {
    do_action( 'wp_body_open' );
}
?>
<div class="site" id="page-top">
    <?php hugo_wp_theme()->get( 'front-page-content' )->render(); ?>
</div>
<?php wp_footer(); ?>
</body>
</html>
