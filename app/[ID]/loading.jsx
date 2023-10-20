import styles from "./bigproduct.module.css"
import skeleton from "../../components/card-loading.module.css"
import CardLoading from "../../components/card-loading"
export default function Loading() {
    return (
        <>
            <section className={styles.body}>
                <h1 className={`${styles.title} ${skeleton.skeleton}`}></h1>
                <div className={`${styles.img} ${skeleton.skeleton}`}></div>
                <p className={`${styles.description} ${skeleton.skeleton}`}></p>
                <div className={`${styles.price} ${skeleton.skeleton}`}></div>
                <p className={`${styles.category} ${skeleton.skeleton}`} ></p>
                <a className={styles.whatsappbttn} target='_blank'> <p>Consulta por whatsapp</p></a>
            </section>
            <section className="homepageproductsbody">
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
            </section>
        </>
    )
}