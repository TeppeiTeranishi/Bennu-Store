// Main Function
$(document).ready(function () {
    // GLOBAL VARS
    var $elements = $('body, p, h1, h2, h3, a, .modal-header, button, .modal-grid .col-xs-6, .inner-model > *');
    var $text = $("h1, h2, h3, h4, p, a, span, small, label, form, .btn").text();
    var $bodyClone = $("body").clone(true);

    function highlightLinks() {
        var clicked = 0;
        var $highlightLinks = $('.highlight-links');
        $highlightLinks.on('click', function (e) {
            clicked++;
            if (clicked == 1) {
                $('a, .btn, button').toggleClass("highlight-1");
                $('.col-1-3', $highlightLinks).addClass("visible margin-none");
            }
            else if (clicked == 2) {
                $('a, .btn, button').removeClass("highlight-1");
                $('.col-1-3', $highlightLinks).removeClass("visible margin-none");
                clicked = 0;
            }
        });
    }

    function legibleFont() {
        var clicked = 0;
        var $elements = $('h1, h2, h3, body, p, a');
        var $legible = $('.legible-font');

        $legible.on('click', function () {
            clicked++;
            if (clicked == 1) {
                $elements.toggleClass("font-1");
                $('.col-1-3:nth-child(1)', $legible).addClass("visible");
            }

            else if (clicked == 2) {
                $elements.removeClass("font-1");
                $elements.toggleClass("font-2");
                $('.col-1-3:nth-child(2)', $legible).addClass("visible");
            }

            else if (clicked == 3) {
                $elements.removeClass("font-2");
                $elements.toggleClass("font-3");
                $('.col-1-3:nth-child(3)', $legible).addClass("visible");
            }

            else if (clicked == 4) {
                $elements.removeClass("font-3");
                $('.col-1-3', $legible).removeClass("visible");
                clicked = 0;
            }

            else {
                return false;
            }
        });
    }

    function saturateMode() {
        // var clicked = 0;
        // var $saturate = $('.desaturate');
        // $saturate.on('click', function (e) {
        //     clicked++;
        //     if (clicked == 1) {
        //         $('body').toggleClass("saturate-1");
        //         $('.col-1-3', $saturate).addClass("visible margin-none");
        //     }
        //     else if (clicked == 2) {
        //         $('body').removeClass("saturate-1");
        //         $('.col-1-3', $saturate).removeClass("visible");
        //         clicked = 0;
        //     }
        //     else {
        //         return false;
        //     }
        // });

        var clicked = 0;
        var $saturate = $('.desaturate');
        $saturate.on('click', function (e) {
            clicked++;
            if (clicked == 1) {
                $('.col-1-3:nth-child(1)', $saturate).addClass("visible");
                $('section').toggleClass("saturate-1");
            }
            else if (clicked == 2) {
                $('.col-1-3:nth-child(2)', $saturate).addClass('visible');
                $('section').removeClass("saturate-1");
                $('section').toggleClass("saturate-2");
            }else if (clicked == 3) {
                $('.col-1-3:nth-child(3)', $saturate).addClass('visible');
                $('section').removeClass("saturate-2");
                $('section').toggleClass("saturate-3");
            } else if (clicked == 4){
                $('.col-1-3', $saturate).removeClass('visible');
                $('section').removeClass("saturate-3");
                clicked = 0;
            } else {
                return false;
            }
        });
    }


    function increasedFont() {
        var clicked = 0;
        var $elements = $('section, strong, a');
        var $bigText = $('.big-text');

        $bigText.on('click', function () {
            clicked++;
            if (clicked == 1) {
                $elements.toggleClass("big-text-1");
                $('.col-1-3:nth-child(1)', $bigText).addClass("visible");
            }

            else if (clicked == 2) {
                $elements.removeClass("big-text-1");
                $elements.toggleClass("big-text-2");
                $('.col-1-3:nth-child(2)', $bigText).addClass("visible");
            }

            else if (clicked == 3) {
                $elements.removeClass("big-text-2");
                $elements.toggleClass("big-text-3");
                $('.col-1-3:nth-child(3)', $bigText).addClass("visible");
            }

            else if (clicked == 4) {
                $elements.removeClass("big-text-3");
                $('.col-1-3', $bigText).removeClass("visible");
                clicked = 0;
            }

            else {
                return false;
            }
        });
    }


    // Contrast Mode Button JS
    function contrastClicked() {
        var clicked = 0;
        var $contrast = $('.contrast'); // parent (filtered)
        $contrast.on('click', function (e) {
            clicked++;
            if (clicked == 1) {
                $elements.toggleClass('invert--1');
                $('.col-1-3:nth-child(1)', $contrast).addClass('visible');
                $()
            } else if (clicked == 2) {
                $elements.removeClass('invert--1');
                $elements.toggleClass('invert--2');
                $('.col-1-3:nth-child(2)', $contrast).addClass('visible');
            } else if (clicked == 3) {
                $elements.removeClass('invert--2');
                $elements.toggleClass('invert--3');
                $('.col-1-3:nth-child(3)', $contrast).addClass('visible');
            } else if (clicked == 4) {
                $elements.removeClass('invert--3');
                $('.col-1-3', $contrast).removeClass('visible');
                clicked = 0; // RESETS THIS FUNCTION
            } else {
                return false;
            };
        });
    }

    function voiceMode() {
        var clicked = 0;
        var $readPage = $('.read-page');
        $readPage.on('click', function () {
            clicked++;
            if (clicked == 1) {
                $('.col-1-3', $readPage).addClass("visible margin-none");
                responsiveVoice.speak($text);
                responsiveVoice.setDefaultVoice("Spanish Latin American Female");
            }
            else if (clicked == 2) {
                responsiveVoice.cancel();
                $('.col-1-3', $readPage).removeClass("visible margin-none");
                clicked = 0;
            }
            else {
                return false;
            }
        });

    }

    function resetMode() {
        var $reset = $('.reset');
        var clicked = 0;
        $reset.on('click', function () {

            $("body").replaceWith($bodyClone.clone(true));

        });
    }


    contrastClicked();
    increasedFont();
    saturateMode();
    highlightLinks();
    legibleFont();
    voiceMode();
    resetMode();
});
