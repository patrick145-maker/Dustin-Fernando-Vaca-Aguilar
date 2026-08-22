/* ==========================================
   RETO FINANCIERO: JÓVENES AL CONTROL
   ========================================== */


/* =========================
   VARIABLES DEL JUEGO
========================= */

let dinero = 1500;
let ahorro = 0;
let dia = 1;
let situacionActual = 0;

const META_AHORRO = 300;
const TOTAL_DIAS = 30;


/* =========================
   SITUACIONES
========================= */

/* =========================
   SITUACIONES FINANCIERAS
   VERSIÓN: TENTACIONES PSICOLÓGICAS
========================= */

const situaciones = [

    /* 1 */
    {
        titulo: "🔥 ¡OFERTA SOLO POR HOY!",
        descripcion:
            "Vas caminando por una tienda y ves una mochila que te encanta. Normalmente cuesta Bs 180, pero hoy tiene un descuento del 50%. El vendedor te dice que la oferta termina en 10 minutos.",

        opciones: [
            {
                texto: "Comprar la mochila ahora",
                detalle:
                    "¡Está al 50%! Si no la compras ahora, podrías perder la oportunidad.",
                dinero: -90,
                ahorro: 0,
                evaluacion: "mala",
                feedback:
                    "La oferta parece irresistible, pero un descuento no significa ahorro si realmente no necesitabas comprar la mochila. La urgencia puede llevarte a comprar impulsivamente."
            },
            {
                texto: "Tomar una foto y comparar precios",
                detalle:
                    "No compras todavía. Primero quieres saber si realmente es una buena oferta.",
                dinero: -5,
                ahorro: 20,
                evaluacion: "buena",
                feedback:
                    "Buena decisión. La sensación de 'última oportunidad' puede hacer que tomemos decisiones apresuradas. Comparar primero te permite decidir con más calma."
            },
            {
                texto: "Comprar una mochila más barata",
                detalle:
                    "Encuentras otra que cuesta Bs 50 y también cumple su función.",
                dinero: -50,
                ahorro: 10,
                evaluacion: "buena",
                feedback:
                    "Muy buena decisión. No siempre necesitas comprar el producto más llamativo. Buscar una alternativa económica protege tu presupuesto."
            }
        ]
    },


    /* 2 */
    {
        titulo: "🍔 ¡TODOS VAN A SALIR!",
        descripcion:
            "Tus amigos te escriben: '¡Vamos a comer! Todos van a ir'. Tú sabes que tienes comida en casa, pero no quieres quedarte fuera del grupo.",

        opciones: [
            {
                texto: "Ir con todos al restaurante",
                detalle:
                    "Quieres disfrutar con tus amigos aunque la salida cueste bastante.",
                dinero: -70,
                ahorro: 0,
                evaluacion: "mala",
                feedback:
                    "La presión social puede hacernos gastar dinero que no teníamos planeado gastar. Divertirse con amigos no debería significar comprometer tu presupuesto."
            },
            {
                texto: "Ir pero pedir algo económico",
                detalle:
                    "Acompañas a tus amigos, pero eliges una opción de menor precio.",
                dinero: -30,
                ahorro: 5,
                evaluacion: "buena",
                feedback:
                    "Buena estrategia. No siempre tienes que rechazar una actividad social; también puedes participar controlando cuánto gastas."
            },
            {
                texto: "Proponer una reunión económica",
                detalle:
                    "Les propones reunirse en casa y compartir algo de comida.",
                dinero: -10,
                ahorro: 20,
                evaluacion: "excelente",
                feedback:
                    "Excelente decisión. Puedes mantener tus relaciones sociales sin gastar demasiado. El entretenimiento no tiene que ser caro."
            }
        ]
    },


    /* 3 */
    {
        titulo: "😩 HOY TUVO UN DÍA HORRIBLE...",
        descripcion:
            "Tuviste un día complicado. Mientras revisas tu celular aparece un anuncio: '¡Te lo mereces! Compra algo y disfruta de un momento para ti'.",

        opciones: [
            {
                texto: "Comprar algo que te gusta",
                detalle:
                    "Decides recompensarte porque tuviste un día difícil.",
                dinero: -80,
                ahorro: 0,
                evaluacion: "mala",
                feedback:
                    "Las compras emocionales pueden proporcionar satisfacción inmediata, pero después pueden afectar tu presupuesto. Es importante reconocer cuándo estás comprando por emoción."
            },
            {
                texto: "Comprar un pequeño premio",
                detalle:
                    "Decides gastar una cantidad pequeña para darte un gusto.",
                dinero: -20,
                ahorro: 5,
                evaluacion: "regular",
                feedback:
                    "Es posible darse pequeños gustos, siempre que estén dentro de un presupuesto previamente establecido."
            },
            {
                texto: "Buscar una recompensa gratuita",
                detalle:
                    "Decides descansar, escuchar música o salir a caminar sin gastar.",
                dinero: 0,
                ahorro: 25,
                evaluacion: "buena",
                feedback:
                    "Excelente autocontrol. No necesitas gastar dinero para sentirte mejor. Buscar alternativas gratuitas puede ayudarte a cuidar tus finanzas."
            }
        ]
    },


    /* 4 */
    {
        titulo: "📱 ¡COMPRA AHORA Y PAGA DESPUÉS!",
        descripcion:
            "Encuentras un celular que te gusta. La tienda ofrece una promoción: 'Llévatelo hoy y paga pequeñas cuotas después'.",

        opciones: [
            {
                texto: "Comprar el celular",
                detalle:
                    "Las cuotas parecen pequeñas y piensas que podrás pagarlas fácilmente.",
                dinero: -120,
                ahorro: 0,
                evaluacion: "mala",
                feedback:
                    "Las cuotas pequeñas pueden hacer que una compra grande parezca barata. Antes de comprometerte debes analizar cuánto terminarás pagando realmente."
            },
            {
                texto: "Esperar y ahorrar primero",
                detalle:
                    "Decides no comprar todavía y comienzas a guardar dinero.",
                dinero: -20,
                ahorro: 50,
                evaluacion: "excelente",
                feedback:
                    "Excelente decisión. Ahorrar antes de comprar evita comprometer ingresos futuros y te permite comprar con mayor tranquilidad."
            },
            {
                texto: "Buscar un modelo económico",
                detalle:
                    "Encuentras un celular que cumple tus necesidades por mucho menos.",
                dinero: -70,
                ahorro: 20,
                evaluacion: "buena",
                feedback:
                    "Muy buena decisión. Comprar según tus necesidades y no solamente por deseo puede generar un ahorro importante."
            }
        ]
    },


    /* 5 */
    {
        titulo: "🎮 ¡NUEVO VIDEOJUEGO!",
        descripcion:
            "Sale un videojuego que estabas esperando. Tus amigos ya lo están jugando y te dicen que si no lo compras hoy te quedarás fuera de las conversaciones.",

        opciones: [
            {
                texto: "Comprar la edición especial",
                detalle:
                    "Incluye contenido adicional y cuesta Bs 100.",
                dinero: -100,
                ahorro: 0,
                evaluacion: "mala",
                feedback:
                    "La presión de los amigos y el deseo de no quedarse fuera pueden influir en nuestras compras. Antes de gastar debes revisar si realmente está dentro de tu presupuesto."
            },
            {
                texto: "Esperar una oferta",
                detalle:
                    "Decides esperar unas semanas para conseguir un precio menor.",
                dinero: -5,
                ahorro: 30,
                evaluacion: "buena",
                feedback:
                    "Muy buena decisión. Esperar puede ayudarte a conseguir el mismo producto por menos dinero."
            },
            {
                texto: "Comprar la versión básica",
                detalle:
                    "Obtienes el juego sin contenido adicional por Bs 60.",
                dinero: -60,
                ahorro: 10,
                evaluacion: "regular",
                feedback:
                    "Es una alternativa más económica, pero sigue siendo importante preguntarte si el gasto estaba contemplado en tu presupuesto."
            }
        ]
    },


    /* 6 */
    {
        titulo: "🛍️ ¡POR SOLO Bs 20 MÁS!",
        descripcion:
            "Vas a comprar unos zapatos que cuestan Bs 120. El vendedor te dice: 'Por solo Bs 20 más puedes llevar el modelo premium'.",

        opciones: [
            {
                texto: "Comprar el modelo premium",
                detalle:
                    "Piensas que por Bs 20 adicionales vale la pena llevar algo mejor.",
                dinero: -140,
                ahorro: 0,
                evaluacion: "regular",
                feedback:
                    "Este tipo de estrategia busca que el gasto adicional parezca pequeño. Bs 20 puede parecer poco, pero muchas pequeñas diferencias pueden afectar tu presupuesto."
            },
            {
                texto: "Comprar los de Bs 120",
                detalle:
                    "El modelo básico cumple exactamente con lo que necesitas.",
                dinero: -120,
                ahorro: 15,
                evaluacion: "buena",
                feedback:
                    "Buena decisión. Si ambos productos cumplen la misma necesidad, pagar menos puede ser una mejor opción."
            },
            {
                texto: "Esperar y buscar otra tienda",
                detalle:
                    "No compras inmediatamente y decides comparar precios.",
                dinero: -10,
                ahorro: 30,
                evaluacion: "excelente",
                feedback:
                    "Excelente. No dejarte presionar por el vendedor te permite tomar una decisión más racional."
            }
        ]
    },


    /* 7 */
    {
        titulo: "🚨 ¡GASTO INESPERADO!",
        descripcion:
            "Tu computadora presenta un problema justo antes de una entrega importante. Necesitas solucionar el problema, pero también tienes dinero reservado.",

        opciones: [
            {
                texto: "Usar parte del dinero reservado",
                detalle:
                    "Utilizas tu fondo para solucionar el problema.",
                dinero: -80,
                ahorro: 0,
                evaluacion: "buena",
                feedback:
                    "Buena decisión. Precisamente para eso sirve un fondo de emergencia: enfrentar situaciones inesperadas sin recurrir inmediatamente a deudas."
            },
            {
                texto: "Pedir dinero prestado",
                detalle:
                    "No quieres tocar tus ahorros, así que decides pedir dinero.",
                dinero: -20,
                ahorro: 0,
                evaluacion: "regular",
                feedback:
                    "Puede parecer conveniente proteger tus ahorros, pero pedir dinero prestado crea una obligación que tendrás que pagar posteriormente."
            },
            {
                texto: "Ignorar el problema y comprar otra cosa",
                detalle:
                    "Piensas que el problema puede esperar y utilizas el dinero en una compra que querías.",
                dinero: -60,
                ahorro: 0,
                evaluacion: "mala",
                feedback:
                    "Esta decisión prioriza un deseo sobre una necesidad urgente. Una buena administración financiera requiere distinguir qué gastos son realmente prioritarios."
            }
        ]
    },


    /* 8 */
    {
        titulo: "💳 ¡TE QUEDA DINERO!",
        descripcion:
            "Ya pasó más de la mitad del mes y todavía tienes Bs 500 disponibles. Te sientes tranquilo porque crees que te sobra bastante dinero.",

        opciones: [
            {
                texto: "Aumentar mis gastos porque todavía tengo dinero",
                detalle:
                    "Decides darte varios gustos durante los próximos días.",
                dinero: -150,
                ahorro: 0,
                evaluacion: "mala",
                feedback:
                    "Tener dinero disponible no significa que puedas gastarlo sin planificación. Todavía debes cubrir las necesidades del resto del mes."
            },
            {
                texto: "Separar una parte para ahorrar",
                detalle:
                    "Guardas Bs 100 antes de continuar gastando.",
                dinero: -100,
                ahorro: 100,
                evaluacion: "excelente",
                feedback:
                    "Excelente. Separar el ahorro antes de comenzar a gastar reduce la posibilidad de utilizarlo impulsivamente."
            },
            {
                texto: "Mantener el dinero disponible",
                detalle:
                    "No gastas todavía y esperas a saber qué necesidades aparecerán.",
                dinero: -10,
                ahorro: 30,
                evaluacion: "buena",
                feedback:
                    "Muy buena decisión. Mantener un margen disponible te permite responder mejor a gastos inesperados."
            }
        ]
    },


    /* 9 */
    {
        titulo: "🎟️ ¡ÚLTIMOS BOLETOS!",
        descripcion:
            "Tus artistas favoritos llegan a la ciudad. Ves en redes sociales: '¡Últimos boletos disponibles!'. El boleto cuesta Bs 180.",

        opciones: [
            {
                texto: "Comprar el boleto inmediatamente",
                detalle:
                    "No quieres arrepentirte de perder la oportunidad.",
                dinero: -180,
                ahorro: 0,
                evaluacion: "mala",
                feedback:
                    "La sensación de escasez puede hacer que compremos rápidamente. Antes de hacerlo debes revisar si realmente puedes permitirte ese gasto."
            },
            {
                texto: "Revisar mi presupuesto primero",
                detalle:
                    "Calculas cuánto dinero necesitarás para terminar el mes.",
                dinero: -5,
                ahorro: 25,
                evaluacion: "excelente",
                feedback:
                    "Excelente. Revisar tu presupuesto antes de una compra importante te permite tomar una decisión basada en números y no solamente en emoción."
            },
            {
                texto: "Buscar una alternativa más económica",
                detalle:
                    "Buscas una actividad de entretenimiento que cueste menos.",
                dinero: -30,
                ahorro: 30,
                evaluacion: "buena",
                feedback:
                    "Muy buena decisión. Puedes disfrutar de tu tiempo libre sin comprometer una parte importante de tu presupuesto."
            }
        ]
    },


    /* 10 */
    {
        titulo: "🏆 ¡ÚLTIMO DÍA DEL MES!",
        descripcion:
            "Llegaste al último día. Tienes dinero disponible y estás cerca de tu meta de ahorro. Tus amigos te dicen: '¡Gástalo! Mañana comienza un nuevo mes'.",

        opciones: [
            {
                texto: "Celebrar y gastar Bs 150",
                detalle:
                    "Quieres premiarte por haber llegado hasta el final.",
                dinero: -150,
                ahorro: 0,
                evaluacion: "mala",
                feedback:
                    "Llegar al final del mes no significa que debas gastar todo. Mantener parte del dinero y alcanzar tus objetivos es una señal de buena planificación."
            },
            {
                texto: "Gastar solo Bs 30 y conservar el resto",
                detalle:
                    "Te das un pequeño gusto sin comprometer demasiado tu presupuesto.",
                dinero: -30,
                ahorro: 10,
                evaluacion: "buena",
                feedback:
                    "Buena decisión. Una administración responsable no significa eliminar todos los gustos, sino aprender a controlarlos."
            },
            {
                texto: "Guardar el dinero y alcanzar la meta",
                detalle:
                    "Decides priorizar tu objetivo financiero.",
                dinero: 0,
                ahorro: 60,
                evaluacion: "excelente",
                feedback:
                    "¡Excelente! Has demostrado autocontrol. Renunciar a una gratificación inmediata puede ayudarte a alcanzar objetivos financieros más importantes."
            }
        ]
    }

];


