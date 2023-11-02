import Link from "next/link"
import styles from "./bigproduct.module.css"
import Recomendados from "../../components/recomendados"
async function fetchProducto() {
    const res = await fetch('https://script.google.com/macros/s/AKfycbxXfw1bbf0CqbQi6dxiNtxOHLA5z37LzR1XyviauVSjHT5wi7zZfmcezw9dFBLLAbangw/exec', { cache: 'no-store' },{"method":"GET"})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

export default async function productoExpandido({ params }) {
    let listaRevisar = await fetchProducto()
    const { ID } = params
    const productIdentifier = decodeURI(ID);
    let productidentificated = productIdentifier.toUpperCase()
    let arrprodIdentificated = []
    listaRevisar.map(producto =>{if (producto.nombre.toUpperCase()===(productidentificated)){arrprodIdentificated.push(producto)}})
    let mensajewpp = `Hola me comunico para consultar por la disponibilidad y los medios de pago disponibles para este producto: https://matesbrudan.com.ar/${encodeURI(ID)}`
    return (
        <article className={styles.main}>
            {arrprodIdentificated.map(producto =>(
            <>
            <section className={styles.body}> 
                <h1 className={styles.title}>{producto.nombre}</h1>
                <img src={`./productos/${producto.img}.jpg`} alt={producto.nombre} className={styles.img} />
                <p className={styles.description}>{producto.descripcion}</p>
                <h4 className={styles.price}>${producto.precio}</h4>
                <p className={styles.category} >Categoria: <Link href={producto.categoria.toLowerCase()}>{producto.categoria.toUpperCase()}</Link></p>
                <a href={`https://wa.me/5403444405766?text=${mensajewpp}`} className={styles.whatsappbttn} target='_blank' rel="nofollow"> <p>Consulta por whatsapp</p></a>
            </section>
            <h4 className="homeTag">PRODUCTOS RELACIONADOS:</h4>
            <Recomendados subcategoria={producto.subcategoria}/>
            </>
            ))}
        </article>
    )
}