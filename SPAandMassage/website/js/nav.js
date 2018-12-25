var opened = false;
$(window).scroll(function() {
  if ($(this).scrollTop() > 80) { 
      $(".navbar").css({height: '50px',background: 'rgba(255, 255, 255, 0.833)'});
      $(".logo").css({padding: '10px 0 10px  0'});
      $(".logo img").css({width: '70px'});
      $(".outerburger").css({top: '23px'});
  }
  else
  {
    $(".navbar").css({height: '80px',background: 'rgba(255, 255, 255, 0.342)'});
      $(".logo").css({padding: '20px 0 20px  0'});
      $(".logo img").css({width: '100px'});
      $(".outerburger").css({top: '40px'});
  }
});
function open()
{
  $('#sidenav').css({width: '200px'});
  $('#sidenav ul').css({opacity: '1'});
  $('.close.icon').css({opacity: '1'});
  $('body').css({overflow: 'hidden'});
}
function close()
{
  $('#sidenav').css({width: '0px'});
  $('#sidenav ul').css({opacity: '0'});
  $('.close.icon').css({opacity: '0'});
  $('body').css({overflow: 'scroll'});
}

$( "#clicker" ).click(function() {
  open();
});
$( "#outerclose" ).click(function() {
  close();
});