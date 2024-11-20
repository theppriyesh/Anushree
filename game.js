let currentLevel = 1;
const totalLevels = 20;
let userResponses = []; // To store responses

const questions = [
  "Are you ready to start the treasure hunt?",
  "What is your favorite color?",
  "What was the best moment we shared together?",
  "What's your dream vacation destination?",
  "Who is your biggest inspiration?",
  "What was the first movie we watched together?",
  "What was your first impression of me?",
  "What’s your favorite food?",
  "Where do you see yourself in 5 years?",
  "What is one thing you've always wanted to do?",
  "If you could be anywhere right now, where would it be?",
  "What was the first song you heard when you woke up today?",
  "If you had a superpower, what would it be?",
  "What’s your favorite childhood memory?",
  "Who would you want to meet if you could meet anyone?",
  "What’s one thing you’ve always wanted to learn?",
  "What’s the most adventurous thing you’ve done?",
  "What’s your favorite book or author?",
  "What’s something you’ve learned about yourself recently?",
  "What’s the best piece of advice you’ve ever received?"
];

function checkAnswer() {
  const userAnswer = document.getElementById('answer').value.trim();
  const statusElement = document.getElementById('status');

  // Save the response for later reference
  userResponses.push(userAnswer);
  
  if (userAnswer) {
    statusElement.textContent = "Correct! Let's move to the next clue...";
    statusElement.classList.add("show");
    currentLevel++;
    
    if (currentLevel <= totalLevels) {
      document.getElementById('question').textContent = questions[currentLevel - 1];
      document.getElementById('answer').value = ''; // Clear the input field
    } else {
      document.getElementById('question').textContent = "Congratulations! You've completed the treasure hunt!";
      statusElement.textContent = "Here's your heartfelt letter: [Insert letter text]";
      document.getElementById('answer').style.display = 'none'; // Hide the input field after the last question
    }
  } else {
    statusElement.textContent = "Oops! Please provide an answer.";
    statusElement.classList.add("show");
  }

  // Hide the status message after 2 seconds
  setTimeout(() => {
    statusElement.classList.remove("show");
  }, 2000);
}
