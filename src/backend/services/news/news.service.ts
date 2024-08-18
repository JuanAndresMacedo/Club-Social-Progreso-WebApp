import { Injectable } from '@angular/core';
import { News } from './models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  private news: News[] = [
    {
      id: 1,
      title: 'Volleyball: se juega la 13a fecha del apertura',
      content: [
        "Este 27 de agosto, los equipos de Progreso y Enfoque se verán las caras en un emocionante" +
        "encuentro correspondiente a la 13ª fecha del torneo Apertura de volleyball. El partido se llevará a cabo en el" +
        "Polideportivo de Las Piedras, donde ambos equipos buscarán sumar puntos clave para escalar posiciones en la tabla.",

        "Progreso llega con la motivación de continuar con su racha positiva, mientras que Enfoque intentará sorprender" +
        "y llevarse la victoria en un terreno que no será fácil. Con ambos equipos mostrando un nivel competitivo en sus" +
        "últimos encuentros, se espera un partido lleno de emoción y lucha en cada punto.",

        "No te pierdas este gran enfrentamiento, que además será transmitido en vivo por las plataformas oficiales del" +
        "Club Social Progreso. ¡Vamos Progreso!",

        "🕜 Fecha y hora: 27 de agosto",

        "📍 Lugar: Polideportivo de Las Piedras",

        "🎥 Transmisión en vivo: @CSPVolleyMasculino"
      ],
      description: 'Se jugara en el polideportivo de las piedras contra el equipo de Enfoque.',
      imageUrl: '../../../assets/images/news/partidoVolley.jpg',
      date: '27/08',
      topic: 'volleyball',
      verticalImage: true
    },
    {
      id: 2,
      title: "¡Campeones del apertura!",
      content: [
        "En una jornada donde la humedad amenazaba con suspender la jornada, Progreso se alzó con el título del" +
        "Torneo Apertura de la Super Liga Masculina (SLM), reafirmándose como uno de los equipos más destacados del handball ACB." +
        "La competencia inicial de la SLM contó con la participación de siete equipos que se enfrentaron en un formato de todos contra" +
        "todos, culminando en semifinales y finales disputadas por los cuatro mejores clasificados.",

        "Los equipos que lograron llegar a las semifinales fueron Malvin, Progreso, Seminario y Maldonado." +
        "Tras emocionantes encuentros, el equipo de la playa y el equipo canario lograron el triunfo, asegurando" +
        "su pase a la final del torneo.",

        "El partido decisivo se llevó a cabo el pasado 22 de junio en la cancha del Colegio Clara Jackson." +
        "Fue un encuentro de alta intensidad, donde ambos equipos desplegaron sus mejores tácticas y habilidades sobre el" +
        "campo de juego. Progreso logró imponerse con un marcador de 22-17, sumando así una nueva copa a su historia en el handball."
      ],
      description: 'Descripción 2',
      imageUrl: '../../../assets/images/news/mayores.jpg',
      date: '27/04',
      topic: 'handball',
      verticalImage: false
    },
    {
      id: 3,
      title: 'Remodelación del club',
      content: [
        "El Club Social Progreso ha dado un paso más hacia la modernización al renovar su fachada con una nueva y " +
        "vibrante capa de pintura. La actualización, que ya ha captado la atención de los miembros y visitantes, " +
        "refleja el compromiso del club con la mejora continua de sus instalaciones.",

        "La elección de colores vibrantes no solo revitaliza la apariencia del club, sino que también simboliza el " +
        "espíritu dinámico y la energía de su comunidad. Esta renovación es parte de una serie de mejoras que el club ha " +
        "estado implementando para ofrecer un ambiente más acogedor y moderno a todos sus socios.",

        "Con esta nueva imagen, el Club Social Progreso sigue consolidándose como un punto de encuentro clave en la " +
        "comunidad, donde el deporte, la recreación y el compañerismo se entrelazan en un espacio que ahora luce mejor que nunca.",

        "¡Invitamos a todos a pasar por el club y disfrutar de esta renovada fachada que marca un nuevo capítulo en nuestra historia!"
      ],
      description: 'El club ha renovado su fachada con una nueva capa de pintura vibrante.',
      imageUrl: '../../../assets/images/club.jpg',
      date: '27/04',
      topic: 'general',
      verticalImage: false
    },
    {
      id: 4,
      title: 'Campeonato de truco',
      content: [
        "El Club Social Progreso organiza un emocionante campeonato de truco con el objetivo de recaudar fondos en " +
        "beneficio del plantel de mayores del handball masculino. El evento, que promete ser una jornada de entretenimiento" +
        "y camaradería, se llevará a cabo el próximo fin de semana en las instalaciones del club.",

        "Con el espíritu de colaboración y apoyo entre los socios, el torneo de truco reunirá a jugadores de todas las edades en" +
        "un ambiente ameno, donde la pasión por el juego y el deseo de contribuir al crecimiento del equipo de handball serán " +
        "los protagonistas. Los fondos recaudados durante el evento se destinarán a mejorar el equipamiento y a cubrir los gastos " +
        "necesarios para la próxima temporada.",

        "La inscripción está abierta para todos aquellos que deseen participar y contribuir a esta noble causa. Además, habrá premios " +
        "para las parejas ganadoras y sorteos entre todos los presentes, lo que añade un extra de emoción al evento.",

        "No pierdas la oportunidad de ser parte de esta iniciativa que fortalece el vínculo entre los socios y apoya a nuestros " +
        "deportistas. ¡Te esperamos para compartir una jornada de truco, risas y solidaridad!",

        "🕜 Fecha y hora: 27 de agosto",

        "📍 Lugar: Club Social Progreso",
      ],
      description: 'Se organiza un emocionante campeonato de truco con el objetivo de recaudar fondos en beneficio del plantel de mayores del handball masculino',
      imageUrl: '../../../assets/images/news/truco.jpg',
      date: '27/04',
      topic: 'handball',
      verticalImage: true
    },
    {
      id: 5,
      title: 'Finalizó la 79° vuelta ciclista del Uruguay',
      content: [
        "La 79ª edición de la Vuelta Ciclista del Uruguay ha llegado a su fin, dejando una huella imborrable en todos aquellos " +
        "que participaron en esta histórica competencia. Desde los ciclistas que demostraron su valentía y destreza en cada etapa, " +
        "hasta los entrenadores, organizadores y aficionados que apoyaron incansablemente, todos vivieron una experiencia " +
        "única y enriquecedora.",

        "Durante varias jornadas, los competidores recorrieron cientos de kilómetros a lo largo de las rutas uruguayas, " +
        "enfrentando desafíos tanto físicos como mentales. Cada pedalada fue una muestra de perseverancia y dedicación, lo " +
        "que hizo de esta vuelta un evento memorable. Los paisajes del país fueron el escenario perfecto para una competencia " +
        "repleta de emoción, estrategia y esfuerzo.",

        "La organización del evento, a cargo de la Federación Ciclista Uruguaya, fue impecable, garantizando la seguridad y el " +
        "bienestar de todos los participantes. Además, el apoyo del público en cada localidad fue fundamental, creando una " +
        "atmósfera de celebración y compañerismo que será recordada por mucho tiempo.",

        "Con la culminación de esta vuelta, los ciclistas no solo se llevan trofeos y reconocimientos, sino también vivencias " +
        "y aprendizajes que trascienden la competencia. La 79ª Vuelta Ciclista del Uruguay no solo reafirma la importancia del " +
        "deporte en la sociedad, sino que también deja una inspiración para futuras generaciones de ciclistas que sueñan con formar " +
        "parte de este legendario evento."
      ],
      description: 'Una gran experiencia para todos los que participaron en cada uno de sus roles.',
      imageUrl: '../../../assets/images/news/ciclismo.jpg',
      date: '27/04',
      topic: 'ciclismo',
      verticalImage: false
    },
    {
      id: 6,
      title: '¡Uruguay campeón del mundo en bochas!',
      content: [
        "¡Uruguay ha alcanzado la gloria en el ámbito deportivo internacional! Por primera vez en la historia, nuestro país ha logrado " +
        "conquistar una medalla de oro en Bochas, y no podríamos estar más emocionados. Gonzalo Perdomo, un talentoso atleta uruguayo, " +
        "se ha coronado campeón mundial tras una impresionante victoria en el Mundial Juvenil de Oran, Argelia. En la disciplina de " +
        "Tiro de Precisión estilo Raffa Volo, Perdomo demostró una habilidad y determinación excepcionales, superando al representante " + 
        "de Paraguay en una final que quedará grabada en la memoria de todos los uruguayos.",

        "Este logro es el resultado de un esfuerzo colectivo. Queremos extender nuestro más sincero agradecimiento a todos quienes " +
        "hicieron posible este hito: familiares, amigos, comercios, y el Municipio. La comunidad del Club Social Progreso se " +
        "enorgullece de este triunfo y agradece profundamente el apoyo brindado. La victoria de Gonzalo Perdomo es un reflejo del " +
        "esfuerzo, dedicación y espíritu de superación que caracteriza a nuestro país. ¡Gracias a todos, y un fuerte aplauso para " +
        "Gonzalo! ¡Arriba Uruguay!"
      ],
      description: 'Por primera vez en la historia, nuestro país ha logrado conquistar una medalla de oro en Bochas',
      imageUrl: '../../../assets/images/news/bochas.jpg',
      date: '27/04',
      topic: 'bochas',
      verticalImage: true
    },
    {
      id: 7,
      title: 'Ciclismo: premios del Bingo',
      content: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        'An unknown printer took a galley of type and scrambled it to make a type specimen book.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        'An unknown printer took a galley of type and scrambled it to make a type specimen book.'
      ],
      description: 'Se efectivizaron los vuelos en helicóptero, premios del bingo del ciclismo.',
      imageUrl: '../../../assets/images/news/vuelo.jpg',
      date: '27/04',
      topic: 'ciclismo',
      verticalImage: false
    }
  ];

  getAllNews(): News[] {
    return this.news;
  }

  getNewsById(id: number): News | undefined {
    return this.news.find(news => news.id === id);
  }

  getMainNews(): News[] {
    return this.news.slice(0, 2);
  }

  getSecondaryNews(): News[] {
    return this.news.slice(2, 6);
  }
}
