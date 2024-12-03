import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import './style.css'
import Serv from './pages/Services'

const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Services" element={<Serv />} />
      </Routes>
    </>
  )
}

export default App