/* =========================
   ELEMENTOS HTML
========================= */

const inicio = document.getElementById("inicio");
const juego = document.getElementById("juego");
const victoria = document.getElementById("victoria");
const derrota = document.getElementById("derrota");

const dineroTexto = document.getElementById("dinero");
const ahorroTexto = document.getElementById("ahorro");
const diaTexto = document.getElementById("dia");

const numeroSituacion = document.getElementById("numeroSituacion");
const tituloSituacion = document.getElementById("tituloSituacion");
const descripcionSituacion =
    document.getElementById("descripcionSituacion");

const opcionesContenedor = document.getElementById("opciones");

const feedback = document.getElementById("feedback");
const feedbackIcono = document.getElementById("feedbackIcono");
const feedbackTitulo = document.getElementById("feedbackTitulo");
const feedbackTexto = document.getElementById("feedbackTexto");

const barraProgreso =
    document.getElementById("barraProgreso");

const porcentaje =
    document.getElementById("porcentaje");

const estadoFinanciero =
    document.getElementById("estadoFinanciero");


/* =========================
   INICIAR JUEGO
========================= */

function iniciarJuego() {

    dinero = 1500;
    ahorro = 0;
    dia = 1;
    situacionActual = 0;

    mostrarPantalla(juego);

    actualizarInterfaz();

    cargarSituacion();

}


