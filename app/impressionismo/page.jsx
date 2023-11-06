"use client"

import ImageGallery from "@/components/ImageGallery"
import { LoggedUserProvider } from "@/contexts/LoggedUserContext";
//import Header from "@/components/Header"
import styles from "@/app/impressionismo/galeria.module.css"
import Link from "next/link";
//import Login from "../login/page";


const fotos = [
    { img: '/impressio/img1.png', text: "Edgar Degas foi um pintor impressionista francês, consagrado por suas pinturas femininas, sobretudo pela série das bailarinas e também pelo efeito de movimento retratado em suas obras. Iniciou a tela 'A FAMÍLIA BALLELLI', onde retratou suas primas, sua tia Laura e seu tio Genaro. A obra só foi concluída em 1867." },
    { img: '/impressio/img2.png', text: "'O ALMOÇO DOS BARQUEIROS': uma obra que saia do lugar comum impressionista. Pierre-Auguste Renoir pintou este quadro entre 1880 e 1881 e chamava atenção a escolha do tema: os subúrbios." },
    { img: '/impressio/img3.jpg', text: "'DIA DE VERÃO' possui características da pintura impressionista como as pinceladas grossas, Berthe escolheu uma paisagem com duas mulheres num barco, uma cena do cotidiano. Essa obra possui a influência de Éduoard Manet, que se tornou um amigo e cunhado muito intrometido, que decidia tudo sobre as pinturas de Berthe, chegando até mesmo a pintar sobre suas telas, como aconteceu em Menina no Sofá." },
    { img: '/impressio/img4.png', text: "Mary Cassatt participou do movimento impressionista e rompeu com os padrões acadêmicos, sua pintura mais famosa é 'MENINA EM UMA POLTRONA AZUL', que foi exibida na quarta exposição impressionista." },
]


export default function Impressionismo() {
    return (
        <>

            <nav>
                <ul>
                    <li>
                        <Link href="/principal">Início</Link>
                    </li>

                    <li>
                        <Link href="/abstracionismo">Abstracionismo</Link>
                    </li>

                    <li>
                        <Link href="/barroco">Barroco</Link>
                    </li>

                    <li>
                        <Link href="/neoclassicismo">Neoclassicismo</Link>
                    </li>

                    <li>
                        <Link href="/realismo">Realismo</Link>
                    </li>

                    <li>
                        <Link href="/renascimento">Renascimento</Link>
                    </li>

                    <li>
                        <Link href="/rococo">Rococó</Link>
                    </li>

                    <li>
                        <Link href="/Romantismo">Romantismo</Link>
                    </li>
                </ul>
            </nav>


            <section className={styles.img_fundo}>

            <div>
                <h1 className={styles.titulo}>Impressionismo</h1>
                <LoggedUserProvider/>
                </div>

                <br></br>

                <p className={styles.fundo_texto}>O impressionismo é um movimento artístico francês surgido no final do século XIX.
                    Artistas impressionistas, como Claude Monet, retrataram paisagens com contornos imprecisos.
                    “Impressão, nascer do sol”, de Claude Monet, é a obra que deu nome ao movimento impressionista.
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

            <footer>
                <h2>Grupo 05</h2>
                <h2>SESI SENAI</h2>
                <h2>2023</h2>
            </footer>

        </>
    );
}