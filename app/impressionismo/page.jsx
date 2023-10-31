"use client"

import ImageGallery from "@/components/ImageGallery"
//import { LoggedUserProvider } from "@/contexts/LoggedUserContext";
//import Header from "@/components/Header"
import styles from "@/app/impressionismo/galeria.module.css"


const fotos1 = [
    "img:'../impressio/img1.png'","texto:'Edgar Degas (1834-1917) foi um pintor impressionista francês, consagrado por suas pinturas femininas,sobretudo pela série das bailarinas e também pelo efeito de movimento retratado em suas obras.Iniciou a tela A FAMILIA BELLELLI, onde retratou suas primas, sua tia Laura e seu tio Genaro.A obra só foi concluída em 1867'",
    "img:'../impressio/img2.png'","texto:'O ALMOÇO DOS BARQUEIROS: uma obra que saia do lugar comum impressionista. Pierre-Auguste Renoir pintou este quadro entre 1880 e 1881 e chamava atenção a escolha do tema: os subúrbios.'"
    
]

const fotos2 = [
    '../impressio/img3.png',
    '../impressio/img4.png',
]
export default function Home() {
    return (
        <>
            <body className={styles.corpoo}>


                <section className={styles.img_fundo}>


                    <h1 className={styles.fundo_titulo}>Impressionismo</h1>

                    <br></br>

                    <p className={styles.fundo_texto}>O impressionismo é um movimento artístico francês surgido no final do século XIX.
                        Artistas impressionistas, como Claude Monet, retrataram paisagens com contornos imprecisos.
                        “Impressão, nascer do sol”, de Claude Monet, é a obra que deu nome ao movimento impressionista.
                    </p>

                </section>

                <br></br>

                <section>

                    <br></br>

                    <ImageGallery fotos={fotos1} />

                    <div className={styles.description}>

                        
                        

                    </div>
                </section>


                <section >

                    <ImageGallery fotos={fotos2} />

                    <div className={styles.description}>

                        <p>
                            Uma das esculturas mais conhecidas da história da arte ocidental sem dúvida é "O Pensador",
                            do artista francês Auguste Rodin.
                            A primeira versão dessa obra foi concebida em 1880 e intitulada originalmente de "O poeta".
                            Possuía cerca de 70 cm de altura. Mais tarde, a peça ganhou uma versão individual, com 1,89 m de altura.
                        </p>

                        <p>
                            Mary Cassatt participou do movimento impressionista e rompeu com os padrões acadêmicos,
                            sua pintura mais famosa é "Menina em uma poltrona azul", que foi exibida na quarta exposição impressionista.
                        </p>

                    </div>
                </section>


            </body>
        </>
    );
}