import React from 'react'
import Header from './Header'
import Foto from '../Assets/Foto.jpg'
import { Icon } from '@iconify/react';

const Kontak = () => {
  return (
    <>
    <Header/>
    <div className='flex overflow-auto h-full'>
      <div className='flex flex-col py-10 font-Poppins px-36 pr-72'>
        <div className='flex py-10 text-5xl font-semibold tracking-wide text-slate-700'>
          Kontak saya
        </div>
        <div className='flex gap-16'>
          <div className='flex flex-wrap basis-1/4'>
            <div className='rounded-full px-4'>
              <img src={Foto} alt="Profile picture" className='shadow rounded-full max-w-full h-auto align-middle border-none'/>
            </div>
          </div>

          <div className='flex flex-col gap-5 text-slate-700 basis-3/4'>
            <div className='text-5xl'>
              Halo, Saya Jasmine Aubrey Andrea
            </div>

            <div className='container text-xl leading-loose text-justify'>
              I am a fresh graduate from Bina Nusantara University with a Master's degree in Management and Information Systems. I had never made a website using html or tailwind before until I joined HariSenin.com Bootcamp, from there i gained alot of friends and they taught me how to make websites using <b>HTML, Tailwind, Javascript, ReactJS, nodeJS and how to use Github</b>. <br/>
              <br/>
              The only website I had made came from the project HariSenin.com Assigned me and my group, and the website theme we chose were to make a website to help a small traditonal company to accomplish their product purchase and transaction in the website, and as a landing page for their business. The company was PT Obiti Central Andano and the website is called Allegrini, the website is a simple User Interface without database connection.
            </div>

            <ul className='text-xl list-disc list-outside pl-10 py-10'>
              <li>
                Allegrini website, A Company  website for PT Obiti Central Andano
              </li>
            </ul>

            <div className='flex gap-5'>
              <button>
                <Icon icon="ic:baseline-facebook" width="70" height="70" color="#516585"/>
              </button>
              <button>
                <Icon icon="mdi:instagram" width="70" height="70" color="#516585"/>
              </button>
              <button>
                <Icon icon="mdi:youtube" width="70" height="70" color="#516585"/>
              </button>
              <button>
                <Icon icon="mdi:linkedin" width="70" height="70" color="#516585"/>
              </button>
              <button>
                <Icon icon="mdi:github" width="70" height="70" color="#516585"/>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Kontak
