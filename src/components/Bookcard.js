import React from 'react';
import './Bookcard.css';
import MortViu from '../images/MortViu.png';
import Pierrot from '../images/Pierrot.png';
import Senora from '../images/Senora.png';
import Viejos from '../images/Viejos.png';

const Bookcard = () => {
    const bookData = [
        {
            id: "bc-1",
            category: "Cómic",
            title: "La señora de Chicago",
            description: `La historia real y jamás contada de Alice Clement, la primera inspectora de policía de Chicago, conocida como "La Sherlock Holmes femenina", y que sin quererlo acabó entregando la ciudad al mismísimo Al Capone. Con dibujo de Pablo M. Collar.`,
            img: Senora,
            links: [{
                linkid: 1,
                linktitle: "En castellano",
                linkurl: "https://www.panini.es/shp_esp_es/la-se-ora-de-chicago-sseno001-es01.html"
            }],
            textColor: "light"
        },
    
        {
            id: "bc-2",
            category: "Novela",
            title: "El Pierrot Negro de Whitechapel",
            description: `
            15 años después de su desaparición, Jack el Destripador vuelve a Londres. Un doctor que ha perdido a la mujer que ama se obcecará en descubrir finalmente su identidad.`,
            img: Pierrot,
            links: [{
                linkid: 2,
                linktitle: "En castellano",
                linkurl: "https://www.stonbergeditorial.com/product-page/el-pierrot-negro-de-whitechapel-marc-tinent"
            }],
            textColor: "dark"
        },

        {
            id: "bc-3",
            category: "Serie",
            title: "El mort viu",
            description: `Comedia negra ganadora de un Premio Ondas sobre Llàtzer, un ni-ni que es asesinado por su padre y su hermano y que resucita de entre los muertos como si nada hubiese ocurrido.`,
            img: MortViu,
            links: [{
                linkid: 3,
                linktitle: "En Amazon Prime Video",
                linkurl: "https://www.primevideo.com/detail/0FJY97WA9EOX3H4X2MUSER6O8H"
            },
            {
                linkid: 4,
                linktitle: "En Filmin",
                linkurl: "https://www.filmin.es/serie/el-muerto-vivo"
            }
        
            ],
            textColor: "light"
        },

        {
            id: "bc-4",
            category: " Cómic",
            title: "Viejos descubridores",
            description: `Un viejo Cristóbal Colón se une a su amigo Alonso de Ojeda y su enemigo Américo Vespucci para intentar dar con la Fuente de la Eterna Juventud. Con dibujo de Lourdes Navarro.`,
            img: Viejos,
            links: [{
                linkid: 5,
                linktitle: "En catalán",
                linkurl: "https://www.panini.es/shp_esp_es/vells-descobridors-svdes001c-es01.html"
            },
            {
                linkid: 6,
                linktitle: "En castellano",
                linkurl: "https://www.panini.es/shp_esp_es/viejos-descubridores-svdes001e-es01.html"
            },
            {
                linkid: 7,
                linktitle: "En francés",
                linkurl: "https://www.editionspaquet.com/catalogue-bd/vieux-explorateurs-les"
            },
        
            ],
            textColor: "dark"
        }

    ]

    return (
        <div className="book-grid">
        {
            bookData.map(book => (
                <div key={book.id}>
                <div id={book.id} className={book.textColor === "light" ? "book-card p-3 mb-3 text-light" : "book-card p-3 mb-3 text-dark"}>
                <div className="bc-image-container d-flex justify-content-center"><img src={book.img} className="bc-image mb-3 mt-3"/></div>
                
                <div className="bc-text mb-2">
                <div className="bc-category">{book.category}</div>
                <div className="bc-title"><h3>{book.title}</h3></div>
                <div className="bc-desc">{book.description}</div>
                
                <div className="mt-3">
                {book.links.map(link => (
                    <a key={link.linkid} href={link.linkurl} className={book.textColor === "light" ? "bc-purchase me-3 text-light" : "bc-purchase me-3 text-dark"}>{link.linktitle}</a>
                ))}
                </div>
                </div>
                </div>
                </div>
            ))
        }
        </div>        
    )
  }
  
  export default Bookcard;