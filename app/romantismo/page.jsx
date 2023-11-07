"use client"

import ImageGallery from "@/components/ImageGallery"
//import { LoggedUserProvider } from "@/contexts/LoggedUserContext";
//import Header from "@/components/Header"
import styles from "@/app/impressionismo/galeria.module.css"
import style from "@/app/romantismo/roman.module.css"
import Link from "next/link"


const fotos = [
    { img: '/roman/romantismo1.png', text: "A obra 'Adoração dos Magos' (1828), é uma pintura romântica de Domingos Sequeira, que possui um verdadeiro testamento artístico, expressando as preocupações sobre a cor, a luz, a forma e também a busca da tradição clássica e o romantismo." },
    { img: '/roman/romantismo2.png', text: "A obra 'Liberdade guiando o povo', de Eugène Delacroix (1789-1863), é uma pintura que retrata a Revolução de 1830, um importante acontecimento histórico ocorrido na França no mesmo ano em que a obra foi realizada." },
    { img: '/roman/romantismo3.png', text: "A obra 'Iracema' (1884), de obra de José Maria de Medeiros (1849-1925), pode ser uma amostragem da proposta temática então presente na mentalidade artística do Brasil Imperial. A tela participou da famosa Exposição Geral de 1884, da Academia Imperial de Belas Artes." },
    { img: '/roman/romantismo4.png', text: "A obra 'Moça com Livro' (1880), de José Ferraz de Almeida Júnior (1850-1899), foi uma pintura do romantismo brasileiro." },
]


export default function Romantismo() {
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
                        <Link href="/sobrenos">Sobre nós</Link>
                    </li>
                </ul>
            </nav>

            <section className={style.img_fundo}>


                <h1 className={styles.titulo}>Romantismo</h1>

                <br></br>

                <p className={styles.fundo_texto}>O romantismo é um movimento artístico e cultural que apresenta uma visão de mundo centrada no ser humano com destaque para as sensações humanas e a liberdade de pensamento.
                  Surgiu na Europa no século XVIII durante a revolução industrial e do iluminismo e durou até o século XIX.
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

                <iframe width="510" height="265" src="/roman/video-roman.mp4"
                title="Mapa mental sobre o Romantismo" frameborder="0"
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