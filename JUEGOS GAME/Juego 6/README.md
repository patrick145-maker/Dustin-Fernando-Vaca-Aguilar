# 🎮 Reto Financiero: Jóvenes al Control
 
## Descripción
**Reto Financiero: Jóvenes al Control** es un videojuego educativo de simulación y toma de decisiones diseñado para enseñar educación financiera básica a jóvenes y adolescentes.
El jugador toma el control del presupuesto de un mes completo (30 días), contando con un presupuesto inicial de **Bs 1.500** y el objetivo claro de alcanzar una meta de ahorro de **Bs 300**. A lo largo de la simulación, se presentan diversas situaciones cotidianas (gastos de transporte, salidas, compras, imprevistos y oportunidades de ahorro) donde cada elección afectará directamente el dinero disponible y la meta alcanzada.
 
## Objetivo del jugador
El objetivo principal es administrar el dinero a lo largo de 30 días, tomar decisiones financieras responsables, evitar quedar en bancarrota y lograr acumular la meta de ahorro de **Bs 300** al finalizar el mes.
 
### Objetivos específicos
* Administrar un presupuesto inicial de **Bs 1.500** durante 30 días virtuales.
* Diferenciar entre necesidades prioritarias y deseos impulsivos.
* Acumular un mínimo de **Bs 300** en el fondo de ahorro.
* Evaluar y reaccionar ante imprevistos cotidianos sin agotar el presupuesto.
* Analizar la retroalimentación educativa tras cada decisión para mejorar la gestión financiera.
 
 
## Mecánica principal
La mecánica del juego se basa en la simulación diaria y la toma de decisiones estratégicas:
 
1. **Fase de Presentación de Dilema:** En cada día se presenta una situación económica realista con un título, descripción e importe involucrado.
2. **Fase de Elección:** El jugador analiza las alternativas de respuesta (ej. ahorrar, gastar en un deseo, buscar una opción económica o invertir).
3. **Fase de Impacto y Feedback:** El sistema procesa la elección, actualiza en tiempo real el saldo de dinero disponible, el fondo de ahorro acumulado y la barra de progreso del mes, mostrando una explicación educativa sobre el impacto de la decisión.
 
El videojuego busca combinar:
* Simulación de gestión presupuestaria personal.
* Evaluación de costo-beneficio en tiempo real.
* Progreso temporal mediante barra de estado y panel de estadísticas (HUD).
* Retroalimentación inmediata con consejos financieros prácticos.
 
 
## Género
**Educational / Simulation / Decision-Making / Financial Strategy**  
El proyecto pertenece al género de simulación educativa basada en toma de decisiones y gestión de recursos.
 
 
## 🎮 Controles
 
| Elemento | Acción | Función |
| :--- | :--- | :--- |
| **MOUSE / CURSOR** | Mover el puntero sobre los botones | Seleccionar la opción de respuesta deseada en cada situación. |
| **CLICK IZQUIERDO** | Hacer clic en los botones de la interfaz | Confirmar decisiones, avanzar al siguiente día o reiniciar el juego. |
| **PANTALLA / BOTONES** | Interactuar con controles (*Comenzar*, *Continuar*, *Reiniciar*) | Controlar el flujo de las pantallas del juego. |
 
> *Los controles están optimizados para ejecutarse tanto en computadoras de escritorio como en dispositivos móviles y tablets mediante pantallas táctiles.*
 
 
## Tecnologías utilizadas
El videojuego fue desarrollado utilizando tecnologías web estándar (sin librerías externas ni servidores):
 
* **HTML5:** Estructura semántica de pantallas (`#inicio`, `#juego`, `#victoria`, `#derrota`), paneles de estadísticas y formularios de opciones.
* **CSS3:** Maquetación responsiva, diseño de avatar/personaje interactivo, barras de progreso y estilos de tarjetas e interfaz.
* **JavaScript (Vanilla):** Lógica de estados, control del presupuesto y ahorro, avance de días, motor de decisiones y lógica de condiciones de victoria o derrota.
* **Visual Studio Code:** Entorno de desarrollo.
* **Git & GitHub / GitHub Pages:** Control de versiones y publicación en web.
 
 
## Capturas de pantalla
 
