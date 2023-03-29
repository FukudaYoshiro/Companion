<?php $component = \ColibriWP\Theme\View::getData( 'component' ); ?>
<div data-colibri-navigation-overlap="true" role="banner" class="h-navigation_outer <?php echo $component->printNavigationClasses(); ?> style-2-outer style-local-1838-h30-outer">
  <?php hugo_wp_theme()->get('inner-top-bar')->render(); ?>
  <div id="navigation" data-colibri-component="navigation" data-colibri-id="1838-h30" class="h-section h-navigation h-navigation d-flex style-2 style-local-1838-h30">
    <div class="h-section-grid-container h-section-fluid-container">
      <div>
        <div data-colibri-id="1838-h31" class="h-row-container <?php echo $component->printContainerClasses(); ?> gutters-row-lg-0 gutters-row-md-0 gutters-row-2 gutters-row-v-lg-0 gutters-row-v-md-0 gutters-row-v-2 style-3 style-local-1838-h31 position-relative">
          <div class="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-0 gutters-col-md-0 gutters-col-2 gutters-col-v-lg-0 gutters-col-v-md-0 gutters-col-v-2">
            <div class="h-column h-column-container d-flex h-col-none style-4-outer style-local-1838-h32-outer">
              <div data-colibri-id="1838-h32" data-placeholder-provider="navigation-logo" class="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-4 style-local-1838-h32 position-relative">
                <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-auto align-self-lg-center align-self-md-center align-self-center">
                  <?php hugo_wp_theme()->get('logo')->render(); ?>
                </div>
              </div>
            </div>
            <div class="h-column h-column-container d-flex h-col-none style-6-outer style-local-1838-h34-outer h-hide-sm">
              <div data-colibri-id="1838-h34" data-placeholder-provider="navigation-spacing" class="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-6 style-local-1838-h34 h-hide-sm position-relative">
                <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                  <div data-colibri-id="1838-h35" class="style-7 style-local-1838-h35 position-relative h-element"></div>
                </div>
              </div>
            </div>
            <div class="h-column h-column-container d-flex h-col-none style-8-outer style-local-1838-h36-outer">
              <div data-colibri-id="1838-h36" data-placeholder-provider="navigation-menu" class="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-8 style-local-1838-h36 position-relative">
                <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-auto align-self-lg-center align-self-md-center align-self-center">
                  <?php hugo_wp_theme()->get('header-menu')->render(); ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="display: none;"></div>
    </div>
  </div>
</div>
<?php $component->printSticky();?>
