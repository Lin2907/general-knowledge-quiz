// Track if an answer option is clicked
let answerClicked = false;

// Get the modal - W3 Schools adjusted and added
let modal = document.getElementById("myRules");

// Get the button that opens the modal
let openButton = document.getElementById("rules");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Get the start button , previously hidden
let startButton = document.getElementById("start");

// When the user clicks on the button, open the modal
openButton.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal and open Start button
span.onclick = function () {
    modal.style.display = "none";
    openButton.style.display = "none";
};

// Shuffle function to randomize questions array - Durstenfeld / Fisher-Yates shuffle

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.slice(0, 10); // Slice the array to get only the first 10 random indexes
}

// When the document is loaded, shuffle the questions

document.addEventListener("DOMContentLoaded", function () {
    questions = shuffleArray(questions);
});

// Loading Quiz Modal

function toggleQuizModal() {
    let getQuestions = document.getElementById("quiz");
    document.getElementById("girl-img").style.display = "none"; // Hides the image
    document.getElementById("start").style.display = "none";
    startButton.style.display = "none"; // Hides the start button
    getQuestions.style.display = "block";
    document.getElementById("quiz-img").style.display = "block"; // Displays the quiz image
}

// By clicking on Start button loads the quiz modal , the question and starts the timer , if modal opened, closes the modal

function startQuiz() {
    if ((openButton.style.display = "block")) {
        openButton.style.display = "none";
        modal.style.display = "none";
    }
    showQuestion();
    toggleQuizModal();
    setTimer();
    resetScore ();
}

// Adding questions - Question source : https://www.quiztriviagames.com/multiple-choice-trivia-questions/

let questions = [
    {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile", "Yellow River", "Congo River"],
        answer: "Nile",
        imageUrl: "./assets/images/river.jpg",
    },

    {
        question: "In which museum can you find Leonardo Da Vinci's Mona Lisa?",
        options: ["Le Louvre", "Uffizi Museum", "British Museum", "Museum of Art"],
        answer: "Le Louvre",
        imageUrl: "./assets/images/mona-lisa.jpg"
    },

    {
        question: "Which one of the following islands is not in Scotland?",
        options: ["Isle of Skye", "Islay", "Isle of Mull", "Caladesi Island"],
        answer: "Caladesi Island",
        imageUrl: "./assets/images/island.jpg",
    },

    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Mother Teresa", "Marie Curie", "Jane Adams", "Alva Myrdal"],
        answer: "Marie Curie",
        imageUrl: "./assets/images/puzzle.jpg",
    },

    {
        question: "Which Friends character's famous pickup line is How you doin'?",
        options: ["Joey", "Ross", "Chandler", "Mike"],
        answer: "Joey",
        imageUrl: "./assets/images/friends.jpg",
    },

    {
        question: "How many strings has a standard bass guitar?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        imageUrl: "./assets/images/guitar.png",
    },

    {
        question: "What's Garfield favourite food?",
        options: ["Pizza", "Lasagna", "Burger", "Sandwich"],
        answer: "Lasagna",
        imageUrl: "./assets/images/garfield.png",
    },

    {
        question: "Which country is the top producer of coffee?",
        options: ["Colombia", "Ivory Coast", "Brazil", "Argentina"],
        answer: "Brazil",
        imageUrl: "./assets/images/coffee.png",
    },

    {
        question: "Which of the following is the largest city?",
        options: ["Tokyo", "New York", "London", "Rome"],
        answer: "Tokyo",
        imageUrl: "./assets/images/city.jpg",
    },

    {
        question: "Who is the Greek goddess of beauty?",
        options: ["Aphrodite", "Demeter", "Hestia", "Athena"],
        answer: "Aphrodite",
        imageUrl: "./assets/images/greece.jpg",
    },

    {
        question: "What is the percentage of the Earth covered by water?",
        options: ["51 %", "61 %", "71 %", "81 %"],
        answer: "71 %",
        imageUrl: "./assets/images/earth.jpg",
    },

    {
        question: "What is the oldest university in the UK?",
        options: ["Cambridge", "Manchester", "Bath", "Oxford"],
        answer: "Oxford",
        imageUrl: "./assets/images/university.jpg",
    },

    {
        question: "What is guacamole made of?",
        options: ["Banana", "Yoghurt", "Avocado", "Chick Pea"],
        answer: "Avocado",
        imageUrl: "./assets/images/dinner.jpg",
    },

    {
        question: " Who released the song 'Girls Just Want To Have Fun' in the 80s? ",
        options: ["Blondie", "Cyndi Lauper", "A-ha", "Bonnie Tyler"],
        answer: "Cyndi Lauper",
        imageUrl: "./assets/images/gramophone.jpg",
    },

    {
        question: "Which country won the first Football World Cup in 1930?",
        options: ["Brazil", "Portugal", "Italy", "Uruguay"],
        answer: "Uruguay",
        imageUrl: "./assets/images/football.jpg",
    },
];

