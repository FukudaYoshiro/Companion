<?php $component = \ColibriWP\Theme\View::getData( 'component' ); ?>
<div data-enabled="<?php echo hugo_wp_footer_parallax_is_enabled();?>" data-colibri-component="footer-parallax" data-colibri-id="1841-f1" class="page-footer style-61 style-local-1841-f1 position-relative">
  <div data-colibri-component="section" data-colibri-id="1841-f2" id="copyright" class="h-section h-section-global-spacing d-flex align-items-lg-center align-items-md-center align-items-center style-62 style-local-1841-f2 position-relative">
    <div class="h-section-grid-container h-section-boxed-container">
      <div data-colibri-id="1841-f3" class="h-row-container gutters-row-lg-1 gutters-row-md-1 gutters-row-2 gutters-row-v-lg-1 gutters-row-v-md-1 gutters-row-v-2 style-63 style-local-1841-f3 position-relative">
        <div class="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-1 gutters-col-md-1 gutters-col-2 gutters-col-v-lg-1 gutters-col-v-md-1 gutters-col-v-2">
          <div class="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-64-outer style-local-1841-f4-outer">
            <div data-colibri-id="1841-f4" class="d-flex h-flex-basis h-column__inner h-px-lg-1 h-px-md-1 h-px-0 v-inner-lg-1 v-inner-md-1 v-inner-0 style-64 style-local-1841-f4 position-relative">
              <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                <div data-colibri-id="1841-f5" class="style-65 style-local-1841-f5 position-relative h-element">
                  <?php hugo_wp_theme_print_footer_copyright(); ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php $component->printParalaxJsToggle();?>
