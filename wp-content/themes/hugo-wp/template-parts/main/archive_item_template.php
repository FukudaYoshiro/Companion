<div class="<?php hugo_wp_print_archive_entry_class("h-column h-column-container d-flex  masonry-item style-110-outer style-local-1847-m4-outer");?>" data-masonry-width="<?php hugo_wp_print_masonry_col_class(true); ?>">
  <div data-colibri-id="1847-m4" class="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-110 style-local-1847-m4 h-overflow-hidden position-relative">
    <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
      <div data-href="<?php the_permalink(); ?>" data-colibri-component="link" data-colibri-id="1847-m5" class="colibri-post-thumbnail <?php hugo_wp_post_thumbnail_classes(); ?> style-111 style-local-1847-m5 h-overflow-hidden position-relative h-element">
        <div class="h-global-transition-all colibri-post-thumbnail-shortcode style-dynamic-1847-m5-height">
          <?php hugo_wp_post_thumbnail(array (
            'link' => true,
          )); ?>
        </div>
        <div class="colibri-post-thumbnail-content align-items-lg-center align-items-md-center align-items-center flex-basis-100">
          <div class="w-100 h-y-container"></div>
        </div>
      </div>
      <div data-colibri-id="1847-m6" class="h-row-container gutters-row-lg-2 gutters-row-md-2 gutters-row-0 gutters-row-v-lg-2 gutters-row-v-md-2 gutters-row-v-2 style-434 style-local-1847-m6 position-relative">
        <div class="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-2 gutters-col-md-2 gutters-col-0 gutters-col-v-lg-2 gutters-col-v-md-2 gutters-col-v-2">
          <div class="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-435-outer style-local-1847-m7-outer">
            <div data-colibri-id="1847-m7" class="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-435 style-local-1847-m7 position-relative">
              <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                <div data-colibri-id="1847-m8" class="h-blog-categories style-437 style-local-1847-m8 position-relative h-element">
                  <div class="h-global-transition-all">
                    <?php hugo_wp_post_categories(array (
                      'prefix' => '',
                    )); ?>
                  </div>
                </div>
                <div data-colibri-id="1847-m9" class="h-blog-title style-116 style-local-1847-m9 position-relative h-element">
                  <div class="h-global-transition-all">
                    <?php hugo_wp_post_title(array (
                      'heading_type' => 'h4',
                      'classes' => 'colibri-word-wrap',
                    )); ?>
                  </div>
                </div>
                <?php if ( \ColibriWP\Theme\Core\Hooks::prefixed_apply_filters( 'show_post_meta', true ) ): ?>
                <div data-colibri-id="1847-m10" class="h-blog-meta style-438 style-local-1847-m10 position-relative h-element">
                  <div name="2" class="metadata-item">
                    <a href="<?php hugo_wp_post_meta_date_url(); ?>">
                      <?php hugo_wp_the_date('F j, Y'); ?>
                    </a>
                    <span class="meta-separator">
                      <?php esc_html_e('-','hugo-wp'); ?>
                    </span>
                  </div>
                  <div name="4" class="metadata-item">
                    <a href="<?php comments_link(); ?>">
                      <?php echo esc_html(get_comments_number()); ?>
                    </a>
                  </div>
                </div>
                <?php endif; ?>
                <div data-colibri-id="1847-m11" class="style-117 style-local-1847-m11 position-relative h-element">
                  <div class="h-global-transition-all">
                    <?php hugo_wp_post_excerpt(array (
                      'max_length' => 46,
                    )); ?>
                  </div>
                </div>
                <div data-colibri-id="1847-m12" class="h-x-container style-122 style-local-1847-m12 position-relative h-element">
                  <div class="h-x-container-inner style-dynamic-1847-m12-group">
                    <span class="h-button__outer style-405-outer style-local-1847-m13-outer d-inline-flex h-element">
                      <a h-use-smooth-scroll="true" href="<?php the_permalink(); ?>" data-colibri-id="1847-m13" class="d-flex w-100 align-items-center h-button justify-content-lg-center justify-content-md-center justify-content-center style-405 style-local-1847-m13 position-relative">
                        <span>
                          <?php esc_html_e('Read more...','hugo-wp'); ?>
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
