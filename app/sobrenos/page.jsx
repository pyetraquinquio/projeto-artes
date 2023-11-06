"use client"

import ImageGallery from "@/components/ImageGallery"
//import { LoggedUserProvider } from "@/contexts/LoggedUserContext";
//import Header from "@/components/Header"
import styles from "@/app/impressionismo/galeria.module.css"
<<<<<<< HEAD
import Link from "next/link"


const fotos = [
    { img: '/impressio/img1.png', text: "Edgar Degas foi um pintor impressionista francês, consagrado por suas pinturas femininas, sobretudo pela série das bailarinas e também pelo efeito de movimento retratado em suas obras. Iniciou a tela 'A FAMÍLIA BALLELLI', onde retratou suas primas, sua tia Laura e seu tio Genaro. A obra só foi concluída em 1867." },
    { img: '/impressio/img2.png', text: "'O ALMOÇO DOS BARQUEIROS': uma obra que saia do lugar comum impressionista. Pierre-Auguste Renoir pintou este quadro entre 1880 e 1881 e chamava atenção a escolha do tema: os subúrbios." },
    { img: '/impressio/img3.jpg', text: "'DIA DE VERÃO' possui características da pintura impressionista como as pinceladas grossas, Berthe escolheu uma paisagem com duas mulheres num barco, uma cena do cotidiano. Essa obra possui a influência de Éduoard Manet, que se tornou um amigo e cunhado muito intrometido, que decidia tudo sobre as pinturas de Berthe, chegando até mesmo a pintar sobre suas telas, como aconteceu em Menina no Sofá." },
    { img: '/impressio/img4.png', text: "Mary Cassatt participou do movimento impressionista e rompeu com os padrões acadêmicos, sua pintura mais famosa é 'MENINA EM UMA POLTRONA AZUL', que foi exibida na quarta exposição impressionista." },
=======
import Link from "next/link";
//import Login from "../login/page";


const fotos = [
    { img: '/integrantes/pyh.jpg',
     text: "Pyetra tem a posição de leader no grupo, tem 16 anos e seu tempo de estudo no SESI é de 10 anos." },

    { img: '/integrantes/emily.png', 
    text: "Emily tem a posição de sub-leader no grupo, tem 17 anos e seu tempo de estudo no SESI é de 9 meses." },
    
    { img: '/integrantes/maria.jpg', 
    text: "Maria Eduarda tem 17 anos e seu tempo de estudo no SESI é de 9 meses. Teve a sua participação nesse projeto como editora." },
    
    { img: '/integrantes/gaby.png', 
    text: "Gabrielly tem 16 anos e seu tempo de estudo no SESI é de 10 anos. Teve a sua participação nesse projeto como editora." },
>>>>>>> e8e789a2002184035a137043b097154c8af794fa
]


export default function Impressionismo() {
    return (
        <>

<<<<<<< HEAD
<nav>
=======
            <nav>
>>>>>>> e8e789a2002184035a137043b097154c8af794fa
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
<<<<<<< HEAD
                        <Link href="/rococo">Rococo</Link>
=======
                        <Link href="/rococo">Rococó</Link>
>>>>>>> e8e789a2002184035a137043b097154c8af794fa
                    </li>

                    <li>
                        <Link href="/romantismo">Romantismo</Link>
                    </li>

                    <li>
<<<<<<< HEAD
                        <Link href="/sobrenos">Sobre nós</Link>
=======
                        <Link href="/impressionismo">Impressionismo</Link>
>>>>>>> e8e789a2002184035a137043b097154c8af794fa
                    </li>
                </ul>
            </nav>

<<<<<<< HEAD
            <section className={styles.img_fundo}>


                <h1 className={styles.titulo}>Impressionismo</h1>

                <br></br>

                <p className={styles.fundo_texto}>O impressionismo é um movimento artístico francês surgido no final do século XIX.
                    Artistas impressionistas, como Claude Monet, retrataram paisagens com contornos imprecisos.
                    “Impressão, nascer do sol”, de Claude Monet, é a obra que deu nome ao movimento impressionista.
=======

            <section className={styles.img_fundo}>

            <div>
                <h1 className={styles.titulo}>Sobre nós</h1>
                
                </div>

                <br></br>

                <p className={styles.fundo_texto}>Nós somos o Grupo 05 e estamos fazendo esse projeto em colaboração do SENAI com a disciplina de Artes do SESI.
                   O projeto tem o propósito de navegar em uma galeria dos movimentos artísticos.
>>>>>>> e8e789a2002184035a137043b097154c8af794fa
                </p>

            </section>

            <br></br>
            <br></br>

<<<<<<< HEAD
            <h2 className={styles.h2}>Galeria de Imagens</h2>
=======
            <h2 className={styles.h2}>Integrantes</h2>
>>>>>>> e8e789a2002184035a137043b097154c8af794fa

            <br></br>
            <br></br>

            <ImageGallery fotos={fotos} />

            <br></br>
            <br></br>


<<<<<<< HEAD
            <footer className={styles.footer}>
=======
            <footer>
>>>>>>> e8e789a2002184035a137043b097154c8af794fa
                <h2>Grupo 05</h2>
                <h2>SESI SENAI</h2>
                <h2>2023</h2>
            </footer>

        </>
    );
}