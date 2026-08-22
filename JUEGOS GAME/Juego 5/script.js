let ecos = 0;

let started = false;

let reactions = 0;

let positiveActions = 0;

let negativeActions = 0;

let ignoredActions = 0;


const ecoCount =
    document.getElementById("ecoCount");

const chapter =
    document.getElementById("chapter");

const world =
    document.getElementById("world");

const phone =
    document.getElementById("phone");

const message =
    document.getElementById("message");

const storyText =
    document.getElementById("storyText");

const interactionButtons =
    document.getElementById(
        "interactionButtons"
    );


let audioContext;


/* =========================
   SONIDO
========================= */

function initAudio() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

}


function sound(type) {

    initAudio();

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    let frequency = 440;


    if (type === "click")
        frequency = 520;

    if (type === "echo")
        frequency = 180;

    if (type === "positive")
        frequency = 650;

    if (type === "dark")
        frequency = 90;

    if (type === "good")
        frequency = 760;

    if (type === "bad")
        frequency = 70;


    oscillator.frequency.value =
        frequency;


    gain.gain.setValueAtTime(
        .0001,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        .12,
        audioContext.currentTime + .02
    );


    gain.gain.exponentialRampToValueAtTime(
        .0001,
        audioContext.currentTime + .4
    );


    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + .4
    );

}


/* =========================
   INICIO
========================= */

function startGame() {

    if (started)
        return;


    started = true;


    sound("click");


    storyText.innerHTML = `

        <h1>
            Una nueva publicación
        </h1>

        <p>
            Milo acaba de publicar un dibujo.
        </p>

        <p>
            ¿Qué haces?
        </p>

    `;


    interactionButtons
        .classList
        .remove("hidden");

}


/* =========================
   DECISIONES
========================= */

function react(type) {

    if (!started)
        return;


    reactions++;


    /* ME GUSTA */

    if (type === "positive") {

        positiveActions++;

        sound("positive");

        showMessage("♡");

        createEcho(false);


        storyText.innerHTML = `

            <h1>
                Una reacción positiva
            </h1>

            <p>
                Milo recibió tu reacción.
            </p>

            <p>
                El Eco apenas se mueve.
            </p>

        `;

    }


    /* REÍR */

    if (type === "laugh") {

        negativeActions++;

        sound("echo");

        addEcos(2);

        showMessage("😂");


        phone.classList.add(
            "shake"
        );


        setTimeout(() => {

            phone.classList.remove(
                "shake"
            );

        }, 500);


        storyText.innerHTML = `

            <h1>
                Alguien más lo vio
            </h1>

            <p>
                Una pequeña risa
                apareció debajo.
            </p>

        `;

    }


    /* COMPARTIR */

    if (type === "share") {

        negativeActions++;

        sound("echo");

        addEcos(3);

        showMessage("↗");


        storyText.innerHTML = `

            <h1>
                Compartido
            </h1>

            <p>
                Ahora más personas
                pueden verlo.
            </p>

        `;

    }


    /*
        Después de tres decisiones
        comienza el segundo capítulo.
    */

    if (reactions >= 3) {

        setTimeout(
            chapterTwo,
            1200
        );

    }

}


/* =========================
   ECOS
========================= */

function addEcos(number) {

    for (
        let i = 0;
        i < number;
        i++
    ) {

        ecos++;

        createEcho(true);

    }


    ecoCount.textContent =
        ecos;

}


function createEcho(dark = false) {

    const echo =
        document.createElement(
            "div"
        );


    echo.classList.add(
        "echo"
    );


    if (dark) {

        echo.style.background =
            "#d84cff";

        echo.style.boxShadow =
            "0 0 12px #d84cff, 0 0 30px #d84cff";

    }


    echo.style.left =
        Math.random() * 85 + "%";


    echo.style.top =
        Math.random() * 70 + "%";


    echo.style.animationDelay =
        Math.random() * 2 + "s";


    world.appendChild(
        echo
    );

}


/* =========================
   MENSAJE
========================= */

function showMessage(text) {

    message.textContent =
        text;


    message.style.opacity =
        "1";


    setTimeout(() => {

        message.style.opacity =
            "0";

    }, 600);

}


/* =========================
   CAPÍTULO 2
========================= */

function chapterTwo() {

    chapter.textContent =
        "2";


    world.classList.add(
        "darkWorld"
    );


    sound("dark");


    phone.style.opacity =
        ".75";


    interactionButtons
        .classList
        .add("hidden");


    storyText.innerHTML = `

        <h1>
            ¿Dónde está Milo?
        </h1>

        <p>
            Su publicación sigue aquí...
        </p>

        <p>
            Pero él ya no responde.
        </p>

        <button
            class="startButton"
            onclick="enterOtherSide()">

            CONTINUAR

        </button>

    `;

}


