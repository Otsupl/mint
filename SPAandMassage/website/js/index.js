$(window).scroll(function(){
    $("#indexwelcometxt").css("opacity", 1 - $(window).scrollTop() / 400);
    $("#discover").css("opacity", 1 - $(window).scrollTop() / 435);
    if(window.matchMedia("(min-width: 992px)").matches)
    {
        $(".desktopnav").css("opacity", 1 - $(window).scrollTop() / 400);
    }
  });
