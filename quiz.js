'use strict';

let qnum = 0; 
//Start at zero so we can use the value of qnum as an index to pull the next question from the 'questions' array.

let numCorrect = 0;
//initialize at 0

let numIncorrect = 0;
//initialize at 0

const questions = [
  {question: 'What is the best way to defeat "IT"?',
    a1: 'Avoid',
    a2: 'Show no mercy',
    a3: 'Scream',
    a4: 'Don\'t believe',
    correct: 'Avoid',
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


function startQuiz () {} 
//listens for click on the 'Start Quiz' button
//on pressing the 'Start Quiz' button, Calls askQuestion() to display the first question


function askQuestion () {
  //$('main').html(`${questions[qnum].question}`);
  //empties the <main> element and appends an HTML block containing the current question to the <main>
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
              <button type="submit" value="next">
          </div>

      </form> 
  </div>
`);



  $('.questionNumber').text(`${qnum+1}`);  //updates the header to reflect current value of qnum

  //qnum++; //FOR TESTING PURPOSES ONLY. REMOVE THIS ONCE OTHER SECTIONS ARE FUNCTIONAL!
}




function checkQuestion () {
  if (questions[qnum].correct === $().val()) {
    
    feedback(true);
  } else {
    
    feedback(false);
  }
}
//listens for click on 'Submit' button
//checks if the submitted answer matches the correct answer to the question
//TODO: point Jquery selector at correct HTML item to extract form submission value
//Updates the values of numCorrect and numIncorrect
//Calls feedback() to display the feedback page


function feedback (bool) {
  if (bool) {
    $('main').html(`Correct! Great job! Fun fact: ${questions[qnum].funFact}`);
    numCorrect++;
    $('span.correct').text(`${numCorrect}`);

  } else {
    $('main').html(`Sorry, the correct answer was: ${questions[qnum].correct}`);
    numIncorrect++;
    $('span.incorrect').text(`${numIncorrect}`);

  }
  
}
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


