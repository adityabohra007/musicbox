$('document').ready(function () {
    $('a[href^="http://"]:not([href*="overiq.com"])').attr('target', '_blank');
    var form = $('.search-form');
    var nav = $("nav");
    $(".search-icon").click(function () {
        console.log("clicked");
        if(form.hasClass('search-form-open'))
        {
            // close the form
            form.removeClass('search-form-open')
        }
        else
        {
            // open the form
            nav.removeClass('nav-open');
            form.addClass('search-form-open')
        }
    });
    $(".nav-icon").click(function () {
        if(nav.hasClass('nav-open'))
        {
            // close the nav
            nav.removeClass('nav-open');
        }
        else
        {
            // open the nav
            form.removeClass('search-form-open')
            nav.addClass('nav-open');
        }
    });
});