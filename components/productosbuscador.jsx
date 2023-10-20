import Card from "./card"

async function fetchSearch() {
    const res = await fetch('https://script.google.com/macros/s/AKfycbxXfw1bbf0CqbQi6dxiNtxOHLA5z37LzR1XyviauVSjHT5wi7zZfmcezw9dFBLLAbangw/exec', { cache: 'no-store' },{"method":"GET"})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

export default async function ProductosBuscador(params){
    let productosbuscador = await fetchSearch()
    let busqueda = params.busquedavalue.toUpperCase()
    let arraybuscados = []
    productosbuscador.map(producto =>{
        if (producto.nombre.toUpperCase().includes(busqueda) & busqueda !== ' ' & busqueda !== ''){
        arraybuscados.push(producto)}})
    return(
    <section className="homepageproductsbody"> 
            {arraybuscados.map(producto =>(<Card key={producto.nombre} imghref={`./productos/${producto.img}.jpg`} productname={producto.nombre} productprice={producto.precio}/>))}
    </section>
    )
}


