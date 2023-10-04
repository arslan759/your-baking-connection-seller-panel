import { Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'

const HowItWorksPcView = () => {
  return (
    <div className={`${styles.maskedDiv} hidden lg:flex items-center justify-start `}>
      <div className='w-[55%] h-[auto] flex items-center justify-center mt-[-25px]'>
        <div className='w-fit h-full flex flex-col gap-y-[36px] relative px-[30px]'>
          <img
            src='Images/dotted-line.svg'
            alt='dotted-line'
            className='h-[630px] w-[115px] absolute left-[60px]'
          />
          <div className='flex gap-x-[130px]'>
            <img src='/Images/search.svg' alt='search-icon' width={'50px'} height={'50px'} />
            <div>
              <Typography
                variant='h5'
                sx={{
                  fontWeight: '600',
                  fontFamily: 'Open Sans',
                  fontSize: '28px',
                  lineHeight: 'normal',
                }}
              >
                search
              </Typography>

              <p
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: '18px',
                  lineHeight: 'normal',
                }}
              >
                Smart search tools to browse talented bakers near you
              </p>
            </div>
          </div>

          <div className='flex gap-x-[130px]'>
            <img src='/Images/connect.svg' alt='connect-icon' width={'50px'} height={'50px'} />
            <div>
              <Typography
                variant='h5'
                sx={{
                  fontWeight: '600',
                  fontFamily: 'Open Sans',
                  fontSize: '28px',
                  lineHeight: 'normal',
                }}
              >
                Connect
              </Typography>

              <p
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: '18px',
                  lineHeight: 'normal',
                }}
              >
                Easily connect with bakers about available products or custom orders
              </p>
            </div>
          </div>

          <div className='flex gap-x-[130px]'>
            <img src='/Images/order.svg' alt='order-icon' width={'50px'} height={'50px'} />
            <div>
              <Typography
                variant='h5'
                sx={{
                  fontWeight: '600',
                  fontFamily: 'Open Sans',
                  fontSize: '28px',
                  lineHeight: 'normal',
                }}
              >
                Order
              </Typography>

              <p
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: '18px',
                  lineHeight: 'normal',
                }}
              >
                Simply order online or place orders directly with bakers
              </p>
            </div>
          </div>

          <div className='flex gap-x-[130px]'>
            <img src='/Images/enjoy.svg' alt='enjoy-icon' width={'50px'} height={'50px'} />
            <div>
              <Typography
                variant='h5'
                sx={{
                  fontWeight: '600',
                  fontFamily: 'Open Sans',
                  fontSize: '28px',
                  lineHeight: 'normal',
                }}
              >
                Enjoy
              </Typography>

              <p
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: '18px',
                  lineHeight: 'normal',
                }}
              >
                {`Choose from your baker’s options that may include pickup or delivery`}
              </p>
            </div>
          </div>

          <div className='flex gap-x-[130px]'>
            <img src='/Images/review.svg' alt='search-icon' width={'50px'} height={'50px'} />
            <div>
              <Typography
                variant='h5'
                sx={{
                  fontWeight: '600',
                  fontFamily: 'Open Sans',
                  fontSize: '28px',
                  lineHeight: 'normal',
                }}
              >
                Review
              </Typography>

              <p
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: '18px',
                  lineHeight: 'normal',
                }}
              >
                Let your baker and others know how much you enjoyed their products
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[45%] h-full'>
        <img
          src='https://www.snackandbakery.com/ext/resources/images/bakeryproducts.jpg?1432238179'
          alt='image'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}

export default HowItWorksPcView
