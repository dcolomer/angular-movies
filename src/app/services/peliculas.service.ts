import { Injectable } from '@angular/core';
import { Pelicula } from '../models/peliculas/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private peliculas: Pelicula[] = [
    {
      id: 1001,
      titulo: "Copland",
      sinopsis: "Babitch (Michael Rapaport), un policía de Nueva York, conduce de noche de vuelta a casa cuando es atacado por dos individuos. Intenta atraparlos, pero cuando le apuntan con una pistola, instintivamente, dispara y los mata. En un instante, el puente se llena de policías, que comprueban que los agresores no tenían ninguna pistola, y deciden actuar por su cuenta. Todos viven en un barrio de Nueva Jersey donde el sheriff, el bonachón Freddy Heflin (Sylvester Stallone), tiene jurisdicción sobre el caso. El asunto salta a los medios de comunicación, de modo que el investigador de asuntos internos (Robert de Niro) decide intervenir.",
      img: "assets/img/copland.jpg",
      anio: 1997,
      direccion: "James Mangold"
    },
    {
      id: 1002,
      titulo: "Cadena perpetua",
      sinopsis: "Acusado del asesinato de su mujer, Andrew Dufresne (Tim Robbins), tras ser condenado a cadena perpetua, es enviado a la cárcel de Shawshank. Con el paso de los años conseguirá ganarse la confianza del director del centro y el respeto de sus compañeros de prisión, especialmente de Red (Morgan Freeman), el jefe de la mafia de los sobornos.",
      img: "assets/img/cadena_perpetua.jpg",
      anio: 1994,
      direccion: "Frank Darabont"
    },
    {
      id: 1003,
      titulo: "Alguien voló sobre el nido del cuco",
      sinopsis: "Randle McMurphy (Jack Nicholson), un hombre condenado por asalto, y un espíritu libre que vive contracorriente, es recluido en un hospital psiquiátrico. La inflexible disciplina del centro acentúa su contagiosa tendencia al desorden, que acabará desencadenando una guerra entre los pacientes y el personal de la clínica con la fría y severa enfermera Ratched (Louise Fletcher) a la cabeza. La suerte de cada paciente del pabellón está en juego.",
      img: "assets/img/alguien_volo_sobre_el_nido_del_cuco.jpg",
      anio: 1975,
      direccion: "Milos Forman"
    },
    {
      id: 1004,
      titulo: "Atrapado en el tiempo",
      sinopsis: "Phil, el hombre del tiempo de una cadena de televisión, va un año más a Punxstawnwey, a cubrir la información del festival del Día de la Marmota. En el viaje de regreso, Phil y su equipo se ven sorprendidos por una tormenta que los obliga a regresar a la pequeña ciudad. A la mañana siguiente, al despertarse, comprueba atónito que comienza otra vez el Día de la Marmota.",
      img: "assets/img/atrapado_en_el_tiempo.jpg",
      anio: 1993,
      direccion: "Harold Ramis"
    },
    {
      id: 1005,
      titulo: "Trainspotting",
      sinopsis: "Mark Renton, un joven escocés de Edimburgo, y sus amigos son adictos a la heroína, lo que significa que viven fuera de la realidad, en un mundo aparte. Dentro del grupo hay un psicópata alcohólico y violento, un joven desesperado, un mujeriego con un conocimiento enciclopédico sobre Sean Connery y un entusiasta de las caminatas y de Iggy Pop.",
      img: "assets/img/trainspotting.jpg",
      anio: 1996,
      direccion: "Danny Boyle"
    },
    {
      id: 1006,
      titulo: "El resplandor",
      sinopsis: "Jack Torrance se traslada con su mujer y su hijo de siete años al impresionante hotel Overlook, en Colorado, para encargarse del mantenimiento de las instalaciones durante la temporada invernal, época en la que permanece cerrado y aislado por la nieve. Su objetivo es encontrar paz y sosiego para escribir una novela. Sin embargo, poco después de su llegada al hotel, al mismo tiempo que Jack empieza a padecer inquietantes trastornos de personalidad, se suceden extraños y espeluznantes fenómenos paranormales.",
      img: "assets/img/el_resplandor.jpg",
      anio: 1980,
      direccion: "Stanley Kubrick"
    },
    {
      id: 1007,
      titulo: "Cinema Paradiso",
      sinopsis: "Cinema Paradiso es una historia de amor por el cine. Narra la historia de Salvatore, un niño de un pueblecito italiano en el que el único pasatiempo es ir al cine. Subyugado por las imágenes en movimiento, el chico cree ciegamente que el cine es magia; pero, un día, Alfredo, el operador, accede a enseñarle al pequeño los misterios y secretos que se ocultan detrás de una película. Salvatore va creciendo y llega el momento en el que debe abandonar el pueblo y buscarse la vida. Treinta años después, recibe un mensaje, en el que le comunican que debe volver a casa. ",
      img: "assets/img/cinema_paradiso.jpg",
      anio: 1988,
      direccion: "Giuseppe Tornatore"
    },
    {
      id: 1008,
      titulo: "La vida de Brian",
      sinopsis: "Brian nace en un pesebre de Belén el mismo día que Jesucristo. Un cúmulo de desgraciados y tronchantes equívocos le harán llevar una vida paralela a la del verdadero Hijo de Dios. Sus pocas luces y el ambiente de decadencia y caos absoluto en que se haya sumergida la Galilea de aquellos días, le harán vivir en manos de su madre, de una feminista revolucionaria y del mismísimo Poncio Pilatos, su propia versión del calvario.",
      img: "assets/img/la_vida_de_Brian.jpg",
      anio: 1979,
      direccion: "Terry Jones"
    },
    {
      id: 1009,
      titulo: "Ciudad de Dios",
      sinopsis: "Basada en hechos reales, describe el mundo del crimen organizado en Cidade de Deus, un suburbio de Río de Janeiro, desde finales de los sesenta hasta principios de los ochenta, época durante la cual el tráfico de drogas y la violencia impusieron su ley en las favelas. A finales de los sesenta, Buscapé, un niño de 11 años tímido y sensible, observa a los niños duros de su barrio, sus robos, sus peleas, sus enfrentamientos diarios con la policía. Pero él sabe muy bien lo que quiere ser si consigue sobrevivir: fotógrafo. Dadinho, un niño de su edad que se traslada al barrio, sueña con ser el criminal más peligroso de Río de Janeiro y empieza su aprendizaje haciendo recados para los delincuentes locales. Admira a Cabeleira y su pandilla, que se dedican a atracar los camiones del gas. Un día Cabeleira le da a Dadinho la oportunidad de cometer su primer asesinato.",
      img: "assets/img/ciudad_de_Dios.jpg",
      anio: 2002,
      direccion: "Fernando Meirelles, Kátia Lund"
    },
    {
      id: 1010,
      titulo: "El golpe",
      sinopsis: "Chicago, años treinta. Johnny Hooker (Redford) y Henry Gondorff (Newman) son dos timadores que deciden vengar la muerte de un viejo y querido colega, asesinado por orden de un poderoso gángster llamado Doyle Lonnegan (Shaw). Para ello urdirán un ingenioso y complicado plan con la ayuda de todos sus amigos y conocidos.",
      img: "assets/img/el_golpe.jpg",
      anio: 1973,
      direccion: "George Roy Hill"
    },
    {
      id: 1011,
      titulo: "Love Actually",
      sinopsis: "En Londres, poco antes de las Navidades, se entrelazan una serie de historias divertidas y conmovedoras.'Love, Actually' es una manera abreviada de decir 'Love Actually Is All Around' y éste es precisamente el argumento de la película: mires a donde mires, encontrarás el amor en todas partes. Todos los personajes, cada uno a su manera (un primer ministro, una vieja estrella del rock, una asistenta portuguesa que sólo habla su idioma), están relacionados con los aspectos más divertidos, tristes, ingenuos y estúpidos del amor.",
      img: "assets/img/love_actually.jpg",
      anio: 2003,
      direccion: "Richard Curtis"
    },
    {
      id: 1012,
      titulo: "Primer",
      sinopsis: "Cuatro hombres trabajan en un garaje construyendo aparatos altamente complejos. En parte por accidente y en parte por su pericia, descubren un mecanismo dotado de poderes que les permite conseguir casi todo lo que quieran. Se trata de un hallazgo que podría cambiar el mundo, pero que pondrá a prueba las relaciones entre sus inventores.",
      img: "assets/img/primer.jpg",
      anio: 2004,
      direccion: "Shane Carruth"
    },
    {
      id: 1013,
      titulo: "El caballero oscuro",
      sinopsis: "Batman/Bruce Wayne (Christian Bale) regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon (Gary Oldman) y del Fiscal del Distrito Harvey Dent (Aaron Eckhart), Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker (Heath Ledger), un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.",
      img: "assets/img/el_caballero_oscuro.jpg",
      anio: 2008,
      direccion: "Christopher Nolan"
    },
    {
      id: 1014,
      titulo: "Sin perdón",
      sinopsis: "William Munny (Clint Eastwood) es un pistolero retirado, viudo y padre de familia, que tiene dificultades económicas para sacar adelante a su hijos. Su única salida es hacer un último trabajo. En compañía de un viejo colega (Morgan Freeman) y de un joven inexperto (Jaimz Woolvett), Munny tendrá que matar a dos hombres que cortaron la cara a una prostituta.",
      img: "assets/img/sin_perdon.jpg",
      anio: 1992,
      direccion: "Clint Eastwood"
    },
    {
      id: 1015,
      titulo: "Avatar",
      sinopsis: "Año 2154. Jake Sully (Sam Worthington), un ex-marine condenado a vivir en una silla de ruedas, sigue siendo, a pesar de ello, un auténtico guerrero. Precisamente por ello ha sido designado para ir a Pandora, donde algunas empresas están extrayendo un mineral extraño que podría resolver la crisis energética de la Tierra. Para contrarrestar la toxicidad de la atmósfera de Pandora, se ha creado el programa Avatar, gracias al cual los seres humanos mantienen sus conciencias unidas a un avatar: un cuerpo biológico controlado de forma remota que puede sobrevivir en el aire letal. Esos cuerpos han sido creados con ADN humano, mezclado con ADN de los nativos de Pandora, los Na'vi. Convertido en avatar, Jake puede caminar otra vez. Su misión consiste en infiltrarse entre los Na'vi, que se han convertido en el mayor obstáculo para la extracción del mineral. Pero cuando Neytiri, una bella Na'vi (Zoe Saldana), salva la vida de Jake, todo cambia: Jake, tras superar ciertas pruebas, es admitido en su clan. Mientras tanto, los hombres esperan los resultados de la misión de Jake.",
      img: "assets/img/avatar.jpg",
      anio: 2009,
      direccion: "James Cameron"
    }
  ];

  constructor() {
    console.log('Servicio listo para usar!');
  }

  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  getPelicula(id: number): Pelicula {
      return this.peliculas.filter(peli => peli.id == id)[0];
  }

  buscarPeliculas(termino: string): Pelicula[] {
    return this.peliculas.filter(peli => peli.titulo.toLowerCase().includes(termino.toLowerCase()));

    /*const term = termino.toLowerCase();
    const pelisFiltradas: Pelicula[] = [];

    for (let pelicula of this.peliculas) {
      const tit = pelicula.titulo.toLowerCase();
      if (tit.includes(term)) pelisFiltradas.push(pelicula);
    }

    return pelisFiltradas;*/

  }
}
