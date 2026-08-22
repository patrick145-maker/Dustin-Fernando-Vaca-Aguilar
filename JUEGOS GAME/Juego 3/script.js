/* =====================================================

   NUTRIAVENTURA

   EL RETO SALUDABLE

===================================================== */
 
 
/* =====================================================

   CONFIGURACIÓN DEL JUEGO

===================================================== */
 
const GAME_CONFIG = {
 
    targetScore: 100,
 
    startingLives: 3,
 
    startingTime: 45,
 
    playerSpeed: 7,
 
    foodSpeedMin: 2.5,
 
    foodSpeedMax: 4.5,
 
    spawnInterval: 850
 
};
 
 
/* =====================================================

   DATOS DE LOS ALIMENTOS

===================================================== */
 
const foods = [
 
    {

        emoji: "🍎",

        name: "Manzana",

        healthy: true,

        points: 10,

        message: "¡Excelente elección! Las frutas aportan nutrientes importantes."

    },
 
    {

        emoji: "🍌",

        name: "Plátano",

        healthy: true,

        points: 10,

        message: "¡Muy bien! El plátano es una fruta nutritiva."

    },
 
    {

        emoji: "🥕",

        name: "Zanahoria",

        healthy: true,

        points: 10,

        message: "¡Excelente! Las verduras son importantes en una alimentación saludable."

    },
 
    {

        emoji: "🥦",

        name: "Brócoli",

        healthy: true,

        points: 10,

        message: "¡Muy buena elección! Las verduras aportan vitaminas y minerales."

    },
 
    {

        emoji: "🥛",

        name: "Leche",

        healthy: true,

        points: 10,

        message: "¡Muy bien! La leche aporta nutrientes como el calcio."

    },
 
    {

        emoji: "🐟",

        name: "Pescado",

        healthy: true,

        points: 15,

        message: "¡Excelente elección! El pescado aporta proteínas y otros nutrientes."

    },
 
    {

        emoji: "🍊",

        name: "Naranja",

        healthy: true,

        points: 10,

        message: "¡Muy bien! Las frutas forman parte de una alimentación saludable."

    },
 
    {

        emoji: "🥑",

        name: "Palta",

        healthy: true,

        points: 10,

        message: "¡Excelente! La palta puede formar parte de una alimentación equilibrada."

    },
 
 
    /* =====================================

       ALIMENTOS A EVITAR CON FRECUENCIA

    ====================================== */
 
    {

        emoji: "🥤",

        name: "Gaseosa",

        healthy: false,

        points: 0,

        message: "⚠️ Las bebidas azucaradas deben consumirse con menor frecuencia."

    },
 
    {

        emoji: "🍩",

        name: "Dona",

        healthy: false,

        points: 0,

        message: "⚠️ Los dulces deben consumirse con moderación."

    },
 
    {

        emoji: "🍟",

        name: "Papas fritas",

        healthy: false,

        points: 0,

        message: "⚠️ Este tipo de alimento debe consumirse con menor frecuencia."

    },
 
    {

        emoji: "🍔",

        name: "Hamburguesa",

        healthy: false,

        points: 0,

        message: "⚠️ Algunas comidas rápidas deben consumirse con moderación."

    },
 
    {

        emoji: "🍭",

        name: "Golosina",

        healthy: false,

        points: 0,

        message: "⚠️ Las golosinas tienen mucho azúcar y deben consumirse con moderación."

    },
 
    {

        emoji: "🍫",

        name: "Chocolate",

        healthy: false,

        points: 0,

        message: "⚠️ Los alimentos con mucho azúcar deben consumirse con moderación."

    }
 
];
 
 
/* =====================================================

   ELEMENTOS DEL DOM

===================================================== */
 
const menuScreen =

    document.getElementById("menuScreen");
 
const gameScreen =

    document.getElementById("gameScreen");
 
const winScreen =

    document.getElementById("winScreen");
 
const loseScreen =

    document.getElementById("loseScreen");
 
 
const startButton =

    document.getElementById("startButton");
 
const restartWinButton =

    document.getElementById("restartWinButton");
 
const restartLoseButton =

    document.getElementById("restartLoseButton");
 
const menuWinButton =

    document.getElementById("menuWinButton");
 
const menuLoseButton =

    document.getElementById("menuLoseButton");
 
 
const gameArea =

    document.getElementById("gameArea");
 
const player =

    document.getElementById("player");
 
 
const scoreElement =

    document.getElementById("score");
 
