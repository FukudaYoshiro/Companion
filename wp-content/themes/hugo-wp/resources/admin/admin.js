/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 364);
/******/ })
/************************************************************************/
/******/ ({

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(365);


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(366);

// admin notice
(function ($) {
    var $notice_container = $('.hugo-admin-big-notice--container');
    var selectedFrontPage = 0;

    $notice_container.on('click', '.predefined-front-pages li', function (event) {
        var $item = $(event.currentTarget);
        $item.addClass('selected');
        $item.siblings().removeClass('selected');
    });

    function disableNotice() {
        wp.ajax.post('hugo_wp_disable_big_notice');
    }

    function toggleProcessing(value) {
        $(window).on('beforeunload.hugo-admin-big-notice', function () {
            return true;
        });
        if (value) {
            $('.hugo-admin-big-notice').addClass('processing');
            $('.hugo-admin-big-notice .action-buttons').fadeOut();
        } else {
            $('.hugo-admin-big-notice').removeClass('processing');
        }
    }

    function showOverlay(message) {
        var $overlay = jQuery('.colibri-customizer-overlay');

        if (!$overlay.length) {
            $overlay = jQuery('' + '<div class="colibri-customizer-overlay">\n' + '        <div class="colibri-customizer-overlay-content">\n' + '            <span class="colibri-customizer-overlay-loader"></span>\n' + '            <span class="colibri-customizer-overlay-message"></span>\n' + '        </div>\n' + '    </div>');

            jQuery('body').append($overlay);
        }

        $('.colibri-customizer-overlay-message').html(message);
        $overlay.fadeIn();
    }

    function hideOverlay() {
        var $overlay = jQuery('.colibri-customizer-overlay');
        $overlay.fadeOut();
    }

    function pluginNotice(message) {
        $notice_container.find('.plugin-notice .message').html(message);
        $notice_container.find('.plugin-notice').fadeIn();
        showOverlay(message);
    }

    function installBuilder(callback) {
        pluginNotice(hugo_wp_builder_status.messages.installing);
        $.get(hugo_wp_builder_status.install_url).always(function () {
            toggleProcessing(true);
            activateBuilder(callback);
        }).always(function () {
            $(window).off('beforeunload.hugo-admin-big-notice');
        });
    }

    function activateBuilder(callback) {
        pluginNotice(hugo_wp_builder_status.messages.activating);

        wp.ajax.post('hugo_wp_activate_plugin', { slug: hugo_wp_builder_status.slug }).done(function () {
            $(window).off('beforeunload.hugo-admin-big-notice');
            if (callback) {
                callback();
            } else {
                var url = new URL(window.location.toString());
                url.searchParams.append('colibri_generator_callback', 'site_imported_notice');
                window.location = url.toString();
            }
        });
    }

    function processBuilderInstalationStepts(callback) {
        wp.ajax.post('hugo_wp_front_set_predesign', { index: selectedFrontPage });
        if (hugo_wp_builder_status.status === "not-installed") {
            toggleProcessing(true);
            installBuilder(callback);
        }

        if (hugo_wp_builder_status.status === "installed") {
            toggleProcessing(true);
            activateBuilder(callback);
        }
    }

    $notice_container.on('click', '.start-with-predefined-design-button', function () {
        selectedFrontPage = $('.selected[data-index]').data('index');
        processBuilderInstalationStepts();
    });

    $notice_container.on('click', '.view-all-demos', function () {
        selectedFrontPage = 0;
        processBuilderInstalationStepts(function () {
            window.location = hugo_wp_builder_status.view_demos_url;
        });
    });

    $notice_container.parent().on('click', '.notice-dismiss', disableNotice);
    $notice_container.on('click', '.dismiss', function () {
        $('.notice-dismiss', $notice_container.parent()).click();
    });

    var $document = $(document);

    var hugoInstallPluginSuccess = function hugoInstallPluginSuccess(response) {
        var $message = $('.plugin-card-' + response.slug).find('.install-now');

        $message.removeClass('updating-message').addClass('updated-message installed button-disabled').attr('aria-label', wp.updates.l10n.pluginInstalledLabel.replace('%s', response.pluginName)).text(wp.updates.l10n.pluginInstalled);

        wp.a11y.speak(wp.updates.l10n.installedMsg, 'polite');

        $document.trigger('wp-plugin-install-success', response);

        if (response.activateUrl) {
            // Transform the 'Install' button into an 'Activate' button.
            $message.removeClass('install-now installed button-disabled updated-message').addClass('activate-now').attr('href', response.activateUrl).attr('aria-label', wp.updates.l10n.activatePluginLabel.replace('%s', response.pluginName)).text(wp.updates.l10n.activatePlugin);

            $message.click();
        }
    };

    var hugoInstallPlugin = function hugoInstallPlugin(event) {

        var $button = $(event.target);
        event.preventDefault();

        if ($button.hasClass('updating-message') || $button.hasClass('button-disabled')) {
            return;
        }

        if (wp.updates.shouldRequestFilesystemCredentials && !wp.updates.ajaxLocked) {
            wp.updates.requestFilesystemCredentials(event);

            $document.on('credential-modal-cancel', function () {
                var $message = $('.install-now.updating-message');

                $message.removeClass('updating-message').text(wp.updates.l10n.installNow);

                wp.a11y.speak(wp.updates.l10n.updateCancel, 'polite');
            });
        }

        wp.updates.installPlugin({
            slug: $button.data('slug'),
            success: hugoInstallPluginSuccess
        });
    };

    var hugoActivatePlugin = function hugoActivatePlugin(event) {
        var $button = $(event.target);
        var slug = $button.data('slug');
        var card = $('.plugin-card-' + slug);

        event.preventDefault();

        $button.addClass('updating-message').removeClass('active-plugin').text(colibri_get_started.activating);

        jQuery.get(this.href).done(function (data) {
            $button.text(colibri_get_started.plugin_installed_and_active);
            wp.a11y.speak(colibri_get_started.plugin_installed_and_active, 'polite');
        }).fail(function (error) {
            $button.text(colibri_get_started.activate);
        }).always(function () {
            $button.removeClass('updating-message').addClass('active-plugin');
        });

        /* 
        args =  {
        slug : slug, 
        success: wp.updates.installPluginSuccess,
        error: wp.updates.installPluginError
        };
        		return wp.updates.ajax( 'activate-plugin', args );
        */
    };

    $document.on("click", ".colibri-plugin.install-now", hugoInstallPlugin);
    $document.on("click", ".colibri-plugin.activate-now", hugoActivatePlugin);

    $(document).ready(function () {

        if (colibri_get_started && colibri_get_started.install_recommended) {
            $('.plugin-card-' + colibri_get_started.install_recommended + ' a.button').trigger("click");
        }
    });
})(jQuery);

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports = "./../images/logo.jpg";

/***/ })

/******/ });
