$(window).scroll(function(){
    $("#welcometxt").css("opacity", 1 - $(window).scrollTop() / 300);
    $("#discover").css("opacity", 1 - $(window).scrollTop() / 400);
  });