const livesElement =

    document.getElementById("lives");
 
const timerElement =

    document.getElementById("timer");
 
const progressText =

    document.getElementById("progressText");
 
const progressFill =

    document.getElementById("progressFill");
 
const messageElement =

    document.getElementById("message");
 
 
const winScore =

    document.getElementById("winScore");
 
const loseScore =

    document.getElementById("loseScore");
 
const winMessage =

    document.getElementById("winMessage");
 
const loseMessage =

    document.getElementById("loseMessage");
 
 
const leftButton =

    document.getElementById("leftButton");
 
const rightButton =

    document.getElementById("rightButton");
 
 
/* =====================================================

   VARIABLES DEL JUEGO

===================================================== */
 
let score = 0;
 
let lives = GAME_CONFIG.startingLives;
 
let timeLeft = GAME_CONFIG.startingTime;
 
let playerX = 0;
 
let gameRunning = false;
 
let gameTimer = null;
 
let spawnTimer = null;
 
let animationFrame = null;
 
let foodsOnScreen = [];
 
let leftPressed = false;
 
let rightPressed = false;
 
 
/* =====================================================

   INICIALIZAR POSICIÓN DEL JUGADOR

===================================================== */
 
function setInitialPlayerPosition() {
 
    const areaWidth =

        gameArea.clientWidth;
 
    const playerWidth =

        player.offsetWidth;
 
    playerX =

        (areaWidth - playerWidth) / 2;
 
    updatePlayerPosition();
 
}
 
 
/* =====================================================

   ACTUALIZAR POSICIÓN

===================================================== */
 
function updatePlayerPosition() {
 
    player.style.left =

        `${playerX}px`;
 
}
 
 
/* =====================================================

   MOSTRAR PANTALLA

===================================================== */
 
function showScreen(screen) {
 
    document.querySelectorAll(".screen")

        .forEach(element => {
 
            element.classList.remove("active");
 
        });
 
    screen.classList.add("active");
 
}
 
 
/* =====================================================

   INICIAR JUEGO

===================================================== */
 
function startGame() {
 
    stopGame();
 
    score = 0;
 
    lives = GAME_CONFIG.startingLives;
 
    timeLeft = GAME_CONFIG.startingTime;
 
    foodsOnScreen = [];
 
    gameRunning = true;
 
    showScreen(gameScreen);
 
    updateInterface();
 
    messageElement.textContent =

        "¡Atrapa alimentos saludables y evita los demás!";
 
    messageElement.className =

        "game-message";
 
    setTimeout(() => {
 
        setInitialPlayerPosition();
 
        startTimer();
 
        startFoodSpawner();
 
        gameLoop();
 
    }, 100);
 
}
 
 
/* =====================================================

   DETENER JUEGO

===================================================== */
 
function stopGame() {
 
    gameRunning = false;
 
    clearInterval(gameTimer);
 
    clearInterval(spawnTimer);
 
    cancelAnimationFrame(animationFrame);
 
    gameTimer = null;
 
    spawnTimer = null;
 
    animationFrame = null;
 
    removeAllFoods();
 
}
 
 
/* =====================================================

   TEMPORIZADOR

===================================================== */
 
function startTimer() {
 
    clearInterval(gameTimer);
 
    gameTimer =

        setInterval(() => {
 
            if (!gameRunning) {

                return;

            }
 
            timeLeft--;
 
            updateInterface();
 
            if (timeLeft <= 0) {
 
                timeLeft = 0;
 
                updateInterface();
 
                finishByTime();
 
            }
 
        }, 1000);
 
}
 
 
/* =====================================================

   FINALIZAR POR TIEMPO

===================================================== */
 
function finishByTime() {
 
    if (!gameRunning) {

        return;

    }
 
    if (score >= GAME_CONFIG.targetScore) {
 
        winGame(

            "¡Llegaste a la meta antes de que terminara el tiempo!"

        );
 
    } else {
 
        loseGame(

            "Se terminó el tiempo. ¡Sigue practicando para alcanzar 100 puntos!"

        );
 
    }
 
}
 
 
/* =====================================================

   GENERADOR DE ALIMENTOS

===================================================== */
 
function startFoodSpawner() {
 
    clearInterval(spawnTimer);
 
    spawnTimer =

        setInterval(() => {
 
            if (gameRunning) {
 
                createFood();
 
            }
 
        }, GAME_CONFIG.spawnInterval);
 
}
 
 
/* =====================================================

   CREAR ALIMENTO

===================================================== */
 
