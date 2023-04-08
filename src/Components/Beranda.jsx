import React from 'react'
import Foto from '../Assets/Foto.jpg'
import Cards from './cards'
import Header from './Header'
import { useState } from "react";


const Beranda = () => {

  const [ShowMore, setShowMore] = useState (false);

  return (
    <>
    <Header/>
    <div className='flex flex-col h-screen'>
      <div className='flex basis-9/12 bg-slate-300 justify-center px-24'>
        <div className='flex flex-wrap w-full justify-center bg-no-repeat my-10 '>
            <img className='shadow-lg rounded-full max-w-full h-auto align-middle border-none' src={Foto} alt = "pas foto"/>
        </div>
        <div className='flex w-full items-center font-Poppins text-7xl leading-relaxed text-slate-600'>
            Selamat Datang <br/> di Personal Web Saya
        </div>
        </div>
        <div className='flex flex-col basis-8/12 bg-white'>
            <div className='flex px-24 items-center font-Poppins text-3xl text-slate-500 basis-1/6 py-10'>
                Portofolio saya
            </div>
            <div className='grid grid-cols-3 gap-4 px-24 basis-2/6 '>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
            <div className='flex px-24 items-center basis-1/6 justify-center py-5'>
                <button className='flex border-4 border-slate-300 py-3 px-10 text-purple-700 text-lg' onClick={()=> setShowMore(true)}>
                    Lebih Banyak
                </button>  
            </div>
      </div>
    {ShowMore ? (
      <>
      <div className='grid grid-cols-3 gap-4 px-24 basis-2/6 '>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
      </div>
      </>
    ) : null}

    </div>
    </>

  )
}

export default Beranda