let questionElement = document.getElementById("questions");
let optionsElement = document.getElementById("options");
let resultElement = document.getElementById("result");
let feedbackElement = document.getElementById("feedback");
let imgElement = document.getElementById("quiz-img");

// First question
let currentQuestionNum = 0;

//Retrieve the current question object from an above array with questions using the currentQuestion counter

function showQuestion() {
    if (currentQuestionNum < questions.length) {
        let currentQuestion = questions[currentQuestionNum];
        questionElement.textContent = currentQuestion.question;
        imgElement.src = questions[currentQuestionNum].imageUrl;
        optionsElement.innerHTML = "";

        //Create button element for each option

        currentQuestion.options.forEach(function (option) {
            let button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");
            button.addEventListener("click", function () {
                checkAnswer(option, currentQuestion);
                disableButtons();
        //Disabling NEXT button again
                answerClicked = true;
                nextButton.removeAttribute("disabled");
            });

            // Add button elements to options so they show on the page
            optionsElement.appendChild(button);
        });
    } else {
        restartQuiz();
    }
}

// Disabling the option buttons
function disableButtons() {
    let buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(function (button) {
        button.disabled = true;
    });
}

// Calling the function to show the questions

document.addEventListener("DOMContentLoaded", function () {
    showQuestion();
});

let countdown;
//  Timer set up
function setTimer() {
    let sec = 200;
    let timeButton = document.getElementById("time");
    let countdown = setInterval(function () {
        sec--;
        // Update the button number and add styles
        timeButton.style.display = "block";
        timeButton.textContent = sec;
        timeButton.style.fontSize = "100%";
        timeButton.style.fontWeight = "bold";
        timeButton.style.textAlign = "center";
        if (sec <= 0 || currentQuestionNum >= questions.length) {
            // Add the condition for timer to reset
            clearInterval(countdown);
            disableButtons();
            if (sec <= 0) {
            alert ("Sorry, Time's up :( Try again !");
            nextButton.removeAttribute("disabled"); 
            resetScore();
            restartQuiz();
            };    
        }
    }, 1000); // run the interval every 1 second (1000ms)
}

// Reseting the timer
function resetTimer() {
    clearInterval(countdown);
}

// Checking the answer showing the result

function checkAnswer(selectedOption, currentQuestion) {
    if (selectedOption === currentQuestion.answer) {
        resultElement.textContent = "Amazing ! This is Correct!";
        resultElement.style.color = "rgb(0, 82, 31)";
        resultElement.style.fontWeight="bold";
        incrementScore();
    } else {
        resultElement.textContent = "Awwww, Wrong Answer!";
        resultElement.style.color = "rgb(143, 37, 10)";
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

function nextQuestion() {
    currentQuestionNum++;
    if (currentQuestionNum < questions.length) {
        resultElement.textContent = "";
        showQuestion();
        nextButton.disabled = true; // Disable 'Next' button after moving to the next question
        answerClicked = false;
    } else {
        totalScore();
        document.getElementById("questions").style.display = "none";
        document.getElementById("options").style.display = "none";
        document.getElementById("result").style.display = "none";
        document.getElementById("feedback").style.display = "block";
        nextButton.textContent = "Play again"; // Change the text content of Next button        
    }
}

// Function for the 'Next' button to show the next question or restart the quiz

let nextButton = document.getElementById("next");

nextButton.addEventListener("click", function () {
    if (currentQuestionNum < questions.length) {
        nextQuestion();
    } else {
        restartQuiz();
    }
});

// Function for showing the sum of correct answers

function totalScore() {
    let total = parseInt(document.getElementById("score").innerText);
    let wrongAnswer = parseInt(document.getElementById("incorrect").innerText);
    let feedbackImage = document.getElementById("quiz-img");
    feedbackElement.style.fontWeight = "bold";
    if (total >= 6) {
        feedbackImage.src = "./assets/images/prize.jpg";
        document.getElementById("feedback").textContent = "Fantastic score! You're on fire! Keep shining!";
    } else {
        feedbackImage.src = "./assets/images/thanks.jpg";
        document.getElementById("feedback").textContent = "You've got this! Keep practicing, and you'll only get better from here!";
    }
}

function resetScore() {
    document.getElementById("score").innerText = "0";
    document.getElementById("incorrect").innerText = "0";
}

// / Return to the beginning of the quiz once clicked on Restart

function restartQuiz() {
    currentQuestionNum = 0;
    resultElement.textContent = "";
    startQuiz();
    showQuestion();
    document.getElementById("questions").style.display = "block"; // Getting the question back on the screen
    document.getElementById("options").style.display = "block";
    document.getElementById("result").style.display = " block";
    document.getElementById("feedback").style.display = "none"; // Hide the feedback
    nextButton.textContent = "Next"; // 'Restart' back to 'Next' button
    nextButton.disabled = true
    resetTimer();
}













    
  


