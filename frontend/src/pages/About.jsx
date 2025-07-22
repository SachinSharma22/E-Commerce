import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'

const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia similique reiciendis debitis tempore magnam alias id maiores? Et culpa voluptates porro id cum, amet est corrupti mollitia non, suscipit placeat?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi perferendis maxime qui quae sint mollitia, fuga hic! Recusandae, velit est?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure quo molestias eos optio explicabo repudiandae, necessitatibus neque perspiciatis ducimus!</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi facilis tempora enim amet assumenda fuga commodi veniam ratione eligendi sapiente?</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convienience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi facilis tempora enim amet assumenda fuga commodi veniam ratione eligendi sapiente?</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi facilis tempora enim amet assumenda fuga commodi veniam ratione eligendi sapiente?</p>
        </div>
      </div>

      <NewsLatterBox  />

    </div>
  )
}

export default about
