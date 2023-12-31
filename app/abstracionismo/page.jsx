"use client";

import ImageGallery from "@/components/ImageGallery";
import styles from "@/app/impressionismo/galeria.module.css";
import style from "@/app/abstracionismo/abs.module.css";
import Link from "next/link";
import { useUserContext } from "@/contexts/user";

const fotos = [
  {
    img: "/abs/abstracionismo1.jpg",
    text: "COMPOSIÇÃO COM VERMELHO, AZUL E AMARELO é uma pintura abstrata famosa criada por Piet Mondrian em 1930. A pintura é dividida em uma grade de formas retangulares, com linhas pretas definindo suas bordas. O tema desta pintura é puramente abstrato, pois apresenta apenas formas geométricas, linhas e cores primárias.",
  },
  {
    img: "/abs/abstracionismo3.jpg",
    text: "O quadro LINHA TRANVERSAL criada por Wassily Kandinsky, foi pintado em 1923 e hoje faz parte da coleção do Museu Kunstsammlung Nordrhein-Westfalen na cidade de Dusseldorf, Alemanha.",
  },
  {
    img: "/abs/abstracionismo2.jpg",
    text: "A obra COMPOSIÇÃO IX criada pelo artista russo Wassily Kandinsky em 1936, é uma pintura a óleo sobre tela. A obra é caracterizada por uma série de listas diagonais coloridas, que formam o plano de fundo para os elementos geométricos e biomórficos, que lembram plâncton e microorganismos subaquáticos.",
  },
  {
    img: "/abs/abstracionismo4.jpg",
    text: "A obra AMARELO-VERMELHO-AZUL foi pintado pelo artista russo Wassily Kandinsky em 1925.  em 1925. O lado esquerdo da caracteriza-se por cores vivas, com inclusão de linhas direitas, retângulos e quadrados.  É uma pintura óleo sobre tela que inclui as cores primárias, em elementos abstratos, triângulos, quadrados e círculos. O lado esquerdo caracteriza-se por cores vivas, com inclusão de linhas direitas, retângulos e quadrados.",
  },
];

export default function Abstracionismo() {
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
            <Link href="/realismo">Realismo</Link>
          </li>

          <li>
            <Link href="/impressionismo">Impressionismo</Link>
          </li>

          <li>
            <Link href="/sobrenos">Equipe</Link>
          </li>
        </ul>
      </nav>

      <section className={style.imgfundo}>
        <div className="n">
          <h1 className={styles.titulo}>Abstracionismo</h1>
          <p>{user.name}</p>
        </div>

        <br></br>

        <p className={styles.fundo_texto}>
          O abstracionismo é um estilo artístico moderno das artes visuais que
          não representa objetos próprios da nossa realidade concreta exterior.
          Ao invés disso, usa as relações formais entre cores, linhas e
          superfícies para compor a realidade da obra, de uma maneira não
          representacional.
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
        <iframe
          width="510"
          height="265"
          src="/abs/abstracionismovideooficial.mp4"
          title="Mapa mental sobre o Abstracionismo"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
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
