'use client'

import { usePathname } from 'next/navigation';
import ProductosCategoria from "../../components/productoscategoria"
export default function cuchillos (){
    const categoria = decodeURI(usePathname()).slice(1);
    return(
        <>
            <div className="categoryBanner" style={{backgroundImage: `url(../cuchillohome.jpg)`}} > <h1>CUCHILLOS</h1> </div>
            <ProductosCategoria busquedavalue={categoria}/>
        </>
    )
}