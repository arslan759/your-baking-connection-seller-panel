import { Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { PrimaryBtn } from '../Buttons'
import OtpInput from 'react-otp-input'
import styles from './styles.module.css'
import { OTPFormProps } from 'types'
import useOtpUser from '../../hooks/Authentication/Otp/useOtpUser'
import { withApollo } from 'lib/apollo/withApollo'
import { useRouter } from 'next/navigation'
import useForgotPasswordUser from '../../hooks/Authentication/ForgotPassword/useForgotPasswordUser'

const OTPForm = ({ closeOtp, type, email }: OTPFormProps) => {
  const [otp, setOtp] = useState('')

  const [verifyOtp, loadingVerifyOtp] = useOtpUser()

  const router = useRouter()
  // Error states
  const [otpError, setOtpError] = useState('')

  // handle submit function for form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const userId = localStorage.getItem('userId')
    e.preventDefault()

    // Checks if email is empty or Less than 4 characters
    if (!otp || otp.length !== 4) {
      setOtpError('Otp is required')

      // Stops the execution of the function
      return
    }
    if (type === 'registration') {
      try {
        const res = await verifyOtp({
          variables: {
            user: {
              userId,
              otp: parseInt(otp),
            },
          },
        })
        if (res?.data?.verifyOTPSignUp) {
          router.replace('/signin')
        }
      } catch (err) {
        return err
      }
    } else if (type === 'forgotPassword') {
      console.log('firing otp function', email)

      const res = await verifyOtp({
        variables: {
          user: {
            userId,
            otp: parseInt(otp),
          },
        },
      })
      if (res?.data?.verifyOTPSignUp) {
        router.push(`reset-password/${parseInt(otp)}`)
      }

      // Reset form fields
      setOtp('')

      // Reset error states
      setOtpError('')
    }
  }

  return (
    <div className='flex justify-center md:justify-end md:mr-[50px] mt-[170px]'>
      <div
        style={{
          borderRadius: '5px',
          background: 'rgba(0, 0, 0, 0.60)',
          backdropFilter: 'blur(12.5px)',
        }}
        className='w-[95vw] h-[auto] md:w-[608px] p-[20px] md:pl-[44px] md:pb-[44px] relative'
      >
        <div className=''>
          <div className='md:mt-[24px]'>
            <Typography
              sx={{
                marginTop: '10px',
                padding: '0px',
                fontSize: '32px !important',
                fontFamily: 'Open Sans',
                lineHeight: 'normal',
                fontWeight: '800 !important',
                textTransform: 'capitalize',
                color: '#7DDEC1',
                '@media (max-width: 767px)': {
                  fontSize: '24px !important',
                },
              }}
            >
              {' '}
              Enter verification code
            </Typography>
          </div>
          <Image
            src='/Images/x-square.svg'
            alt='x-square'
            width={24}
            height={24}
            onClick={closeOtp}
            className='absolute top-[20px] right-[20px] cursor-pointer'
          />
        </div>
        <div className='w-[80%] md:w-[90%]'>
          <Typography
            sx={{
              marginTop: '10px',
              padding: '0px',
              fontSize: '18px !important',
              fontFamily: 'Josefin Sans',
              lineHeight: 'normal',
              fontWeight: '400 !important',
              textTransform: 'normal',
              color: '#fff',
              '@media (max-width: 767px)': {
                fontSize: '12px !important',
              },
            }}
          >
            {' '}
            Enter the verification code sent to your email address to reset your password!
          </Typography>
        </div>

        <div className='w-[110px] h-[5px] bg-green mt-[16px]' />

        <div className='mt-[36px] md:mt-[40px]'>
          <form onSubmit={handleSubmit} className='px-[0] min-[400px]:px-[20px] md:px-[0px] '>
            <div className='w-full'>
              <OtpInput
                value={otp}
                onChange={setOtp}
                className={styles.otpInput}
                placeholder='----'
                numInputs={4}
                inputStyle={{
                  width: '71px',
                  height: '80px',
                  background: 'transparent',
                  borderRadius: '8px',
                  color: 'white',
                  border: '1px solid #fff',
                  outline: 'none',
                  fontSize: '48px',
                }}
                focusStyle={{
                  border: '1px solid #7DDEC1',
                  outline: 'none',
                }}
                containerStyle={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              />
            </div>

            <div className='mt-[36px] md:mt-[40px]'>
              <PrimaryBtn text='Enter verification code' type='submit' />
            </div>

            <div className='w-full flex justify-center mt-[12px] md:mt-[24px]'>
              <Typography
                sx={{
                  fontSize: '14px !important',
                  fontFamily: 'Open Sans',
                  lineHeight: 'normal',
                  fontWeight: '700 !important',
                  letterSpacing: '0.24px',
                  color: '#fff',
                  '@media (max-width: 767px)': {
                    fontSize: '12px !important',
                  },
                }}
              >
                {`Didn't receive the CODE?`} &nbsp;
                <span
                  style={{
                    color: '#7DDEC1',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  resend code
                </span>
              </Typography>
            </div>

            <div className='w-full flex justify-center mt-[12px] md:mt-[24px]'>
              <Typography
                sx={{
                  marginTop: '10px',
                  padding: '0px',
                  fontSize: '12px !important',
                  fontFamily: 'Open Sans',
                  lineHeight: 'normal',
                  fontWeight: '400 !important',
                  textTransform: 'normal',
                  color: '#fff',
                  '@media (max-width: 767px)': {
                    fontSize: '12px !important',
                  },
                }}
              >
                Copyright © 2023 Your Baking Connection
              </Typography>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withApollo()(OTPForm)
