import { Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'

const BakerLocation = () => {
  return (
    <div
      className={` ${styles.background}`}
      style={{
        border: '1px solid transparent',
      }}
    >
      <div className='mt-[50px] md:mt-[60px] ml-[20px] md:ml-[40px]'>
        <Typography
          sx={{
            fontFamily: 'Josefin Sans',
            fontSize: '26px',
            fontWeight: '600',
            lineHeight: 'normal',
            textTransform: 'uppercase',
            color: '#090909',
            '@media (max-width: 767px)': {
              fontSize: '18px',
            },
          }}
        >
          {`BAKERY INFO`}
        </Typography>
        <div className='mt-[28px] lg:mt-[24px] flex flex-col gap-y-[12px] w-[82%] lg:w-full'>
          {/* <div className='flex gap-x-[12px] items-center'>
            <img src='/Images/location-icon.svg' alt='location' className='h-[24px] w-[24px]' />
            <Typography
              sx={{
                fontFamily: 'Open Sans',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: 'normal',
                textTransform: 'capitalize',
                color: '#090909',
                '@media (max-width: 767px)': {
                  fontSize: '12px',
                },
              }}
            >
              {` 8141 Lakewood Main St, Bradenton, FL 34202`}
            </Typography>
          </div> */}
          <div className='flex gap-x-[12px] items-center'>
            <img src='/Images/truck.svg' alt='location' className='h-[24px] w-[24px]' />
            <Typography
              sx={{
                fontFamily: 'Open Sans',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: 'normal',
                textTransform: 'capitalize',
                color: '#090909',
                '@media (max-width: 767px)': {
                  fontSize: '12px',
                },
              }}
            >
              {`Pickup Available`}
            </Typography>
          </div>
          <div className='flex gap-x-[12px] items-center'>
            <img src='/Images/email.svg' alt='location' className='h-[24px] w-[24px]' />
            <Typography
              sx={{
                fontFamily: 'Open Sans',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: 'normal',
                textTransform: 'lowercase',
                color: '#090909',
                '@media (max-width: 767px)': {
                  fontSize: '12px',
                },
              }}
            >
              {`jhon@gmail.com`}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BakerLocation