/* =========================
   MOSTRAR PANTALLA
========================= */

function mostrarPantalla(pantalla) {

    document.querySelectorAll(".pantalla").forEach(p => {
        p.classList.remove("activa");
    });

    pantalla.classList.add("activa");
}


/* =========================
   CARGAR SITUACIÓN
========================= */

function cargarSituacion() {

    feedback.classList.add("oculto");

    const situacion =
        situaciones[situacionActual];

    numeroSituacion.textContent =
        situacionActual + 1;

    tituloSituacion.textContent =
        situacion.titulo;

    descripcionSituacion.textContent =
        situacion.descripcion;

    opcionesContenedor.innerHTML = "";

    situacion.opciones.forEach(
        (opcion, indice) => {

            const boton =
                document.createElement("div");

            boton.className = "opcion";

            let impacto = "";

            if (opcion.dinero < 0) {
                impacto =
                    `💸 Gasto: Bs ${Math.abs(opcion.dinero)}`;
            } else if (opcion.dinero > 0) {
                impacto =
                    `💵 Ingreso: Bs ${opcion.dinero}`;
            } else {
                impacto = "💰 Sin gasto";
            }

            if (opcion.ahorro > 0) {
                impacto +=
                    ` | 🏦 Ahorro: +Bs ${opcion.ahorro}`;
            }

            boton.innerHTML = `
                <div class="numero">
                    ${indice + 1}
                </div>

                <h3>${opcion.texto}</h3>

                <p>${opcion.detalle}</p>

                <span class="impacto">
                    ${impacto}
                </span>
            `;

            boton.addEventListener(
                "click",
                () => seleccionarOpcion(opcion)
            );

            opcionesContenedor.appendChild(boton);
        }
    );

    actualizarInterfaz();
}


