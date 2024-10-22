import {Poppins} from "next/font/google"


import './globals.css'
import {Menu} from "./(componentes)/menu"
import {Footer} from "./(componentes)/footer"
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-indigo-950" >
       
          <Menu />
          {children}
          <Footer/>

      </body>
    </html>
  )
}