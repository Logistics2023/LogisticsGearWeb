
import { UserProvider } from '../context/Context'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/lg.png" />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/lg.png' />
        <meta name="theme-color" content="#030712" />
        <meta name="msapplication-navbutton-color" content="#030712" />
        <meta name="apple-mobile-web-app-status-bar-style" content="##030712" />
        <meta name="description" content="Sistema de Administracion de Clientes y Formularios" />
        <meta name="keywords" content="Logistics Gear" />
        <meta name="author" content="Logistics Gear" />
        <title>Logistics</title>
      </head>
      <body className={inter.className}>
        <UserProvider>
     
          <main className='h-screen'>


            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  )
}


