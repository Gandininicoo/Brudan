'use client'

import { usePathname } from 'next/navigation';
import ProductosCategoria from "../../components/productoscategoria"
export default function tablas (){
    const categoria = decodeURI(usePathname()).slice(1);
    return(
        <>
            <div className="categoryBanner" style={{backgroundImage: `url(../cuchillohome.jpg)`}} > <h1>TABLAS</h1> </div>
            <ProductosCategoria busquedavalue={categoria}/>
        </>
    )
}