/* =========================
   SELECCIONAR OPCIÓN
========================= */

function seleccionarOpcion(opcion) {

    /* Evitar doble selección */
    const botones =
        document.querySelectorAll(".opcion");

    botones.forEach(boton => {
        boton.style.pointerEvents = "none";
        boton.style.opacity = "0.7";
    });


    /* Actualizar dinero */
    dinero += opcion.dinero;


    /* Actualizar ahorro */
    ahorro += opcion.ahorro;


    /* Evitar valores negativos */
    if (dinero < 0) {
        dinero = 0;
    }


    actualizarInterfaz();


    /* Verificar derrota inmediata */
    if (dinero <= 0 && dia < TOTAL_DIAS) {

        setTimeout(() => {
            mostrarDerrota();
        }, 700);

        return;
    }


    /* Mostrar retroalimentación */

    feedback.classList.remove("oculto");

    if (opcion.evaluacion === "buena") {

        feedbackIcono.textContent = "🌟";
        feedbackTitulo.textContent =
            "¡Buena decisión!";

    } else if (opcion.evaluacion === "regular") {

        feedbackIcono.textContent = "💡";
        feedbackTitulo.textContent =
            "Decisión regular";

    } else {

        feedbackIcono.textContent = "⚠️";
        feedbackTitulo.textContent =
            "Cuidado con esta decisión";
    }

    feedbackTexto.textContent =
        opcion.feedback;

}


