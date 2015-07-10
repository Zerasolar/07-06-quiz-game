window.onload = function(){

  score = 0;
  counter = 0;
  
  var answers = ["4", "3", "1", "3", "4"];

  var question = document.getElementById("question")
  var submitButton = document.getElementById("submitter");
  var nextButton = document.getElementById("next");
  var question_result = document.getElementById("question_result");
  var total_result = document.getElementById("total_result");
  var answer_box = document.getElementById("answer");
  
   
   
  var given_answer = function(){

    return document.getElementById("answer").value;

  }
   
  var is_correct_answer = function(answer_text){

    if (answer_text === answers[counter]){
      return true;
    }
    return false;

  }

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
    submitButton.style.display = "none";
  }


  submitButton.onclick = process_answer_submission;
  
  var clear_fields = function(){
    document.getElementById("answer").value = null;
    document.getElementById("question_result").innerText = "";
    document.getElementById("question" + counter).classList.remove("show");
    submitButton.style.display = "none";
  }
  
  var next_question = function(){
    document.getElementById("question" + (counter + 1)).classList.add("show")
  }


  function next_button(){
    counter++
    if (answers[counter]){
      clear_fields();
      next_question(counter);
      submitButton.style.display = "inline-block";
    }
    else{
      final_score(counter);
    }
  }
  
  nextButton.onclick = next_button
  
  var final_score = function(counter){
    clear_fields();
    nextButton.style.display = "none";
    answer_box.style.display = "none";
    document.getElementById("total_result").innerText = "You got " + score + " out of " + counter + " a " + (score/counter)* 100 + "%";
  }
  
}


//
//   for (var i=0; i< select.length i++){
  //   
  //   }
  // }
  // submitButton.onsubmit =
  // nextButton.onclick =
  //
  // var question_result = document.getElementById("question_result");
  // var nextButton = document.getElementById("next");
  // var total_result = document.getElementById("total_result");
