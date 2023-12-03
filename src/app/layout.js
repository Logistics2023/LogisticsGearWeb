
import { UserProvider } from '../context/Context'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-dark.svg" />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/logo-dark.svg' />
        <meta name="theme-color" content="#2A52BE" />
        <meta name="msapplication-navbutton-color" content="#0064FA" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0064FA" />
        <meta name="description" content="Sistema de Administracion de Clientes y Formularios" />
        <meta name="keywords" content="Logistics Gear" />
        <meta name="author" content="Logistics Gear" />
        <title>Logistics</title>
      </head>
      <body className={inter.className} 
      // style={{
      //       backgroundImage: 'url(/bg.png)',
      //       backgroundRepeat: 'no-repeat',
      //       backgroundPosition: 'center',
      //       backgroundAttachment: 'fixed',
      //       backgroundSize: 'cover'
      //     }}
          >
        <UserProvider>
          <main className='min-h-screen bg-gradient-to-t from-[#00061880] to-[#000618d1]'>   
              {children}
          </main>
        </UserProvider>
      </body>
    </html>
  )
}


