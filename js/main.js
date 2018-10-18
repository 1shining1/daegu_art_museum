// DROP DOWN MENU
$(document).ready(function (e) {
    $(".subMenu").hide();
    $("#nav_main").mouseover(function () {
        $(".subMenu").slideDown();
    });
    $("#nav_main").mouseleave(function (e) {
        $(".subMenu").stop().slideUp();
    });

// SLIDING IMAGES
    var slides = $('.slide');

    slides.first().before(slides.last());

    setInterval(show,4000);

    function show(){
        slides = $('.slide');
        var activeSlide = $('.active');

        slides.last().after(slides.first());
        activeSlide.removeClass('active').next('.slide').addClass('active');

    }

// BANNER
   var banTop = parseInt($("#banner").css("top"));
   $(window).scroll(function(){
       var pos = $(window).scrollTop()+banTop;
       $("#banner").stop().animate({top:pos},400);
       
   });

});

