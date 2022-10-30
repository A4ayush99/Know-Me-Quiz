let readlineSync = require('readline-sync');
console.log('Hey it is Aayush Namdev,Welcome to Quiz! Are You Excited?');
console.log(" ");
let userName = readlineSync.question('What is your name? ');
console.log(" ");
console.log('Welcome, Play your best ' + userName + '!!');
console.log(" ");

let score = 0;
//function
function play(question, answer) {
  let userAnswer = readlineSync.question(question).toLowerCase();

  if (userAnswer === answer) {
    console.log('Congrats! You are right..');
    score = score + 1;
  }
  else {
    console.log('Sorry! You loose :-( ');
    score = score - 1;
  }
}


console.log('Ready to Play ? ');
console.log('');
console.log('Your current score is ' + score);
console.log('');
console.log('Remeber there is -1 for every wrong answer ');

let questions = [
  {
    question: 'Where do I lives?',
    answer: 'indore' 
  },
  {
    question: 'What is my favourite color ?',
    answer: 'black'
  },
  {
    question: 'What is my favourite dish ?',
    answer: 'pasta'
  },
  {
    question: 'Which dance style I Like ?',
    answer: 'lyrical'
  },
  {
    question: 'What is my favourite Car Brand?',
    answer: 'jaguar'
  }
];

//loop around object
for (let i = 0; i < questions.length; i++) {
  let curr = questions[i];
  play(curr.question, curr.answer);
}

console.log('Game Over!! Here is your Score .');
console.log('Yayyyy! You scored : ' + score);