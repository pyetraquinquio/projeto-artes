"use client"

import ImageGallery from "@/components/ImageGallery"
import styles from "@/app/impressionismo/galeria.module.css"
import style from "@/app/barroco/barroco.module.css"
import Link from "next/link"
import { useUserContext } from "@/contexts/user"


const fotos = [
    { img: '/barro/barroco1.jpg', text: "MOÇA COM O BRINCO DE PÉROLA('Meisje met de parel') é uma pintura do artista neerlandês Johannes Vermeer de 1665.O brinco de pérola é utilizado um como ponto focal na obra. A pintura faz parte da coleção do Mauritshuis de Haia." },
    { img: '/barro/barroco2.jpg', text: "A LEITEIRA é uma pintura feita pelo pintor holandês Johannes Vermeer (1632-1675), por volta dos anos de 1658 e 1660. Essa pintura foi feita em óleo sobre tela. A obra atualmente se encontra no Rijksmuseum, na cidade de Amsterdam, na Holanda. Passou a integrar o acervo do Rijksmuseum em 1908, após um controverso processo de compra." },
    { img: '/barro/barroco3.png', text: "A composição 'Cristo na Casa de Marta e Maria' é uma obra religiosa do pintor italiano Jacopo Tintoretto. Neste quadro, o uso da luz e da perspectiva chama a atenção. A temática usada na composição é relatada unicamente no Evangelho de Lucas (10:38-42)." },
    { img: '/barro/barroco4.png', text: "O SEPULTAMENTO DE CRISTO, também conhecido como A Deposição de Cristo, é uma pintura do Caravaggio e foi pintada em 1604 para a segunda capela da direita em Santa Maria in Vallicella, uma igreja construída para o Oratório de São Filipe Néri." },
]


export default function Barroco() {

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
                        <Link href="/romantismo">Romantismo</Link>
                    </li>

                    <li>
                        <Link href="/neoclassicismo">Neoclassicismo</Link>
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
                <h1 className={styles.titulo}>Barroco</h1>
                <p>{user.name}</p>
            </div>


                <br></br>

                <p className={styles.fundo_texto}>O barroco nas artes plásticas, foi um movimento artístico que surgiu na Itália 
                no final do século XVI em decorrência as reformas protestantes e se espalhou pelos demais países da Europa. 
                Caracteriza-se pelo culto ao contraste e à oposição, morbidez e agressividade,
                 exagero nos detalhes e há uma presença forte de luz e sombra.
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

                <iframe width="510" height="265" src="/barro/barrocovideooficial.mp4"
                    title="Mapa mental sobre o Barroco" frameborder="0"
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