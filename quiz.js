'use strict';

let qnum = 0; 
//Start at zero so we can use the value of qnum as an index to pull the next question from the 'questions' array.

let numCorrect = 0;
//initialize at 0

let numIncorrect = 0;
//initialize at 0

const questions = [
  {question: 'There should be a question here',
    a1: 'answer1',
    a2: 'answer2',
    a3: 'answer3',
    a4: 'answer4',
    correct: function() { return this.a1;},
    funFact: 'Did you know?',
  },
  
  //fill in one object for each question
  //we can refer to questions.length() to display the max number of questions in the quiz in the header section
  

];


console.log(`The answer to question ${qnum+1} is ${questions[qnum].correct}`);

function startQuiz () {} 
//listens for click on the 'Start Quiz' button
//on pressing the 'Start Quiz' button, Calls askQuestion() to display the first question


function askQuestion () {}
//empties the <main> element and appends an HTML block containing the current question to the <main>
//updates the header to reflect current value of qnum


function checkQuestion () {}
//listens for click on 'Submit' button
//checks if the submitted answer matches the correct answer to the question
//Updates the values of numCorrect and numIncorrect
//Calls feedback() to display the feedback page



function feedback () {}
//takes a boolean as input
//empties the <main> element and appends an HTML block displaying feedback from the question
//feedback will vary depending on boolean input
//updates the header to reflect current values of numCorrect and numIncorrect


function feedbackNext () {}
//listens for click on 'next' button
//if qnum is not the last index of questions[], pressing the 'next' button should increment qnum by 1 and call askQuestion
//if qnum is the last index of questions[], should call finalScore()


function finalScore () {}
//empties the <main> and appends an HTML block displaying the final score of the quiz


function restart () {}
//listens for click on 'restart' button
//empties the <main> and appends an HTML block with the starting page. Sets qnum, numCorrect, and numIncorrect to 0
//updates header to reflect zeroed values of qnum, numCorrect, numIncorrect


//all listeners should be tied to the <main> element
