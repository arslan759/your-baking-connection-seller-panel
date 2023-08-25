import React from 'react'
import { Typography } from '@mui/material'

import Navbar from '../NavBar/NavBar'
import FeaturesGrid from '../FeaturesGrid/FeaturesGrid'

const Membership = () => {
  return (
    <>
      <Navbar />
      <div
        className='relative flex-col flex justify-center items-center w-full'
        style={{ border: '1px solid red' }}
      >
        <div
          // className='flex justify-center items-center text-center w-[229px] h-[24px] md:w-[457px] md:h-[48px] mt-[35px] mb:mt-[100px]'
          className='text-center w-[229px] h-[24px] md:w-[457px] md:h-[48px] mt-[35px] mb:mt-[100px]'
          style={{ border: '1px solid orange' }}
        >
          <Typography variant='h4' sx={{ color: '#7DDEC1' }}>
            Bakery Membership
          </Typography>
        </div>
        <div
          className='relative flex justify-center items-center w-full'
          style={{ border: '1px solid orange' }}
        ></div>
        <FeaturesGrid />
      </div>
    </>
  )
}

export default Membership
