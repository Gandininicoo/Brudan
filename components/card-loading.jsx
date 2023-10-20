import styles from "./card-loading.module.css"

export default function CardLoading() {
    return (
        
        <article className={styles.cardbody}>
            <article>
                <div className={`${styles.cardimg} ${styles.skeleton}`}></div>
                <p className={`${styles.cardprice} ${styles.skeleton}`}></p>
                <h3 className={`${styles.cardtitle} ${styles.skeleton}`}></h3>
            </article>
        </article>
    )}