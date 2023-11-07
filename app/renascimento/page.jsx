"use client"

import ImageGallery from "@/components/ImageGallery"
//import { LoggedUserProvider } from "@/contexts/LoggedUserContext";
//import Header from "@/components/Header"
import styles from "@/app/impressionismo/galeria.module.css"
import Link from "next/link"
import style from "@/app/renascimento/renas.module.css"


const fotos = [
    { img: '/renas/renas1.png', text: "Edgar Degas foi um pintor impressionista francês, consagrado por suas pinturas femininas, sobretudo pela série das bailarinas e também pelo efeito de movimento retratado em suas obras. Iniciou a tela 'A FAMÍLIA BALLELLI', onde retratou suas primas, sua tia Laura e seu tio Genaro. A obra só foi concluída em 1867." },
    { img: '/renas/renascimento8.jpeg', text: "'Entrega das chaves a São Pedro' é uma pintura criada por Perugino e seus assistentes. Essa pintura foi datado acerca de 1482 , que faz parte da decoração do registro central da Capela Sistina do Vaticano ." },
    { img: '/renas/renascimento3.jpg', text: "'O ALMOÇO DOS BARQUEIROS': uma obra que saia do lugar comum impressionista. Pierre-Auguste Renoir pintou este quadro entre 1880 e 1881 e chamava atenção a escolha do tema: os subúrbios." },
    { img: '/renas/renascimento12.jpg', text: "O Nascimento de Vênus O quadro O nascimento de Vénus, pintado por Sandro Botticelli em 1482, faz parte, em conjunto com a tela A Alegoria da primavera realizada entre 1477 e 1478, de uma encomenda de Lorenzo di Pier Francesco, primo do influente Lourenço de Medicis, o Magnífico, que as queria colocar numa das Villas da família" },
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