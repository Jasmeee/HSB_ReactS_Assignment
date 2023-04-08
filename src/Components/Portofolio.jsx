import React from 'react'
import BigCards from './BigCards'
import Header from './Header'

const Portofolio = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col overflow-auto px-20'>
        <div className='flex basis-1/6 py-10 font-Poppins text-4xl'>
            Portofolio Saya
        </div>
        <div className='flex flex-col basis-5/6 gap-10'>
            <BigCards/>
            <BigCards/>
            <BigCards/>
            <BigCards/>
            <BigCards/>
            <BigCards/>
        </div>
    </div>
    </>
  )
}

export default Portofolio
