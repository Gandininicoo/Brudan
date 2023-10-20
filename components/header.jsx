"use client"
import Link from "next/link"
import styles from "./header.module.css"
import { useState } from "react"
import styles2 from "./menu.module.css"
import MenuDesplegable from './menu-desplegable'

export default function header() {
    const [menuOn, menuOff] = useState(false)
    let hiddenMenuClass = menuOn ? `${styles2.menumain} , ${styles2.menudesplegado} ` : `${styles2.menumain}`;
    const [bttnOn, bttnOff] = useState(false)
    let bttnClass = bttnOn ? `${styles.button} , ${styles.buttondesplegado} ` : `${styles.button}`;
    const [bttnImg1, bttnImg2] = useState(false)
    let bttnImg = bttnImg1 ? `../menu2.png` : `../menu.png`;
    return (
        <>
        <header className={styles.header}>
            <Link className={styles.logoheader} href='/'><img src="./logos/brudan-horizontal.png" alt="Mates Brudan" /></Link>
            <nav>
                <ul className={styles.navigation}>
                        <li>
                            <Link href="/mates">MATES
                                <ul className={styles.submenu}>
                                    <li><Link href="/mates-vidrio">VIDRIO</Link></li>
                                    <li><Link href="/mates-ceramica">CERAMICA</Link></li>
                                    <li><Link href="/mates-algarrobo">ALGARROBO</Link></li>
                                    <li><Link href="/mates-calabazas">CALABAZAS</Link></li>
                                    <li><Link href="/mates-portio">PORTIO</Link></li>
                                </ul>
                            </Link>
                        </li>
                        <li>
                            <Link href="/portatermos">PORTATERMOS
                                <ul className={styles.submenu}>
                                    <li><Link href="/portatermos-ecocuero">ECOCUERO</Link></li>
                                    <li><Link href="/poratetermos-cuero">CUERO</Link></li>
                                </ul>
                            </Link>
                        </li>
                        <li>
                            <Link href="/bombillas">BOMBILLAS
                                <ul className={styles.submenu}>
                                    <li><Link href="/bombillas-eco-bronce">ECO Y BRONCE</Link></li>
                                    <li><Link href="/bombillas-acero">ACERO INOXIDABLE</Link></li>
                                    <li><Link href="/bombillas-alpaca">ALPACA</Link></li>
                                </ul>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cuchillos">CUCHILLOS</Link>
                        </li>
                        <li>
                            <Link href="/tablas">TABLAS</Link>
                        </li>
                </ul>
            </nav>
            <button className={bttnClass} onClick={()=> menuOff(!menuOn) & bttnOff(!bttnOn) & bttnImg2(!bttnImg1)} style={{ backgroundImage: `url(${bttnImg})`}}></button>
        </header>
        <MenuDesplegable className={hiddenMenuClass}/>
        </>
    )
}