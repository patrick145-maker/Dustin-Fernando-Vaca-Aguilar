'use strict';

/* =====================================================================
   RECYCLING TIME — GUARDIANES DEL RECICLAJE
   Motor de juego en JavaScript puro (sin dependencias externas).
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) BASE DE DATOS DE RESIDUOS
   Cada objeto define el nombre visible, el emoji y el tipo de
   contenedor correcto ('plastic' | 'paper' | 'glass' | 'metal' | 'organic').
   --------------------------------------------------------------------- */
const WASTE_DATABASE = [
  // --- Plástico (amarillo) ---
  { name: 'Botella de agua',        emoji: '🧴', type: 'plastic' },
  { name: 'Bolsa de plástico',      emoji: '🛍️', type: 'plastic' },
  { name: 'Vaso desechable',        emoji: '🥤', type: 'plastic' },
  { name: 'Juguete de plástico',    emoji: '🪀', type: 'plastic' },
  { name: 'Cepillo de dientes',     emoji: '🪥', type: 'plastic' },

  // --- Papel y cartón (azul) ---
  { name: 'Periódico',              emoji: '📰', type: 'paper' },
  { name: 'Caja de cartón',         emoji: '📦', type: 'paper' },
  { name: 'Cuaderno usado',         emoji: '📓', type: 'paper' },
  { name: 'Revista',                emoji: '📖', type: 'paper' },
  { name: 'Rollo de papel',         emoji: '🧻', type: 'paper' },

  // --- Vidrio (verde) ---
  { name: 'Botella de vidrio',      emoji: '🍾', type: 'glass' },
  { name: 'Frasco de mermelada',    emoji: '🫙', type: 'glass' },
  { name: 'Copa de vidrio rota',    emoji: '🍷', type: 'glass' },
  { name: 'Frasco de perfume',      emoji: '🧪', type: 'glass' },
  { name: 'Bombilla fundida',       emoji: '💡', type: 'glass' },

  // --- Metal (gris/negro) ---
  { name: 'Lata de conserva',       emoji: '🥫', type: 'metal' },
  { name: 'Clavos y tornillos',     emoji: '🔩', type: 'metal' },
  { name: 'Papel aluminio',         emoji: '🔗', type: 'metal' },
  { name: 'Pieza de maquinaria',    emoji: '⚙️', type: 'metal' },
  { name: 'Utensilio de cocina',    emoji: '🍴', type: 'metal' },

  // --- Orgánico (marrón) ---
  { name: 'Cáscara de plátano',     emoji: '🍌', type: 'organic' },
  { name: 'Restos de café',         emoji: '☕', type: 'organic' },
  { name: 'Cáscara de manzana',     emoji: '🍎', type: 'organic' },
  { name: 'Restos de verduras',     emoji: '🥕', type: 'organic' },
  { name: 'Cáscara de huevo',       emoji: '🥚', type: 'organic' },
];

/* ---------------------------------------------------------------------
   2) CONFIGURACIÓN DE NIVELES
   'target' es la puntuación ACUMULADA necesaria para avanzar.
   --------------------------------------------------------------------- */
const LEVELS = [
  { name: 'Primeros pasos del reciclaje', target: 60,  timeLimit: 60, hasLives: false },
  { name: 'Reciclador experto',           target: 130, timeLimit: 45, hasLives: false },
  { name: 'Salvar el planeta',            target: 200, timeLimit: 30, hasLives: true  },
];

const POINTS_CORRECT = 10;
const POINTS_WRONG = 5;
const MAX_LIVES = 3;

/* ---------------------------------------------------------------------
   3) ESTADO DEL JUEGO (única fuente de verdad)
   --------------------------------------------------------------------- */
const state = {
  levelIndex: 0,
  score: 0,
  totalRecycled: 0,
  lives: MAX_LIVES,
  timeLeft: 0,
  timerId: null,
  currentCard: null,
  lastCardName: null,
  isActive: false,
};

/* ---------------------------------------------------------------------
   4) REFERENCIAS AL DOM
   --------------------------------------------------------------------- */
const screens = {
  start: document.getElementById('screen-start'),
  game: document.getElementById('screen-game'),
  end: document.getElementById('screen-end'),
};

