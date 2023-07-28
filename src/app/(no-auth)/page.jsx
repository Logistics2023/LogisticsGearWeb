'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmailAndPassword } from '@/supabase/utils'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Error from '@/components/Error'
import Video from '@/components/Video'

import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import BottomNavigation from '@/components/BottomNavigation'

import { useRouter } from 'next/navigation';


export default function Home() {
  const { user, introVideo, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()

  const router = useRouter()





  const signInHandler = (e) => {
    e.preventDefault()
    let email = e.target[0].value
    let password = e.target[1].value
    email.length !== 0 && password.length !== 0 ? signInWithEmailAndPassword(email, password, setUserSuccess) : setUserSuccess('Complete')
  }



  useEffect(() => {
    user === undefined && onAuth(setUserProfile)
    if (user !== undefined && user !== null) router.replace('/Cliente')
  }, [user])

  return (
    <div className="h-full"
      style={{
        backgroundImage: 'url(/gif.gif)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}>

      <div className='w-screen h-screen bg-gradient-to-t from-[#00061860] to-[#000618d1] flex flex-col justify-center items-center p-5 z-[50]'>
        <div className={`space-y-6 lg:space-y-3 w-[100%] rounded-[30px] max-w-[350px]`} >
          <div className='w-full text-center flex justify-center'>
            <img src="/logo.svg" className='w-[300px] z-[30]' alt="User" />
          </div>
          <h5 className="text-[22px] text-center font-bold text-white text-[#F1BA06] z-[50]">Nosotros</h5>
          <br />

          <div className='text-center text-white text-[14px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis modi nihil ducimus. Voluptatum nisi facilis quam omnis ducimus, tenetur ullam minus quod nostrum maxime deserunt dolores veniam sapiente ad.
          </div>
          <br />
          <h5 className="text-[22px] text-center font-bold text-white text-[#F1BA06] z-[50]">Por que nosotros?</h5>
          <br />

          <div className='text-center text-white text-[14px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis modi nihil ducimus. Voluptatum nisi facilis quam omnis ducimus, tenetur ullam minus quod nostrum maxime deserunt dolores veniam sapiente ad.
          </div>
          <Button type="submit" theme="Primary" click={()=>router.push('/Login')}>Iniciar Sesión</Button>
        </div>
        <BottomNavigation></BottomNavigation>

      </div>
      {success == 'AccountNonExist' && <Error>Cuenta inexistente</Error>}
      {success == 'Complete' && <Error>Complete el formulario</Error>}
    </div>
  )
}





