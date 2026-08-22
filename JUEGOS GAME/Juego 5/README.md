#  ECO//NADO
 
## Descripción
**ECO//NADO** es una experiencia narrativa interactiva y juego de simulación social que aborda las mecánicas del ciberacoso, la sobreexposición digital y el impacto de las redes sociales en los jóvenes. El jugador toma el rol de un espectador/decisor frente a la vida digital de Emi, interactuando con publicaciones, comentarios y decisiones clave. A través de una interfaz de teléfono inteligente simulada y un entorno reactivo, el juego busca concienciar sobre la empatía digital, el peso de los algoritmos y las consecuencias del comportamiento en línea.
 
## Objetivo del jugador
Navegar por los distintos capítulos narrativos tomando decisiones estratégicas sobre las publicaciones e interacciones de Emi, gestionando indicadores clave como **Popularidad**, **Empatía** y **Salud Mental** para evitar que la presión digital colapse la estabilidad de la protagonista.
 
### Objetivos específicos
* Evaluar el contenido de las publicaciones y decidir entre acciones constructivas, neutras o dañinas.
* Mantener un equilibrio entre la aceptación social y el bienestar emocional de Emi.
* Observar las reacciones en tiempo real del "Mundo Digital" a través de dinámicas visuales y ambientales.
* Descubrir los diferentes desenlaces posibles (Final Bueno, Final Neutro y Final Malo) en función del impacto acumulado.
 
 
## Mecánica principal
El videojuego utiliza un bucle narrativo con ramificación de decisiones e indicadores de estado:
 
1. **Fase de Exposición:** Se presenta una publicación, mensaje o dibujo en la pantalla de la interfaz del teléfono inteligente (`#phone`).
2. **Fase de Evaluación y Elección:** El jugador analiza las opciones disponibles en el panel de controles (`#interactionButtons`) considerando el impacto potencial en las estadísticas de Emi.
3. **Fase de Reacción y Retroalimentación:** La elección desencadena una animación visual en el entorno de juego (`#world`), altera los contadores de estadísticas y ajusta la atmósfera visual (cambios de color, efectos de vibración y propagación de "Ecos").
 
 
## Género
**Interactive Narrative / Social Simulation / Choice-Driven / Educational**  
El proyecto se enmarca en el género de ficción interactiva con simulación de redes sociales con un fuerte enfoque educativo y de concienciación social.
 
 
## 🎮 Controles
 
| Elemento | Acción | Función |
| :--- | :--- | :--- |
| **BOTONES DE OPCIÓN** | Clic / Tap en pantalla | Selecciona una decisión narrativa o respuesta social. |
| **BOTÓN START / CONTINUAR** | Clic / Tap en pantalla | Inicia la experiencia o avanza al siguiente capítulo narrativo. |
| **PANTALLA DEL TELÉFONO** | Interacción táctil | Permite explorar la interfaz móvil simulada y ver las publicaciones. |
| **REINICIAR** | Clic en el botón final | Reinicia la partida para explorar rutas y finales alternativos. |
 
> *El juego cuenta con un diseño responsivo adaptado para ser plenamente ejecutable tanto en monitores de escritorio como en pantallas táctiles móviles.*
 
 
## Tecnologías utilizadas
* **HTML5:** Estructuración de la interfaz simulada de smartphone (`#phone`), paneles de estadísticas, contenedor del mundo reactivo (`#world`) y botones interactivos.
* **CSS3:** Maquetación moderna con Flexbox/Grid, variables CSS (`:root`), animaciones de vibración (`@keyframes shake`), efectos neón/cyberpunk y temas de fondo dinámicos según el estado del juego.
* **JavaScript (Vanilla):** Gestión del estado de la narrativa, actualización del DOM en tiempo real, motor de renderizado de "Ecos" flotantes y cálculo de rutas hacia los distintos finales.
* **Security & Best Practices:** Estructura modular limpia y sin dependencias externas pesadas para un rendimiento fluido.
 
 
## Capturas de pantalla
 
