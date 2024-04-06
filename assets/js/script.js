// Get the modal - W3 Schools
let modal = document.getElementById("myRules");

// Get the button that opens the modal
let openButton = document.getElementById("rules");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let holder = document.getElementById("holder");
// When the user clicks on the button, open the modal
rules.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  openButton.style.display="none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
// End of W3 Schools code - adjusted

// Start the Quiz button

let startQuiz = document.getElementById("username");  

// When clicking on Start , the username option is shown , previously hidden

function openStart () {
  startQuiz.style.display ="block";
}

// Opening Quiz div by adding username 
let getQuestions = document.getElementById ("quiz");

function enterUsername()  {
    document.getElementById("start").style.display = "none"; // Hide the start button
    getQuestions.style.display= "block";
}

// Hide the Enter button after submitted
function hideEnter() {
    let hideUsername = document.getElementById ("username") ;  
    hideUsername.style.display = "none";
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
        question: "In which museum can you find Leonardo Da Vinci’s Mona Lisa?",
        options: ["Le Louvre", "Uffizi Museum", "British Museum", "Metropolitan Museum of Art"],
        answer: "Le Louvre"
    },
    {   id : 2,
        question: "In the Big Bang Theory, what is the name of Sheldon and Leonard’s neighbour?",
        options: ["Penny", "Patty", "Lily", "Jessie"],
        answer: "Penny"
    }
  ];

let questionElement = document.getElementById("questions");
let optionsElement = document.getElementById("options");
let resultElement = document.getElementById("result");
let feedbackElement = document.getElementById("feedback");

