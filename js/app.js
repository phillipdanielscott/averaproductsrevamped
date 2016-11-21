$(function(){
    var navMain = $("#nav-main");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

$('.carousel').carousel({
    interval: false
});

$('#myCarousel').on("slide", function(e) {

        //SCROLLING LEFT
        var prevItem = $('.active.item', this).prev('.item');

        //Account for looping to LAST image
        if(!prevItem.length){
            prevItem = $('.active.item', this).siblings(":last");
        }

        //Get image selector
        prevImage = prevItem.find('img');

        //Remove class to not load again - probably unnecessary
        if(prevImage.hasClass('lazy-load')){
            prevImage.removeClass('lazy-load');
            prevImage.attr('src', prevImage.data('lazy-load-src'));
        }

        //SCROLLING RIGHT
        var nextItem = $('.active.item', this).next('.item');

        //Account for looping to FIRST image
        if(!nextItem.length){
            nextItem = $('.active.item', this).siblings(":first");
        }

        //Get image selector
        nextImage = nextItem.find('img');

        //Remove class to not load again - probably unnecessary
        if(nextImage.hasClass('lazy-load')){
            nextImage.removeClass('lazy-load');
            nextImage.attr('src', nextImage.data('lazy-load-src'));
        }

    });
