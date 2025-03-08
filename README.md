# Descripción general

El proyecto **Club Social Progreso** es una página web desarrollada para brindar una presencia digital al club, el cual hasta ahora carecía de una plataforma propia. La idea surgió de la necesidad de contar con un espacio donde se pueda recopilar información relevante sobre el club y difundir las últimas noticias y eventos.

Este proyecto no solo pone en práctica diversas tecnologías con las que me he sentido cómodo, sino que también cumple el objetivo de dotar al club social de una herramienta digital para mejorar la comunicación y la difusión de sus actividades.

# Tecnologías y Herramientas

**Frontend:** Angular (versión 18), ofreciendo una interfaz responsiva (se utilizó Bootstrap) y dinámica.

**Backend/API:** Una API desarrollada en .NET utilizando C#, que facilita la comunicación entre el frontend y la base de datos.

**Base de datos:** SQL Server, que almacena de forma relacional la información del club.

**Despliegue en la nube:** Se utilizaron servicios de AWS para garantizar que el sitio sea accesible a todos, asegurando escalabilidad y disponibilidad. En la sección [Infraestructura en la nube](#infraestructura-en-la-nube) se detallan los servicios en especifico y se brinda un diagrama de la infraestructura 

# Documentación de la API

La API REST fue desarrollada con .NET Core 8.0, para una descripción más profunda sobre los endpoints visitar el [README del proyecto en github](https://github.com/JuanAndresMacedo/Club-Social-Progreso-API).

# Infraestructura en la nube

La infraestructura diseñada para la página web del Club Social Progreso sigue una arquitectura de microservicios en la nube, que permite escalabilidad, alta disponibilidad y una administración eficiente de los recursos. A continuación, se muestra un diagrama simple de la infraestructura y se detalla cada componente y su interacción dentro de la misma:

![Foto del daigrama de infraestructura en la nuba](docs/CSP.jpg)

### Amazon S3
Se utiliza un bucket S3 para almacenar los archivos de la página web.

Se utiliza un bucket S3 para almacenar las fotos que van a ser utilizadas por la web. En la base de datos se almacenan las rutas de dichas imagenes que luego serán accedidas por el frontend.

### Amazon CloudFront

algo

### API Gateway/ Lambda
Se utiliza API Gateway para desplegar la API REST, permitiendo una gestión segura y controlada del acceso a los servicios. Lambda actúa como intermediario entre la API y la base de datos.

### RDS
Para el almacenamiento de datos, se implementa una base de datos PostgreSQL en RDS.