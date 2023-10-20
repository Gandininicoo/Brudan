'use client'

import { usePathname } from 'next/navigation';
import ProductosCategoria from "../../components/productoscategoria"
export default function portatermos (){
    const categoria = decodeURI(usePathname()).slice(1);
    return(
        <>
            <div className="categoryBanner" style={{backgroundImage: `url(../portatermohome.jpg)`}} > <h1>PORTATERMOS</h1> </div>
            <ProductosCategoria busquedavalue={categoria}/>
        </>
    )
}