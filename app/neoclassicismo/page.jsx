"use client"

import ImageGallery from "@/components/ImageGallery"
import styles from "@/app/impressionismo/galeria.module.css"
import style from "@/app/neoclassicismo/neo.module.css"
import Link from "next/link"
import { useUserContext } from "@/contexts/user"


const fotos = [
    { img: '/neo/neo1.png', text: "O quadro 'O Juramento dos Horácios' (1784), de Jacques-Louis David, celebra a arte, a vida e a moralidade da Roma antiga. A República romana estava em guerra e a disputa devia ser resolvida por um combate mortal entre três irmãos romanos, os Horácios, e três irmãos inimigos, os Curiácios." },
    { img: '/neo/neo5.png', text: "A obra 'A Morte de Sócrates', de Jacques Louis David, representa a cena de morte do filósofo grego Sócrates, por ter sido contra as ideias dos atenienses e corromper a mente dos mais jovens. " },
    { img: '/neo/neo6.png', text: "A obra 'O Retrato de Mrs. Serizy' (1794), de Jacques-Louis David, mostra a Madame Serizy em um ambiente com seu filho, tendo acabado de voltar de um passeio. Suas bochechas são rosadas e ela carrega um monte de flores silvestres que são pintadas de uma forma animada mas meticuloso." },
    { img: '/neo/neo4.png', text: "A obra 'Madame Ingres' (1859), Jean-Auguste-Dominique Ingres, foi uma pintura do período neoclassicista." },
]


export default function Neo() {

    const { user } = useUserContext();
    return (
        <>

            <nav>
                <ul>
                    <li>
                        <Link href="/principal">Início</Link>
                    </li>

                    <li>
                        <Link href="/renascimento">Renascimento</Link>
                    </li>

                    <li>
                        <Link href="/barroco">Barroco</Link>
                    </li>

                    <li>
                        <Link href="/romantismo">Romantismo</Link>
                    </li>


                    <li>
                        <Link href="/rococo">Rococó</Link>
                    </li>

                    <li>
                        <Link href="/realismo">Realismo</Link>
                    </li>

                    <li>
                        <Link href="/impressionismo">Impressionismo</Link>
                    </li>

                    <li>
                        <Link href="/abstracionismo">Abstracionismo</Link>
                    </li>

                    <li>
                        <Link href="/sobrenos">Equipe</Link>
                    </li>
                </ul>
            </nav>

            <section className={style.img_fundo}>

            <div className="n">
                <h1 className={styles.titulo}>Neoclassicismo</h1>
                <p>{user.name}</p>
</div>
                <br></br>

                <p className={styles.fundo_texto}>O Neoclassicismo foi um movimento artístico-cultural que surgiu na Europa, no século XVIII, com características que marcaram as diversas manifestações artísticas, como a pintura, escultura, literatura e arquitetura. Foi um movimento influenciado pelo Iluminismo, pela Revolução Francesa e pela Revolução Industrial.
                </p>

            </section>

            <br></br>
            <br></br>

            <h2 className={styles.h2}>Galeria de Imagens</h2>

            <br></br>
            <br></br>

            <ImageGallery fotos={fotos} />

            <br></br>
            <br></br>

            <h2 className={styles.h1}>Vídeo Explicativo</h2>

            <br></br>
            <br></br>

            <div>

                <iframe width="510" height="265" src="/neo/NEOCLASSICISMO.mp4"
                    title="Mapa mental sobre o Neoclassicismo" frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>

            </div>

            <br></br>
            <br></br>


            <footer className={styles.footer}>
                <h2>Grupo 05</h2>
                <h2>SESI SENAI</h2>
                <h2>2023</h2>
            </footer>

        </>
    );
}