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
        </>
    )
}