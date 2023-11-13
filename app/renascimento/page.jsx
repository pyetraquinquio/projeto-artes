"use client"

import ImageGallery from "@/components/ImageGallery"
//import { LoggedUserProvider } from "@/contexts/LoggedUserContext";
import styles from "@/app/impressionismo/galeria.module.css"
import Link from "next/link"
import style from "@/app/renascimento/renas.module.css"
import { useUserContext } from "@/contexts/user"


const fotos = [
    { img: '/renas/renas1.png', text: " obra 'A Primavera' (1482), também conhecido como Alegoria da Primavera, é um quadro do pintor Sandro Botticelli. A pintura utiliza a técnica de têmpera sobre madeira. O quadro retrata a alegoria da chegada dessa estação." },
    { img: '/renas/renascimento8.jpeg', text: "'Entrega das chaves a São Pedro' é uma pintura criada por Perugino e seus assistentes. Essa obra tinha como objetivo fazer um paralelo entre a vida do profeta Moisés (Antigo Testamento) e a de Jesus Cristo (Segundo Testamento)." },
    { img: '/renas/renascimento3.jpg', text: "A obra 'A Última Ceia' de Leonardo Da Vinci é uma pintura que retrata as passagens bíblicas que contam sobre a traição de Jesus Cristo por um dos seus discípulos. A obra com 460 por 880 cm, foi feita na parede de uma igreja em Milão, na Itália.  A Última Ceia de Leonardo Da Vinci começou a ser pintada pelo artista em 1495." },
    { img: '/renas/renascimento12.jpg', text: "O quadro NASCIMENTO DE VÊNUS, pintado por Sandro Botticelli em 1482, faz parte, em conjunto com a tela A Alegoria da primavera realizada entre 1477 e 1478." },
]


export default function Renascimento() {
    const { user } = useUserContext();
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

            <div className="n">
                <h1 className={styles.titulo}>Renascimento</h1>
                <p>{user.name}</p>
</div>
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