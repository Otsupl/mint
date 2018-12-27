var opened = false;
$(window).scroll(function() {
  if ($(this).scrollTop() > 80)
    document.getElementById("navbar").classList.add('nav-small');
  else
    document.getElementById("navbar").classList.remove('nav-small');
});

document.getElementById('burgeract').addEventListener('click',function()
{
    document.getElementById("menu").classList.toggle('nav-open');
	document.getElementById('burger').classList.toggle('menu');
	document.getElementById('burger').classList.toggle('close');
});