### Pantalla inicial
*(Espacio reservado para la captura de la pantalla de bienvenida con el título "Reto Financiero: Jóvenes al Control", los valores iniciales de presupuesto/meta y el botón COMENZAR)*
 
![Pantalla inicial](images/inicio.PNG)
 
 
### Gameplay (Panel de Estadísticas y Situación Diaria)
*(Espacio reservado para la captura de la pantalla de juego con el dinero disponible, ahorro acumulado, el personaje interactivo y la situación del día)*
 
![Gameplay](images/gameplay.PNG)
 
 
### Resultado (Victoria / Game Over)
*(Espacio reservado para la captura de la pantalla final con el resumen de dinero restante, ahorro conseguido y el mensaje de retroalimentación final)*
 
![Resultado del juego](images/resultado.PNG)
 
 
## Jugar
🎮 **Jugar Reto Financiero: Jóvenes al Control**  
▶️ **[JUGAR AHORA](https://patrick145-maker.github.io/game-development-portfolio/Reto-Financiero/)** *(Enlace configurable a GitHub Pages)*
 
El videojuego puede ejecutarse directamente abriendo el archivo `index.html` en cualquier navegador web moderno sin necesidad de instalación.
 
 
## 🤖 Uso de Inteligencia Artificial
Durante el desarrollo del proyecto se aplicó una metodología asistida por **Inteligencia Artificial Generativa** como apoyo técnico e instruccional.
 
La inteligencia artificial fue utilizada para:
* **Generación del Prototipo Inicial:** Estructuración de la base en HTML5, CSS3 y el motor de lógica en JavaScript Vanilla.
* **Diseño de Dilemas Financieros:** Creación y balanceo de las situaciones cotidianas para asegurar el aprendizaje progresivo.
* **Validador de Lógica Financiera:** Verificación de las fórmulas de descuento de presupuesto, adición a ahorros y condiciones de derrota inmediata por saldo negativo.
* **Optimización de UI/UX:** Maquetación del panel de estadísticas y del personaje CSS.
* **Documentación:** Formateo y redacción técnica del proyecto.
 
 
## Lo que aprendí
Durante el desarrollo de este proyecto se consolidaron los siguientes aprendizajes:
 
* A diseñar sistemas de gestión de estado y variables financieras dinámicas en JavaScript.
* A estructurar e implementar interfaces de usuario (UI) adaptativas orientadas a juegos de toma de decisiones.
* A integrar conceptos de educación financiera real dentro de mecánicas de juego entretenidas.
* A redactar prompts estructurados para acelerar la lógica de interacción y la respuesta de eventos en la web.
* A realizar pruebas iterativas para ajustar el nivel de dificultad y asegurar que la meta de ahorro sea alcanzable.
* A documentar y desplegar proyectos web educativos a través de **GitHub Pages**.
 
 
## Mejoras futuras
Para futuras iteraciones del prototipo se tienen contempladas las siguientes mejoras:
 
* **Eventos Aleatorios Dinámicos:** Incorporar una ruleta de imprevistos económicos al azar durante ciertos días.
* **Sistema de Inversión Ficticia:** Permitir colocar parte del ahorro en un depósito a plazo fijo o fondo de inversión con rendimientos.
* **Efectos Sonoros (SFX):** Integrar audio para caja registradora, monedas, alertas de poco dinero y música ambiental.
* **Evolución del Personaje:** Cambiar el estado o expresión visual del personaje CSS según el nivel de salud financiera.
* **Tabla de Clasificación (Leaderboard):** Almacenamiento del récord de dinero ahorrado al finalizar el mes.
 
 
## Autor
**Dustin Fernando Vaca Aguilar**  
*Estudiante de Game Development.*  
Este proyecto fue desarrollado como parte de las actividades prácticas de la asignatura *Game Development*.
 
 
## Contexto académico
* **Asignatura:** Game Development  
* **Unidad:** Desarrollo de videojuegos educativos  
* **Proyecto:** Reto Financiero: Jóvenes al Control  
* **Tipo:** Prototipo de videojuego educativo asistido por IA
