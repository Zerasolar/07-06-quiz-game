var questions = ["What is Dipper's symbol? 1) glasses 2) ice 3) star 4) pine tree",
"What of Mabel's creations for Grunkle Stan started a huge theory for the fans? 1) book 2) Mabel Juice 3) Wax Figure 4) scrap book", "What kind of pet does the kids have? 1) pig 2) Axolotl 3) Goat 4) Wax head of Larry King", "What is the pet's name? 1) Peaches 2) Jeff 3) Waddles 4) Fids", "Who is the author of the journals? 1) Your father 2) McGucket 3) Stanley 4) Stanford" ]

var answers = [4, 3, 1, 3, 4]
score = 0
counter = 0

alert ("Welcome to the quiz game on Gravity Falls")
alert ("You have 5 questions to answer lets get started")

while (counter <=4){
  alert(questions[counter]);
  var answer = parseInt(prompt("What is your answer?"));
  
  if (answer === answers[counter]){
    alert("correct")
    score++;
  }
  
  else{
    alert("incorrect")
  }
  counter++;
  
}

alert("You answered " + score + " of " + counter + " questions correctly.")