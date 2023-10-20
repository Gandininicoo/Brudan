'use client'
import { useSearchParams } from "next/navigation"
import ProductosBuscador from "../../components/productosbuscador"
export default function search (){
    const search = useSearchParams()
    const searchQuerry = search?.get('q')
    return(
        <>
            <h3 className="homeTag">Resultados de la busqueda: {searchQuerry} </h3>
            <ProductosBuscador busquedavalue={searchQuerry}/>
        </>
    )
}