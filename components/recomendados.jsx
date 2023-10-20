
import Card from "./card"
async function fetchRecomendados() {
    const res = await fetch('https://script.google.com/macros/s/AKfycbxXfw1bbf0CqbQi6dxiNtxOHLA5z37LzR1XyviauVSjHT5wi7zZfmcezw9dFBLLAbangw/exec', { cache: 'no-store' },{"method":"GET"})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

export default async function Recomendados(props){
    let productosrecomendados = await fetchRecomendados()
    let arrprodRecomendados = []
    
    productosrecomendados.map(producto =>{if (producto.subcategoria.toLowerCase()===props.subcategoria.toLowerCase()){arrprodRecomendados.push(producto)}})
    return(
    <section className="homepageproductsbody">
        {arrprodRecomendados.slice(0,4).map(producto =>(
        <Card key={producto.id} imghref={`./productos/${producto.img}.jpg`} productname={producto.nombre} productprice={producto.precio}/>))}
    </section>
    )
}