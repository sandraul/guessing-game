//Welcome message to the user
  console.log("Starting 'Welcome!' message...")
  var user = prompt("Welcome! What's your name?");
  console.log("The user's name is: "+user);
  var today = new Date();
  console.log("Today is: "+today);
  var message = user + ", Let's see what you know about Oaxaca." + "\nToday is: " + today.toDateString();
  console.log("Message given to the user: " +message);

var msg="Start the Guessing Game";
function updatePage() {
  document.getElementById('questions').innerHTML = msg;
}

function startGuessingGame() {
  guessQuestionOne();
  guessQuestionTwo();
  guessQuestionThree();
  guessQuestionFour();
  guessQuestionFive();
}

//Question One: Is Oaxaca in South America?
function guessQuestionOne() {
  var questionOne = prompt("Is Oaxaca in South America?", "yes/no");
  var lowerCaseOne = questionOne.toLowerCase ();
  var questionOneCount = 0
  if (lowerCaseOne == "yes" || lowerCaseOne == "y") {
    msg = "<span class='correct'>Sorry, You started with the wrong foot. It is actually part of North America.";
    console.log("correct answer" +questionOne);
  } else if (lowerCaseOne == "no" || lowerCaseOne == "n") {
    msg = "<span class='wrong'>That's impresive! You got it right!";
    console.log("incorrect answer" +questionOne);
    questionOneCount = 1;
  } else {
    msg = "<span class='failed'>Oops, You missed the correct answer!";
  }
  updatePage();
}

// Question Two: Does it snow in Oaxaca?
function guessQuestionTwo() {
  var questionTwo = prompt("Does it snow in Oaxaca?", "yes/no");
  var lowerCaseTwo = questionTwo.toLowerCase ();
  var questionTwoCount = 0
  if (lowerCaseTwo == "yes" || lowerCaseTwo == "y") {
    msg += "<br><span class='wrong'>Nop, Oaxaca's climate is mostly subtropical!";
    console.log("incorrect answer" +questionTwo);
  } else if (lowerCaseTwo == "no" || lowerCaseTwo == "n") {
    msg += "<br><span class='correct'>Correct, it is located 6,562 ft above sea level with subtropical climate!";
    console.log("correct answer" +questionTwo);
    questionTwoCount = 1;
  } else {
    msg += "<br><span class='failed'>Oops, You missed the correct answer!";
  }
  updatePage();
}

//Question Three: Are Grasshoppers a common protein source in Oaxaca?
function guessQuestionThree() {
  var questionThree = prompt("Are Grasshoppers a common protein source in Oaxaca?", "yes/no");
  var lowerCaseThree = questionThree.toLowerCase ();
  var questionThreeCount = 0
  if (lowerCaseThree == "yes" || lowerCaseThree == "y") {
    msg += "<br><span class='correct'>Don't worry, they are cooked with lime and chili and are super crunchy!";
    console.log("correct answer" +questionThree)
    questionThreeCount = 1;
  } else if (lowerCaseThree == "no" || lowerCaseThree == "n") {
    msg += "<br><span class='wrong'>Belive it or not, they are sold all around town!";
    console.log("incorrect answer" +questionThree)
  } else {
    msg += "<br><span class='failed'>Oops, You missed the correct answer!";
  }
  updatePage();
}

// Question Four: How many species of birds are in Oaxaca?
function guessQuestionFour() {
do {
  var questionFour = prompt("How many species of birds are in Oaxaca?\nHINT: It is a three digit number");
  var questionFourCount = 0
  if (questionFour == 738){
    alert("Yay, you got it!");
    questionFourCount = 1;
  } else if (questionFour < 738){
    alert("Way too low!\nHINT: More than 730 species.");
  } else if (questionFour > 738){
    alert("Too high!\nHINT: Less than 740");
  } else {
    alert("Sorry you missed it, Oaxaca has 738 bird species!");
  }
} while (questionFour != 738);

  updatePage();
}

//Question Fifth: I'm thinking of a number (25 - 30)
function guessQuestionFive() {
  var questionFive = prompt("I'm thinking of a number between 25 and 30, Try to guess it!", " ");
  var questionFiveAnswer = 27
  var questionFiveCount = 1
while (questionFive != 27) {
  if (questionFive < 27) {
    questionFive = prompt("Try a bigger number!");
    console.log("incorrect answer" +questionFive);
  } else if (questionFive > 27) {
    questionFive = prompt("Try a lower number!");
  } else {
    questionFive = prompt("enter a number between 25 and 30!");
  }
}
    if (questionFive == 27) {
    msg += "<br><span class='correct'>You did it!";
    console.log("correct answer" +questionFiveAnswer);

  }
  updatePage();
}


//Obtaining number of Correct/Wrong answers
// function sumCorrectAnswers() {
//
// }
  console.log("Total of Correct Answered Questions");
  var correctAnswers = questionOneCount +questionTwoCount +questionThreeCount +questionFourCount +questionFiveCount
  alert("Your correct answers are: " +correctAnswers);
