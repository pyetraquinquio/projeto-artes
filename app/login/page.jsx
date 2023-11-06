"use client"

import { useState } from "react"
import styles from "./loginn.module.css"
import caminho from "@/components/Button";

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

                <h1 className={styles.h1}>Cadastre-se</h1>

                <br></br>
                <br></br>

                <label className={styles.label}>Nome:</label>
                <br></br>
                <input

                    type="string"
                    placeholder="Digite seu nome" required
                    value={name}
                    onChange={(event) => setName(event.target.value)}

                ></input>

                <br></br>
                <br></br>

                <button onClick={caminho()} className={styles.button}> Entrar</button>

            </div>

            </div>

    )
}