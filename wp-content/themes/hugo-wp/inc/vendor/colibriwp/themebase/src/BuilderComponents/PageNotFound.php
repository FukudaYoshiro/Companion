<?php


namespace ColibriWP\Theme\BuilderComponents;


use ColibriWP\Theme\View;

class PageNotFound extends BuilderComponentBase {

    public function render( $parameters = array() ) {

        $self = $this;
        View::printIn( View::CONTENT_ELEMENT, function () use ( $self ) {
            /** SECTION START */
            View::printIn( View::SECTION_ELEMENT, function () use ( $self ) {
                /** ROW START */
                View::printIn( View::ROW_ELEMENT, function () use ( $self ) {
                    /** COLUMN START */
                    View::printIn( View::COLUMN_ELEMENT, function () use ( $self ) {
                        $self->parentRender();
                    } );
                }, array(
                    'outer_class' => array(),
                    'inner_class' => array( 'blog-content', 'gutters-col-0' )
                ) );
                /** ROW END */
            }, array(
                'outer_class' => array(),
                'inner_class' => array( 'h-section-boxed-container' )
            ) );
            /** SECTION END */
        }, array(
            'class' => array( 'page-404' )
        ) );
    }

    public function parentRender() {
        parent::render();
    }

    /**
     * @return string
     */
    protected function getName() {
        return 'main';
    }
}
