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

//business logic
function pingPong (number){
  var answer =[];
  for (var i = 1; i <= number; i++)
  {
    if ((i%3===0) && (i%5===0))
    {
      answer.push("PingPong")
    }
    else if (i%3===0)
    {
      answer.push("Ping")
    }
    else if (i%5===0)
    {
      answer.push("Pong")
    }
    else
    {
      answer.push(i);
    }
  }
return answer;
}
