"use client"

import ImageGallery from "@/components/ImageGallery"
//import { LoggedUserProvider } from "@/contexts/LoggedUserContext";
//import Header from "@/components/Header"
import styles from "@/app/impressionismo/galeria.module.css"
import style from "@/app/barroco/barroco.module.css"
import Link from "next/link"


const fotos = [
    { img: '/barro/barroco1.jpg', text: "Edgar Degas foi um pintor impressionista francês, consagrado por suas pinturas femininas, sobretudo pela série das bailarinas e também pelo efeito de movimento retratado em suas obras. Iniciou a tela 'A FAMÍLIA BALLELLI', onde retratou suas primas, sua tia Laura e seu tio Genaro. A obra só foi concluída em 1867." },
    { img: '/barro/barroco2.jpg', text: "'O ALMOÇO DOS BARQUEIROS': uma obra que saia do lugar comum impressionista. Pierre-Auguste Renoir pintou este quadro entre 1880 e 1881 e chamava atenção a escolha do tema: os subúrbios." },
    { img: '/barro/barroco3.png', text: "'DIA DE VERÃO' possui características da pintura impressionista como as pinceladas grossas, Berthe escolheu uma paisagem com duas mulheres num barco, uma cena do cotidiano. Essa obra possui a influência de Éduoard Manet, que se tornou um amigo e cunhado muito intrometido, que decidia tudo sobre as pinturas de Berthe, chegando até mesmo a pintar sobre suas telas, como aconteceu em Menina no Sofá." },
    { img: '/barro/barroco4.png', text: "Mary Cassatt participou do movimento impressionista e rompeu com os padrões acadêmicos, sua pintura mais famosa é 'MENINA EM UMA POLTRONA AZUL', que foi exibida na quarta exposição impressionista." },
]


export default function Barroco() {
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
<<<<<<< HEAD
                        <Link href="/romantismo">Romantismo</Link>
=======
                        <Link href="/barroco">Impressionismo</Link>
>>>>>>> ff1e04a715c9e3a9709f0546ac256c0057ef735b
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
                        <Link href="/realismo">Impressionismo</Link>
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


                <h1 className={styles.titulo}>Barroco</h1>

                <br></br>

                <p className={styles.fundo_texto}>O barroco é um movimento artístico que compreende múltiplas manifestações 
                artísticas — literatura, pintura, arquitetura, música — produzidas entre o final do século XVI e o 
                início do século XVIII.
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