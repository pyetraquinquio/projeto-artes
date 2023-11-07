"use client"

import ImageGallery from "@/components/ImageGallery"
//import { LoggedUserProvider } from "@/contexts/LoggedUserContext";
//import Header from "@/components/Header"
import styles from "@/app/impressionismo/galeria.module.css"
import style from "@/app/realismo/realismo.module.css"
import Link from "next/link"
import { useUserContext } from "@/contexts/user"


const fotos = [
    { img: '/rea/realismo1.png', text: "O HOMEM DESESPERADO (1843 e 1845). Ao invés de mostrar um retrato, tradicionalmente vertical, Courbet usa o formato de paisagem (retangular e horizontal), que cria um espaço maior para a abertura dos braços, envoltos por uma camisa branca, em seu gestual aflitivo." },
    { img: '/rea/realismo2.png', text: "ANGELUS(1857-1859) de Jean-François Millet mostra dois camponeses rezando, agradecendo pela colheita obtida através do suor e do esforço de muitos dias. Ele de cabeça baixa, segurando o chapéu, ela leva as mãos ao peito num sinal de devoção. A obra foi feita com tons escuros e recursos de sombreamento, o que tornam o momento da oração ainda mais profundo." },
    { img: '/rea/realismo3.png', text: "ALMOÇO NA RELVA (1863) de Édouard Manet. Uma mulher nua está sentada numa clareira, displicentemente, fazendo um piquenique com dois rapazes galantes, vestidos com trajes da época." },
    { img: '/rea/realismo4.png', text: "O VIOLEIRO (1899) de Almeida Júnior. Com o ciclo de pinturas “caipiras”, deslocou o foco da busca pela definição do “tipo nacional” para um contexto mais regional, ao dotar a representação do camponês do interior da província com a nobreza da pintura histórica brasileira." },
]


export default function Realismo() {

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
                        <Link href="/neoclassicismo">Neoclassicismo</Link>
                    </li>

                    <li>
                        <Link href="/rococo">Rococó</Link>
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
                <h1 className={styles.titulo}>Realismo</h1>
                <p>{user.name}</p>
                </div>
                <br></br>

                <p className={styles.fundo_texto}>O realismo foi um movimento literário e artístico que teve início em meados do
                    século XIX, na França. Como o próprio nome sugere, essa manifestação cultural significou um olhar mais realista e
                    objetivo sobre a existência e as relações humanas, surgindo como oposição ao romantismo e sua visão idealizada da vida.
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

                <iframe width="510" height="265" src="/rea/realismo.mp4"
                    title="Mapa mental sobre o Realismo" frameborder="0"
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