let currentLevel = 1;
const totalLevels = 20;

const questions = [
  "What is the color of the sky?",
  "Who is the author of Harry Potter?",
  "What is 5 + 7?",
  "Which planet is known as the Red Planet?",
  "What is the capital of France?",
  "Which ocean is the largest?",
  "What is the name of the tallest mountain?",
  "Who painted the Mona Lisa?",
  "What is the main ingredient in guacamole?",
  "Which animal is known as the King of the Jungle?",
  "What is the largest continent?",
  "What is the square root of 64?",
  "Who discovered electricity?",
  "What is the longest river in the world?",
  "What is the currency used in Japan?",
  "Which is the smallest country in the world?",
  "Who invented the telephone?",
  "What is the hardest natural substance on Earth?",
  "Who is the president of the USA?",
  "What is the fastest land animal?"
];

const answers = [
  "blue",
  "jk rowling",
  "12",
  "mars",
  "paris",
  "pacific",
  "everest",
  "leonardo da vinci",
  "avocado",
  "lion",
  "asia",
  "8",
  "benjamin franklin",
  "nile",
  "yen",
  "vatican city",
  "alexander graham bell",
  "diamond",
  "joe biden",
  "cheetah"
];

function checkAnswer() {
  const userAnswer = document.getElementById('answer').value.toLowerCase().trim();
  const correctAnswer = answers[currentLevel - 1].toLowerCase();

  const statusElement = document.getElementById('status');

  if (userAnswer === correctAnswer) {
    statusElement.textContent = "Correct! Moving to the next level...";
    statusElement.classList.add("show");
    currentLevel++;
    if (currentLevel <= totalLevels) {
      document.getElementById('question').textContent = questions[currentLevel - 1];
      document.getElementById('answer').value = ''; // Clear the answer field
    } else {
      document.getElementById('question').textContent = "Congratulations! You finished the game!";
      statusElement.textContent = "Here's your heartfelt letter: [Insert letter text]";
    }
  } else {
    statusElement.textContent = "Oops! Try again.";
    statusElement.classList.add("show");
  }

  // Hide the status message after 2 seconds
  setTimeout(() => {
    statusElement.classList.remove("show");
  }, 2000);
}
