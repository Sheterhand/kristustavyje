$(document).ready(function () {

    // Store variables

    var accordion_head = $('.accordion'),
        accordion_body = $('.panel');

    // Click function

    accordion_head.on('click', function (event) {

        // Disable header links

        event.preventDefault();

        var $this = $(this);
        var isActive = $this.hasClass('active');

        // Close all accordion sections
        accordion_head.removeClass('active');
        accordion_body.slideUp('normal', 'linear');

        // Toggle the clicked accordion section
        if (!isActive) {
            $this.addClass('active');
            $this.next().stop(true, true).slideDown('normal', 'linear');
        }
    });

    $('.main-nav img').on("mouseenter", () => {
        $('.nav-logo').removeClass('hidden').addClass('visible');
    });

    $('.nav-logo').on("mouseleave", () => {
        $('.nav-logo').removeClass('visible').addClass('hidden');
    });

});