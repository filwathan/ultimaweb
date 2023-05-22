import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from './Home'
import SertifikasiISO from './SertifikasiISO'

const Main = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/SertifikasiISO" element={<SertifikasiISO />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Main