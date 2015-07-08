window.onload = function(){

  var questions = ["What is Dipper's symbol?",
  "What of Mabel's creations for Grunkle Stan started a huge theory for the fans?", "What kind of pet does the kids have?", "What is the pet's name?", "Who is the author of the journals?" ];

  var choice =["1) glasses 2) ice 3) star 4) pine tree", "1) book 2) Mabel Juice 3) Wax Figure 4) scrap book", "1) pig 2) Axolotl 3) Goat 4) Wax head of Larry King", "1) Peaches 2) Jeff 3) Waddles 4) Fids", "1) Your father 2) McGucket 3) Stanley 4) Stanford"];

  var answers = ["4", "3", "1", "3", "4"];

  score = 0;
  counter = 0;

  var question = document.getElementById("question");

  question.innerText = questions[0]

  var choices = document.getElementById("choices");

  choices.innerText = choice[0]

  var submitButton = document.getElementById("submitter");

  var given_answer = function(){
    
    return document.getElementById("answer").value;

  }
  var is_correct_answer = function(answer_text){
    
    given_answer() === answers[0]
    
  }
  
  var update_question_result = function(correct){
    
    if (correct === true){
      counter++;
      document.getElementById("question_result").innerText = "Success!"
    }
    else {
    
      document.getElementById("question_result").innerText = "Success!"
      
    }
  }; 


}
// submitButton.onsubmit =
// nextButton.onclick =
//
// var question_result = document.getElementById("question_result");
// var nextButton = document.getElementById("next");
// var total_result = document.getElementById("total_result");
// var answer = document.getElementById("answer");