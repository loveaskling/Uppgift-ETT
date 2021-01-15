if (typeof(jQuery) !== 'undefined') {
    (function($) {
        $(document).ready(function() {
            $('#footer .widget_nav_menu .widgettitle').click(function() {
                if ($(this).hasClass('open')) {
                    $(this).removeClass('open');
                } else {
                    $(this).addClass('open');
                }
            });
        });
    })(jQuery);
}