function createFood() {
 
    if (!gameRunning) {

        return;

    }
 
    const foodData =

        foods[

            Math.floor(

                Math.random() * foods.length

            )

        ];
 
 
    const foodElement =

        document.createElement("div");
 
 
    foodElement.className =

        `food ${

            foodData.healthy

                ? "healthy"

                : "unhealthy"

        }`;
 
 
    foodElement.textContent =

        foodData.emoji;
 
 
    foodElement.title =

        foodData.name;
 
 
    const areaWidth =

        gameArea.clientWidth;
 
 
    const foodWidth = 58;
 
 
    const maxX =

        Math.max(

            0,

            areaWidth - foodWidth

        );
 
 
    const x =

        Math.random() * maxX;
 
 
    const speed =

        GAME_CONFIG.foodSpeedMin +

        Math.random() *

        (

            GAME_CONFIG.foodSpeedMax -

            GAME_CONFIG.foodSpeedMin

        );
 
 
    const food = {
 
        element: foodElement,
 
        data: foodData,
 
        x: x,
 
        y: -65,
 
        speed: speed,
 
        collected: false
 
    };
 
 
    foodElement.style.left =

        `${food.x}px`;
 
 
    foodElement.style.top =

        `${food.y}px`;
 
 
    gameArea.appendChild(

        foodElement

    );
 
 
    foodsOnScreen.push(food);
 
}
 
 
/* =====================================================

   BUCLE PRINCIPAL

===================================================== */
 
function gameLoop() {
 
    if (!gameRunning) {

        return;

    }
 
 
    movePlayer();
 
    updateFoods();
 
    checkCollisions();
 
    animationFrame =

        requestAnimationFrame(

            gameLoop

        );
 
}
 
 
/* =====================================================

   MOVER JUGADOR

===================================================== */
 
function movePlayer() {
 
    if (!gameRunning) {

        return;

    }
 
 
    const areaWidth =

        gameArea.clientWidth;
 
 
    const playerWidth =

        player.offsetWidth;
 
 
    if (leftPressed) {
 
        playerX -=

            GAME_CONFIG.playerSpeed;
 
    }
 
 
    if (rightPressed) {
 
        playerX +=

            GAME_CONFIG.playerSpeed;
 
    }
 
 
    const maxX =

        areaWidth - playerWidth;
 
 
    if (playerX < 0) {
 
        playerX = 0;
 
    }
 
 
    if (playerX > maxX) {
 
        playerX = maxX;
 
    }
 
 
    updatePlayerPosition();
 
}
 
 
/* =====================================================

   MOVER ALIMENTOS

===================================================== */
 
function updateFoods() {
 
    const areaHeight =

        gameArea.clientHeight;
 
 
    foodsOnScreen =

        foodsOnScreen.filter(

            food => {
 
                if (food.collected) {
 
                    return false;
 
                }
 
 
                food.y +=

                    food.speed;
 
 
                food.element.style.top =

                    `${food.y}px`;
 
 
                if (

                    food.y >

                    areaHeight + 70

                ) {
 
                    food.element.remove();
 
                    return false;
 
                }
 
 
                return true;
 
            }

        );
 
}
 
 
/* =====================================================

   DETECCIÓN DE COLISIONES

===================================================== */
 
function checkCollisions() {
 
    const playerRect =

        player.getBoundingClientRect();
 
 
    foodsOnScreen.forEach(

        food => {
 
            if (

                food.collected

            ) {
 
                return;
 
            }
 
 
            const foodRect =

                food.element.getBoundingClientRect();
 
 
            if (

                rectanglesCollide(

                    playerRect,

                    foodRect

                )

            ) {
 
                collectFood(food);
 
            }
 
        }

    );
 
}
 
 
/* =====================================================

   FUNCIÓN DE COLISIÓN

===================================================== */
 
function rectanglesCollide(

    rect1,

    rect2

) {
 
    return (
 
        rect1.left <

        rect2.right &&
 
        rect1.right >

        rect2.left &&
 
        rect1.top <

        rect2.bottom &&
 
        rect1.bottom >

        rect2.top
 
    );
 
}
 
 
/* =====================================================

   RECOGER ALIMENTO

===================================================== */
 
