# 🎮 Recycling Time 2: Guardianes del Reciclaje
 
## Descripción
**Recycling Time: Guardianes del Reciclaje** es un videojuego educativo interactivo diseñado para enseñar y reforzar la correcta clasificación de residuos sólidos en niños y jóvenes. 
El jugador asume el rol de un guardián ambiental en un parque ecológico. A lo largo del juego, aparecen diversos tipos de desechos que deben ser depositados en sus respectivos contenedores normativos antes de que el tiempo se agote. El proyecto combina mecánicas de clasificación rápida, presión por tiempo y retroalimentación inmediata para promover la conciencia ambiental.
 
## Objetivo del jugador
El objetivo principal es superar los 3 niveles de dificultad, clasificar correctamente la mayor cantidad de residuos en los contenedores adecuados y acumular la puntuación requerida en cada etapa evitando perder las vidas disponibles.
 
### Objetivos específicos
* Identificar el tipo de residuo generado (Plástico, Papel/Cartón, Vidrio, Metal u Orgánico).
* Arrastrar o seleccionar el contenedor correcto para depositar cada residuo antes de que finalice el temporizador.
* Alcanzar la meta de puntos de cada nivel para desbloquear la siguiente etapa.
* Gestionar el sistema de vidas (3 corazones) en el Nivel 3 para evitar el Game Over.
* Visualizar la retroalimentación inmediata (animaciones de acierto/error) para consolidar el hábito del reciclaje.
 
 
## Mecánica principal
La mecánica principal del videojuego combina la toma rápida de decisiones con el conocimiento sobre reciclaje:
 
1. **Fase de Identificación:** En el centro de la pantalla se presenta un objeto o residuo aleatorio (ej. botella plástica, cáscara de plátano, lata).
2. **Fase de Clasificación:** El jugador analiza las propiedades del residuo y selecciona uno de los 5 contenedores de colores normativos.
3. **Fase de Feedback y Progresión:** El sistema evalúa la elección. Si es correcta, se añade puntuación, el contenedor ejecuta una animación de apertura (.bin-lid) y se otorga feedback visual verde; si es incorrecta, se descuenta tiempo o vidas y se muestra un efecto de error en rojo.
 
El videojuego busca combinar:
* Agilidad visual y reflejos.
* Reconocimiento y categorización de materiales.
* Progresión por niveles con incremento de velocidad y dificultad.
* Refuerzo positivo para el aprendizaje ecológico.
 
 
## Género
**Educational / Time Management / Arcade / Drag & Drop**  
El proyecto fusiona elementos de juegos de clasificación rápida tipo arcade con dinámicas educativas de concienciación ambiental.
 
 
## 🎮 Controles
 
| Elemento | Acción | Función |
| :--- | :--- | :--- |
| **MOUSE / CURSOR** | Mover sobre los contenedores | Seleccionar el contenedor correspondiente al residuo. |
| **CLICK IZQUIERDO** | Hacer clic sobre un contenedor | Depositar el residuo en el contenedor elegido. |
| **PANTALLA / BOTONES** | Interactuar con la interfaz | Iniciar partida, avanzar de nivel o reiniciar el juego. |
 
> *Los controles están optimizados para computadoras de escritorio, laptops y dispositivos móviles mediante interacción táctil.*
 
 
## Tecnologías utilizadas
El videojuego fue desarrollado utilizando exclusivamente tecnologías web estándar (sin librerías ni dependencias externas):
 
* **HTML5:** Estructura semántica, contenedores del juego y elementos de la interfaz HUD.
* **CSS3:** Maquetación adaptativa, variables de color normativo, animaciones visuales (.is-correct, .is-wrong, .bin-lid) y diseño responsivo.
* **JavaScript (Vanilla):** Lógica del motor del juego, máquina de estados (start, game, end), temporizador centralizado con setInterval, base de datos de 25 residuos y sistema de puntuación/vidas.
* **Visual Studio Code:** Entorno de desarrollo.
* **Git & GitHub / GitHub Pages:** Control de versiones y publicación en web.
 
 
## Capturas de pantalla
 
