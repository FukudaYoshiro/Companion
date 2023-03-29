<div data-colibri-id="1853-m4" class="h-row-container gutters-row-lg-0 gutters-row-md-0 gutters-row-0 gutters-row-v-lg-3 gutters-row-v-md-3 gutters-row-v-3 style-141 style-local-1853-m4 position-relative">
  <div class="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-0 gutters-col-md-0 gutters-col-0 gutters-col-v-lg-3 gutters-col-v-md-3 gutters-col-v-3">
    <div class="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-142-outer style-local-1853-m5-outer">
      <div data-colibri-id="1853-m5" class="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-142 style-local-1853-m5 position-relative">
        <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
          <div data-colibri-id="1853-m6" class="h-row-container gutters-row-lg-0 gutters-row-md-0 gutters-row-0 gutters-row-v-lg-3 gutters-row-v-md-3 gutters-row-v-3 style-447 style-local-1853-m6 position-relative">
            <div class="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-0 gutters-col-md-0 gutters-col-0 gutters-col-v-lg-3 gutters-col-v-md-3 gutters-col-v-3">
              <div class="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-448-outer style-local-1853-m7-outer">
                <div data-colibri-id="1853-m7" class="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-448 style-local-1853-m7 position-relative">
                  <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                    <div data-href="<?php the_permalink(); ?>" data-colibri-component="link" data-colibri-id="1853-m8" class="colibri-post-thumbnail <?php hugo_wp_post_thumbnail_classes(); ?> <?php hugo_wp_post_thumb_placeholder_classes(); ?> style-446 style-local-1853-m8 h-overflow-hidden position-relative h-element">
                      <div class="h-global-transition-all colibri-post-thumbnail-shortcode style-dynamic-1853-m8-height">
                        <?php hugo_wp_post_thumbnail(array (
                          'link' => true,
                        )); ?>
                      </div>
                      <div class="colibri-post-thumbnail-content align-items-lg-center align-items-md-center align-items-center flex-basis-100">
                        <div class="w-100 h-y-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-449-outer style-local-1853-m9-outer">
                <div data-colibri-id="1853-m9" class="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-449 style-local-1853-m9 position-relative">
                  <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                    <div data-colibri-id="1853-m10" class="h-blog-categories style-437 style-local-1853-m10 position-relative h-element">
                      <div class="h-global-transition-all">
                        <?php hugo_wp_post_categories(array (
                          'prefix' => '',
                        )); ?>
                      </div>
                    </div>
                    <div data-colibri-id="1853-m11" class="h-blog-title style-116 style-local-1853-m11 position-relative h-element">
                      <div class="h-global-transition-all">
                        <?php hugo_wp_post_title(array (
                          'heading_type' => 'h4',
                          'classes' => 'colibri-word-wrap',
                        )); ?>
                      </div>
                    </div>
                    <?php if ( \ColibriWP\Theme\Core\Hooks::prefixed_apply_filters( 'show_post_meta', true ) ): ?>
                    <div data-colibri-id="1853-m12" class="h-blog-meta style-438 style-local-1853-m12 position-relative h-element">
                      <div name="1" class="metadata-item">
                        <span class="metadata-prefix">
                          <?php esc_html_e('by','hugo-wp'); ?>
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
                    <div data-colibri-id="1853-m13" class="style-117 style-local-1853-m13 position-relative h-element">
                      <div class="h-global-transition-all">
                        <?php hugo_wp_post_excerpt(array (
                          'max_length' => 32,
                        )); ?>
                      </div>
                    </div>
                    <div data-colibri-id="1853-m14" class="h-x-container style-147 style-local-1853-m14 position-relative h-element">
                      <div class="h-x-container-inner style-dynamic-1853-m14-group">
                        <span class="h-button__outer style-405-outer style-local-1853-m15-outer d-inline-flex h-element">
                          <a h-use-smooth-scroll="true" href="<?php the_permalink(); ?>" data-colibri-id="1853-m15" class="d-flex w-100 align-items-center h-button justify-content-lg-center justify-content-md-center justify-content-center style-405 style-local-1853-m15 position-relative">
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
  </div>
</div>
