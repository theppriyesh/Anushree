let currentLevel = 1;
const totalLevels = 20;

// 20 Random Questions and Answers
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
  "blue",                // 1
  "jk rowling",          // 2
  "12",                  // 3
  "mars",                // 4
  "paris",               // 5
  "pacific",             // 6
  "everest",             // 7
  "leonardo da vinci",   // 8
  "avocado",             // 9
  "lion",                // 10
  "asia",                // 11
  "8",                   // 12
  "benjamin franklin",   // 13
  "nile",                // 14
  "yen",                 // 15
  "vatican city",        // 16
  "alexander graham bell", // 17
  "diamond",             // 18
  "joe biden",           // 19
  "cheetah"              // 20
];

function checkAnswer() {
  const userAnswer = document.getElementById('answer').value.toLowerCase().trim();
  const correctAnswer = answers[currentLevel - 1].toLowerCase();

  if (userAnswer === correctAnswer) {
    document.getElementById('status').textContent = "Correct! Moving to next level...";
    currentLevel++;
    if (currentLevel <= totalLevels) {
      document.getElementById('question').textContent = questions[currentLevel - 1];
      document.getElementById('answer').value = ''; // Clear the answer field
    } else {
      document.getElementById('question').textContent = "Congratulations! You finished the game!";
      document.getElementById('status').textContent = "Here's your heartfelt letter: [Insert letter text]";
    }
  } else {
    document.getElementById('status').textContent = "Oops! Try again.";
  }
}
