// Get the modal - W3 Schools adjusted and added
let modal = document.getElementById("myRules");

// Get the button that opens the modal
let openButton = document.getElementById("rules");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let holder = document.getElementById("holder");

let button = document.getElementById ("start");
// When the user clicks on the button, open the modal
rules.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal and open Start button
span.onclick = function() {
  modal.style.display = "none";
  openButton.style.display="none";
  button.style.display = "block";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

  }
} 
// End of W3 Schools code - adjusted

// Loading Quiz by clicking on Start and hides the start button

function startQuiz()  {
    let getQuestions = document.getElementById ("quiz");
    document.getElementById("start").style.display = "none"; // Hides the start button
    getQuestions.style.display= "block";
}


// Adding questions - Question source : https://www.quiztriviagames.com/multiple-choice-trivia-questions/
let questions = [
    {   id : 0,
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile", "Yellow River", "Congo River"],
        answer: "Nile"
    },
    {
        id : 1,
        question: "In which museum can you find Leonardo Da Vinci's Mona Lisa?",
        options: ["Le Louvre", "Uffizi Museum", "British Museum", "Museum of Art"],
        answer: "Le Louvre"
    },
    {   id : 2,
        question: "In the Big Bang Theory, what is the name of Sheldon and Leonard's neighbour?",
        options: ["Penny", "Patty", "Lily", "Jessie"],
        answer: "Penny"
    }
  ];

let questionElement = document.getElementById("questions");
let optionsElement = document.getElementById("options");
let resultElement = document.getElementById("result");
let feedbackElement = document.getElementById("feedback");

// Initializing the first question with Index 0 
let currentQuestionIndex= 0;

//Retrieve the current question object from an above array with questions using the currentQuestion index

function showQuestion() {  
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "" ;

  //Create buttons for each option , source Code Institute and W3 Schools "JavaScript Arrays forEach()"
  
  currentQuestion.options.forEach(function (option) {
      let button = document.createElement("button");
      button.textContent = option ;
      // Add the class for buttons since they does not exist in DOM  Source : https://www.w3schools.com/howto/howto_js_add_class.asp  
      button.classList.add ("option-btn") ;
      button.addEventListener("click", function () {
      checkAnswer(option, currentQuestion);
      });
      // Add button elements to options so they show on the page
      optionsElement.appendChild(button);
  });
}

 function disableButtons() {
    document.getElementById ("btn").disabled=true;
   }
 
// Calling the function to show the questions

document.addEventListener("DOMContentLoaded", function() {
  showQuestion();
});

 // Checking the answer showing the result

function checkAnswer(selectedOption, currentQuestion) {
  if (selectedOption === currentQuestion.answer) {
      resultElement.textContent = "Amazing ! This is Correct!";
    } else {
      resultElement.textContent = "Awwww, wrong! The correct answer is: " + currentQuestion.answer;

    }
  }

  // Add function for the 'Next' button to show the next question
  let nextButton = document.getElementById ("next");
  nextButton.addEventListener ("click", function() {
   currentQuestionIndex ++ ;
    if (currentQuestionIndex < questions.length) {
      resultElement.textContent = "";
      showQuestion();
    }
    else {
      resultElement.textContent="Quiz Completed";
    }
  });

    showQuestion() ;
  


