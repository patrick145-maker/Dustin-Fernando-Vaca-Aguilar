# 💧 Gota a Gota el Agua se Agota
 
## Descripción

**Gota a Gota el Agua se Agota** es un videojuego educativo de acción y recolección ambientado en la ciudad de La Paz. El jugador asume el rol de un ciudadano/agente ambiental encargado de recolectar las gotas de agua que caen sobre la ciudad antes de que se pierdan, evitando los elementos contaminantes o desperdicios. El juego busca concienciar sobre el cuidado del agua potable mediante mecánicas ágiles de atrapar objetos y un sistema dinámico de combos y puntuación contra el tiempo.
 
## Objetivo del jugador

Moverse a través del área de juego para recolectar la mayor cantidad de gotas de agua posibles en un límite de tiempo de **60 segundos**, aumentando la barra de "Agua Recuperada" al 100% y logrando la puntuación más alta mediante rachas de combos.
 
### Objetivos específicos

* Recolectar gotas de agua para incrementar el medidor de agua recuperada y la puntuación general.

* Encadenar aciertos consecutivos para maximizar el multiplicador de combo (`x1`, `x2`, `x3`, etc.).

* Evitar que las gotas caigan al suelo o interactuar con elementos no deseados para mantener la racha de combo.

* Sobrevivir los 60 segundos con el mayor porcentaje de agua rescatada para la ciudad de La Paz.
 
 
## Mecánica principal

El videojuego utiliza un bucle de juego basado en físicas de caída y detección de colisiones 2D:
 
1. **Fase de Caída de Objetos:** Caen gotas de agua y otros elementos a distintas velocidades desde la parte superior del área de juego (`#gameArea`).

2. **Fase de Desplazamiento y Captura:** El jugador mueve a su personaje horizontalmente de izquierda a derecha para posicionarse debajo de las gotas o presionar la acción de recolección en la zona interactiva.

3. **Fase de Acumulación y Feedback:** Al capturar una gota, se actualiza en tiempo real el medidor de score, el contador de tiempo restante, la racha de combos y el llenado gradual de la barra de agua recuperada (`#waterBar`).
 
 
## Género

**Educational / Arcade / Catching Game / Action**  

El proyecto se enmarca en el género arcade de recolección en tiempo real con enfoque educativo en preservación ambiental.
 
 
## 🎮 Controles
 
| Elemento | Teclado | Botones en Pantalla | Función |

| :--- | :--- | :--- | :--- |

| **MOVER IZQUIERDA** | Flecha Izquierda `←` / Tecla `A` | Botón `◀` | Mueve al personaje hacia la izquierda. |

| **MOVER DERECHA** | Flecha Derecha `→` / Tecla `D` | Botón `▶` | Mueve al personaje hacia la derecha. |

| **ACCIÓN / CAPTURAR** | Barra Espaciadora `ESPACIO` | Botón `💧` | Activa la recolección de agua o interactúa con el elemento. |

| **INTERFAZ** | Mouse / Click | Botones `START`, `CONTINUAR`, `REINICIAR` | Iniciar, reanudar tras pausa o reiniciar la partida. |
 
> *El juego incluye controles táctiles/pantalla integrados (`controls`) para ser plenamente ejecutable en dispositivos móviles y tablets.*
 
 
## Tecnologías utilizadas

* **HTML5:** Estructuración del HUD, paneles de estado, barra de progreso (`role="progressbar"`), contenedores de escenario (`.city`, `.building`, `.mountain`) y pantallas superpuestas (Pausa, Inicio, GameOver).

* **CSS3:** Animaciones para la ciudad, estilo responsivo, ocultamiento de elementos (`.hidden`), maquetación flexbox/grid y diseño del personaje y la barra de agua.

* **JavaScript (Vanilla):** Bucle de animación (`requestAnimationFrame` / `setInterval`), eventos de teclado y pantalla táctil, lógica del temporizador de 60s, detección de colisiones y cálculo de score/combo.

* **Security & Best Practices:** Configuración de política de seguridad de contenidos (`Content-Security-Policy`) estricta para garantizar un entorno local seguro sin dependencias externas.
 
 
## Capturas de pantalla
 
### Pantalla inicial

