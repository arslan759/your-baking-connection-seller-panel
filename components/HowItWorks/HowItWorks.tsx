import { Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'
import HowItWorksPcView from '../HowItWorksPcView/HowItWorksPcView'
import HowItWorksMobileView from '../HowItWorksMobileView/HowItWorksMobileView'

const HowItWorks = () => {
  return (
    <section className='w-full flex flex-col items-center'>
      <div className='w-[87vw] md:w-[60vw] flex flex-col items-center mt-[48px] md:mt-[100px]'>
        <div className='flex'>
          <Typography
            sx={{
              textTransform: 'uppercase',
              lineHeight: 'normal',
            }}
            variant='h4'
            align='center'
          >
            How It Works
          </Typography>
          <div className='h-[24px] md:h-[36px] w-[12px] bg-green ml-[8px] md:ml-[12px]' />
        </div>

        <div className='mt-[12px] md:mt-[36px]'>
          <Typography variant='body1' align='center'>
            we believe that the best flavors come from the heart and the warmth of a home kitchen.
            Our online marketplace brings together talented bakers from all around, offering a
            delightful variety of handcrafted, home baked goods.
          </Typography>
        </div>
      </div>

      {/* MobileView */}
      <HowItWorksMobileView />

      {/* Laptop View */}
      <HowItWorksPcView />
    </section>
  )
}

export default HowItWorks
