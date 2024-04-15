# General Knowledge Quiz

Welcome !

This document will provide an overview of the quiz structure, content and technologies used.

The quiz is designed to test your knowledge across various topics with 10 randomly chosen questions from a pool of 15. Each question includes four answer options, and the user needs to select the correct one. Feedback is provided for each question, and once the user has selected an answer, the other option buttons will be disabled. Additionally, the timer is set for 5 minutes to complete the quiz.

The quiz site is responsive across all screen sizes, ensuring a consistent user experience on desktops, tablets, and mobile devices.

The live link can be found here: [General Knowledge Quiz](https://lin2907.github.io/general-knowledge-quiz/) .

<img src ="assets/media/responsive.png" alt = "Responsive design image">

## Features

### Landing Page
  + The landing page displays the quiz header, hero image, also the buttons for instructions and starting the quiz. Click on the "Start" button closes the instructions modal if previously opened.

  <img src = "assets/media/landing-page.png" alt = "Landing page screenshot">
  <br> <br>
  <img src = "assets/media/modal.png" alt = " Quiz instructions">

### Randomized Questions
   + 10 questions are randomly selected from a pool of 15, ensuring a different user experience each time the quiz is played.

### Multiple Choice
 + Each question offers four answer options, but once the user selects an answer, the other option buttons are disabled to prevent multiple selections.

 <img src = "assets/media/questions-options.png" alt = "Question with 4 options given">

### Feedback
 + User Receives an immediate feedback on each question, while the correct answer is not revealed , in order to challenge the user to play the quiz again and to improve the score while disovering the correct answers.

 <img src = "assets/media/feedback.png" alt = "Feedback">


### Scoring 
  + The total score is displayed at the end of the quiz, based on the number of correct and wrong answers.

<img src = "assets/media/score.png" alt="Score bar">


### Timer
 + A timer is set for 5 minutes to complete the quiz, adding a sense of urgency and excitement.

 <img src = "assets/media/timer.png" alt= "Timer">

### Images

Each question features unique image, which is adding to the visual user experience.

<img src = "assets/media/question-related.png" alt ="Question related image">

### Score-Based Feedback
  + The feedback image and comment vary depending on the total score achieved.

### Restart Option
  + At the end of the quiz or if the timer runs out, a Restart button is available. This provides the user with the opportunity to play the quiz again and improve the score.

<img src = "assets/media/result.png" alt ="End score and restart button">

## How to Play

1. Launch the quiz.
2. Read each question carefully.
3. Select the answer you believe is correct.
4. Receive instant feedback on your choice.
5. Once you've selected an answer, the other option buttons will be disabled.
6. Continue to the next question.
7. Repeat steps 2-6 for all 10 questions.
View your total score at the end of the quiz.
### Feedback
 + Correct Answer: Receive positive feedback and move on to the next question.
Incorrect Answer: Learn from your mistake with detailed feedback on why the selected answer was incorrect.
### Scoring System
 + Each correct answer earns you 1 point.
Your total score is displayed at the end of the quiz.
### Timer
 + A timer is set for 5 minutes to complete the quiz. Finish the quiz within the time limit for the best experience.

## Testing

1. ### Functionality

  + Verified that all interactive elements (buttons , timer) are functional.
  + Tested any user inputs and ensured they produce the expected outcomes.
Checked for any error messages or unexpected behavior.

2. ### Layout and Design testing

 + Reviewed the layout and design of the website. Ensured that the content is well-structured and aligned.

 + Tested the responsiveness of the website by using developer tools to simulate different device sizes.

 + Confirmed that the website looks visually appealing on various screen sizes.

3. ### Reporting issues
 + No known issues

## Validator Testing
 + HTML
    * No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)

    <img src = "assets/media/html-checker.png" alt ="Html Validator result">

+ CSS

  * No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)

   <img src= "assets/media/w3c-css-validator.png" alt="CSS validator result">

+ JavaScript
  * No errors were found when passing through the [JSHint](https://jshint.com/).

  <img src = "assets/media/jshint.png" alt="JavaScript Validator">



## Accesibility

I've confirmed that the colors and fonts are chosen are easy to read and accessible by running it through Lighthouse in devtools.

<img src ="assets/media/performance.png" alt ="Performance , Accesssibility Best Practeces and SEO">

## Bugs
 + Issue: Timer not working correctly on quiz restart, on each second blink it shows 2 values. 
 + Cause: Set timer and reset timer function were used withing the same scope of StartQuiz function.
 + Fix: Removed the setTimer function.

 + Issue: The Quiz question images were not visible on the deployed version.
 + Cause : On the deployed version, the files were not recognized by the path given, I therefore added "../assets/" instead of  "./assets " .
 + Fix : Changed the path to the images .

 








