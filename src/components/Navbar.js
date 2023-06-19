import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Menu } from 'react-feather'

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  
  return (
    <div className='py-[20px] px-[30px] flex w-full h-[70px] absolute bg-white'>
      <div className='flex-1'>
        <Link to='/'>
          <img className='w-40 h-8' src={require('../asset/images/logo.png')} alt='logo' />
          {/* <img className='w-40 h-8 max-[900px]:hidden' src={require('../asset/images/logo.png')} alt='logo' />
          <img className='w-8 h-8 min-[900px]:hidden' src={require('../asset/images/logoKotak.png')} alt='logo' /> */}
        </Link>
      </div>
      <div className='text-white flex gap-10 max-[900px]:hidden'>
        <div className="dropdown dropdown-hover">
          <Link  to='/SertifikasiISO' className='flex gap-1 text-black hover:text-red-500 hover:border-b-2 border-red-500' >Sertifikasi ISO <ChevronDown /></Link>
          <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black text-s">
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>ISO 9001</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>ISO 13485</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>ISO 14001</Link></li>            
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>ISO 17020</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>ISO 17025</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>ISO 20000-1</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>ISO 22000</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>ISO 27001</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>ISO 37001</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>ISO 45001</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>ISO 50001</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>ISO 55000</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>SMK-3</Link></li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <Link  to='/SertifikasiISO' className='flex gap-1 hover:text-red-500 text-black' >Sistem Manajemen <ChevronDown /></Link>
          <ul  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black text-s">
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>5S / 5R</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>British Retail Consortium (BRC)</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>Business Process Management (BPM)</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>Contractor Safety Management System (CSMS)</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>Customer Relationship Management (CRM)</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>Customs Trade Partnership Against Terrorism (CTPAT)</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>Good Manufacturing Practises (GMP)</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>Hazard Analysis Critical Control Point (HACCP)</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>RSPO / ISPO</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>SA8000</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>Sistem Manajemen Keselamatan Dan Kesehatan Kerja (SMK3)</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>Standard Operating Procedure (SOP)</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>Supply Chain Management (SCM)</Link></li>
            <li><Link to='/SertifikasiISO' className='hover:bg-red-200'>SMETA (Sedex Members Ethical Trade Audit)</Link></li>
          </ul>
        </div>
        <Link to='/SertifikasiISO ' className='hover:text-red-500 text-black'>Klien</Link>
        <Link to='/SertifikasiISO ' className='hover:text-red-500 text-black'>Galeri</Link>
      </div>
      <div className='min-[900px]:hidden'>
        <button  className='h-full w-full'><Menu onClick={() =>{setToggle(!toggle)}} /></button>
        {toggle &&
          <div className='absolute right-4 mt-4 flex flex-col gap-1 px-2 py-4 bg-black rounded-xl'>
            <Link  to='/SertifikasiISO' className='text-white text-end' >Sertifikasi ISO </Link>
            <Link  to='/SertifikasiISO' className='text-white text-end' >Sistem Manajemen </Link>
            <Link  to='/SertifikasiISO' className='text-white text-end' >Klien </Link>
            <Link  to='/SertifikasiISO' className='text-white text-end' >Galeri </Link>
          </div>
        }
      </div>
    </div>
    
  )
}

export default Navbar