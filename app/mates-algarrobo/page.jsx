'use client'

import { usePathname } from 'next/navigation';
import ProductosCategoria from "../../components/productossubcategoria"
export default function MatesAlgarrobo (){
    const categoria = decodeURI(usePathname()).slice(1);
    return(
        <>
            <div className="categoryBanner" style={{backgroundImage: `url(../matehome.jpg)`}} > <h1>MATES</h1> </div>
            <ProductosCategoria busquedavalue={categoria}/>
        </>
    )
}