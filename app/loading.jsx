import styles from './home.module.css'
import Link from 'next/link'
import CardLoading from "../components/card-loading"
export default function Loading(){
    return(
        <>
            <div className="homeBanner"></div>
            <section className={styles.homeSquaresbody}>
                <article>
                    <Link href='/mates' className={styles.mates}><p>Mates</p></Link>
                </article>
                <article>
                    <Link href='/bombillas' className={`${styles.productoshomesecundarios} ${styles.bombilla}`}><p>Bombillas</p></Link>
                    <Link href='/portatermos' className={`${styles.productoshomesecundarios} ${styles.portatermo}`}><p>Portatermos</p></Link>
                    <Link href='/cuchillos' className={`${styles.productoshomesecundarios} ${styles.cuchillo}`}><p>Cuchillos</p></Link>
                    <Link href='/cuchillos' className={`${styles.productoshomesecundarios} ${styles.asado}`}><p>Asado</p></Link>
                </article>
            </section>
            <section className="homepageproductsbody"> 
                <h2 className="homeTag">NO TE LOS PODES PERDER:</h2>
                <CardLoading/>
                <CardLoading/>
                <CardLoading/>
                <CardLoading/>
            </section>
            <div className="homeBanner2"></div>
            <section className={styles.homefooter}>
                <p>Bru-Dan nace como un hijo de <a href="">El Remanso</a>, una distribuidora de regionales con mas de 20 años de experiencia. <br/>
                Su creador, en el afán de acercar sus productos de la mas alta calidad a todo el mundo, decidio darle vida a este proyecto bajo las significativas siglas BRU-DAN. <br/>
                Bruno y Dante, hijos de Sergio y su fuente de inspiración.</p>
            </section>
        </>
    )
}