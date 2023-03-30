<?php


namespace ColibriWP\Theme\Customizer\Controls;


use WP_Customize_Media_Control;

class VideoControl extends WP_Customize_Media_Control {

    use ColibriWPControlsAdapter;

    public $mime_type = 'video';
}
