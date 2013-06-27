$('document').ready(function () {
    var $asideNav = $('aside[role="navigation"]')
    var $asideNavOpen = $('aside[role="navigation"].aside-open')
    var $asideNavClosed = $('aside[role="navigation"].aside-closed')
    var $menuButton = $('#menuButton')

    //Add closed to make sure it's closed on page load.
    $asideNav.addClass("aside-closed");

    //When menuButton is clicked add open class to aside
    $menuButton.click(function () {
        if ($asideNav.hasClass('aside-closed')) {
            $asideNav.removeClass("aside-closed");
            $asideNav.addClass("aside-open");
        }
        else {
            $asideNav.removeClass('aside-open');
            $asideNav.addClass('aside-closed');
        }
    });
});