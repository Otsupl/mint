$(window).scroll(function() {
  if ($(this).scrollTop() > 80) { 
      $(".navbar").css({height: '50px',background: 'rgba(255, 255, 255, 0.833)'});
      $(".logo").css({padding: '10px 0 10px  0'});
      $(".outerburger").css({top: '25px'});
  }
  else
  {
    $(".navbar").css({height: '80px',background: 'rgba(255, 255, 255, 0.342)'});
      $(".logo").css({padding: '20px 0 20px  0'});
      $(".outerburger").css({top: '40px'});
  }
});