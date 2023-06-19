import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import * as Icon from 'react-feather'

const Home = () => {
  
  return (
    <div className='h-full'>
        <div><Navbar /></div>
        {/* introduction */}
        <div className="h-screen max-[900px]:h-full flex bg-paper bg-cover bg-center">
          <div className='flex-1 pl-10 py-[150px] pr-10 max-[768px]:pr-36'>
            <div className='text-5xl font-black text-white min-[1366px]:text-[60px] min-[1536px]:text-[70px]'>
              QUALITY IS OUR PRIORITY              
            </div>
            <div className='font-semibold mt-4 italic underline text-l text-white min-[1366px]:text-[20px] min-[1536px]:text-[25px]'>
              Our Mission
            </div>
            <div className='font-semibold text-l pr-28 text-white min-[1366px]:text-[20px] min-[1536px]:text-[25px]'>
              Memberikan pelayanan prima dengan mengutamakan
              kualitas, profesionalisme, kehandalan,tanggung
              jawab serta tepat waktu dalam dengan bertujuan
              mencapai kepuasan pelangan
            </div>
            <div className='font-semibold mt-4 italic underline text-l text-white min-[1366px]:text-[20px] min-[1536px]:text-[25px]'>
              Our Vision
            </div>
            <div className='font-semibold text-l pr-28 text-white min-[1366px]:text-[20px] min-[1536px]:text-[25px]'>
              Menjadi perusahaan konsultan manajemen ISO
              Series yang mengedepankan kualitas SDM dan
              pelayananan terbaik.
            </div>
          </div>
          <div className=' flex-1 flex justify-center items-center text-black max-[768px]:hidden'></div>
        </div>
        {/* WHY OUS ? */}
        <div className='h-screen max-[900px]:h-full flex items-center flex-col'>
          <div className='text-5xl pt-10 text-[#e72327] text-center font-bold min-[1366px]:text-[80px]'>MENGAPA ULTIMA KONSULTAN ?</div>
          <div className='w-full h-10 flex-1 flex gap-4 justify-center pt-10 pb-8 px-10 max-[900px]:flex-col'>
            <div className="card w-[20%] max-[900px]:w-[100%] bg-[#e72327] shadow-lg hover:shadow-[#e72327]">
              <div className='w-full h-24 flex justify-center items-end'>
                <div className='w-20 h-20'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-full h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>                  
                </div>
              </div>
              <div className="card-body ">
                <h2 className="card-title justify-center text-white font-bold text-2xl">Team</h2>
                <p className='text-center text-white'>Team yang berpengalaman lebih dari 10 tahun
                dalam bidang masing, baik manufaktur, penyedia
                jasa, ataupun pelaksanaan di lapangan</p>
              </div>
            </div>
            <div className="card w-[20%] max-[900px]:w-[100%] bg-[#e72327] shadow-lg hover:shadow-[#e72327]">
              <div className='w-full h-24 flex justify-center items-end'>
                <div className='w-20 h-20'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-full h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                  </svg>                  
                </div>
              </div>
              <div className="card-body ">
                <h2 className="card-title justify-center text-white font-bold text-2xl">Experience</h2>
                <p className='text-center text-white'>Pengalaman penangan pekerjaan di berbagai
                bidang baik penyedia produk ataupun jasa yang
                terjamin kualitas dan kepuasannya</p>
              </div>
            </div>
            <div className="card w-[20%] max-[900px]:w-[100%] bg-[#e72327] shadow-lg hover:shadow-[#e72327]">
              <div className='w-full h-24 flex justify-center items-end'>
                <div className='w-20 h-20'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-full h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>                  
                </div>
              </div>
              <div className="card-body ">
                <h2 className="card-title justify-center text-white font-bold text-2xl">Kredibilitas</h2>
                <p className='text-center text-white'>Bekerja sama dengan certification body yang
                kredibel untuk memastikan berjalannya assessing
                bersifat independen dan objective</p>
              </div>
            </div>
            <div className="card w-[20%] max-[900px]:w-[100%] bg-[#e72327] shadow-lg hover:shadow-[#e72327]">
              <div className='w-full h-24 flex justify-center items-end'>
                <div className='w-20 h-20'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-full h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>                  
                </div>
              </div>
              <div className="card-body ">
                <h2 className="card-title justify-center text-white font-bold text-2xl">Dokumen</h2>
                <p className='text-center text-white'>Jenis format dokumen yang bervariasi sesuai dengan kebutuhan dan ketersediaan data</p>
              </div>
            </div>            
            <div className="card w-[20%] max-[900px]:w-[100%] bg-[#e72327] shadow-lg hover:shadow-[#e72327]">
              <div className='w-full h-24 flex justify-center items-end'>
                <div className='w-20 h-20'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-full h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>                  
                </div>
              </div>
              <div className="card-body ">
                <h2 className="card-title justify-center text-white font-bold text-2xl">Harga</h2>
                <p className='text-center text-white'>Harga yang bersaing dari segi kualitas pelayanan
                dan pencapaian penerapan sistem manajemen yang ideal</p>
              </div>
            </div>            
          </div>
        </div>
        {/* our services */}
        <div className='h-screen max-[900px]:h-full bg-[#F0F0F0] flex items-center p-10 gap-4'>
          <div className='bg-white h-full w-full flex justify-center items-center rounded-2xl max-[900px]:hidden'>
            <img className='w-[100%] h-[70%]' src={require('../asset/images/logo2.png')} alt='logo' />
          </div>
          <div className='w-full h-full bg-[#F0F0F0] flex flex-col justify-end gap-5 pt-5'>
              <h2 className='text-[#e72327] text-center font-bold text-5xl'>LAYANAN KAMI</h2>
            <div className='w-full h-full bg-white rounded-2xl flex flex-col py-4 px-4 gap-2'>
              <div className='flex items-center gap-5'>
                <Icon.CheckCircle className='text-red-500'/>
                <h2 className='text-[#e72327] text-xl font-bold'>System Management Consulting</h2>
              </div>
              <div className='flex'>
                <p>Bukan hanya menyediakan jasa sertifikasi, kami juga memfasilitasi client untuk penerapan system manajemen mutu yang ideal di dalam organisasi</p>
              </div>
            </div>
            <div className='w-full h-full bg-white rounded-2xl flex flex-col py-4 px-4 gap-2'>
              <div className='flex items-center gap-5'>
                <Icon.CheckCircle className='text-red-500'/>
                <h2 className='text-[#e72327] text-xl font-bold'>Sertification helper</h2>
              </div>
              <div className='flex'>
                <p>Kesulitan organisasi dalam membangun kebutuhan dokumen dalam penerapan ytem manajemen mutu mendorong kami untuk memberikan guidance dalam perencanaan kegiatan sertifikasi organiasi</p>
              </div>
            </div>
            <div className='w-full h-full bg-white rounded-2xl flex flex-col py-4 px-4 gap-2'>
              <div className='flex items-center gap-5'>
                <Icon.CheckCircle className='text-red-500'/>
                <h2 className='text-[#e72327] text-xl font-bold'>Training fasilitator</h2>
              </div>
              <div className='flex'>
                <p>Tuntutan era global mengharuskan sumber daya agar tetap dalam kondisi ter-update, salah satu diantaranya adalah penyelengaraan pelatihan baik indoor / outdoor, inhouse / open training</p>
              </div>
            </div>
          </div>
        </div>
        {/* our products */}
        <div className='h-screen max-[900px]:h-full bg-bg3 bg-fixed'>
          <div className='h-full w-full bg-red-500/60 flex flex-col p-10 gap-10'>
            <div className='flex justify-center'>
              <h2 className='text-5xl pt-10 text-white font-bold'>PRODUK KAMI</h2>
            </div>
            <div className='flex gap-20 w-full h-full max-[900px]:flex-col'>
              <div className='h-full w-full bg-white rounded-2xl px-10 py-7 flex flex-col gap-4'>
                <div>
                  <h2 className='text-[#e72327] text-xl font-bold text-center'>KONSULTASI DAN SERTIFIKASI</h2>
                </div>
                <div className='flex max-[400px]:flex-col max-[400px]:gap-3'>
                  <div className='flex flex-col gap-2 grow'>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Sliders/>ISO 9001:2015</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Plus/>ISO 13485</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Cloud/>ISO 14001:2015</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Clipboard/>ISO 17020</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Thermometer/>ISO 17025</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Shield/>OHSAS 18001:2007</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Cast/>ISO 20000-1</Link>
                  </div>
                  <div className='flex flex-col gap-2 grow'>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Coffee/>ISO 22000</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Key/>ISO 27001</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.DollarSign/>ISO 37001:2016</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.PlusSquare/>ISO 45001:2018</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Droplet/>ISO 50001:2015</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Grid/>ISO 55000:2015</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Pocket/>SMK-3 (PP.50/2012)</Link>
                  </div>
                </div>
                {/* <div className='flex justify-end'><Link to='/SertifikasiISO' className='text-sm hover:text-[#e72327]'>produk lainnya ...</Link></div> */}
              </div>
              <div className='h-full w-full bg-white rounded-2xl px-10 py-7 flex flex-col gap-4'>
              <div>
                  <h2 className='text-[#e72327] text-xl font-bold text-center'>PENINGKATAN KOMPETENSI</h2>
                </div>
                <div className='flex '>
                  <div className='flex flex-col gap-2 grow'>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Sliders/>ISO Introduction</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Plus/>ISO Awareness</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Cloud/>Audit internal ISO 19011:2018</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Clipboard/>Upgrade Dokumen</Link>
                    <Link to='/SertifikasiISO' className='flex gap-2 px-2 hover:text-white hover:bg-[#e72327] rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 duration-300'><Icon.Thermometer/>Document Control</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tahapan Pelaksanaan Sertifikasi ISO Dan SMK3 */}
        <div className='h-screen max-[900px]:h-full bg-[#e72327] flex items-center flex-col'>
          <div className='text-5xl text-center pt-10 text-white font-bold'>Tahapan Pelaksanaan Sertifikasi ISO Dan SMK3</div>
          <div className='w-full h-10 flex-1 flex gap-4 justify-center pt-10 pb-8 px-10 max-[900px]:flex-col'>
            <div className="card w-[20%] max-[900px]:w-full bg-white shadow-sm hover:shadow-white group/tahapan">
              <div className='w-full h-24 flex justify-center items-end'>
                <div className='w-20 h-20 group-hover/tahapan:hidden'>
                  <Icon.Box className='w-full h-20 stroke-[#e72327]' />
                </div>
              </div>
              <div className="card-body flex items-center">
                <h2 className="card-title text-[#e72327] font-bold text-2xl text-center group-hover/tahapan:hidden">Gap Assessing</h2>
                <p className='text-center text-[#e72327] hidden group-hover/tahapan:block'>Mengetahui celah kesesuaian antara pelaksanaan saat ini terhadap standard ISO yang berlaku</p>
              </div>
            </div>
            <div className="card w-[20%] max-[900px]:w-full bg-white shadow-sm hover:shadow-white group/tahapan">
              <div className='w-full h-24 flex justify-center items-end'>
                <div className='w-20 h-20 group-hover/tahapan:hidden'>
                <Icon.PenTool className='w-full h-20 stroke-[#e72327]' />
                </div>
              </div>
              <div className="card-body flex items-center">
                <h2 className="card-title text-[#e72327] font-bold text-2xl text-center group-hover/tahapan:hidden">Training (Awareness & Internal Auditing)</h2>
                <p className='text-center text-[#e72327] hidden group-hover/tahapan:block'>Memberikan pemahaman kepada team dalam rangka pelaksanaan kegiataan system manajemen mutu tersebut berjalan, terkait dengan risk Management, Quality Plan, Objective target, moitoriing and controling, conytency of implementation</p>
              </div>
            </div>
            <div className="card w-[20%] max-[900px]:w-full bg-white shadow-sm hover:shadow-white group/tahapan">
              <div className='w-full h-24 flex justify-center items-end'>
                <div className='w-20 h-20 group-hover/tahapan:hidden'>
                <Icon.Tool className='w-full h-20 stroke-[#e72327]' />
                </div>
              </div>
              <div className="card-body flex items-center">
                <h2 className="card-title text-[#e72327] font-bold text-2xl text-center group-hover/tahapan:hidden">Implementation guidance and monitoring</h2>
                <p className='text-center text-[#e72327] hidden group-hover/tahapan:block'>Konsisteni pelaksanaan dan penerapan merupakan kunci pokok dari sebuah sistem manajemen, kami hadir dalam rangka membantu kontroling, monitoring dan memberikan masukan yang bersifat saran untuk mencapai sebuah system manajemnen mutu yang ideal</p>
              </div>
            </div>
            <div className="card w-[20%] max-[900px]:w-full bg-white shadow-sm hover:shadow-white group/tahapan ">
              <div className='w-full h-24 flex justify-center items-end'>
                <div className='w-20 h-20 group-hover/tahapan:hidden'>
                  <Icon.Award className='w-full h-20 stroke-[#e72327]' />
                </div>
              </div>
              <div className="card-body flex items-center">
                <h2 className="card-title text-[#e72327] font-bold text-2xl text-center group-hover/tahapan:hidden">Pendampingan audit pihak ketiga dengan garansi kelulusan</h2>
                <p className='text-center text-[#e72327] hidden group-hover/tahapan:block '>Audit pihak ketiga yang independen menjadi momok besar dalam proses sertifikasi kami hadir mendampingi anda sampai selesainya proses audit dengan garansi kelulusan 100% apabila menggunakan CB yang telah bekerjasama dengan kami</p>
              </div>
            </div>
          </div>
        </div>
        {/* progress time table */}
        <div className='h-screen bg-[#e72327] flex items-center flex-col'>
          <div className='text-5xl pt-10 text-white text-center font-bold'>Progress Time Table</div>          
          <div className='w-full h-full flex justify-center items-center px-10 flex-1'>
            <div className='flex justify-center items-center group/timeline'>
              <div className='bg-white rounded-full w-20 h-20 flex justify-center items-center group-hover/timeline:hidden max-[900px]:w-14 max-[900px]:h-14'>
                <Icon.Settings />
              </div>
              <div className='text-3xl text-[#e72327] font-bold text-center bg-white rounded-3xl px-4 py-2 hidden group-hover/timeline:block max-[900px]:text-lg'>Diagnosa Asessment</div>
            </div>
            <div className='border-4 border-white w-full flex-1'></div>
            <div className='flex justify-center items-center group/timeline'>
              <div className='bg-white rounded-full w-20 h-20 flex justify-center items-center group-hover/timeline:hidden max-[900px]:w-14 max-[900px]:h-14'>
                <Icon.Briefcase />
              </div>
              <div className='text-3xl text-[#e72327] font-bold text-center bg-white rounded-3xl px-4 py-2 hidden group-hover/timeline:block max-[900px]:text-lg'>Training</div>
            </div>
            <div className='border-4 border-white w-full flex-1'></div>
            <div className='flex justify-center items-center group/timeline'>
              <div className='bg-white rounded-full w-20 h-20 flex justify-center items-center group-hover/timeline:hidden max-[900px]:w-14 max-[900px]:h-14'>
                <Icon.BookOpen />
              </div>
              <div className='text-3xl text-[#e72327] font-bold text-center bg-white rounded-3xl px-4 py-2 hidden group-hover/timeline:block max-[900px]:text-lg'>Created Document</div>
            </div>
            <div className='border-4 border-white w-full flex-1'></div>
            <div className='flex justify-center items-center group/timeline'>
              <div className='bg-white rounded-full w-20 h-20 flex justify-center items-center group-hover/timeline:hidden max-[900px]:w-14 max-[900px]:h-14'>
                <Icon.Airplay />
              </div>
              <div className='text-3xl text-[#e72327] font-bold text-center bg-white rounded-3xl px-4 py-2 hidden group-hover/timeline:block max-[900px]:text-lg'>Implementation</div>
            </div>
            <div className='border-4 border-white w-full flex-1'></div>
            <div className='flex justify-center items-center group/timeline'>
              <div className='bg-white rounded-full w-20 h-20 flex justify-center items-center group-hover/timeline:hidden max-[900px]:w-14 max-[900px]:h-14'>
                <Icon.Target />
              </div>
              <div className='text-3xl text-[#e72327] font-bold text-center bg-white rounded-3xl px-4 py-2 hidden group-hover/timeline:block max-[900px]:text-lg'>Cerificate</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home