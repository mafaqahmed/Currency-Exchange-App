import React from 'react'
import Converter from '../components/Converter'

const Home = () => {
  return (
    <div className='h-screen'>
      <div className='w-full h-full flex justify-center items-center z-40'>
        <div className='pt-14'>
          <Converter/>
        </div>
      </div>
    </div>
  )
}

export default Home