function collectFood(food) {
 
    if (

        food.collected ||

        !gameRunning

    ) {
 
        return;
 
    }
 
 
    food.collected = true;
 
 
    food.element.classList.add(

        "collected"

    );
 
 
    if (food.data.healthy) {
 
        score +=

            food.data.points;
 
 
        showMessage(

            food.data.message,

            true

        );
 
 
        createFloatingText(

            `+${food.data.points}`,

            food.x,

            food.y,

            true

        );
 
 
        if (

            score >=

            GAME_CONFIG.targetScore

        ) {
 
            score =

                GAME_CONFIG.targetScore;
 
 
            updateInterface();
 
 
            setTimeout(() => {
 
                winGame(

                    "¡Excelente! Alcanzaste los 100 puntos saludables."

                );
 
            }, 300);
 
 
            return;
 
        }
 
    } else {
 
        lives--;
 
 
        showMessage(

            food.data.message,

            false

        );
 
 
        createFloatingText(

            "-1 ❤️",

            food.x,

            food.y,

            false

        );
 
 
        if (lives <= 0) {
 
            lives = 0;
 
            updateInterface();
 
 
            setTimeout(() => {
 
                loseGame(

                    "Te quedaste sin vidas. ¡Aprende de tus elecciones e inténtalo nuevamente!"

                );
 
            }, 350);
 
 
            return;
 
        }
 
    }
 
 
    updateInterface();
 
 
    setTimeout(() => {
 
        if (

            food.element

        ) {
 
            food.element.remove();
 
        }
 
    }, 250);
 
}
 
 
/* =====================================================

   MENSAJES

===================================================== */
 
function showMessage(

    text,

    good

) {
 
    messageElement.textContent =

        text;
 
 
    messageElement.className =

        good

            ? "game-message good"

            : "game-message bad";
 
}
 
 
/* =====================================================

   TEXTO FLOTANTE

===================================================== */
 
function createFloatingText(

    text,

    x,

    y,

    good

) {
 
    const element =

        document.createElement("div");
 
 
    element.textContent =

        text;
 
 
    element.style.position =

        "absolute";
 
 
    element.style.left =

        `${x}px`;
 
 
    element.style.top =

        `${y}px`;
 
 
    element.style.zIndex =

        "50";
 
 
    element.style.fontWeight =

        "bold";
 
 
    element.style.fontSize =

        "22px";
 
 
    element.style.pointerEvents =

        "none";
 
 
    element.style.color =

        good

            ? "#15803d"

            : "#dc2626";
 
 
    element.style.textShadow =

        "0 2px 3px rgba(255,255,255,0.9)";
 
 
    gameArea.appendChild(

        element

    );
 
 
    let currentY = y;
 
    let opacity = 1;
 
 
    const animation =

        setInterval(() => {
 
            currentY -= 2;
 
            opacity -= 0.04;
 
 
            element.style.top =

                `${currentY}px`;
 
 
            element.style.opacity =

                opacity;
 
 
            if (opacity <= 0) {
 
                clearInterval(

                    animation

                );
 
                element.remove();
 
            }
 
        }, 25);
 
}
 
 
/* =====================================================

   ACTUALIZAR INTERFAZ

===================================================== */
 
function updateInterface() {
 
    scoreElement.textContent =

        score;
 
 
    timerElement.textContent =

        timeLeft;
 
 
    let hearts = "";
 
    for (

        let i = 0;

        i < lives;

        i++

    ) {
 
        hearts += "❤️";
 
    }
 
 
    for (

        let i = lives;

        i < GAME_CONFIG.startingLives;

        i++

    ) {
 
        hearts += "🖤";
 
    }
 
 
    livesElement.textContent =

        hearts;
 
 
    progressText.textContent =

        `${score} / ${GAME_CONFIG.targetScore}`;
 
 
    const percentage =

        Math.min(

            100,

            (

                score /

                GAME_CONFIG.targetScore

            ) * 100

        );
 
 
    progressFill.style.width =

        `${percentage}%`;
 
}
 
 
/* =====================================================

   VICTORIA

===================================================== */
 
function winGame(

    customMessage

) {
 
    if (!gameRunning) {

        return;

    }
 
 
    stopGame();
 
 
    score =

        Math.max(

            score,

            GAME_CONFIG.targetScore

        );
 
 
    winScore.textContent =

        score;
 
 
    winMessage.textContent =

        customMessage;
 
 
    showScreen(

        winScreen

    );
 
}
 
 
/* =====================================================

   DERROTA

===================================================== */
 
