<div class="post-list-item col-xs-12 space-bottom">
    <div id="post-<?php the_ID(); ?>" <?php post_class( 'blog-post card ' ); ?>>
        <div class="post-content">

            <div class="row">
                <div class="col-sm-4">
					<?php \ColibriWP\Theme\View::printEntryThumb(); ?>
                </div>


                <div class="col-sm-8 col-xs-12 col-padding col-padding-xs">
                    <h3 class="post-title">
                        <a href="<?php the_permalink(); ?>" rel="bookmark">
							<?php the_title(); ?>
                        </a>
                    </h3>
					<?php get_template_part( 'template-parts/content/content-list-post-meta' ); ?>
                    <div class="post-excerpt">
						<?php the_excerpt(); ?>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
