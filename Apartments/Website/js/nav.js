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
  }); 
});