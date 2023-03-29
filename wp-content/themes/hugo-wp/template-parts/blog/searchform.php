<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <div class="h-row no-gutters">
        <div class="h-col">
            <label class="d-block">
                <span class="screen-reader-text"><?php esc_html_x( 'Search for:', 'label', 'hugo-wp' ); ?></span>
                <input type="search"
                       class="search-field w-100"
                       placeholder="<?php esc_attr_e( 'Search &hellip;', 'hugo-wp' ); ?>"
                       value="<?php echo esc_attr( get_search_query() ); ?>" name="s"/>
            </label>
        </div>
        <div class="h-col h-col-auto">
            <input type="submit" class="search-submit text-button"
                   value="<?php echo esc_attr_x( 'Search', 'submit button', 'hugo-wp' ); ?> "/>
            <button type="submit" class="icon-button search-submit">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="search" viewBox="0 0 1672.2646 1896.0833">
                    <path d="M1152 832q0-185-131.5-316.5T704 384 387.5 515.5 256 832t131.5 316.5T704 1280t316.5-131.5T1152 832zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225T0 832t55.5-273.5 150-225 225-150T704 128t273.5 55.5 225 150 150 225T1408 832q0 220-124 399l343 343q37 37 37 90z"></path>
                </svg>
            </button>
        </div>
    </div>
</form>
