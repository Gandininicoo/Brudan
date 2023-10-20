'use client'

import { usePathname } from 'next/navigation';
import ProductosCategoria from "../../components/productossubcategoria"
export default function bombillas (){
    const categoria = decodeURI(usePathname()).slice(1);
    return(
        <>
            <div className="categoryBanner" style={{backgroundImage: `url(../bombillahome.jpg)`}} > <h1>BOMBILLAS</h1> </div>
            <ProductosCategoria busquedavalue={categoria}/>
        </>
    )
}