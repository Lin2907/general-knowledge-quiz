

// Get the modal - W3 Schools adjusted and added
let modal = document.getElementById("myRules");

// Get the button that opens the modal
let openButton = document.getElementById("rules");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Get the start button , previously hidden
let startButton = document.getElementById ("start");

let holder = document.getElementById("holder");


// When the user clicks on the button, open the modal
rules.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal and open Start button
span.onclick = function() {
  modal.style.display = "none";
  startButton.style.display="block";
  openButton .style.display="none";
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
    document.getElementById ("girl-img").style.display = "none";                   // Hides the image
    document.getElementById("start").style.display = "none";
    startButton.style.display = "none";                      // Hides the start button
    getQuestions.style.display= "block";
    document.getElementById ("quiz-img").style.display="block";                    // Displays the question image
                         
}


// Adding questions - Question source : https://www.quiztriviagames.com/multiple-choice-trivia-questions/
let questions = [
    {   id : 0,
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile", "Yellow River", "Congo River"],
        answer: "Nile",
        imageUrl:"./assets/images/river.jpeg"
    },
    {
        id : 1,
        question: "In which museum can you find Leonardo Da Vinci's Mona Lisa?",
        options: ["Le Louvre", "Uffizi Museum", "British Museum", "Museum of Art"],
        answer: "Le Louvre",
        imageUrl: "./assets/images/monalisa.jpg"
    },
    {   id : 2,
        question: "Which one of the following islands is not in Scotland?",
        options: ["Isle of Skye", "Islay", "Isle of Mull", "Caladesi Island"],
        answer: "Caladesi Island",
        imageUrl: "./assets/images/island.jpg"
    },
    {  id : 3,
      question: "Who was the first woman to win a Nobel Prize?",
      options: ["Mother Teresa", "Marie Curie", "Jane Adams", "Alva Myrdal"],
      answer: "Marie Curie",
      imageUrl: "./assets/images/puzzle.jpg"
    },
    {  id : 4,
      question: "Which Friends character's famous pickup line is How you doin'?",
      options: ["Joey", "Ross", "Chandler", "Mike" ], 
      answer: "Joey",
      imageUrl: "./assets/images/friends.jpg"
    },
    { id : 5,
      question : "How many strings has a standard bass guitar?",
      options : [ "3" , "4", "5" , "6"],
      answer : "4",
      imageUrl: "./assets/images/guitar.png"
    },

    { id : 6 ,
    question: "What's Garfield favourite food?" ,
    options: ["Pizza" , "Lasagna" , "Burger", "Sandwich"],
    answer: "Lasagna",
    imageUrl : "./assets/images/garfield.png"
  },
  { id :7,
   question:"Which country is the top producer of coffee?",
   options: ["Colombia" ,"Ivory Coast" , "Brazil" , "Argentina" ],
   answer: "Brazil",
   imageUrl : "./assets/images/coffee.png"
},
  { id : 8 ,
  question : "Which of the following is the largest city?",
  options : ["Tokyo", "New York", "London" , "Rome"] ,
  answer: "Tokyo",
  imageUrl : "./assets/images/city.jpg"
  },

  { id:9,
  question :"Who is the Greek goddess of beauty?",
  options: ["Aphrodite" , "Demeter" , "Hestia" , "Athena"],
  answer : "Aphrodite",
  imageUrl : "./assets/images/greece.jpg"
}

];

let questionElement = document.getElementById("questions");
let optionsElement = document.getElementById("options");
let resultElement = document.getElementById("result");
let feedbackElement = document.getElementById("feedback");
let imgElement = document.getElementById("quiz-img");

// Initializing the first question with Index 0 
let currentQuestionIndex= 0;

//Retrieve the current question object from an above array with questions using the currentQuestion index

