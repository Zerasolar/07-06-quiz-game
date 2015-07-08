window.onload = function(){

  var questions = ["What is Dipper's symbol?",
  "What of Mabel's creations for Grunkle Stan started a huge theory for the fans?", "What kind of pet does the kids have?", "What is the pet's name?", "Who is the author of the journals?" ];

  var choice =["1) glasses 2) ice 3) star 4) pine tree", "1) book 2) Mabel Juice 3) Wax Figure 4) scrap book", "1) pig 2) Axolotl 3) Goat 4) Wax head of Larry King", "1) Peaches 2) Jeff 3) Waddles 4) Fids", "1) Your father 2) McGucket 3) Stanley 4) Stanford"];

  var answers = ["4", "3", "1", "3", "4"];

  score = 0;
  counter = 0;

  var question = document.getElementById("question");
  var choices = document.getElementById("choices");
  var submitButton = document.getElementById("submitter");
  var nextButton = document.getElementById("next");
  var question_result = document.getElementById("question_result");
  var total_result = document.getElementById("total_result");
  
  question.innerText = questions[counter];
  choices.innerText = choice[counter];
  
   

  var given_answer = function(){
    
    return document.getElementById("answer").value;

  };
  
  var is_correct_answer = function(answer_text){
    
    if (answer_text === answers[counter]){
      return true;
    }
      return false;
    
  };
  
  var update_question_result = function(correct){
    
    if (correct) {

      score++;
      
      document.getElementById("question_result").innerText = "Correct!"
    }
    else {
      document.getElementById("question_result").innerText = "Incorrect!"
      
    }
  };
  
  function process_answer_submission(){
    var user_answer = given_answer();
    update_question_result(is_correct_answer(user_answer));
  }
  
  function next_button(){
    counter++;
    delete answer;
    delete question_result;
  }
  
  
  submitButton.onclick = process_answer_submission
  nextButton.onclick = next_button

}
// submitButton.onsubmit =
// nextButton.onclick =
//
// var question_result = document.getElementById("question_result");
// var nextButton = document.getElementById("next");
// var total_result = document.getElementById("total_result");
// var answer = document.getElementById("answer");