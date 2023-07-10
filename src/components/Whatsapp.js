import React from 'react'

const Whatsapp = () => {
    const chatWA = () => {
        window.open('https://api.whatsapp.com/send?phone=6281311851800&text=Halo%20Bapak%20Handoyo%0A%0ASaya%20mendapatkan%20kontak%20bapak%20Handoyo%20dari%20website%20Ultima%20Consulting.%20Sepertinya%20saya%20tertarik%20menggunakan%20Jasa%20Kantor%20Bapak.%20boleh%20kita%20diskusi%20%3F%20%20')
    }
  return (
    <div className='h-14 w-14 mr-5 mb-5 fixed o
    bject-left-bottom bottom-0 right-0 z-50'>
        <img onClick={chatWA} className='object-cover' src={require('../asset/images/whatsapp-png-image-9.png')} alt='whatsApp' />
    </div>
  )
}

export default Whatsapp