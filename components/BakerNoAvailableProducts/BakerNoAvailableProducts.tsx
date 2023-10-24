import { Typography } from '@mui/material'
import React from 'react'

const BakerNoAvailableProducts = () => {
  return (
    <div className='w-full flex justify-center'>
      <div
        className='w-[90vw] md:w-fit flex flex-col items-center px-[34px] md:px-[29px] pb-[70px] md:pb-[104px]'
        style={{
          border: '1px dashed #6C6C6C',
        }}
      >
        <div>
          <Typography
            variant='h1'
            sx={{
              textAlign: 'center',
              color: '#090909',
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: 'normal',
              fontFamily: 'Josefin Sans',
              textTransform: 'capitalize',
              marginTop: '55px',
              '@media (max-width:767px)': {
                fontSize: '18px',
                marginTop: '31px',
              },
            }}
          >
            {`No current available products`}
          </Typography>
        </div>

        {/* <div
          className='mt-[24px] md:mt-[60px] py-[40px] px-[16px] w-[100%] md:w-[70%]'
          style={{
            border: '1px dashed #6C6C6C',
          }}
        >
          <div className='flex justify-center'>
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                color: '#090909',
                fontSize: '14px',
                fontWeight: '400',
                letterSpacing: '0.5px',
                lineHeight: '23px',
                fontFamily: 'Open Sans',
                textTransform: 'capitalize',
                display: 'flex',
                gap: '24px',
                width: 'fit-content',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <img src='/Images/upload-product.svg' alt='upload-icon' />

              <span>{`Upload Product Images`}</span>
            </Typography>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default BakerNoAvailableProducts
