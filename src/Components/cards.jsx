import React from 'react'
import Hero from '../Assets/Hero.png'

const cards = () => {
  return (
    <>
    <div className='flex box-border h-44 w-full p-4 border-4 border-slate-300'>
        <div className='flex items-center w-full px-3 gap-5'>
            <div className='flex flex-wrap w-32 h-32 bg-slate-300 basis-2/6'>
                <img src={Hero} alt ='hero page' className='shadow-lg rounded max-w-full h-auto align-middle border-none'/>
            </div>
            <div className='flex flex-col font-Poppins h-full basis-4/6 py-1 gap-3 text-slate-600 text-justify'>
                <div className='text-xl'>
                    Allegrini website
                </div>
                <div className='text-base'>
                    A website for PT Obiti Central Andano company website, to help with customer's product purchase and transactions.
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default cards
