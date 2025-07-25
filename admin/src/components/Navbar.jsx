import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center mx-7 py-2 px[4%] justify-between'>
      <img className='w-[max(10%,40px)] ' src={assets.logo} alt="" />
      <button onClick={() =>setToken('')} className='bg-gray-600 text-white px-10 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
