var upNumber , downNumber , counter , keptNumber;

var start = document.getElementById("start");
var up = document.getElementById("up");
var down = document.getElementById("down");
var congrats = document.getElementById("congrats");
var statu = document.getElementById("statu");


start.onclick = function(){
 upNumber=100;
 downNumber=0;
 counter =0;
 start.disabled = true;
 console.log("???");

 pcGuess();
}
 up.onclick = function(){
    downNumber =   keptNumber;

    pcGuess();
 }
 down.onclick = function(){
    upNumber = keptNumber;

    pcGuess();
 }
 congrats.onclick = function(){
        statu.innerHTML = "Computer  "+counter+"  Found";
        start.disabled=false;
 }
 function pcGuess(){
   counter++;
   keptNumber =Math.random();
   keptNumber = keptNumber*(upNumber-downNumber);
   keptNumber = Math.floor(keptNumber)+downNumber;
   statu.innerHTML="Computer's Prediction: "+keptNumber;
}

