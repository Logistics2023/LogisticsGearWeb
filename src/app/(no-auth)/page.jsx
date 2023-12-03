'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmailAndPassword } from '@/firebase/utils'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'
import Error from '@/components/Error'
import Video from '@/components/Video'
import { services } from '@/db'
import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import Tag from '@/components/Tag'
import Service from '@/components/Service'
import TextMaquina from '@/components/TextMaquina'
import { useRouter } from 'next/navigation';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

export default function Home() {
  const { user, introVideo, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()

  const router = useRouter()
  const AutoplaySlider = withAutoplay(AwesomeSlider);


  const signInHandler = (e) => {
    e.preventDefault()
    let email = e.target[0].value
    let password = e.target[1].value
    email.length !== 0 && password.length !== 0 ? signInWithEmailAndPassword(email, password, setUserSuccess) : setUserSuccess('Complete')
  }







  useEffect(() => {
    // user === undefined && onAuth(setUserProfile)
    // if (user !== undefined && user !== null) router.replace('/Cliente')
  }, [user])

  return (
    <main className="h-screen w-full  ">


      {/* <AwesomeSlider className='relative' play={true} interval={6000}> */}


        <section className='min-h-[90vh]  py-[50px]  w-full lg:pt-10 pb-0 flex flex-col justify-around lg:flex-row items-center '
        style={{
          backgroundImage: `url(/bg-mobil.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom 30px',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }}
        >       
           <img src='/logo.svg' className='w-[80vw] h-auto flex justify-center items-end lg:w-[50vw] lg:h-[100vh]' />
           <TextMaquina/>
{/* 
          <AutoplaySlider className='relative bg-transparent' play={true} interval={6000} buttons={false} bullets={false}>
          <div className=' bg-[#01A7EB]'>
            </div>

            <div className='h-full bg-[#01A7EB]'>
              <img src="/truck.svg" className='block w-screen h-full bg-[#01A7EB]' alt="" />
            </div>
            <div className='h-full bg-[#01A7EB]'>
              <img src="/ship.svg" className='block w-screen h-full bg-[#01A7EB]' alt="" />
            </div>
            <div className='h-full bg-[#01A7EB]'>
              <img src="/plane.svg" className='block w-screen h-full bg-[#01A7EB]' alt="" />
            </div>

           


          </AutoplaySlider> */}
 {/* {
              services.map((i, index) =>
                <div key={index}>
                  <Service i={i} index={index}></Service>
                  <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-px my-8 bg-[#9EC011] border-0 dark:bg-gray-700" />
                    <span className="absolute px-3 font-medium text-[#0090A8] -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 z-0">•</span>
                  </div>
                </div>
              )
            } */}
          <div className='bg-transparent flex justify-center flex-wrap px-5 py-10 pb-[200px]'>

            <Tag theme='Transparent'>Transporte Terrestre</Tag>
            <Tag theme='Transparent'>Transporte Maritimo</Tag>
            <Tag theme='Transparent'>Transporte Aereo</Tag>
            <Tag theme='Transparent'>Despacho Aduanero</Tag>
            <Tag theme='Transparent'>Carga Proyecto</Tag>

          </div>


          {/* <Slider content={services}/> */}
          {/* <div className='w-full flex flex-col  justify-center pb-[50px] lg:justify-around lg:w-[50vw] lg:h-auto  lg:pb-0 lg:p-12 lg:pt-[50px] px-[10px] lg:pr-[10px]'>

          <div className='w-full hidden lg:flex lg:justify-center'>
            <img src='/logo.svg' className='hidden h-[25vh]  lg:block' alt="" />
          </div>
          <br />

          <br />
          <div className='w-full h-[100px] flex flex-col justify-between lg:grid lg:grid-cols-2 lg:gap-5 '>
            <Link href="#Servicios" className='w-full'><Button theme="Secondary" >Servicios</Button></Link>
            <Link href={`https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Dental%20House,%20quisiera%20hacer%20una%20consulta...%20`} className='w-full'><Button theme="Primary" >Contactar</Button></Link>
          </div>
        </div> */}
        </section>


        <section className='w-full bg-[#01A7EB] pt-[70px]' id="Servicios">
          <Subtitle>Servicios</Subtitle>
          <div className='min-h-screen w-full flex flex-col  lg:flex-row justify-around items-center '>
            <ul className='min-w-[80%] grid grid-cols-1 gap-4'>
              {
                services.map((i, index) =>
                  <div key={index}>
                    <Service i={i} index={index}></Service>
                    <div className="inline-flex items-center justify-center w-full">
                      <hr className="w-64 h-px my-8 bg-[#9EC011] border-0 dark:bg-gray-700" />
                      <span className="absolute px-3 font-medium text-[#0090A8] -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 z-0">•</span>
                    </div>
                  </div>
                )
              }
            </ul>
          </div>
        </section>






      {/* </AwesomeSlider> */}

    </main>

  )
}




// <div className='w-screen h-screen bg-gradient-to-t from-[#00061860] to-[#000618d1] flex flex-col justify-center items-center p-5 z-[50]'>
//   <div className={`space-y-6 lg:space-y-3 w-[100%] rounded-[30px] max-w-[350px]`} >
//     <div className='w-full text-center flex justify-center'>
//       <img src="/logo.svg" className='w-[300px] z-[30]' alt="User" />
//     </div>
//     <h5 className="text-[22px] text-center font-bold text-white text-[#F1BA06] z-[50]">Nosotros</h5>
//     <br />

//     <div className='text-center text-white text-[14px]'>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis modi nihil ducimus. Voluptatum nisi facilis quam omnis ducimus, tenetur ullam minus quod nostrum maxime deserunt dolores veniam sapiente ad.
//     </div>
//     <br />
//     <h5 className="text-[22px] text-center font-bold text-white text-[#F1BA06] z-[50]">Por que nosotros?</h5>
//     <br />

//     <div className='text-center text-white text-[14px]'>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis modi nihil ducimus. Voluptatum nisi facilis quam omnis ducimus, tenetur ullam minus quod nostrum maxime deserunt dolores veniam sapiente ad.
//     </div>
//     <Button type="submit" theme="Primary" click={() => router.push('/Login')}>Iniciar Sesión</Button>
//   </div>

// </div>
