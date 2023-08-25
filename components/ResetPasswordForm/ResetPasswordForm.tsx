import { Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import { PrimaryBtn } from '../Buttons'
import { checkPassword } from 'helpers/validations'

import useResetPasswordOtpVerify from '../../hooks/Authentication/ResetPassword/useResetPasswordOtpVerify'
import { withApollo } from 'lib/apollo/withApollo'
import withAuth from 'hocs/withAuth'
import { useRouter } from 'next/navigation'

interface ResetPasswordProps {
  otp: string // Change `any` to the appropriate type for `otp`
}

const ResetPasswordForm: React.FC<ResetPasswordProps> = ({ otp }) => {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [resetPassword, loadingResetPassword] = useResetPasswordOtpVerify()

  // Error states
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'password') {
      setPassword(value)
      setPasswordError(value ? '' : 'Password is required')
    } else {
      setConfirmPassword(value)
      setConfirmPasswordError(value ? '' : 'Confirm password is required')
    }
  }

  // handle submit function for form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Checks if password and confirm password match
    const isPasswordMatched = checkPassword(password, confirmPassword)

    // Checks if email is empty
    if (!password || !confirmPassword) {
      if (!password) {
        setPasswordError('Password is required')
      }

      if (!confirmPassword) {
        setConfirmPasswordError('Confirm password is required')
      }

      // Stops the execution of the function
      return
    }

    // Checks if password and confirm password match
    if (!isPasswordMatched) {
      setConfirmPasswordError('Passwords do not match')
      return
    }

    try {
      const res = await resetPassword({
        variables: {
          user: {
            userId: localStorage.getItem('userId'),
            otp: parseInt(otp),
            password: password,
          },
        },
      })
      if (res?.data?.resetPasswordOtpVerify) {
        router.push('/signin')
      }

      console.log('reset pass response is ', res)
    } catch (err) {
      console.log('err', err)
    }

    // Logs form data
    console.log('password is ', password)
    console.log('confirm password is ', confirmPassword)

    // Reset form fields
    setPassword('')
    setConfirmPassword('')

    // Reset error states
    setPasswordError('')
    setConfirmPasswordError('')
  }

  return (
    <div className='flex justify-center md:justify-end md:mr-[50px] mt-[170px]'>
      <div
        style={{
          borderRadius: '5px',
          background: 'rgba(0, 0, 0, 0.60)',
          backdropFilter: 'blur(12.5px)',
        }}
        className='w-[80vw] h-[auto] md:w-[491px] p-[20px] md:pl-[44px] md:pb-[44px] relative'
      >
        <div className=''>
          <div className='md:mt-[24px]'>
            <Typography
              sx={{
                fontSize: '14px !important',
                fontFamily: 'Josefin Sans',
                lineHeight: 'normal',
                fontWeight: '500',
                letterSpacing: '1px',
                padding: '0px',
                textTransform: 'uppercase',
                color: '#fff',
                '@media (max-width: 767px)': {
                  fontSize: '12px !important',
                },
              }}
            >
              {' '}
              joining is quick and easy
            </Typography>

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
              <span className='font-[800]'>New Password</span>
            </Typography>
          </div>
          <Image
            src='/Images/x-square.svg'
            alt='x-square'
            width={24}
            height={24}
            className='absolute top-[20px] right-[20px] cursor-pointer'
          />
        </div>
        <div>
          <Typography
            sx={{
              marginTop: '24px',
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
            Enter your new password
          </Typography>
        </div>
        <div className='mt-[24px] md:mt-[36px]'>
          <form onSubmit={handleSubmit} className=''>
            <div className='flex flex-wrap gap-y-[8px] md:gap-y-[24px]'>
              <div className='w-full'>
                <InputField
                  label='password'
                  type='password'
                  inputColor='white'
                  name='password'
                  value={password}
                  errorText={passwordError}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className='w-full'>
                <InputField
                  label='confirm password'
                  type='password'
                  inputColor='white'
                  name='confirmpassword'
                  value={confirmPassword}
                  errorText={confirmPasswordError}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='mt-[36px] md:mt-[24px]'>
              <PrimaryBtn text='Send' type='submit' />
            </div>
          </form>
        </div>
        <div className='w-full flex justify-center mt-[16px]'>
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
      </div>
    </div>
  )
}

export default withApollo()(withAuth(ResetPasswordForm))
