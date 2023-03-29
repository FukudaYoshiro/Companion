<div class="h-column h-column-container d-flex h-col-lg-12 h-col-md-12 h-col-12  masonry-item style-73-outer style-local-1844-m4-outer">
  <div data-colibri-id="1844-m4" class="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-73 style-local-1844-m4 position-relative">
    <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
      <div data-colibri-id="1844-m5" class="colibri-post-thumbnail <?php hugo_wp_post_thumbnail_classes(); ?> style-74 style-local-1844-m5 h-overflow-hidden position-relative h-element">
        <div class="h-global-transition-all colibri-post-thumbnail-shortcode style-dynamic-1844-m5-height">
          <?php hugo_wp_post_thumbnail(array (
            'link' => false,
          )); ?>
        </div>
        <div class="colibri-post-thumbnail-content align-items-lg-center align-items-md-center align-items-center flex-basis-100">
          <div class="w-100 h-y-container"></div>
        </div>
      </div>
      <div data-colibri-id="1844-m6" class="h-row-container gutters-row-lg-0 gutters-row-md-0 gutters-row-0 gutters-row-v-lg-0 gutters-row-v-md-0 gutters-row-v-0 style-75 style-local-1844-m6 position-relative">
        <div class="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-0 gutters-col-md-0 gutters-col-0 gutters-col-v-lg-0 gutters-col-v-md-0 gutters-col-v-0">
          <div class="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-76-outer style-local-1844-m7-outer">
            <div data-colibri-id="1844-m7" class="d-flex h-flex-basis h-column__inner h-px-lg-3 h-px-md-3 h-px-3 v-inner-lg-3 v-inner-md-3 v-inner-3 style-76 style-local-1844-m7 position-relative">
              <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                <?php if ( \ColibriWP\Theme\Core\Hooks::prefixed_apply_filters( 'show_post_meta', true ) ): ?>
                <div data-colibri-id="1844-m8" class="h-blog-meta style-438 style-local-1844-m8 position-relative h-element">
                  <div name="1" class="metadata-item">
                    <span class="metadata-prefix">
                      <?php esc_html_e('Written by','hugo-wp'); ?>
                    </span>
                    <a href="<?php echo esc_url(get_author_posts_url( get_the_author_meta( 'ID' ) )); ?>">
                      <?php echo esc_html(get_the_author_meta( 'display_name', get_the_author_meta( 'ID' ) )); ?>
                    </a>
                    <span class="meta-separator">
                      <?php esc_html_e('-','hugo-wp'); ?>
                    </span>
                  </div>
                  <div name="2" class="metadata-item">
                    <span class="metadata-prefix">
                      <?php esc_html_e('on','hugo-wp'); ?>
                    </span>
                    <a href="<?php hugo_wp_post_meta_date_url(); ?>">
                      <?php hugo_wp_the_date('F j, Y'); ?>
                    </a>
                  </div>
                </div>
                <?php endif; ?>
                <div data-colibri-id="1844-m9" class="style-78 style-local-1844-m9 position-relative h-element">
                  <div class="colibri-post-content h-global-transition-all">
                    <?php the_content(); ?>
                  </div>
                </div>
                <?php hugo_wp_layout_wrapper(array (
                  'name' => 'categories_container',
                  'slug' => 'categories-container-1',
                )); ?><?php hugo_wp_layout_wrapper(array (
                  'name' => 'tags_container',
                  'slug' => 'tags-container-1',
                )); ?>
              </div>
            </div>
          </div>
        </div>
      </div>
      <?php hugo_wp_layout_wrapper(array (
        'name' => 'navigation_container',
        'slug' => 'navigation-container-1',
      )); ?>
    </div>
  </div>
</div>
