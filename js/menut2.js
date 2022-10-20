(function ($) { // Begin jQuery
    $(function () { // DOM ready
 


        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').slideToggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function () {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle2').on('click', function () {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery



$('li a').click(function () {
        $('.current').removeClass('current');
        $(this).addClass('current');
    });