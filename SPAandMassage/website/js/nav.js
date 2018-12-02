var opened=false;
document.getElementById("clicker").addEventListener("click", event => {
    if (opened == false) {
      openNav();
    } else if (opened == true) {
      closeNav();
    }
  });
function openNav() {
    document.getElementById("Sidenav").style.height = "100%";
    opened=true;
}
function closeNav() {
    document.getElementById("Sidenav").style.height = "0";
    setTimeout(() => {
    }, 200);
    opened=false;
}
$('#clicker').click(function(){
    $('.icon')
      .toggleClass('menu')
      .toggleClass('close');
  })
var swipeup = new Swipe('#swipeup');
swipeup.onUp(function() { 
    closeNav();
    $('.icon')
      .toggleClass('menu')
      .toggleClass('close');
 });
swipeup.run();
