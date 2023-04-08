import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <>
    <div className="sticky flex bg-white mx-5 border-b-2 border-b-slate-500 font-Poppins py-8 ">
    <div className='flex items-center justify-center gap-28 text-2xl w-full h-full content-end tracking-widest'> 
      <Link to='/Beranda' className='flex'>
          BERANDA
        </Link>
      <Link to='/Portofolio' className='flex'>
        PORTOFOLIO
      </Link>
      <Link to='/Kontak' className='flex'>
        KONTAK
      </Link>
    </div>

    </div>
  </>

  )
}

export default Header
