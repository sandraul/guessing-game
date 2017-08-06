<script type="text/javascript">
  console.log("Starting 'Welcome!' message...")
  var user = prompt("I'm glad you're here!", "What's your name?");
  console.log("The user's name is: "+user);
  var today = new Date();
  console.log("Today is: "+today);
  var message = "Welcome to my Guessing Game " + user + "!\nToday is: " + today.toDateString();
  console.log("Message given to the user: " +message);
  alert(message);
  var questionOne = prompt("Do I like avocados?", "yes/no");
  var lowerCaseOne = questionOne.toLowerCase ();
  if (lowerCaseOne == "yes" || lowerCaseOne == "y") {
    alert("How did you know? I grew up eating them every single day!");
    console.log("User answers to question one: " +questionOne);
  } else {
    alert("Oops, thats not right.  I love avocados!");
    console.log("User answers to question one: " +questionOne);
  }
  var questionTwo = prompt("Did I live in Chicago?", "yes/no");
  var lowerCaseTwo = questionTwo.toLowerCase ();
  if (lowerCaseTwo == "yes" || lowerCaseTwo == "y") {
    alert("Yeap, I lived there for three years!");
    console.log("User answers to question two: " +questionTwo);
  } else {
    alert("Not right, even though I hated the cold, I lived there for three years!")
    console.log("User answers to question two: " +questionTwo)
  }
  var questionThree = prompt("Geography quiz! Is Amaranth grown in India?!", "yes/no");
  var lowerCaseThree = questionThree.toLowerCase ();
  if (lowerCaseThree == "yes" || lowerCaseThree == "y") {
    alert("You graded A+! Nicely done.");
    console.log("User answers to question three: " +questionThree)
  } else {
    alert("Well, even though it's a native crop to Mesoamerica, now is commonly grown in India.")
    console.log("User answers to question three: " +questionThree)
  }

</script>
