<?php

namespace ColibriWP\Theme\BuilderComponents;
use ColibriWP\Theme\Core\Hooks;
use function ExtendBuilder\colibri_output_dynamic_template;

class Sidebar extends BuilderComponentBase {

    public function render( $parameters = array() ) {
        $type = isset($parameters['type']) ? $parameters['type'] : 'right';
        $partial_type = $this->getName();
        $template_type = Hooks::prefixed_apply_filters( "{$partial_type}_partial_type", "" );
        colibri_output_dynamic_template( $template_type, $partial_type);
    }

    /**
     * @return string
     */
    protected function getName() {
        return 'sidebar';
    }
}
