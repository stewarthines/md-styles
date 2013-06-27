$('document').ready(function () {

    //Sidebar Nav Drawer
    var $asideNav = $('aside[role="navigation"]')
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

    $('#menuButton').button({
        icons: {
            primary: "md-icon-arrow-right-alt1"
        },
        text: false
    });
    $('#newEntryButton').button({
        icons: {
            primary: "md-icon-plus-alt"
        }
    });
    
});