$(document).ready(function()
{
  var scrollTop = 0;
  $(window).scroll(function()
  {
    scrollTop = $(window).scrollTop();
    
    if (scrollTop >= 10) 
    {
      $('#navcontainer ul span').fadeOut(600);
      $('#navcontainer').addClass('nav-container-scrolled');
    } 
    else if (scrollTop < 10) 
    {
      $('#navcontainer ul span').fadeIn(800);
      $('#navcontainer').removeClass('nav-container-scrolled');
    } 

    /*ifami najszybciej*/
    var vhx50 = 0.5*$(window).height();
    if(scrollTop < $('#about').offset().top - vhx50)
      {$('.active').removeClass('active'); $('#dot_home').addClass('active');}
    else if(scrollTop < $('#whyus').offset().top - vhx50)
      {$('.active').removeClass('active'); $('#dot_about').addClass('active');}
    else if(scrollTop < $('#photos').offset().top - vhx50)
      {$('.active').removeClass('active'); $('#dot_whyus').addClass('active');}
    else if(scrollTop < $('footer').offset().top - vhx50)
      {$('.active').removeClass('active'); $('#dot_photos').addClass('active');}
    else
      {$('.active').removeClass('active'); $('#dot_contact').addClass('active');}
  }); 
});