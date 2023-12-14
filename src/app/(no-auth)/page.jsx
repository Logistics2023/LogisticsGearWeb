'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmailAndPassword } from '@/firebase/utils'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'
import Error from '@/components/Error'
import { services } from '@/db'
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


      <section className=' bg-black'
      // style={{
      //   backgroundImage: `url(/bg-mobil.png)`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center bottom 30px',
      //   backgroundAttachment: 'fixed',
      //   backgroundSize: 'cover'
      // }}
      >
        {/* <video className='absolute top-0 w-full h-[100vh] object-cover object-bottom' autoPlay loop muted>
            <source src="/underwater.mp4" type="video/mp4" />
          </video> */}
        {/* <div className='relative min-h-[100vh] py-[50px] w-full lg:pt-10 pb-0 flex flex-col justify-around lg:flex-row items-center z-20' style={{background: '-gradient(to bottom, rgba(0, 6, 24, 0.87), #061A4D79)'}}> */}
        <video className='fixed bottom-0 w-full h-[100vh] pb-[10px] object-cover object-bottom' autoPlay loop muted>
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className='relative min-h-[100vh] py-[50px] w-full lg:pt-10 pb-0 flex flex-col justify-around lg:flex-row items-center shadow-black shadow-2xl  z-20' style={{ background: '-gradient(to bottom, #000000,  #000000c7, #00000050' }}>


          <video className='relative top-[-75px] w-[100vw] h-[80vw] object-cover   rounded-b-[50px] pt-[50px] bg-black' autoPlay loop muted>
            <source src="/logo.mp4" type="video/mp4" />
          </video>

          {/* <img src='/logo.svg' className='inline-block w-[50vw] h-[50vw] bg-white  lg:flex justify-center items-end lg:w-[50vw] lg:h-[100vh] rounded-full shadow-sm shadow-white' /> */}

          {/* <AutoplaySlider className='relative bg-transparent' play={true} interval={6000} buttons={false} bullets={false}>
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
          <TextMaquina />

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

            <Tag theme='Primary'>Transporte Terrestre</Tag>
            <Tag theme='Primary'>Transporte Maritimo</Tag>
            <Tag theme='Primary'>Transporte Aereo</Tag>
            <Tag theme='Primary'>Despacho Aduanero</Tag>
            <Tag theme='Primary'>Carga Proyecto</Tag>

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
        </div>

      </section>


      <section className='w-full bg-[#4f8cc5]' id="Servicios">
        <div className='relative min-h-screen w-full flex flex-col  lg:flex-row justify-around items-center '>
          <Subtitle>Servicios</Subtitle>

          <video className='absolute top-0  w-full h-[80vh] object-cover' autoPlay loop muted>
            <source src="/highway2.mp4" type="video/mp4" />
          </video>

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
