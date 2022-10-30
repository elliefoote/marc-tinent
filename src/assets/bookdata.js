import Confusion from "../images/Confusion.png";
import Senora from "../images/Senora.png";
import Pierrot from "../images/Pierrot.png";
import MortViu from "../images/MortViu.png";
import Viejos from "../images/Viejos.png";
import OchoNarices from "../images/OchoNarices.png";
import Cobalt from "./cobalt.pdf";
import DoceCabezones from "../images/DoceCabezones.png";
import Cronista from "./cronista.pdf";

export const bookData = [
    {
        id: "bc-1",
        category: "Programa de television",
        title: "La Gran Confusión",
        description: `Un imprevisible y divertido talk show semanal sobre grandes temas, abordados con humor y sentido del espectáculo. Presentado por Xavier Sardà en TVE.`,
        img: Confusion,
        links: [
            {
                linkid: 1,
                linktitle: "En RTVE",
                linkurl: "https://www.rtve.es/play/videos/la-gran-confusion/",
            },
        ],
        textColor: "dark",
    },
    {
        id: "bc-2",
        category: "Cómic",
        title: "La señora de Chicago",
        description: `La historia real y jamás contada de Alice Clement, la primera inspectora de policía de Chicago, conocida como "La Sherlock Holmes femenina", y que sin quererlo acabó entregando la ciudad al mismísimo Al Capone. Con dibujo de Pablo M. Collar.`,
        img: Senora,
        links: [
            {
                linkid: 2,
                linktitle: "En castellano",
                linkurl:
                    "https://www.panini.es/shp_esp_es/la-se-ora-de-chicago-sseno001-es01.html",
            },
        ],
        textColor: "dark",
    },

    {
        id: "bc-3",
        category: "Novela",
        title: "El Pierrot Negro de Whitechapel",
        description: `
            15 años después de su desaparición, Jack el Destripador vuelve a Londres. Un doctor que ha perdido a la mujer que ama se obcecará en descubrir finalmente su identidad.`,
        img: Pierrot,
        links: [
            {
                linkid: 3,
                linktitle: "En castellano",
                linkurl:
                    "https://www.stonbergeditorial.com/product-page/el-pierrot-negro-de-whitechapel-marc-tinent",
            },
        ],
        textColor: "dark",
    },

    {
        id: "bc-4",
        category: "Serie",
        title: "El mort viu",
        description: `Comedia negra ganadora de un Premio Ondas sobre Llàtzer, un ni-ni que es asesinado por su padre y su hermano y que resucita de entre los muertos como si nada hubiese ocurrido.`,
        img: MortViu,
        links: [
            {
                linkid: 4,
                linktitle: "En Amazon Prime Video",
                linkurl:
                    "https://www.primevideo.com/detail/0FJY97WA9EOX3H4X2MUSER6O8H",
            },
            {
                linkid: 5,
                linktitle: "En Filmin",
                linkurl: "https://www.filmin.es/serie/el-muerto-vivo",
            },
        ],
        textColor: "dark",
    },

    {
        id: "bc-5",
        category: " Cómic",
        title: "Viejos descubridores",
        description: `Un viejo Cristóbal Colón se une a su amigo Alonso de Ojeda y su enemigo Américo Vespucci para intentar dar con la Fuente de la Eterna Juventud. Con dibujo de Lourdes Navarro.`,
        img: Viejos,
        links: [
            {
                linkid: 6,
                linktitle: "En catalán",
                linkurl:
                    "https://www.panini.es/shp_esp_es/vells-descobridors-svdes001c-es01.html",
            },
            {
                linkid: 7,
                linktitle: "En castellano",
                linkurl:
                    "https://www.panini.es/shp_esp_es/viejos-descubridores-svdes001e-es01.html",
            },
            {
                linkid: 8,
                linktitle: "En francés",
                linkurl:
                    "https://www.editionspaquet.com/catalogue-bd/vieux-explorateurs-les",
            },
        ],
        textColor: "dark",
    },
    {
        id: "bc-6",
        category: "Relato",
        title: "Ocho Narices",
        description: `
            En la historia de aventuras “El efecto de Cobalt Park”, un autor venido a menos descubre un misterioso parque que da poderes a los que se acercan a determinada hora. Parte de la antología “Ocho Narices”, de Editorial Garbuix.`,
        img: OchoNarices,
        links: [
            {
                linkid: 9,
                linktitle: "Léelo",
                linkurl: Cobalt,
            },
        ],
        textColor: "dark",
    },
    {
        id: "bc-7",
        category: "Relato",
        title: "Doce Cabezones",
        description: `
            En la comedia histórica “Cronista Real”, el cronista del peor rey de Europa debe tomar una difícil decisión: ayudar a su rey a no parecer tan inútil o mantener el rigor histórico. Parte de la antología “Doce Cabezones”, de Editorial Garbuix.`,
        img: DoceCabezones,
        links: [
            {
                linkid: 10,
                linktitle: "Léelo",
                linkurl: Cronista,
            },
        ],
        textColor: "light",
    },
];