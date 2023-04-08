import React from 'react'
import { Icon } from '@iconify/react';
import Hero from '../Assets/Hero.png'

const BigCards = () => {
  return (
    <div className='flex box-border h-max w-full p-4 border-4 border-slate-300'>
        <div className='flex gap-10 justify-between w-full py-5 px-5'>
            <div className='flex wrap w-56 h-[500px] bg-slate-300 basis-2/6'>
                <img src={Hero} alt ="Hero Page" className='shadow-lg rounded max-w-full h-auto align-middle border-none'/>
            </div>
            <div className='flex flex-col justify-between font-Poppins h-full basis-4/6 py-1'>
                <div className='flex  basis-2/4 text-4xl font-bold text-slate-700 tracking-widest'>
                    Allegrini website, A Company website for PT Obiti Central Andano
                </div>
                <div className='flex  basis-3/4 text-lg text-slate-700 tracking-wider text-justify'>
                Allegrini is an Italian hotel amenities company that has reached a strong position among the world leaders in the hospitality hotel lines for production and distribution. It is famous for their luxurious scents made 100%  in Italy top quality ingredients.

                Represented by PT.Obiti Central Andano, Allegrini would like to expand their wings to Indonesian Hospitality market and spread their products among luxurious hotels. Their partnership has managed to reach several hotels in various region in Indonesia.

                Currently PT. Obiti Central Andano does not own a website to represents itself to the clients and still uses traditional communication to send pricelists and product catalog to potential clients. 

                The president of the company would like to escalate their
                business process by building a website to create their exitance online and reach new range of customers. They would also like the website to be a place where current clients to see pricelists and carry out transactions.

                </div>
                <div className='flex basis-1/4 items-center text-2xl font-bold text-slate-700 tracking-wider'>
                    Teknologi yang digunakan
                </div>
                <div className='flex gap-5 items-center basis-2/4'>
                   <div className='flex'>
                    <div className='m-3 flex h-20 w-20 items-center justify-center rounded-full bg-slate-600'>
                        <Icon icon="mdi:tailwind" color="white" width="50" height="50"/>
                    </div>
                   </div> 
                   <div className='flex'>
                    <div className='m-3 flex h-20 w-20 items-center justify-center rounded-full bg-slate-600'>
                        <Icon icon="ri:reactjs-fill" color="white" width="50" height="50"/>
                    </div>
                   </div> 
                   <div className='flex'>
                    <div className='m-3 flex h-20 w-20 items-center justify-center rounded-full bg-slate-600'>
                        <Icon icon="mdi:nodejs" color="white" width="50" height="50" />
                    </div>
                   </div> 
                </div>
            </div> 
        </div>
    </div>
  )
}

export default BigCards
