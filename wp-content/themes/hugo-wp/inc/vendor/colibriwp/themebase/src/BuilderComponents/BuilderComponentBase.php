<?php

namespace ColibriWP\Theme\BuilderComponents;


use ColibriWP\Theme\Core\ComponentBase;
use ColibriWP\Theme\Core\Hooks;
use function ExtendBuilder\colibri_output_dynamic_template;

abstract class BuilderComponentBase extends ComponentBase {

    /**
     * @return string
     */
    protected abstract function getName();


    public function render( $parameters = array() ) {
        $template_type = Hooks::prefixed_apply_filters( "{$this->getName()}_partial_type", "" );
        colibri_output_dynamic_template( $template_type, $this->getName() );
    }

    public function renderContent() {

    }

    /**
     * @return array();
     */
    protected static function getOptions() {
        return array();
    }
}