function showQuestion() {  
  setTimer ();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  imgElement.src = questions[currentQuestionIndex].imageUrl;
  optionsElement.innerHTML = "" ;

  //Create buttons for each option , source Code Institute and W3 Schools "JavaScript Arrays forEach()"
  
  currentQuestion.options.forEach(function (option) {
      let button = document.createElement("button");
      button.textContent = option ;
      // Add the class for buttons since they does not exist in DOM  Source : https://www.w3schools.com/howto/howto_js_add_class.asp  
      button.classList.add ("option-btn") ;
      button.addEventListener("click", function () {
      checkAnswer(option, currentQuestion);
      disableButtons();
      
      });
      // Add button elements to options so they show on the page
      optionsElement.appendChild(button);
  });
}
  
// Disabling the option buttons - Source W3Schools and https://flexiple.com/javascript/disable-button-javascript 
 function disableButtons() {
  let buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(function(button) {
  button.disabled = true;
  });

   }
 
// Calling the function to show the questions

document.addEventListener("DOMContentLoaded", function() {
  showQuestion();
});

//  Function Timer set up -source Stack Overflow and Code institute lesson "The <script> Element"

function setTimer() {

let sec = 300; 
let timeButton = document.getElementById ("time");
let countdown = setInterval(function() {
sec -- ;
// Update the button number and add styles
timeButton.textContent = sec;
timeButton.style.fontSize = "80%";
timeButton.style.fontWeight="bold";
if (sec <= 0  || currentQuestionIndex >= questions.length) {       // Add the condition for timer to reset
  clearInterval(countdown);
   disableButtons();
}

}, 1000 );  // run the interval every 1 second (1000ms)
}

function resetTimer() {
  clearInterval(countdown);
  sec=300;
}

 // Checking the answer showing the result

function checkAnswer(selectedOption, currentQuestion) {
  if (selectedOption === currentQuestion.answer) {
      resultElement.textContent = "Amazing ! This is Correct!";
      incrementScore();
      
    } else {
      resultElement.textContent = "Awwww, wrong! The correct answer is: " + currentQuestion.answer;
      incrementWrongAnswer();
      
    }
  }

   // Source Code Institute Love Math Project 

  function incrementScore() {

    // Gets the current score from the DOM and increments it
  
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
  
  }
  
  function incrementWrongAnswer() {
  
    // Gets the current tally of incorrect answers from the DOM and increments it
  
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;  
  }

  // Function - loading the next question

  function nextQuestion () {
    currentQuestionIndex ++ ;
    if (currentQuestionIndex < questions.length) {
      resultElement.textContent = "";
      showQuestion(); }
      else {
        totalScore();
        document.getElementById ("questions").style.display= "none";
        document.getElementById ("options") .style.display= "none";
        document.getElementById ("result").style.display ="none";
        document.getElementById ("feedback").style.display= "block";
        nextButton.textContent = "Restart";  // Change the text content of Next button
        resetScore();
  };

  }

  // Function for the 'Next' button to show the next question or restart the quiz

  let nextButton = document.getElementById ("next");

  nextButton.addEventListener ("click", function() {
    if (currentQuestionIndex < questions.length) {
      nextQuestion (); }
     else {
        restartQuiz();
      } 
  });
     
    // Function for showing the sum of correct answers

   function totalScore () {
    let total = parseInt(document.getElementById ("score").innerText);
    document.getElementById("feedback").textContent = "Final Score : " + total  +" Correct Answers!";
   }

   function resetScore() {
    document.getElementById("score").innerText = "0";
    document.getElementById("incorrect").innerText = "0";
   }
   

// / Return to the beginning of the quiz once clicked on Restart

   function restartQuiz() {
   
    currentQuestionIndex = 0;
    resultElement.textContent = "";
    showQuestion();
    document.getElementById("questions").style.display = "block"; // Getting the question back on the screen
    document.getElementById ("options").style.display = "block";
    document.getElementById ("result") .style.display = " block"
    document.getElementById("feedback").style.display = "none"; // Hide the feedback
    nextButton.textContent = "Next"; // 'Restart' back to 'Next' button
   
    
    
}
    













    
  


