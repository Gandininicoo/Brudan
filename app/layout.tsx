
import Header from "../components/header"
import Footer from "../components/footer"
import Buscador from "../components/buscador"
import "../styles/global.css"
import {Roboto_Condensed} from 'next/font/google'

const inter = Roboto_Condensed({
  weight: ['300','400','700'],
  subsets: ['latin'],
})



export const metadata = {
  title: 'Mates Bru-Dan',
  description: 'Mates Bru-Dan es una tienda de productos regionales de la mas alta calidad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="./favicon.png" />
    </head>
    <body className={inter.className}>
    <Header/>
    <aside className="buscadorBarra"><Buscador/></aside>
    <section className="children-layout">{children}</section>
    <Footer/>
    </body>
    </html>
  )
}
