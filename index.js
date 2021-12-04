var readlineSync = require('readline-sync');

var score = 0;

var name = readlineSync.question("what is your name ? ");

console.log("Hi " + name + " Welcome to big bang theory quiz ?");

var highscore = [
  {
    name : "sahith",
    score:10,
  },
]
function play(question,answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("right");
    score = score + 1;
  } else {
    console.log("wrong!");
  }

  console.log("current score",score);
  console.log("------");
}

var questions = [{
  question:"what is the full name of sheldon  ? ",
  answer: "sheldon cooper"
},{
  question:"how many seasons does big bang theory has ? ",
  answer: "12"
},{
  question:"what is sheldon's buzz word for jokes ? ",
  answer: "buzzinga"
},{
  question:"what is sheldon's girlfriend name ? ",
  answer: "amy"
},{
  question:"what is sheldon's roomate/best-friend name  ? ",
  answer: "leonard"
},{
  question:"what is sheldon neighbour name ? ",
  answer:"penny"
},{
  question:"what was penny's job  ? ",
  answer:"waitress"
},{
  question:"what penny wanted to become ? ",
  answer: "actor"
},{
  question:"what is the indian character name in big bang theory ?  ",
  answer: "raj"
},{
  question:"astronaut name in the big bang theory ? ",
  answer: "howard wolowitz"
}];

for(var i=0;i<questions.length;i++) {
  var  currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
if(score > 0 ){
console.log("Yayy 🥳🥳 You scored ",score);
}
else {
  console.log("Better luck next time buddy !");
  }
console.log(" high scores",highscore);