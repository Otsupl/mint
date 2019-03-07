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
  var vw = $(window).width();
  var vh = $(window).height();
  if(vw < 500) //mobilka
  {
    //if (środek ekranu (+2px dla pewności)) jest niżej niż (środek nava)
    if (scrollTop + vh/2 +2 >= $('#navcontainer').offset().top + $('#navcontainer').height()/2) 
    {
      $('#navcontainer ul a').fadeOut(600);
      $('#navcontainer').addClass('nav-container-scrolled');
    } 
    //if (góra nava -2px dla pewności) <= (miejsce gdzie powinna być góra nava na początku)(czyli wysokość loga + marginy)
    if ($('#navcontainer').offset().top - 2 <= 0.2*vh + 0.2*vw + 80) 
    {
      $('#navcontainer ul a').fadeIn(800);
      $('#navcontainer').removeClass('nav-container-scrolled');
    } 
  }
  else //desktop
  {
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
  }

  /*ifami najszybciej*/
  var vhx50 = 0.5*vh;
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