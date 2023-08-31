import React from 'react'
import { PrimaryBtn } from '../Buttons'
import { Typography } from '@mui/material'
import Navbar from '../NavBar/NavBar'
import styles from './styles.module.css'
import { SignupSuccessProps } from 'types'

const SignupSuccess = ({ setIsSuccess }: SignupSuccessProps) => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <div className='w-[90vw] h-[fit-content] relative md:w-[760px] bg-[rgba(0,0,0,0.8999999761581421)] px-[30px] md:px-[112px] py-[49px] md:py-[122px] rounded-[6px] md:rounded-[15px] '>
        <img
          src='/Images/x-circle.svg'
          alt='close'
          className='absolute top-[18px] md:top-[48px] right-[18px] md:right-[48px] cursor-pointer'
          onClick={() => setIsSuccess(false)}
        />
        <div className='w-full flex flex-col gap-y-[14px] md:gap-y-[36px]'>
          <div className='w-full flex flex-col items-center gap-y-[9px] md:gap-y-[24px]'>
            <img
              src='/Images/smiley.svg'
              alt='success'
              className='w-[37px] md:w-[95px] h-[37px] md:h-[95px]'
            />

            <Typography
              // variant='h1'
              sx={{
                color: '#7DDEC1',
                fontSize: '36px !important',
                fontFamily: 'Josefin Sans',
                fontWeight: '700 !important',
                lineHeight: 'normal',
                textTransform: 'uppercase',
                '@media (max-width: 768px)': {
                  fontSize: '18px !important',
                },
              }}
            >
              WELCOME!
            </Typography>
          </div>

          <div className='w-full flex flex-col items-center gap-y-[9px] md:gap-y-[24px]'>
            <Typography
              // variant='h1'
              sx={{
                color: '#fff',
                fontSize: '24px !important',
                fontFamily: 'Open Sans',
                fontWeight: '500 !important',
                lineHeight: 'normal',
                textAlign: 'center',
                '@media (max-width: 768px)': {
                  fontSize: '12px !important',
                },
              }}
            >
              {`Thanks for joining! We're so excited you're here! You now have full feature access to easily create your bakery profile!`}
            </Typography>
          </div>

          <div className='w-80%'>
            <PrimaryBtn text='Go To Bakery Profile' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupSuccess
