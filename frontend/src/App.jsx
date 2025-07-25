import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
       <ToastContainer />
      <Navbar />
      <SearchBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/collection' element={<Collection />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/product/:productId' element={<Product />}/>
      <Route path='/place-order' element={<PlaceOrder />}/>
      <Route path='/orders' element={<Orders />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    <Footer />
    </div>
  )
}

export default App
