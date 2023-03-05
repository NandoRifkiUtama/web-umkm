import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <section className='w-full h-full px-6 md:px-8 py-8 bg-[#1d3456]'>
      <div className='flex flex-col items-center text-white'>
        <div className='font-bold'>
          <h1>KKN-PPM UGM Merapah Berbah 2022</h1>
        </div>
        <div className='duration-300 hover:text-[#6e9bdf] text-sm mt-4'>
          <a href="https://www.instagram.com/merapahberbah/" target="_blank" rel="noreferrer" ><p><span><InstagramIcon /></span> Merapah Berbah</p></a>
        </div>
      </div>
    </section>
  )
}

export default Footer