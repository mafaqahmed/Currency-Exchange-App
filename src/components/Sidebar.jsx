import React from 'react'
import {BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className=' px-6 text-xl text-white fixed top-0 h-screen z-50'>
      <div className='flex flex-col space-y-9 justify-end items-end h-full py-20'>
      <a href="https://github.com/mafaqahmed">
      <BsGithub className=' opacity-60 hover:opacity-100 hover:scale-110 ease-in-out duration-200'/>
      </a>
      <a href="https://www.linkedin.com/in/afaqahmed-/" className='cursor-pointer'>
      <BsLinkedin className='opacity-60 hover:opacity-100 hover:scale-110 ease-in-out duration-200'/>
      </a>
      <a href="https://twitter.com/AfaqAhm61922865">
      <BsTwitter className='opacity-60 hover:opacity-100 hover:scale-110 ease-in-out duration-200'/>
      </a>
      </div>
    </div>
  )
}

export default Sidebar
