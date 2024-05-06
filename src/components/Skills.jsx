import React from 'react'
import bootstrap from '../assets/bootstrap-5-seeklogo.svg'
import css from '../assets/css-3-seeklogo.svg'
import html from '../assets/html5-without-wordmark-color-seeklogo.svg'
import next from '../assets/next-js-seeklogo.svg'
import react from '../assets/react-seeklogo.svg'
import sql from '../assets/sql-seeklogo.svg'
import tailwind from '../assets/tailwind-css-seeklogo.svg'
import ts from '../assets/typescript-seeklogo.svg'
import js from '../assets/javascript-js-seeklogo.svg'


function Skills() {
  return (
    <div className='bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>
      <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
        My <br/> Tech <br/> Stack
      </h2>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={css}/>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={html}/>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={next}/>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={react}/>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={sql}/>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={tailwind}/>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={ts}/>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={js}/>
      </div>
    </div>
  )
}

export default Skills