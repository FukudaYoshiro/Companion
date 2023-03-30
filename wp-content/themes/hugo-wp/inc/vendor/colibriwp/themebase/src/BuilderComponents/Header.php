<?php


namespace ColibriWP\Theme\BuilderComponents;


use ColibriWP\Theme\View;

class Header extends BuilderComponentBase {


    /**
     * @return string
     */
    protected function getName() {
        return 'header';
    }

    public function render( $parameters = array() ) {
        View::printSkipToContent();
        parent::render( $parameters );
    }

}
