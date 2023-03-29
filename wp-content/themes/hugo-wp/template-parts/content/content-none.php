<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <div class="post-content-single">
        <h3 class="page-title">
			<?php _e( 'Nothing Found', 'hugo-wp' ); ?>
        </h3>
		<?php if ( is_home() && current_user_can( 'publish_posts' ) ): ?>
            <p><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.',
					'hugo-wp' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
		<?php elseif ( is_search() ): ?>
            <p><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.',
					'hugo-wp' ); ?></p>
			<?php get_search_form(); ?>
		<?php else: ?>
            <p><?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.',
					'hugo-wp' ); ?></p>
			<?php get_search_form(); ?>
		<?php endif; ?>
    </div>
</div>