### Pantalla inicial
*(Espacio reservado para la captura de la pantalla principal con el título "RECYCLING TIME: GUARDIANES DEL RECICLAJE", las instrucciones de juego y el botón COMENZAR)*
 
![Pantalla inicial](images/inicio.PNG)
 
 
### Gameplay (Fase de Clasificación y HUD)
*(Espacio reservado para la captura del escenario con el residuo actual, los 5 contenedores normativos, el temporizador y el marcador de puntos/vidas)*
 
![Gameplay](images/gameplay.PNG)
 
 
### Resultado
*(Espacio reservado para la captura de la pantalla final con la puntuación acumulada, nivel alcanzado, resumen de desempeño y botón JUGAR DE NUEVO)*
 
![Resultado del juego](images/resultado.PNG)
 
 
## Jugar
🎮 **Jugar Recycling Time: Guardianes del Reciclaje**  
▶️ **[JUGAR AHORA](https://ludcuba2019-boop.github.io/game-development-portfolio/Recycling-Time-2/)** *(Enlace configurable a GitHub Pages)*
 
El videojuego puede ejecutarse directamente abriendo el archivo index.html en cualquier navegador web moderno sin necesidad de instalación.
 
 
## 🤖 Uso de Inteligencia Artificial
Durante el desarrollo del proyecto se aplicó una metodología asistida por **Inteligencia Artificial Generativa** como apoyo técnico e instruccional.
 
La inteligencia artificial fue utilizada para:
* **Generación del Prototipo Inicial:** Creación de la estructura base en HTML, CSS y la lógica en JavaScript modular.
* **Diseño de Niveles y Mecánicas:** Configuración de la progresión de dificultad (tiempos reducidos por nivel y activación del sistema de 3 vidas en el Nivel 3).
* **Estructuración de Base de Datos:** Categorización balanceada de 25 tipos de residuos distribuidos equitativamente en 5 contenedores normativos.
* **Optimización y Debugging:** Refactorización del manejo de temporizadores (setInterval) y corrección de animaciones en la interfaz de usuario.
* **Documentación:** Formateo y documentación técnica del proyecto.
 
 
## Lo que aprendí
Durante el desarrollo de este proyecto se consolidaron los siguientes aprendizajes:
 
* A diseñar arquitecturas de juegos web mediante máquinas de estado simples en JavaScript puro.
* A estructurar e implementar sistemas de temporización, feedback visual dinámico y animaciones CSS avanzadas.
* A aplicar normas ambientales reales de clasificación de residuos dentro de una mecánica interactiva.
* A redactar prompts estructurados para acelerar la maquetación y lógica funcional del código.
* A realizar pruebas de rendimiento y adaptación responsiva para dispositivos móviles y de escritorio.
* A documentar y publicar prototipos web educativos utilizando **GitHub y GitHub Pages**.
 
 
## Mejoras futuras
Para futuras iteraciones del prototipo se tienen contempladas las siguientes mejoras:
 
* **Mecánica Drag & Drop Avanzada:** Permitir arrastrar los residuos físicamente hacia las canecas mediante gestos táctiles y mouse.
* **Efectos de Sonido (SFX) y Música:** Integrar audio para aciertos, errores, apertura de contenedores y música ambiental.
* **Mayor Variedad de Residuos:** Ampliar la base de datos con residuos especiales (electrónicos, peligrosos, biológicos).
* **Animaciones de Residuos:** Agregar físicas de caída de objetos y efectos de partículas al reciclar correctamente.
* **Tabla de Clasificación (Leaderboard):** Almacenamiento local o en la nube de los mejores puntajes acumulados.
 
 
## Autor
**Dustin Fernando Vaca Aguilar**  
*Estudiante de Game Development.*  
Este proyecto fue desarrollado como parte de las actividades prácticas de la asignatura *Game Development*.
 
 
## Contexto académico
* **Asignatura:** Game Development  
* **Unidad:** Desarrollo de videojuegos educativos  
* **Proyecto:** Recycling Time: Guardianes del Reciclaje  
* **Tipo:** Prototipo de videojuego educativo asistido por IA
