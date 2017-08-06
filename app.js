  console.log("Starting 'Welcome!' message...")
  var user = prompt("I'm glad you're here!", "What's your name?");
  console.log("The user's name is: "+user);
  var today = new Date();
  console.log("Today is: "+today);
  var message = "Let's learn about Oaxaca " + user + "!\nToday is: " + today.toDateString();
  console.log("Message given to the user: " +message);
  alert(message);

  var questionOne = prompt("Is Oaxaca a city?", "yes/no");
  var lowerCaseOne = questionOne.toLowerCase ();
  if (lowerCaseOne == "yes" || lowerCaseOne == "y") {
    alert("Aja! I see you know some Geography!");
    console.log("User answers to question one: " +questionOne);
  } else {
    alert("Oops, thats not right.  It is the name of the State and also the City!");
    console.log("User answers to question one: " +questionOne);
  }
  if (questionOne == "yes"){
    questionOne = 1;
  }  else {
    (questionOne = 0);
  }


  var questionTwo = prompt("Does it snow in Oaxaca?", "yes/no");
  var lowerCaseTwo = questionTwo.toLowerCase ();
  if (lowerCaseTwo == "yes" || lowerCaseTwo == "y") {
    alert("Nop, Oaxaca's climate is mostly subtropical!");
    console.log("User answers to question two: " +questionTwo);
  } else {
    alert("Correct, it is located 6,562 ft above sea level with subtropical climate!")
    console.log("User answers to question two: " +questionTwo)
  }
  if (questionTwo == "yes"){
    questionTwo = 1;
  }  else {
    (questionTwo = 0);
  }

  var questionThree = prompt("Have you been to Oaxaca?", "yes/no");
  var lowerCaseThree = questionThree.toLowerCase ();
  if (lowerCaseThree == "yes" || lowerCaseThree == "y") {
    alert("Great, I'm sure you loved the food!.");
    console.log("User answers to question three: " +questionThree)
  } else {
    alert("Oh well, you definitly have to go visit someday!.")
    console.log("User answers to question three: " +questionThree)
  }
  if (questionThree == "yes"){
    questionThree = 1;
  } else {
    (questionThree = 0);
  }

  //Obtaining number of Correct/Wrong answers
  console.log("Total of Correct Answered Questions")
  var correctAnswers = questionOne +questionTwo +questionThree
  alert("Your correct answers are: " +correctAnswers);

/*
  for (questionOne = "yes"; questionTwo = "no"; questionThree = "no"){
    ("You got 1 correct answers, try harder next time!");
  }

  if () {
    alert("You got 1 correct answers, try harder next time!" );
  } else if (questionOne == "no" && questionTwo == "yes" && questionThree == "no") {
    alert("You got 1 correct answers, try harder next time!" );
  } else if (questionOne == "no" && questionTwo == "no" && questionThree == "yes"){
    alert("You got 1 correct answers, try harder next time!" );
  }
*/
