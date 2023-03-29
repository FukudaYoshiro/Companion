<?php
/*
 * Template Name: Full Width Template
 */
get_header();
?>
<?php hugo_wp_theme()->get( 'front-page-content' )->render(); ?>

<?php get_footer();
