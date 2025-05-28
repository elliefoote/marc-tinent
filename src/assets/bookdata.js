import Cobalt from "./cobalt.pdf";
import Cronista from "./cronista.pdf";

export const bookData = [
  {
    id: "bc-1",
    category: "Programa de televisión",
    title: "Soc i seré",
    description: `100 concursantes quieren ser la persona más catalana de Catalunya, superando retos de cultura popular, lengua, geografía, gastronomía, música y muchas más sorpresas.`,
    fileName: "SociSere.png",
    links: [],
    landscape: true,
  },
  {
    id: "bc-2",
    category: "Programa de televisión",
    title: "Joc de cartes",
    description: `Temporadas 8 y 9 del reality de éxito de TV3/3Cat en el que varios restaurantes compiten para demostrar que son el mejor en su categoría.`,
    fileName: "JocDeCartes.png",
    links: [
      {
        linkid: 1,
        linktitle: "En 3Cat",
        linkurl: "https://www.3cat.cat/3cat/joc-de-cartes/",
      },
    ],
    landscape: true,
  },
  {
    id: "bc-3",
    category: "Novela",
    title: "Los siete de Barbarroja 2: El festival del rey pirata",
    description: `Mientras buscan a su padre, los Barbarroja llegan a una isla donde se celebra el mejor festival del mundo de la piratería. Eso sí, también tiene una maldición que les complicará mucho la vida.`,
    fileName: "Barbarroja2.png",
    links: [
      {
        linkid: 2,
        linktitle: "En castellano",
        linkurl: "https://www.planetadelibros.com/libro-los-siete-de-barbarroja-2-el-festival-del-rey-pirata/390185",
      },
      {
        linkid: 3,
        linktitle: "En catalán",
        linkurl: "https://animallibres.cat/zebra/9453-els-set-de-barba-roja-2-el-festival-del-rei-pirata-9788410302037.html",
      },
      {
        linkid: 4,
        linktitle: "En valenciano",
        linkurl: "https://bromera.com/educacio/la-tira/9452-els-set-de-barba-roja-2-el-festival-del-rei-pirata-9788413586809.html",
      },
    ],
    landscape: false,
  },
  {
    id: "bc-4",
    category: "Novela",
    title: "Los siete de Barbarroja 1: En busca de papá",
    description: `¡El gran pirata Barbarroja ha desaparecido! Sus siete hijos se tendrán que hacer cargo del “negocio familiar” mientras surcan los mares buscando a su padre. ¡Estén preparados o no!`,
    fileName: "Barbarroja1.png",
    links: [
      {
        linkid: 5,
        linktitle: "En castellano",
        linkurl: "https://www.planetadelibros.com/libro-los-siete-de-barbarroja-1-en-busca-de-papa/388645",
      },
      {
        linkid: 6,
        linktitle: "En catalán",
        linkurl: "https://animallibres.cat/zebra/9341-els-set-de-barba-roja-a-la-recerca-del-pare-9788419659705.html",
      },
      {
        linkid: 7,
        linktitle: "En valenciano",
        linkurl: "https://bromera.com/educacio/la-tira/9340-els-set-de-barba-roja-en-busca-del-pare-9788413586342.html",
      },
    ],
    landscape: false,
  },
  {
    id: "bc-5",
    category: "Programa de televisión",
    title: "Cuina com puguis",
    description: `Primera temporada de un concurso de humor y cocina para TV3/3Cat donde varios famosos que no necesariamente saben cocinar se enfrentan en duelos culinarios muy locos.`,
    fileName: "Cuina.png",
    links: [
      {
        linkid: 8,
        linktitle: "En 3Cat",
        linkurl: "https://www.3cat.cat/3cat/cuina-com-puguis/",
      },
    ],
    landscape: true,
  },
  {
    id: "bc-6",
    category: "Programa de televisión",
    title: "La mejor generación",
    description: `Un game show musical para Telecinco en el que 9 cantantes famosos y 3 humoristas se enfrentan para demostrar que su generación es la mejor de todas.`,
    fileName: "Generacion.png",
    links: [
      {
        linkid: 9,
        linktitle: "En Telecinco",
        linkurl: "https://www.telecinco.es/la-mejor-generacion/",
      },
    ],
    landscape: true,
  },
  {
    id: "bc-7",
    category: "Programa de televisión",
    title: "Caigut del cel",
    description: `La segunda temporada de una docu-serie para TV3 / 3Cat en la que investigamos árboles genealógicos para entregar herencias perdidas a familiares lejanos... o no tan lejanos.`,
    fileName: "Caigut.png",
    links: [
      {
        linkid: 10,
        linktitle: "Ver trailer",
        linkurl: "https://www.youtube.com/watch?v=MIovzWITmEs&ab_channel=3Cat",
      },
    ],
    landscape: true,
  },
  {
    id: "bc-8",
    category: "Programa de televisión",
    title: "La Gran Confusión",
    description: `Un imprevisible y divertido talk show semanal sobre grandes temas, abordados con humor y sentido del espectáculo. Presentado por Xavier Sardà en TVE.`,
    fileName: "Confusion.png",
    links: [
      {
        linkid: 11,
        linktitle: "En RTVE",
        linkurl: "https://www.rtve.es/play/videos/la-gran-confusion/",
      },
    ],
    landscape: true,
  },
  {
    id: "bc-9",
    category: "Cómic",
    title: "La señora de Chicago",
    description: `La historia real y jamás contada de Alice Clement, la primera inspectora de policía de Chicago, conocida como "La Sherlock Holmes femenina", y que sin quererlo acabó entregando la ciudad al mismísimo Al Capone. Con dibujo de Pablo M. Collar.`,
    fileName: "Senora.png",
    links: [
      {
        linkid: 12,
        linktitle: "En castellano",
        linkurl: "https://www.panini.es/shp_esp_es/la-se-ora-de-chicago-sseno001-es01.html",
      },
    ],
    landscape: false,
  },
  {
    id: "bc-10",
    category: "Novela",
    title: "El Pierrot Negro de Whitechapel",
    description: `15 años después de su desaparición, Jack el Destripador vuelve a Londres. Un doctor que ha perdido a la mujer que ama se obcecará en descubrir finalmente su identidad.`,
    fileName: "Pierrot.png",
    links: [
      {
        linkid: 13,
        linktitle: "En castellano",
        linkurl: "https://www.stonbergeditorial.com/product-page/el-pierrot-negro-de-whitechapel-marc-tinent",
      },
    ],
    landscape: false,
  },
  {
    id: "bc-11",
    category: "Serie",
    title: "El mort viu",
    description: `Comedia negra ganadora de un Premio Ondas sobre Llàtzer, un ni-ni que es asesinado por su padre y su hermano y que resucita de entre los muertos como si nada hubiese ocurrido.`,
    fileName: "MortViu.png",
    links: [
      {
        linkid: 14,
        linktitle: "En Amazon Prime Video",
        linkurl: "https://www.primevideo.com/detail/0FJY97WA9EOX3H4X2MUSER6O8H",
      },
      {
        linkid: 15,
        linktitle: "En Filmin",
        linkurl: "https://www.filmin.es/serie/el-muerto-vivo",
      },
    ],
    landscape: true,
  },
  {
    id: "bc-12",
    category: "Cómic",
    title: "Viejos descubridores",
    description: `Un viejo Cristóbal Colón se une a su amigo Alonso de Ojeda y su enemigo Américo Vespucci para intentar dar con la Fuente de la Eterna Juventud. Con dibujo de Lourdes Navarro.`,
    fileName: "Viejos.png",
    links: [
      {
        linkid: 16,
        linktitle: "En catalán",
        linkurl: "https://www.panini.es/shp_esp_es/vells-descobridors-svdes001c-es01.html",
      },
      {
        linkid: 17,
        linktitle: "En castellano",
        linkurl: "https://www.panini.es/shp_esp_es/viejos-descubridores-svdes001e-es01.html",
      },
      {
        linkid: 18,
        linktitle: "En francés",
        linkurl: "https://www.editionspaquet.com/catalogue-bd/vieux-explorateurs-les",
      },
    ],
    landscape: false,
  },
  {
    id: "bc-13",
    category: "Relato",
    title: "Ocho Narices",
    description: `En la historia de aventuras “El efecto de Cobalt Park”, un autor venido a menos descubre un misterioso parque que da poderes a los que se acercan a determinada hora. Parte de la antología “Ocho Narices”, de Editorial Garbuix.`,
    fileName: "OchoNarices.png",
    links: [
      {
        linkid: 19,
        linktitle: "Léelo",
        linkurl: Cobalt,
      },
    ],
    landscape: false,
  },
  {
    id: "bc-14",
    category: "Relato",
    title: "Doce Cabezones",
    description: `En la comedia histórica “Cronista Real”, el cronista del peor rey de Europa debe tomar una difícil decisión: ayudar a su rey a no parecer tan inútil o mantener el rigor histórico. Parte de la antología “Doce Cabezones”, de Editorial Garbuix.`,
    fileName: "DoceCabezones.png",
    links: [
      {
        linkid: 20,
        linktitle: "Léelo",
        linkurl: Cronista,
      },
    ],
    landscape: false,
  },
];
