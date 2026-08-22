const questions = [
  {
    text: "2.458 + 1.736 = ?",
    answers: ["4.084", "4.194", "4.294", "4.394"],
    correct: "4.194"
  },
  {
    text: "7.500 − 3.846 = ?",
    answers: ["3.554", "3.654", "3.754", "3.854"],
    correct: "3.654"
  },
  {
    text: "126 × 24 = ?",
    answers: ["2.924", "3.024", "3.124", "3.224"],
    correct: "3.024"
  },
  {
    text: "450 + 36 × 8 = ?",
    answers: ["3.888", "738", "3.480", "486"],
    correct: "738"
  },
  {
    text: "3.456 ÷ 24 = ?",
    answers: ["134", "144", "154", "164"],
    correct: "144"
  },
  {
    text: "1.200 − 275 × 3 = ?",
    answers: ["375", "425", "475", "925"],
    correct: "375"
  },
  {
    text: "248 × 15 = ?",
    answers: ["3.620", "3.720", "3.820", "3.920"],
    correct: "3.720"
  },
  {
    text: "(840 + 360) ÷ 12 = ?",
    answers: ["90", "100", "110", "120"],
    correct: "100"
  },
  {
    text: "(2.400 − 600) ÷ 9 = ?",
    answers: ["180", "190", "200", "210"],
    correct: "200"
  },
  {
    text: "2.500 − (320 × 5) = ?",
    answers: ["800", "900", "1.000", "1.100"],
    correct: "900"
  }
];

const state = {
  round: 0,
  score: 0,
  correct: 0,
  incorrect: 0,
  birdActive: false,
  answered: false,
  birdTimer: null,
  birdMoveTimer: null,
  missTimer: null
};

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const bird = document.getElementById("bird");
const huntArea = document.getElementById("hunt-area");
const huntMessage = document.getElementById("hunt-message");
const missMessage = document.getElementById("miss-message");

const roundLabel = document.getElementById("round-label");
const scoreLabel = document.getElementById("score-label");

const questionPanel = document.getElementById("question-panel");
const questionRound = document.getElementById("question-round");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

const finalScore = document.getElementById("final-score");
const finalMessage = document.getElementById("final-message");
const correctCount = document.getElementById("correct-count");
const incorrectCount = document.getElementById("incorrect-count");

function resetState() {
  clearTimeout(state.birdTimer);
  clearInterval(state.birdMoveTimer);
  clearTimeout(state.missTimer);

  state.round = 0;
  state.score = 0;
  state.correct = 0;
  state.incorrect = 0;
  state.birdActive = false;
  state.answered = false;

  updateHud();
}

function updateHud() {
  roundLabel.textContent = `${Math.min(state.round + 1, 10)}/10`;
  scoreLabel.textContent = `${state.score}/10`;
}

function startGame() {
  resetState();

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  startRound();
}

function startRound() {
  if (state.round >= questions.length) {
    showResult();
    return;
  }

  state.answered = false;
  state.birdActive = true;

  questionPanel.classList.add("hidden");
  feedback.className = "feedback hidden";
  feedback.textContent = "";
  nextBtn.classList.add("hidden");
  answersContainer.innerHTML = "";

  roundLabel.textContent = `${state.round + 1}/10`;
  scoreLabel.textContent = `${state.score}/10`;

  huntMessage.classList.remove("hidden");
  huntMessage.querySelector("span").textContent = "¡ENCUENTRA EL AVE!";
  huntMessage.querySelector("small").textContent = "Apunta y haz clic sobre ella";

  bird.classList.remove("hidden", "hit");
  bird.style.opacity = "1";
  placeBirdRandomly();
  startBirdMovement();
}

function getBirdSpeed() {
  if (state.round < 3) return 1150;
  if (state.round < 7) return 850;
  return 620;
}

function placeBirdRandomly() {
  const areaWidth = huntArea.clientWidth;
  const areaHeight = huntArea.clientHeight;

  const birdWidth = 95;
  const birdHeight = 75;

  const minX = 90;
  const maxX = Math.max(minX, areaWidth - birdWidth - 50);

  const minY = 110;
  const maxY = Math.max(minY, Math.floor(areaHeight * 0.58));

  const x = minX + Math.random() * Math.max(10, maxX - minX);
  const y = minY + Math.random() * Math.max(10, maxY - minY);

  bird.style.left = `${x}px`;
  bird.style.top = `${y}px`;
}

