const btn = document.querySelector(".btn");


btn.addEventListener("click",()=>{
    roll();
})
document.addEventListener("keypress",(e)=>{

   if(e.key=='Enter'){
    roll();
   }
})

 function roll() {
    var num1 =Math.floor((Math.random()*6)+1);
var dice1="dice"+num1+".png";
document.querySelectorAll("img")[0].setAttribute("src",dice1);


var num2 =Math.floor((Math.random()*6)+1);
var dice2="dice"+num2+".png";
document.querySelectorAll("img")[1].setAttribute("src",dice2);

var result=document.querySelector("h1");


if(num1 === num2)
{
    result.innerHTML="Draw";
}
else if(num1 > num2)
{
    result.innerHTML="🚩 PLAYER 1 wins";
}
else 
{
    result.innerHTML="PLAYER 2 wins 🚩";
}
}



