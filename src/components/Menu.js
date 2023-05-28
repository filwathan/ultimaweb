import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'react-feather'

const Menu = () => {
  return (
    <div className='py-[20px] px-[30px] flex w-full h-[70px] absolute bg-white'>
      <div className='flex-1'>
        <img className='w-40 h-8' src={require('../asset/images/logo.png')} alt='logo' />
      </div>
      <div className='text-white flex gap-10'>
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
        <Link to='/SertifikasiISO ' className='hover:text-red-500 text-black'>Permintaan Proposal</Link>
        <Link to='/SertifikasiISO ' className='hover:text-red-500 text-black'>Klien</Link>
        <Link to='/SertifikasiISO ' className='hover:text-red-500 text-black'>Galeri</Link>
      </div>
    </div>
    
  )
}

export default Menu