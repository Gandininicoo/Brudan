import Link from "next/link"

export default function MenuDesplegable(params) {
  return (
    <nav className={params.className}>
        <ul>
            <li><Link href='/' onClick={()=> menuOff(!menuOn)}>INICIO</Link></li>
            <li><Link href='/mates' onClick={()=> menuOff(!menuOn)}>MATES</Link></li>
            <li><Link href='/bombillas' onClick={()=> menuOff(!menuOn)}>BOMBILLAS</Link></li>
            <li><Link href='/portatermos' onClick={()=> menuOff(!menuOn)}>PORATATERMOS</Link></li>
            <li><Link href='/cuchillos' onClick={()=> menuOff(!menuOn)}>CUCHILLOS</Link></li>
            <li><Link href='/tablas' onClick={()=> menuOff(!menuOn)}>TABLAS</Link></li>
        </ul>
    </nav>
  )
}
