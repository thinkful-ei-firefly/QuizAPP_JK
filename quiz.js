'use strict';

let qnum = 0; //Tracks what question we're on. Starts at 0 because we'll use it as an index.

let numCorrect = 0; //Tracks how many questions the player has gotten right.

let numIncorrect = 0; //Tracks how many questions the player has gotten wrong.


//Data containing quiz questions
const questions = [
  {question: 'What is the best way to defeat "IT"?',
    a1: 'Avoid',
    a2: 'Show no mercy',
    a3: 'Scream',
    a4: 'Don\'t believe',
    correct: 'Don\'t believe',
    funFact: 'The movie never addresses the real way IT was defeated. You\'ll have to read the book to find out.',
  },
  {question: 'What is "IT\'s" gender?',
    a1: 'Male',
    a2: 'Female',
    a3: 'A-gender',
    a4: 'A clown/alien thingy',
    correct: 'Female',
    funFact: 'If you stacked up all of Stephen King\'s books, they\'d be taller than he is.',
  },
  {question: 'Where is Derry located?',
    a1: 'Rhode Island',
    a2: 'Maine',
    a3: 'New York',
    a4: 'Washington',
    correct: 'Maine',
    funFact: 'Derry, Maine is not a real place but is the main backdrop of many of King\'s novels.',
  },
  {question: 'Who was Bill\'s little brother?',
    a1: 'Georgie',
    a2: 'Randy',
    a3: 'Terry',
    a4: 'Ben',
    correct: 'Georgie',
    funFact: 'Here\'s a map of Derry! (insert link)',
  },
  {question: 'What is Bev\'s occupation?',
    a1: 'Writer',
    a2: 'Librarian',
    a3: 'Fashion Designer',
    a4: 'Radio Host',
    correct: 'Fashion Designer',
    funFact: 'When you leave Derry, you don\'t remember anything that happened there.',
  },
  

];



//empties the <main> element and appends an HTML block containing the current question to the <main>
//updates the header to reflect current value of qnum
function askQuestion () {
  $('main').html(`
    <div class="questionsAnswer">
      <h1>${questions[qnum].question}</h1>
      <form action="" method="get" class="form-example">
          <div class="form-example">
              <label for="a1">${questions[qnum].a1}</label>
              <input type="radio" name="a" id="a1" value="a1" required>
          </div>

          <div class="form-example">
              <label for="a2">${questions[qnum].a2}</label>
              <input type="radio" name="a" id="a2" value="a2">
          </div>

          <div class="form-example">
              <label for="a3">${questions[qnum].a3}</label>
              <input type="radio" name="a" id="a3" value="a3">
          </div>

          <div class="form-example">
              <label for="a4">${questions[qnum].a4}</label>
              <input type="radio" name="a" id="a4" value="a4">
          </div>

          <div class="form-example">
              <button type="submit" class="submit" value="next">
          </div>

      </form> 
  </div>
`);



  $('.questionNumber').text(`${qnum+1}`);  

}



//listens for click on 'Submit' button
//CURRENTLY just pulls a random number to see if the answer is true or false
//NEEDS to actually check the answer
//checks if the submitted answer matches the correct answer to the question
//TODO: point Jquery selector at correct HTML item to extract form submission value
//Calls feedback() to display the feedback page, passing it a boolean T/F based on whether the player got the question right
function checkQuestion () {
  if (Math.random()<0.5) {
    
    feedback(true);

  } else {
    
    feedback(false);
    
  }
}




//takes a boolean as input
//empties the <main> element and appends an HTML block displaying feedback from the question
//feedback will vary depending on boolean input
//updates the header to reflect current values of numCorrect and numIncorrect
function feedback (bool) {
  if (bool) {
    $('main').html(`
      <h2>Correct!</h2>
      <p>Fun fact: ${questions[qnum].funFact}</p>
      <button class="next">Next</button>
    `);
    
    numCorrect++;
    $('span.correct').text(`${numCorrect}`);

  } else {
    $('main').html(`
    <h2>Sorry!</h2>
    <p>The correct answer was: ${questions[qnum].correct}</p>
    <button class="next">Next</button>
    `);
    
    numIncorrect++;
    $('span.incorrect').text(`${numIncorrect}`);

  }
  
}


//if qnum is not the last index of questions[], increments qnum by 1 and calls askQuestion
//if qnum is the last index of questions[], calls finalScore()
function feedbackNext () {
  if (qnum < (questions.length - 1)) {
    qnum++;
    askQuestion();
  } else {
    finalScore();
  }
}


//empties the <main> and appends an HTML block displaying the final score of the quiz
function finalScore () {
  $('main').html(`
  <div>
    <h2>Your final score was ${numCorrect} out of ${questions.length}</h2>
    <button type="button" id="restartButton" class="restart">Try Again?</button>
  </div>
  `);
}


//empties the <main> and appends an HTML block with the starting page. Sets qnum, numCorrect, and numIncorrect to 0
//updates header to reflect zeroed values of qnum, numCorrect, numIncorrect
function restart () {
  $('main').html(` 
  <div> 
    <h2>Can you make it out of Derry?</h2>
    <button class="startQuiz" type="button">Begin</button>
  </div>
  `);

  qnum = 0;
  numCorrect = 0;
  numIncorrect = 0;

  $('.questionNumber').text(`${qnum+1}`);
  $('span.correct').text(`${numCorrect}`);
  $('span.incorrect').text(`${numIncorrect}`);

}



//Here be the listeners. Quiet, please.
$('main').on('click', '.startQuiz', function () {askQuestion();});

$('main').on('submit', function () {
  event.preventDefault();
  checkQuestion();
});

$('main').on('click', '.next', function () {feedbackNext();});

$('main').on('click', '.restart', function () {restart();});