/* =========================
   CONTINUAR
========================= */

function continuarJuego() {

    dia++;

    situacionActual++;

    /*
       Cuando terminamos las 10 situaciones,
       comenzamos nuevamente desde la primera.
       Esto permite representar los 30 días.
    */

    if (dia <= TOTAL_DIAS) {

        if (
            situacionActual >= situaciones.length
        ) {
            situacionActual = 0;
        }

        cargarSituacion();

    } else {

        verificarVictoria();

    }

}


/* =========================
   ACTUALIZAR INTERFAZ
========================= */

function actualizarInterfaz() {

    dineroTexto.textContent =
        `Bs ${dinero.toLocaleString("es-BO")}`;

    ahorroTexto.textContent =
        `Bs ${ahorro.toLocaleString("es-BO")}`;

    diaTexto.textContent =
        `${dia} / ${TOTAL_DIAS}`;


    /* Barra de progreso */

    const progreso =
        Math.min(
            (dia / TOTAL_DIAS) * 100,
            100
        );

    barraProgreso.style.width =
        `${progreso}%`;

    porcentaje.textContent =
        `${Math.round(progreso)}%`;


    /* Estado financiero */

    if (dinero < 300) {

        estadoFinanciero.textContent =
            "⚠️ Presupuesto muy bajo";

        estadoFinanciero.style.color =
            "#dc2626";

    } else if (dinero < 700) {

        estadoFinanciero.textContent =
            "🟡 Debes controlar tus gastos";

        estadoFinanciero.style.color =
            "#d97706";

    } else {

        estadoFinanciero.textContent =
            "🟢 Finanzas bajo control";

        estadoFinanciero.style.color =
            "#16a34a";
    }
}


