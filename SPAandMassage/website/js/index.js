$(window).scroll(function(){
    $("#welcometxt").css("opacity", 1 - $(window).scrollTop() / 90);
    $("#discover").css("opacity", 1 - $(window).scrollTop() / 435);
  });
