var scrollTop = 0;
$(document).ready(function()
{
  onScrollNav();
  $(window).scroll(function()
  {
    onScrollNav();
  }); 

  var sections = ['home', 'about', 'whyus', 'photos', 'contact'];
  for(var i=0; i<sections.length; i++)
  {
    $("#dot_"+sections[i]).parent().click({id: i}, function(event){
      event.preventDefault();
      scrollTo(event)
    });
  }

  function scrollTo(event)
  {
    $('html, body').animate({
      scrollTop: $("#"+sections[event.data.id]).offset().top - 100
    }, 2000);
  }
});
function onScrollNav()
{
  scrollTop = $(window).scrollTop();

  if (scrollTop >= 10) 
  {
    $('#navcontainer ul a').fadeOut(600);
    $('#navcontainer').addClass('nav-container-scrolled');
  } 
  else if (scrollTop < 10) 
  {
    $('#navcontainer ul a').fadeIn(800);
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
  else if(scrollTop < $('#contact').offset().top - vhx50)
    {$('.active').removeClass('active'); $('#dot_photos').addClass('active');}
  else
    {$('.active').removeClass('active'); $('#dot_contact').addClass('active');}
}