*(Espacio reservado para la captura de la pantalla de bienvenida con el título "Gota a Gota el Agua se Agota", el icono principal y el botón de inicio)*
 
![Pantalla inicial](images/inicio.PNG)
 
 
### Gameplay (Acción de Recolección y HUD)

*(Espacio reservado para la captura del juego en ejecución mostrando al personaje en la ciudad de La Paz, la barra de agua recuperada y el contador de tiempo)*
 
![Gameplay](images/gameplay.PNG)
 
 
### Resultado (Misión Completada / GameOver)

*(Espacio reservado para la captura de la pantalla final con la puntuación total alcanzada, el mensaje educativo y el botón para reintentar)*
 
![Resultado del juego](images/resultado.PNG)
 
 
## Jugar

🎮 **Jugar Gota a Gota el Agua se Agota**  

▶️ **[JUGAR AHORA](https://patrick145-maker.github.io/game-development-portfolio/Gota%20a%20Gota%20el%20Agua%20se%20Agota/)** *(Enlace configurable a GitHub Pages)*
 
Para jugar localmente, clona el repositorio o descarga el proyecto y abre el archivo `index.html` en cualquier navegador web moderno.
 
 
## 🤖 Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se aplicó una metodología asistida por **Inteligencia Artificial Generativa** como apoyo técnico e instruccional.
 
La inteligencia artificial fue utilizada para:

* **Estructuración Semántica y Accesibilidad:** Implementación de etiquetas ARIA (`role="status"`, `aria-live`, `role="progressbar"`) dentro de HTML5 para garantizar accesibilidad.

* **Lógica del Sistema de Combos:** Programación del multiplicador dinámico y desvanecimiento de mensajes de retroalimentación (`#feedback`).

* **Manejo de Estados de Pausa:** Implementación del evento de visibilidad (`visibilitychange`) para pausar el juego automáticamente cuando el usuario cambia de pestaña.

* **Optimización de UI/UX:** Maquetación del HUD superior y adaptabilidad de controles táctiles para teléfonos móviles.

* **Documentación Técnica:** Estructuración y redacción en formato Markdown para el repositorio del proyecto.
 
 
## Lo que aprendí

Durante el desarrollo de este proyecto se consolidaron los siguientes aprendizajes:
 
* A gestionar bucles de juego en tiempo real con límites de tiempo (60s) en JavaScript.

* A utilizar eventos de visibilidad del navegador para pausar la lógica del juego automáticamente cuando el usuario se cambia de pestaña.

* A integrar mejores prácticas de seguridad en la web mediante cabeceras Meta CSP (`Content-Security-Policy`).

* A implementar controles híbridos que aceptan teclado físico y botones táctiles simultáneamente.

* A estructurar una interfaz adaptativa (HUD) con actualización continua de estado sin recargar la página.
 
 
## Mejoras futuras

Para futuras versiones del juego se plantean las siguientes mejoras:
 
* **Sistemas de Power-Ups:** Inclusión de ítems especiales como "Escudo de Filtración", "Congelador de Tiempo" o "Lluvia Dorada" que multipliquen los puntos.

* **Variedad de Obstáculos:** Caída de gotas contaminadas o basura que resten puntos o reinicien la racha de combos si se capturan por error.

* **Dificultad Progresiva:** Incremento gradual de la velocidad de caída de los objetos a medida que avanza el reloj.

* **Efectos de Sonido Web Audio API:** Efectos sonoros sintetizados para cada gota recolectada, pérdida de combo y alerta de tiempo agotado.

* **Escenarios Adicionales:** Incorporación de diferentes zonas representativas de Bolivia (p. ej. Cochabamba, Santa Cruz, el Lago Titicaca).
 
 
## Autor

**Dustin Fernando Vaca Aguilar**  

*Estudiante de Game Development.*  

Este proyecto fue desarrollado como parte de las actividades prácticas de la asignatura *Game Development*.
 
 
## Contexto académico

* **Asignatura:** Game Development  

* **Unidad:** Desarrollo de videojuegos interactivos 2D  

* **Proyecto:** Gota a Gota el Agua se Agota (La Paz)  

* **Tipo:** Prototipo de videojuego educativo arcade asistido por IA

 
