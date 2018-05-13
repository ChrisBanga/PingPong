window.onscroll = function() {myFunction()};
var menuTab = document.getElementById ("menuTab");
var sticky = menuTab.offsetTop;
function myFunction(){
  if(window.pageYOffset >= sticky){
    menuTab.classList.add("sticky")
  }
  else{
    menuTab.classList.remove("sticky")
  }
}