const dom = {
  btnStart: document.getElementById('btn-start'),
  btnRestart: document.getElementById('btn-restart'),
  bins: Array.from(document.querySelectorAll('.bin')),

  hudLevel: document.getElementById('hud-level'),
  hudLevelName: document.getElementById('hud-level-name'),
  hudScore: document.getElementById('hud-score'),
  hudTarget: document.getElementById('hud-target'),
  hudTime: document.getElementById('hud-time'),
  hudTimerWrap: document.getElementById('hud-timer-wrap'),
  hudTotal: document.getElementById('hud-total'),
  hudLives: document.getElementById('hud-lives'),
  hearts: Array.from(document.querySelectorAll('.heart')),
  levelUpBanner: document.getElementById('level-up-banner'),

  wasteCard: document.getElementById('waste-card'),
  wasteEmoji: document.getElementById('waste-emoji'),
  wasteName: document.getElementById('waste-name'),

  endScreen: document.getElementById('screen-end'),
  endEmoji: document.getElementById('end-emoji'),
  endTitle: document.getElementById('end-title'),
  endSubtitle: document.getElementById('end-subtitle'),
  endScore: document.getElementById('end-score'),
  endLevel: document.getElementById('end-level'),
  endRecycled: document.getElementById('end-recycled'),
  endEducationText: document.getElementById('end-education-text'),
};

/* ---------------------------------------------------------------------
   5) NAVEGACIÓN ENTRE PANTALLAS (máquina de estados por clase .active)
   --------------------------------------------------------------------- */
function showScreen(name) {
  Object.values(screens).forEach((el) => el.classList.remove('active'));
  screens[name].classList.add('active');
}

/* ---------------------------------------------------------------------
   6) CICLO DE VIDA DE LA PARTIDA
   --------------------------------------------------------------------- */
function startGame() {
  // Reinicia todo el estado a sus valores iniciales
  state.levelIndex = 0;
  state.score = 0;
  state.totalRecycled = 0;
  state.lives = MAX_LIVES;
  state.lastCardName = null;
  state.isActive = true;

  resetHeartsUI();
  showScreen('game');
  loadLevel(0);
  spawnCard();
}

function loadLevel(index) {
  state.levelIndex = index;
  const level = LEVELS[index];
  state.timeLeft = level.timeLimit;

  // Las vidas solo se muestran (y se reinician) en el nivel con REGLA ESPECIAL
  dom.hudLives.classList.toggle('visible', level.hasLives);
  if (level.hasLives) {
    state.lives = MAX_LIVES;
    resetHeartsUI();
  }

  updateHUD();
  restartTimer();
}

function restartTimer() {
  clearInterval(state.timerId);
  state.timerId = setInterval(tick, 1000);
}

// Se ejecuta cada segundo mientras la partida está activa
function tick() {
  if (!state.isActive) return;
  state.timeLeft--;
  updateHUD();

  if (state.timeLeft <= 0) {
    clearInterval(state.timerId);
    // Se acabó el tiempo sin alcanzar la meta del nivel -> derrota
    endGame(false);
  }
}

/* ---------------------------------------------------------------------
   7) TARJETA DE RESIDUO ACTIVA
   --------------------------------------------------------------------- */
function spawnCard() {
  let item;
  // Evita repetir el mismo residuo dos veces seguidas
  do {
    item = WASTE_DATABASE[Math.floor(Math.random() * WASTE_DATABASE.length)];
  } while (WASTE_DATABASE.length > 1 && item.name === state.lastCardName);

  state.currentCard = item;
  state.lastCardName = item.name;

  dom.wasteEmoji.textContent = item.emoji;
  dom.wasteName.textContent = item.name;
}

/* ---------------------------------------------------------------------
   8) CLASIFICACIÓN: ACIERTO / ERROR
   --------------------------------------------------------------------- */
function handleBinClick(event) {
  const binEl = event.currentTarget;
  if (!state.isActive || !state.currentCard) return;

  const chosenType = binEl.dataset.type;
  animateLid(binEl);

  if (chosenType === state.currentCard.type) {
    resolveCorrect(binEl);
  } else {
    resolveWrong(binEl);
  }
}

function resolveCorrect(binEl) {
  state.score += POINTS_CORRECT;
  state.totalRecycled += 1;

  playCardFeedback('is-correct');
  playBinFeedback(binEl, 'bin-correct');
  updateHUD();

  const advanced = checkLevelProgress();
  if (!advanced && state.isActive) {
    spawnCard();
  }
}

function resolveWrong(binEl) {
  state.score = Math.max(0, state.score - POINTS_WRONG);

  playCardFeedback('is-wrong');
  playBinFeedback(binEl, 'bin-wrong');
  updateHUD();

  const level = LEVELS[state.levelIndex];
  if (level.hasLives) {
    loseLife();
    if (state.lives <= 0) {
      endGame(false);
      return;
    }
  }

  if (state.isActive) {
    spawnCard();
  }
}

