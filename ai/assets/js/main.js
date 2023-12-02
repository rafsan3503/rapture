const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

(function ($) {
    "use strict";

    $(window).on('load', function () {
        $('.search-results').masonry({
            itemSelector: '.items'
        });
    });

    $(document).ready(function ($) {

        var lastScrollTop = 0;
        $(window).scroll(function () {

            // Header scroll
            var scroll = $(window).scrollTop();
            if (scroll >= 20) {
                $('.header-area').addClass('sticky');
            } else {
                $('.header-area').removeClass('sticky');
            }

            // Search Scroll
            var st = $(this).scrollTop();
            if (st > lastScrollTop) {
                $('.search-box').removeClass('sticky-up');
                $('.search-box').addClass('sticky-down');
            } else {
                $('.search-box').addClass('sticky-up');
                $('.search-box').addClass('sticky-down');

                if ($('.unlock-pro')[0]) {
                    $('.search-box.sticky-up').css('top', '135px');
                } else {
                    $('.search-box.sticky-up').css('top', '85px');
                }
            }
            lastScrollTop = st;
        });

        // Custom Range
        var rangeSlider = function () {
            var slider = $('.range-slider'),
                range = $('.range-slider__range'),
                value = $('.range-slider__value');

            slider.each(function () {

                value.each(function () {
                    var value = $(this).prev().attr('value');
                    $(this).html(value);
                });

                range.on('input', function () {
                    $(this).next(value).html(this.value);
                });
            });
        };

        rangeSlider();
    });

}(jQuery)); 