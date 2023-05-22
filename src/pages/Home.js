import React, {useRef} from 'react'
import Menu from '../components/Menu'

const Home = () => { 
  const ref = useRef(null);
  return (
    <div className='h-full' ref={ref}>
        <div><Menu /></div>
        <div className="h-screen flex">
          <div className='flex-1 pl-10 pt-[200px] pr-20'>
            <div className='text-5xl font-black '>
              QUALITY IS OUR PRIORITY              
            </div>
            <div className='font-semibold mt-4 italic underline text-l'>
              Our Mission
            </div>
            <div className='font-semibold text-l pr-28'>
              Memberikan pelayanan prima dengan mengutamakan
              kualitas, profesionalisme, kehandalan,tanggung
              jawab serta tepat waktu dalam dengan bertujuan
              mencapai kepuasan pelangan
            </div>
            <div className='font-semibold mt-4 italic underline text-l'>
              Our Vision
            </div>
            <div className='font-semibold text-l pr-28'>
              Menjadi perusahaan konsultan manajemen ISO
              Series yang mengedepankan kualitas SDM dan
              pelayananan terbaik.
            </div>
          </div>
          <div className='bg-red-900 flex-1 flex justify-center items-center text-white'>[LOGO]</div>
        </div>
        <div className='h-screen bg-blue-500'></div>
        <div className='h-screen bg-blue-400'></div>
        <div className='h-screen bg-blue-300'></div>
        <div className='h-screen bg-blue-200'></div>
    </div>
  )
}

export default Home