/* Feedback visual instantáneo sobre la tarjeta (destello + escala/temblor) */
function playCardFeedback(className) {
  dom.wasteCard.classList.remove('is-correct', 'is-wrong');
  // Forzar reflow para poder relanzar la misma animación en clics seguidos
  void dom.wasteCard.offsetWidth;
  dom.wasteCard.classList.add(className);
  setTimeout(() => dom.wasteCard.classList.remove(className), 480);
}

function playBinFeedback(binEl, className) {
  binEl.classList.remove('bin-correct', 'bin-wrong');
  void binEl.offsetWidth;
  binEl.classList.add(className);
  setTimeout(() => binEl.classList.remove(className), 480);
}

// "Firma visual" del juego: la tapa del contenedor se abre al clasificar
function animateLid(binEl) {
  binEl.classList.add('lid-open');
  setTimeout(() => binEl.classList.remove('lid-open'), 320);
}

/* ---------------------------------------------------------------------
   9) VIDAS (solo Nivel 3)
   --------------------------------------------------------------------- */
function loseLife() {
  state.lives = Math.max(0, state.lives - 1);
  const lostIndex = MAX_LIVES - state.lives - 1; // corazón a "apagar"
  if (dom.hearts[lostIndex]) {
    dom.hearts[lostIndex].classList.add('lost');
  }
}

function resetHeartsUI() {
  dom.hearts.forEach((h) => h.classList.remove('lost'));
}

/* ---------------------------------------------------------------------
   10) PROGRESIÓN DE NIVEL
   Devuelve true si el jugador avanzó de nivel o ganó la partida.
   --------------------------------------------------------------------- */
function checkLevelProgress() {
  const level = LEVELS[state.levelIndex];
  if (state.score < level.target) return false;

  const isLastLevel = state.levelIndex === LEVELS.length - 1;
  if (isLastLevel) {
    endGame(true);
    return true;
  }

  // Avanza al siguiente nivel: nuevo tiempo límite, mismo puntaje acumulado
  loadLevel(state.levelIndex + 1);
  spawnCard();
  showLevelUpBanner(LEVELS[state.levelIndex].name);
  return true;
}

function showLevelUpBanner(levelName) {
  dom.levelUpBanner.textContent = `¡Nivel superado! Ahora: ${levelName}`;
  dom.levelUpBanner.classList.add('show');
  setTimeout(() => dom.levelUpBanner.classList.remove('show'), 1600);
}

/* ---------------------------------------------------------------------
   11) FIN DE PARTIDA
   --------------------------------------------------------------------- */
function endGame(victory) {
  state.isActive = false;
  clearInterval(state.timerId);

  dom.endScreen.classList.toggle('defeat', !victory);

  dom.endEmoji.textContent = victory ? '🌍' : '🥀';
  dom.endTitle.textContent = victory ? '¡Planeta a salvo!' : 'Misión incompleta';
  dom.endSubtitle.textContent = victory
    ? 'Te has convertido en un verdadero Guardián del Reciclaje'
    : 'El planeta necesita que lo intentes de nuevo';

  dom.endScore.textContent = state.score;
  dom.endLevel.textContent = state.levelIndex + 1;
  dom.endRecycled.textContent = state.totalRecycled;

  dom.endEducationText.textContent = victory
    ? 'Reciclar correctamente reduce la contaminación, ahorra energía y le da una segunda vida a los materiales. ¡Sigue clasificando en casa igual que en el juego!'
    : 'Cada residuo bien clasificado importa: reduce la basura en vertederos y ahorra recursos naturales. Vuelve a intentarlo y sigue practicando la separación correcta.';

  showScreen('end');
}

/* ---------------------------------------------------------------------
   12) ACTUALIZACIÓN DEL HUD
   --------------------------------------------------------------------- */
function updateHUD() {
  const level = LEVELS[state.levelIndex];

  dom.hudLevel.textContent = state.levelIndex + 1;
  dom.hudLevelName.textContent = level.name;
  dom.hudScore.textContent = state.score;
  dom.hudTarget.textContent = `Meta: ${level.target}`;
  dom.hudTime.textContent = state.timeLeft;
  dom.hudTotal.textContent = state.totalRecycled;

  dom.hudTimerWrap.classList.toggle('timer-warning', state.timeLeft <= 10);
}

/* ---------------------------------------------------------------------
   13) EVENTOS
   --------------------------------------------------------------------- */
dom.btnStart.addEventListener('click', startGame);
dom.btnRestart.addEventListener('click', () => showScreen('start'));
dom.bins.forEach((bin) => bin.addEventListener('click', handleBinClick));
