import styles from "./card.module.css"
import Link from "next/link"

export default function Card(props) {
    let producthref = encodeURI(props.productname.toLowerCase())
    return (
        
        <article className={styles.cardbody}>
            <Link href='../app/[ID]' as={`/${producthref}`} >
                <img className={styles.cardimg} src={props.imghref} alt={props.productname} />
                <p className={styles.cardprice}>${props.productprice}</p>
                <h3 className={styles.cardtitle}> {props.productname}</h3>
            </Link>
        </article>
    )}