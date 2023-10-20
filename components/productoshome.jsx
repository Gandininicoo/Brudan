
import Card from "./card"
async function fetchProductoHome() {
    const res = await fetch('https://script.google.com/macros/s/AKfycbxXfw1bbf0CqbQi6dxiNtxOHLA5z37LzR1XyviauVSjHT5wi7zZfmcezw9dFBLLAbangw/exec', { cache: 'no-store' },{"method":"GET"})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

    let randomNumber = Math.floor(Math.random() * 280)
    let randomNumber2 = Math.floor(Math.random() * 45)

export default async function ProductosHome({}){
    let productoshome =  await fetchProductoHome()
    return(
    <>
    <h2 className="homeTag">NO TE LOS PODES PERDER:</h2>
    <section className="homepageproductsbody">
        {productoshome.slice(randomNumber,randomNumber+4).map(producto =>(
            <Card key={producto.nombre} imghref={`./productos/${producto.img}.jpg`} productname={producto.nombre} productprice={producto.precio}/>))}
    </section>
    <section className="homepageproductsbody hp2">
    {productoshome.slice(randomNumber2,randomNumber2+4).map(producto =>(
        <Card key={producto.nombre} imghref={`./productos/${producto.img}.jpg`} productname={producto.nombre} productprice={producto.precio}/>))}
    </section>
    </>
    )
}