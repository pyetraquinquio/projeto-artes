"use client"

import ImageGallery from "@/components/ImageGallery"
//import { LoggedUserProvider } from "@/contexts/LoggedUserContext";
//import Header from "@/components/Header"
import styles from "@/app/impressionismo/galeria.module.css"
import style from "@/app/rococo/rococo.module.css"

import Link from "next/link"
import { useUserContext } from "@/contexts/user"


const fotos = [
    { img: '/roco/rococo1.png', text: "O BEIJO ROUBADO (1787), Jean-Honoré Fragonard (1732-1806).Este quadro documenta a dolce vita da nobreza. Podemos ver um rapaz roubando um beijo da moça. O detalhe, que se pode ver na imagem aumentada é que o rapaz, ousadamente, usa o pé para pisar e prender o vestido da moça, tentando impedir sua fuga. Degas foi um pintor impressionista francês, consagrado por suas pinturas femininas, sobretudo pela série das bailarinas e também pelo efeito de movimento retratado em suas obras." },
    { img: '/roco/rococo2.png', text: "A TERRA (1730), de Nicolas Lancret.Esta tela faz parte de uma série sobre os Quatro Elementos, tema popular durante o século XVII e que frequentemente assumia a forma de representações de figuras envolvidas em tarefas adequadas a cada elemento. Como por exemplo as mulheres com tarefas delicadas, mexendo com flores e cuidando de alimentos; Já os homens com tarefas mais difíceis e que usam mais força, como subir em árvores e cavar a terra." },
    { img: '/roco/rococo3.png', text: "Este quadro, pintado em 1756 por François Boucher, mostra MADAME DE POMPADOUR não como a amante de Luiz XV, mas como uma intelectual e partidária do Iluminismo. Ela é retratada como se tivesse sido interrompida quando lia um livro, e, a seu lado, a  escrivaninha está repleta, com uma pena de escrever inserida no tinteiro." },
    { img: '/roco/rococo4.png', text: "Em LA GAMME D'AMOUR, Watteau mostra seu domínio desse estilo ao retratar uma cena amorosa e galante em um jardim. A composição da pintura é notável, pois Watteau consegue criar uma sensação de movimento e fluidez através da disposição das figuras." },
]


export default function Rococo() {

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
                <h1 className={styles.titulo}>Rococó</h1>
                <p>{user.name}</p>
</div>
                <br></br>

                <p className={styles.fundo_texto}>O movimento trás a suavidade e leveza nas cores, caráter intimista, 
                linhas e formas sutis e delicadas. Além de retratar os costumes da época e a vida profana da aristocracia, 
                também eram usados temas ligados à natureza, como plantas, flores delicadas, cascatas de águas e pássaros.
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

                <iframe width="510" height="265" src="/roco/rococo.mp4"
                    title="Mapa mental sobre o Rococó" frameborder="0"
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