function loseGame(

    customMessage

) {
 
    if (!gameRunning) {

        return;

    }
 
 
    stopGame();
 
 
    loseScore.textContent =

        score;
 
 
    loseMessage.textContent =

        customMessage;
 
 
    showScreen(

        loseScreen

    );
 
}
 
 
/* =====================================================

   ELIMINAR TODOS LOS ALIMENTOS

===================================================== */
 
function removeAllFoods() {
 
    foodsOnScreen.forEach(

        food => {
 
            if (

                food.element

            ) {
 
                food.element.remove();
 
            }
 
        }

    );
 
 
    foodsOnScreen = [];
 
}
 
 
/* =====================================================

   TECLADO

===================================================== */
 
document.addEventListener(

    "keydown",

    event => {
 
        if (!gameRunning) {

            return;

        }
 
 
        const key =

            event.key.toLowerCase();
 
 
        if (

            key === "arrowleft" ||

            key === "a"

        ) {
 
            leftPressed = true;
 
            event.preventDefault();
 
        }
 
 
        if (

            key === "arrowright" ||

            key === "d"

        ) {
 
            rightPressed = true;
 
            event.preventDefault();
 
        }
 
    }

);
 
 
document.addEventListener(

    "keyup",

    event => {
 
        const key =

            event.key.toLowerCase();
 
 
        if (

            key === "arrowleft" ||

            key === "a"

        ) {
 
            leftPressed = false;
 
        }
 
 
        if (

            key === "arrowright" ||

            key === "d"

        ) {
 
            rightPressed = false;
 
        }
 
    }

);
 
 
/* =====================================================

   BOTONES DE MOVIMIENTO

===================================================== */
 
function startLeft() {
 
    leftPressed = true;
 
}
 
function stopLeft() {
 
    leftPressed = false;
 
}
 
function startRight() {
 
    rightPressed = true;
 
}
 
function stopRight() {
 
    rightPressed = false;
 
}
 
 
/* Botón izquierdo */
 
leftButton.addEventListener(

    "mousedown",

    startLeft

);
 
leftButton.addEventListener(

    "mouseup",

    stopLeft

);
 
leftButton.addEventListener(

    "mouseleave",

    stopLeft

);
 
leftButton.addEventListener(

    "touchstart",

    event => {
 
        event.preventDefault();
 
        startLeft();
 
    }

);
 
leftButton.addEventListener(

    "touchend",

    event => {
 
        event.preventDefault();
 
        stopLeft();
 
    }

);
 
 
/* Botón derecho */
 
rightButton.addEventListener(

    "mousedown",

    startRight

);
 
rightButton.addEventListener(

    "mouseup",

    stopRight

);
 
rightButton.addEventListener(

    "mouseleave",

    stopRight

);
 
rightButton.addEventListener(

    "touchstart",

    event => {
 
        event.preventDefault();
 
        startRight();
 
    }

);
 
rightButton.addEventListener(

    "touchend",

    event => {
 
        event.preventDefault();
 
        stopRight();
 
    }

);
 
 
/* =====================================================

   BOTONES DEL MENÚ

===================================================== */
 
startButton.addEventListener(

    "click",

    startGame

);
 
 
restartWinButton.addEventListener(

    "click",

    startGame

);
 
 
restartLoseButton.addEventListener(

    "click",

    startGame

);
 
 
/* Volver al menú desde victoria */
 
menuWinButton.addEventListener(

    "click",

    () => {
 
        stopGame();
 
        showScreen(

            menuScreen

        );
 
    }

);
 
 
/* Volver al menú desde derrota */
 
menuLoseButton.addEventListener(

    "click",

    () => {
 
        stopGame();
 
        showScreen(

            menuScreen

        );
 
    }

);
 
 
/* =====================================================

   EVITAR PROBLEMAS AL CAMBIAR EL TAMAÑO

===================================================== */
 
window.addEventListener(

    "resize",

    () => {
 
        if (!gameRunning) {

            return;

        }
 
 
        const areaWidth =

            gameArea.clientWidth;
 
 
        const playerWidth =

            player.offsetWidth;
 
 
        const maxX =

            areaWidth - playerWidth;
 
 
        if (playerX > maxX) {
 
            playerX = maxX;
 
        }
 
 
        if (playerX < 0) {
 
            playerX = 0;
 
        }
 
 
        updatePlayerPosition();
 
    }

);
 
 
/* =====================================================

   ESTADO INICIAL

===================================================== */
 
updateInterface();
 