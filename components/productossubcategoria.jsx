import Card from "./card"
async function fetchCategoria() {
    const res = await fetch('https://script.google.com/macros/s/AKfycbxXfw1bbf0CqbQi6dxiNtxOHLA5z37LzR1XyviauVSjHT5wi7zZfmcezw9dFBLLAbangw/exec', { cache: 'no-store' },{"method":"GET"})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }


export default async function ProductosCategoria(params){
    let listaproductoscategoria = await fetchCategoria()
    let categoria = params.busquedavalue.toUpperCase()
    let arrayproductoscategoria = []
    listaproductoscategoria.map(producto =>{
        if (producto.subcategoria.toUpperCase() === categoria){
            arrayproductoscategoria.push(producto)}})
    return(
    <section className="homepageproductsbody categorybody"> 
            {arrayproductoscategoria.map(producto =>(<Card key={producto.nombre} imghref={`./productos/${producto.img}.jpg`} productname={producto.nombre} productprice={producto.precio}/>))}
    </section>
    )
}


