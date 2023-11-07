"use client"

import ImageGallery from "@/components/ImageGallery"
//import { LoggedUserProvider } from "@/contexts/LoggedUserContext";
//import Header from "@/components/Header"
import styles from "@/app/impressionismo/galeria.module.css"
import Link from "next/link"
import style from "@/app/renascimento/renas.module.css"


const fotos = [
    { img: '/renas/renas.png', text: "Edgar Degas foi um pintor impressionista francês, consagrado por suas pinturas femininas, sobretudo pela série das bailarinas e também pelo efeito de movimento retratado em suas obras. Iniciou a tela 'A FAMÍLIA BALLELLI', onde retratou suas primas, sua tia Laura e seu tio Genaro. A obra só foi concluída em 1867." },
    { img: '/renas/renascimento4.png', text: "Mary Cassatt participou do movimento impressionista e rompeu com os padrões acadêmicos, sua pintura mais famosa é 'MENINA EM UMA POLTRONA AZUL', que foi exibida na quarta exposição impressionista." },
    { img: '/renas/renascimento3.jpg', text: "'O ALMOÇO DOS BARQUEIROS': uma obra que saia do lugar comum impressionista. Pierre-Auguste Renoir pintou este quadro entre 1880 e 1881 e chamava atenção a escolha do tema: os subúrbios." },
    { img: '/renas/renascimento1.jpg', text: "'DIA DE VERÃO' possui características da pintura impressionista como as pinceladas grossas, Berthe escolheu uma paisagem com duas mulheres num barco, uma cena do cotidiano. Essa obra possui a influência de Éduoard Manet, que se tornou um amigo e cunhado muito intrometido, que decidia tudo sobre as pinturas de Berthe, chegando até mesmo a pintar sobre suas telas, como aconteceu em Menina no Sofá." },
]


export default function Renascimento() {
    return (
        <>

<nav>
                <ul>
                    <li>
                        <Link href="/principal">Início</Link>
                    </li>

                    <li>
                        <Link href="/barroco">Barroco</Link>
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


                <h1 className={styles.titulo}>Renascimento</h1>

                <br></br>

                <p className={styles.fundo_texto}>O renascimento nas artes plásticas, teve início na Itália no século XV, mas se fortaleceu no século XIV.
                renascimento foi marcado por intensas transformações sociais, políticas, financeiras e culturais. 
                Caracteriza-se a racionalidade, busca pela perfeição, o antropocentrismo,
                 o realismo e o surgimento de técnicas avançadas. 
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

                <iframe width="510" height="265" src="/renas/renascimentovideooficial.mp4"
                    title="Mapa mental sobre o Renascimento" frameborder="0"
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