function startBirdMovement() {
  clearInterval(state.birdMoveTimer);

  const speed = getBirdSpeed();

  moveBird();

  state.birdMoveTimer = setInterval(() => {
    if (state.birdActive) {
      moveBird();
    }
  }, speed);
}

function moveBird() {
  const areaWidth = huntArea.clientWidth;
  const areaHeight = huntArea.clientHeight;

  const birdWidth = 95;
  const birdHeight = 75;

  const maxX = Math.max(100, areaWidth - birdWidth - 40);
  const maxY = Math.max(170, Math.floor(areaHeight * 0.62));

  const minX = 60;
  const minY = 90;

  const x = minX + Math.random() * Math.max(20, maxX - minX);
  const y = minY + Math.random() * Math.max(20, maxY - minY);

  bird.style.left = `${x}px`;
  bird.style.top = `${y}px`;

  const direction = Math.random() > 0.5 ? 1 : -1;
  bird.style.transform = `scaleX(${direction})`;
}

function hitBird(event) {
  event.stopPropagation();

  if (!state.birdActive || state.answered) return;

  state.birdActive = false;
  clearInterval(state.birdMoveTimer);

  bird.classList.add("hit");

  huntMessage.classList.add("hidden");

  state.birdTimer = setTimeout(() => {
    bird.classList.add("hidden");
    showQuestion();
  }, 430);
}

function missBird(event) {
  if (!state.birdActive || state.answered) return;
  if (event.target.closest("#bird")) return;

  missMessage.classList.remove("hidden");

  clearTimeout(state.missTimer);
  state.missTimer = setTimeout(() => {
    missMessage.classList.add("hidden");
  }, 900);
}

function showQuestion() {
  const current = questions[state.round];

  questionPanel.classList.remove("hidden");
  questionRound.textContent = `DESAFÍO ${state.round + 1}/10`;
  questionText.textContent = current.text;

  answersContainer.innerHTML = "";

  current.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;
    button.type = "button";
    button.addEventListener("click", () => checkAnswer(answer, button));
    answersContainer.appendChild(button);
  });
}

function checkAnswer(selectedAnswer, selectedButton) {
  if (state.answered) return;

  state.answered = true;

  const current = questions[state.round];
  const buttons = [...answersContainer.querySelectorAll(".answer-btn")];

  buttons.forEach((button) => {
    button.disabled = true;

    if (button.textContent === current.correct) {
      button.classList.add("correct");
    }
  });

  if (selectedAnswer === current.correct) {
    state.score += 1;
    state.correct += 1;

    selectedButton.classList.add("correct");

    feedback.className = "feedback correct";
    feedback.innerHTML = "🎯 ¡CORRECTO! <strong>+1 PUNTO</strong>";
  } else {
    state.incorrect += 1;
    selectedButton.classList.add("incorrect");

    feedback.className = "feedback incorrect";
    feedback.innerHTML = `❌ ¡INCORRECTO!<br>La respuesta correcta era: <strong>${current.correct}</strong>`;
  }

  scoreLabel.textContent = `${state.score}/10`;
  feedback.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
}

function nextRound() {
  state.round += 1;

  if (state.round >= questions.length) {
    showResult();
  } else {
    startRound();
  }
}

function showResult() {
  clearInterval(state.birdMoveTimer);
  clearTimeout(state.birdTimer);

  gameScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  finalScore.textContent = `${state.score}/10`;
  correctCount.textContent = state.correct;
  incorrectCount.textContent = state.incorrect;

  if (state.score >= 9) {
    finalMessage.textContent = "¡Excelente! Dominas las operaciones matemáticas.";
  } else if (state.score >= 7) {
    finalMessage.textContent = "¡Muy bien! Tienes un buen dominio. Sigue practicando.";
  } else if (state.score >= 5) {
    finalMessage.textContent = "Buen esfuerzo. Continúa practicando para mejorar.";
  } else {
    finalMessage.textContent = "Necesitas practicar un poco más. ¡Inténtalo nuevamente!";
  }
}

function restartGame() {
  startGame();
}

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
bird.addEventListener("click", hitBird);
huntArea.addEventListener("click", missBird);
nextBtn.addEventListener("click", nextRound);

window.addEventListener("resize", () => {
  if (state.birdActive) {
    placeBirdRandomly();
  }
});

updateHud();
