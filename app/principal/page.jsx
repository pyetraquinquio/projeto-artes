"use client"

import styles from "@/app/principal/parallax.module.css"
import Link from "next/link";
import { useUserContext } from "@/contexts/user"

export default function Parallax(){
    const { user } = useUserContext();


    return( 
         <>
        
        <header className={styles.topo}>

       <br></br>
       <br></br>


        <h1 className={styles.movi}>Movimentos Artísticos</h1>

        <p className={styles.nome}>{user.name}</p>

        <nav>
            <ul>
                <li>
                    <Link className={styles.strong} href="/sobrenos">Sobre nós</Link>
                </li>

                <li>
                    <Link className={styles.strong} href="/login">Log out</Link>
                </li>
            </ul>
        </nav>

        
        

       <br></br>
       <br></br>
        </header>

    <div className={styles.parallax1}>
        <Link className={styles.title} href="/renascimento">RENASCIMENTO</Link>
    </div>

    <div className={styles.texto}>
       <br></br>
       <br></br>
       <br></br>
    </div>

    <div className={styles.parallax2}>
        <Link className={styles.title2} href="/barroco">BARROCO</Link>
    </div>

    <div className={styles.texto}>
       <br></br>
       <br></br>
       <br></br>
    </div>

    <div className={styles.parallax3}>
      <Link className={styles.title} href="/romantismo">ROMANTISMO</Link>
    </div>

    <div className={styles.texto}>
       <br></br>
       <br></br>
       <br></br>
    </div>

    <div className={styles.parallax4}>
    <Link className={styles.title} href="/neoclassicismo">NEOCLASSICISMO</Link>    
    </div>

    <div className={styles.texto}>
       <br></br>
       <br></br>
       <br></br>
    </div>

    <div className={styles.parallax5}>
        <Link className={styles.title2} href="/rococo">ROCOCÓ</Link>  
    </div>

    <div className={styles.texto}>
       <br></br>
       <br></br>
       <br></br>
    </div> 

    <div className={styles.parallax6}>
        <Link className={styles.title2} href="/realismo">REALISMO</Link>
    </div>

    <div className={styles.texto}>
       <br></br>
       <br></br>
       <br></br>
    </div> 
    
    <div className={styles.parallax7}>
        <Link className={styles.title} href="/impressionismo">IMPRESSIONISMO</Link>
    </div>

    <div className={styles.texto}>
       <br></br>
       <br></br>
       <br></br>
    </div> 

    <div className={styles.parallax8}>
        <Link className={styles.title} href="/abstracionismo">ABSTRACIONISMO</Link>
    </div>

    <div className={styles.texto}>
       <br></br>
       <br></br>
       <br></br>
    </div> 

       
            <footer>
                <h2>Grupo 05</h2>
                <h2>SESI SENAI</h2>
                <h2>2023</h2>
            </footer>

        </>
    );
}