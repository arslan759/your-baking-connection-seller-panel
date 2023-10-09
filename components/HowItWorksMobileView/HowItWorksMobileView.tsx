import { Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'

const HowItWorksMobileView = () => {
  return (
    <div className={`${styles.maskedDiv} flex lg:hidden items-center justify-start `}>
      <div className='w-full sm:w-[55%] h-[full] flex flex-wrap justify-start gap-x-[18px] gap-y-[8px] mt-[-25px] ml-[20px]'>
        <div className='w-[45%]'>
          <Typography
            variant='h5'
            sx={{
              fontWeight: '600',
              fontFamily: 'Open Sans',
              fontSize: '18px !important',
              lineHeight: 'normal',
            }}
          >
            1-Search
          </Typography>

          <p
            style={{
              fontWeight: '400',
              fontFamily: 'Open Sans',
              fontSize: '14px',
              lineHeight: 'normal',
              marginTop: '4px',
            }}
          >
            Smart search tools to browse talented bakers near you
          </p>
        </div>

        <div className='w-[45%]'>
          <Typography
            variant='h5'
            sx={{
              fontWeight: '600',
              fontFamily: 'Open Sans',
              fontSize: '18px !important',
              lineHeight: 'normal',
            }}
          >
            2-Connect
          </Typography>

          <p
            style={{
              fontWeight: '400',
              fontFamily: 'Open Sans',
              fontSize: '14px',
              lineHeight: 'normal',
              marginTop: '4px',
            }}
          >
            Easily connect with bakers about available products or custom orders
          </p>
        </div>

        <div className='w-[45%]'>
          <Typography
            variant='h5'
            sx={{
              fontWeight: '600',
              fontFamily: 'Open Sans',
              fontSize: '18px !important',
              lineHeight: 'normal',
            }}
            // className='text-[12px]'
          >
            3-Order
          </Typography>

          <p
            style={{
              fontWeight: '400',
              fontFamily: 'Open Sans',
              fontSize: '14px',
              lineHeight: 'normal',
              marginTop: '4px',
            }}
          >
            Simply order online or place orders directly with bakers
          </p>
        </div>

        <div className='w-[45%]'>
          <Typography
            variant='h5'
            sx={{
              fontWeight: '600',
              fontFamily: 'Open Sans',
              fontSize: '18px !important',
              lineHeight: 'normal',
            }}
            // className='text-[12px]'
          >
            4-Enjoy
          </Typography>

          <p
            style={{
              fontWeight: '400',
              fontFamily: 'Open Sans',
              fontSize: '14px',
              lineHeight: 'normal',
              marginTop: '4px',
            }}
          >
            {`Choose from your baker’s options that may include pickup or delivery`}
          </p>
        </div>

        <div className='w-[ 95%]'>
          <Typography
            variant='h5'
            sx={{
              fontWeight: '600',
              fontFamily: 'Open Sans',
              fontSize: '18px !important',
              lineHeight: 'normal',
            }}
            // className='text-[12px]'
          >
            5-Review
          </Typography>

          <p
            style={{
              fontWeight: '400',
              fontFamily: 'Open Sans',
              fontSize: '14px',
              lineHeight: 'normal',
              marginTop: '4px',
            }}
          >
            Let your baker and others know how much you enjoyed their products
          </p>
        </div>
      </div>

      <div className='max-[500px]:hidden block w-[45%] h-full'>
        <img
          src='https://www.snackandbakery.com/ext/resources/images/bakeryproducts.jpg?1432238179'
          alt='image'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}

export default HowItWorksMobileView
