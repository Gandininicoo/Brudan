'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BarradeBusqueda() {
    const router = useRouter()
    const [busqueda, setbusqueda] = useState('');
    const handleInputChange = ({target}) => {
        setbusqueda(target.value)
    }
    function buscar(event){
        event.preventDefault()
        const encodedbusqueda = encodeURI(busqueda)
        router.push(`search?q=${encodedbusqueda}`)
    }
    return (
        <form onSubmit={buscar}>
            <input className="inputText" 
            value={busqueda} 
            onChange={handleInputChange} 
            type="text"
            placeholder="Ingresá lo que quieras encontrar"/>
            <input type="submit" className="inputsubmit" placeholder=""></input>
        </form>
    )
}