/* =========================
   VERIFICAR VICTORIA
========================= */

function verificarVictoria() {

    if (
        dia >= TOTAL_DIAS &&
        dinero > 0 &&
        ahorro >= META_AHORRO
    ) {

        mostrarVictoria();

    } else {

        mostrarDerrota();
    }
}


/* =========================
   VICTORIA
========================= */

function mostrarVictoria() {

    document.getElementById(
        "dineroFinalVictoria"
    ).textContent =
        `Bs ${dinero.toLocaleString("es-BO")}`;

    document.getElementById(
        "ahorroFinalVictoria"
    ).textContent =
        `Bs ${ahorro.toLocaleString("es-BO")}`;

    document.getElementById(
        "diasFinalVictoria"
    ).textContent =
        dia;

    mostrarPantalla(victoria);
}


/* =========================
   DERROTA
========================= */

function mostrarDerrota() {

    document.getElementById(
        "dineroFinalDerrota"
    ).textContent =
        `Bs ${dinero.toLocaleString("es-BO")}`;

    document.getElementById(
        "ahorroFinalDerrota"
    ).textContent =
        `Bs ${ahorro.toLocaleString("es-BO")}`;

    document.getElementById(
        "diasFinalDerrota"
    ).textContent =
        Math.min(dia, TOTAL_DIAS);

    mostrarPantalla(derrota);
}


/* =========================
   EVENTOS
========================= */

document.getElementById(
    "btnComenzar"
).addEventListener(
    "click",
    iniciarJuego
);


document.getElementById(
    "btnContinuar"
).addEventListener(
    "click",
    continuarJuego
);


document.getElementById(
    "btnReiniciar"
).addEventListener(
    "click",
    iniciarJuego
);


document.getElementById(
    "btnJugarNuevamente"
).addEventListener(
    "click",
    iniciarJuego
);


document.getElementById(
    "btnIntentarNuevamente"
).addEventListener(
    "click",
    iniciarJuego
);