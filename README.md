# Problemática Everis :earth_americas: 
En la semana de la hackaton nuestro sponsor es [Everis](https://www.everis.com/chile/es), una compañía que se dedica a consultorías y outsourcing, presente en 17 países y que cuenta en la actualidad con más de 27.000 profesionales. Sin duda, con esta cantidad de colaboradores es necesario organizar los equipos de trabajo  usando las tecnologías actuales de forma eficiente. 
## Knowledge Database :rocket: 
#### Opciones de mejora.
En conversaciones con personal de Everis, se detectó tres principales problemáticas:
* El método actual para recopilar la información de skills, tecnologías y conocimientos de los colaboradores hace que el proceso de definición de equipos de trabajo sea ineficiente.
* No existe claridad de nuevos aprendizajes que puedan tener los colaboradores, más allá de lo que se sabe por su currículum.
* Se desconoce la demanda de tecnologías por cliente,así como la capacidad de la empresa de cubrir esa demanda de forma eficaz.
## Consideraciones técnicas
Knowledge Database es una aplicación web construida como una [Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application), pensada para ser usada como aplicación Web.
En la página podemos ingresar a nuestra cuenta como perfil de Líder o Colaborador con nuestro correo institucional. 
### Diseño visual :speech_balloon:
En el diseño de la plataforma decidimos usar la guía de estilos de Everis, usando un diseño simple e intuitivo. La paleta de colores, el uso del Logo y el estilo de diseño se ajusta al Manual de Identidad corporativa de la compañía.
#### Diagrama de Flujo de la plataforma

![Diagrama de Flujo de la plataforma](https://i.imgur.com/WFJfFUc.jpg)
Inicialmente incorporamos el perfil de gerencia, pero haciendo iteraciones, encontramos muchas similitudes con el perfil de Gerencia, por lo que decidimos conservar sólo mantener el perfil de Líder y de Colaborador.

Si ingresamos al perfil de Líder, podemos ver la página donde visualizamos el **Dashboard** donde se muestran los gráficos de estadísticas de Oferta y Demanda. 
Podemos ingresar además a la página de **Filtro y Búsqueda**, donde se filtran las tecnologías y se muestran los resultados de forma simple y resumida. Si accedemos a *Ver más*, podemos ver el perfil completo del Colaborador. Por último, tenemos el menú de **Notificaciones**, donde podremos validar las nuevas Skills que los colaboradores soliciten.

Si ingresamos al perfil de Colaborador, vemos nuestro perfil con las Tecnologías, Conocimientos y Skills en un listado que muestra el nivel de experiencia, junto con el estado de aprobación de nuestra solicitud. 
Tenemos además un carrusel donde vemos **mensajes  que incentivan el crecimiento profesional** a través de Cursos de Formación.
Además podemos ver el panel donde podemos agregar nuevos Skills a través de un formulario simple que se despliga como modal.

### Prototipo 
Perfil de Colaborador

![](https://i.imgur.com/d3JNidD.jpg)

Dashboard

![](https://i.imgur.com/i36MAvC.jpg)

Filtro y búsqueda

![](https://i.imgur.com/eGFsm9b.jpg)

 En el siguiente [link](https://www.figma.com/file/KJs7BsY1DthCHcLNVz5zuL/Matriz?node-id=204%3A84) podemos encontrar el prototipo en Figma realizado. 
 
## Link del proyecto :computer:
[Knowledge Database](https://matriz-conocimiento.web.app/).
---
## Construido con :hammer:
* [JavaScript](https://www.javascript.com/) - Lenguaje de programación.
* [React v17.0.2](https://reactjs.org/) - JavaScript library for building user interfaces
* [Bootstrap  v5.0.2.](https://getbootstrap.com/) - Framework para desarrollo de aplicaciones web y sitios mobile first.
* [HTML semántico](https://es.wikipedia.org/wiki/HTML) - Single page aplication.
* [CSS](https://es.wikipedia.org/wiki/CSS_Flexible_Box_Layout) - Flexbox CSS.
* [Firebase](https://firebase.google.com/) - Firebase Authentication y Firestore.
* [Figma](www.figma.com) - Diseño de prototipos de alta fidelidad.
* [Github](www.github.com) - Hosting de repositorios.
* [Trello](Trello) - Organización de proyectos con interfaz web.

## Creado por :gem:
Desarrollo, diseño y documentación por
* [Bárbara Sagredo](https://github.com/barbarasagredo)
* [Luimar Villegas](https://github.com/luipalencia)
* [Daniela Gutierrez](https://github.com/danifran16)
* [Nathaly Taucare](https://github.com/nathalytaucare)

### Agradecimientos :video_game:
Equipo de Laboratoria - Chile.

---