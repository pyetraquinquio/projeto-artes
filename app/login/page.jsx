"use client"

import { useState } from "react"
import styles from "./loginn.module.css"
import Link from "next/link";


//import LoggedUserProvider from "@/contexts/LoggedUserContext"

export default function Login() {

    const [name, setName] = useState();

    return (
        

        <div className={styles.fundo}>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className={styles.div}>

                <h1 className={styles.h1}>Olá, Victor!</h1>

             <br></br>
                <br></br>

            <nav>
                <ul>
                    <li>
                    <Link className={styles.button} href="/principal">Visitar Site</Link>
                    </li>
                </ul>
            </nav>
               
               

            </div>

            </div>

    )
}