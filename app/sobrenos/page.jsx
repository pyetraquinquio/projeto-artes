"use client"

import ImageGallery from "@/components/ImageGallery"
//import { LoggedUserProvider } from "@/contexts/LoggedUserContext";
//import Header from "@/components/Header"
import styles from "@/app/impressionismo/galeria.module.css"
import style from '@/app/sobrenos/sobre.module.css'
import Link from "next/link";
//import Login from "../login/page";



const fotos = [
    {
        img: '/integrantes/pyh.jpg',
        text: "Pyetra tem a posição de leader no grupo, tem 16 anos e seu tempo de estudo no SESI é de 10 anos."
    },

    {
        img: '/integrantes/emily.png',
        text: "Emily tem a posição de sub-leader no grupo, tem 17 anos e seu tempo de estudo no SESI é de 9 meses."
    },

    {
        img: '/integrantes/maria.jpg',
        text: "Maria Eduarda tem 17 anos e seu tempo de estudo no SESI é de 9 meses. Teve a sua participação nesse projeto como editora."
    },

    {
        img: '/integrantes/gaby.png',
        text: "Gabrielly tem 16 anos e seu tempo de estudo no SESI é de 10 anos. Teve a sua participação nesse projeto como editora."
    },

]


export default function SobreNos() {
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

                </ul>
            </nav>

            <section className={style.img_fundo}>
                <div>
                    <h1 className={styles.titulo}>Sobre nós</h1>

                </div>

                <br></br>

                <p className={styles.fundo_texto}>Nós somos o Grupo 05 e estamos fazendo esse projeto em colaboração do SENAI com a disciplina de Artes do SESI.
                    O projeto tem o propósito de navegar em uma galeria dos movimentos artísticos.

                </p>

            </section>

            <br></br>
            <br></br>


            <h2 className={styles.h2}>Integrantes</h2>


            <br></br>
            <br></br>

            <ImageGallery fotos={fotos} />

            <br></br>
            <br></br>



            <footer>
                <h2>Grupo 05</h2>
                <h2>SESI SENAI</h2>
                <h2>2023</h2>
            </footer>

        </>
    );
};