### Pantalla inicial
*(Espacio reservado para la captura de la pantalla de bienvenida mostrando la interfaz del teléfono, la barra superior de estadísticas y la introducción a la historia de Emi)*
 
![Pantalla inicial](images/inicio.PNG)
 
 
### Gameplay (Interacción Social y Panel Narrativo)
*(Espacio reservado para la captura del juego en ejecución mostrando una publicación en la pantalla del teléfono, las opciones de respuesta y las estadísticas cambiantes)*
 
![Gameplay](images/gameplay.PNG)
 
 
### Resultado (Desenlace Narrativo / Finales)
*(Espacio reservado para la captura de la pantalla final que revela el destino de Emi según las métricas alcanzadas y el mensaje de reflexión)*
 
![Resultado del juego](images/resultado.PNG)
 
 
## Jugar
🎮 **Jugar ECO//NADO**  
▶️ **[JUGAR AHORA](https://ludcuba2019-boop.github.io/game-development-portfolio/ECONADO/?utm_source=chatgpt.com)** *(Enlace configurable a GitHub Pages)*
 
Para jugar localmente, clona el repositorio o descarga el proyecto y abre el archivo `index.html` en cualquier navegador web moderno.
 
 
## 🤖 Uso de Inteligencia Artificial
Durante el desarrollo del proyecto se applied una metodología asistida por **Inteligencia Artificial Generativa** como apoyo técnico e instruccional.
 
La inteligencia artificial fue utilizada para:
* **Diseño del Sistema de Estilos CSS:** Creación del tema neón/dark, variables de color e implementación de efectos visuales como el temblor del teléfono y pulso de los "Ecos".
* **Lógica del Árbol Narrativo:** Estructuración de las ramas de decisión en JavaScript y el cálculo paramétrico de los estados finales (Bueno, Malo y Neutro).
* **Adaptabilidad UI/UX:** Optimización del layout mediante CSS Grid y Flexbox para garantizar que la interfaz mantenga la apariencia de un teléfono inteligente en cualquier pantalla.
* **Documentación Técnica:** Estructuración y redacción en formato Markdown para el repositorio del proyecto.
 
 
## Lo que aprendí
Durante el desarrollo de este proyecto se consolidaron los siguientes aprendizajes:
 
* A maquetar interfaces complejas inspiradas en aplicaciones reales utilizando unicamente CSS3 y HTML5.
* A gestionar el estado de un juego narrativo ramificado en JavaScript sin necesidad de librerías externas.
* A utilizar variables CSS (`:root`) para modificar dinámicamente la atmósfera visual de la aplicación según la carga emocional de la escena.
* A crear retroalimentación visual inmediata mediante animaciones clave y manipulación interactiva del DOM.
* A diseñar sistemas de juego donde las mecánicas (interacciones sociales) refuerzan directamente el tema educativo (prevención del ciberacoso).
 
 
## Mejoras futuras
Para futuras versiones del juego se plantean las siguientes mejoras:
 
* **Efectos de Audio y Música Ambiental:** Integración de pistas sonoras atmosféricas que reaccionen según el nivel de tensión narrativa.
* **Más Rutas Narrativas y Personajes:** Incorporación de múltiples perspectivas (amigos, moderadores, perfil anónimo) para enriquecer las ramificaciones.
* **Simulación de Mensajería Directa:** Añadir un módulo de chat dinámico donde el jugador reciba mensajes privados en tiempo real.
* **Logros y Galería de Finales:** Un panel de desbloqueables que permita al jugador revisar las decisiones tomadas y los finales descubiertos.
 
 
## Autor
**Dustin Fernando Vaca Aguilar**  
*Estudiante de Game Development.*  
Este proyecto fue desarrollado como parte de las actividades prácticas de la asignatura *Game Development*.
 
 
## Contexto académico
* **Asignatura:** Game Development  
* **Unidad:** Desarrollo de videojuegos interactivos y narrativa digital  
* **Proyecto:** ECO//NADO  
* **Tipo:** Prototipo de juego interactivo / simulación narrativa asistido por IA