/* =========================
   EL OTRO LADO
========================= */

function enterOtherSide() {

    chapter.textContent =
        "3";


    sound("dark");


    phone.style.transform =
        "scale(.7)";


    phone.style.opacity =
        ".25";


    storyText.innerHTML = `

        <h1>
            EL OTRO LADO
        </h1>

        <p>
            Los Ecos que creaste
            todavía están aquí.
        </p>

        <p>
            Esta vez no puedes
            simplemente cerrar la aplicación.
        </p>

        <button
            class="startButton"
            onclick="finalScene()">

            CONTINUAR

        </button>

    `;

}


/* =========================
   ESCENA FINAL
========================= */

function finalScene() {

    chapter.textContent =
        "4";


    sound("dark");


    storyText.innerHTML = `

        <h1>
            ...
        </h1>

        <p>
            El teléfono vibra.
        </p>

        <p>
            <strong>
                Milo está escribiendo...
            </strong>
        </p>

        <br>

        <p>
            El mensaje desaparece.
        </p>

        <p>
            Los Ecos siguen creciendo.
        </p>

        <button
            class="startButton"
            onclick="chooseEnding()">

            VER QUÉ PASÓ

        </button>

    `;

}


/* =========================
   DETERMINAR FINAL
========================= */

function chooseEnding() {

    /*
        MUCHO ACOSO
        = BAD ENDING
    */

    if (
        negativeActions >= 2
    ) {

        badEnding();

        return;

    }


    /*
        MUCHA POSITIVIDAD
        = GOOD ENDING
    */

    if (
        positiveActions >= 2
    ) {

        goodEnding();

        return;

    }


    /*
        TODO LO DEMÁS
        = NEUTRAL
    */

    neutralEnding();

}


/* =========================
   BAD ENDING
========================= */

function badEnding() {

    chapter.textContent =
        "FIN";


    sound("bad");


    world.classList.add(
        "badEnding"
    );


    storyText.innerHTML = `

        <h1 class="badTitle">
            🔴 FINAL MALO
        </h1>

        <h2>
            EL ECO CONTINÚA
        </h2>

        <br>

        <p>
            Compartiste la publicación.
        </p>

        <p>
            El Eco siguió creciendo.
        </p>

        <p>
            Milo dejó de aparecer.
        </p>

        <br>

        <p>
            Tu acción duró unos segundos.
        </p>

        <p>
            Su Eco permaneció.
        </p>

        <br>

        <button
            class="startButton"
            onclick="location.reload()">

            INTENTAR DE NUEVO

        </button>

    `;


    interactionButtons
        .classList
        .add("hidden");

}


/* =========================
   GOOD ENDING
========================= */

function goodEnding() {

    chapter.textContent =
        "FIN";


    sound("good");


    world.classList.add(
        "goodEnding"
    );


    /*
        Desaparecen los Ecos
    */

    const allEchos =
        document.querySelectorAll(
            ".echo"
        );


    allEchos.forEach(
        (echo, index) => {

            setTimeout(() => {

                echo.style.transition =
                    "1s";

                echo.style.transform =
                    "scale(0)";

                echo.style.opacity =
                    "0";

            }, index * 150);

        }
    );


    storyText.innerHTML = `

        <h1>
            🟢 FINAL BUENO
        </h1>

        <h2>
            EL ECO SE DETUVO
        </h2>

        <br>

        <p>
            Tus acciones no alimentaron
            la cadena.
        </p>

        <p>
            Los Ecos desaparecieron.
        </p>

        <p>
            Milo volvió a conectarse.
        </p>

        <br>

        <p class="finalPhrase">
            Esta vez elegiste
            detenerlo.
        </p>

        <br>

        <button
            class="startButton"
            onclick="location.reload()">

            JUGAR DE NUEVO

        </button>

    `;


    interactionButtons
        .classList
        .add("hidden");

}


/* =========================
   FINAL NEUTRO
========================= */

function neutralEnding() {

    chapter.textContent =
        "FIN";


    sound("dark");


    world.classList.add(
        "neutralEnding"
    );


    storyText.innerHTML = `

        <h1>
            🟡 FINAL NEUTRO
        </h1>

        <h2>
            EL ECO SIGUE AHÍ
        </h2>

        <br>

        <p>
            No ayudaste a detenerlo,
            pero tampoco lo alimentaste
            demasiado.
        </p>

        <p>
            Milo sigue ausente.
        </p>

        <br>

        <p>
            A veces no hacer nada
            también deja una huella.
        </p>

        <br>

        <button
            class="startButton"
            onclick="location.reload()">

            JUGAR DE NUEVO

        </button>

    `;


    interactionButtons
        .classList
        .add("hidden");

}