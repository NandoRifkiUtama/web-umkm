import React from 'react'
import Maps from "../assets/peta-wilayah.jpg"

const Peta = () => {
  return (
    <section className='w-full h-full px-6 md:px-8 py-12 flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='text-center font-bold text-xl md:text-2xl lg:text-3xl mb-4'>
          <h1 className='py-2 w-full'>Peta Wilayah Kaliajir Lor </h1>
        </div>
        <div className='rounded-xl md:w-[70%]'>
          <img className='rounded-xl w-full object-cover' src={Maps} alt="peta" />
        </div>
      </div>
    </section>
  )
}

export default Peta