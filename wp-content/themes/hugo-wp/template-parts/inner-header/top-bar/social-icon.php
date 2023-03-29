<div class="social-icon-container d-inline-flex">
  <a href="<?php echo esc_url(\ColibriWP\Theme\View::getData( 'link_value' )); ?>" h-use-smooth-scroll="true">
    <div class="icon-container h-social-icon h-global-transition">
      <div class="h-icon-svg" style="width: 100%; height: 100%;">
        <?php $icon = \ColibriWP\Theme\View::getData( 'icon' ); if (isset($icon['content'])) echo $icon['content'] ?>
      </div>
    </div>
  </a>
</div>
