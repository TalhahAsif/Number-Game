var userNo = document.getElementById("userNO");
var RandomNo = document.getElementById("randomNo");
var ResultInfoPositive = document.getElementById("ResultInfoPositiveId")
var ResultInfoNegative = document.getElementById("ResultInfoNegativeId")

var chancesNum = document.getElementById("chancesNum");
var chances = 10;
var wins = 3;

chancesNum.innerHTML = chances;

console.log(ResultInfoPositive.className);

function randomNumber(userNumber) {
  var randomNum = Math.floor(Math.random() * 6);
  userNo.innerHTML = userNumber;
  RandomNo.innerHTML = randomNum;
  chances--;
  chancesNum.innerHTML = chances;
  console.log(wins);

  if (userNumber == randomNum) {
    wins--;
    console.log(wins, "wins");
  }
  if(wins == 0){
    ResultInfoPositive.className = "unhidden"
    chances = 10
    wins = 3
  }else if(chances == 0){
    ResultInfoNegative.className = "unhidden"
    ResultInfoNegative.style.color = "red"
    chances = 10
    wins = 3
  }
  if(chances == 9){
    ResultInfoNegative.className = "hidden" 
    ResultInfoPositive.className = "hidden"
  }
}