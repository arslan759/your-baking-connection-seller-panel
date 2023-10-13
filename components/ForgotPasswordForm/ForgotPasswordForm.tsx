import { Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import { PrimaryBtn } from '../Buttons'
import { validateEmail } from 'helpers/validations'
import { ForgetPasswordFormProps } from 'types'
import useForgotPasswordUser from 'hooks/Authentication/ForgotPassword/useForgotPasswordUser'
import { withApollo } from 'lib/apollo/withApollo'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const ForgotPasswordForm = ({ openOtp, setEmail, email }: ForgetPasswordFormProps) => {
  // const [email, setEmail] = useState('')
  const [forgotPasswordFunction, loadingForgotPassword] = useForgotPasswordUser()
  // Error states
  const [emailErr, setEmailErr] = useState('')
  const [error, setError] = useState<string>('')
  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'email') {
      setEmail(value)
      setEmailErr(value ? '' : 'Email is required')
    }
  }

  const handleChangeGenError = (value: string) => {
    setError(value)
  }

  // handle submit function for form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Checks if email is valid
    const isEmailValid = validateEmail(email)

    // Checks if email is empty
    if (!email) {
      if (!email) {
        setEmailErr('Email is required')
      }
      return
    }

    // Checks if email is valid
    if (!isEmailValid) {
      setEmailErr('Email is not valid')
      return
    }

    // Logs form data
    console.log('email is ', email)

    // Reset form fields
    setEmail('')

    // Reset error states
    setEmailErr('')

    try {
      const res = await forgotPasswordFunction({
        variables: {
          user: {
            type: 'email',
            emailPhone: email,
          },
        },
      })
      const userId = res?.data?.resetPasswordOtp?.userId
      if (userId) {
        localStorage.setItem('userId', userId)
        openOtp()
      }
    } catch (err: any) {
      setError(err?.message)
    }

    // Open otp modal
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
              <span className='font-[800]'>Forgot Password</span>
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
            Please enter your email address and we will send you a code for password reset.
          </Typography>
        </div>
        <div className='mt-[24px] md:mt-[36px]'>
          <form onSubmit={handleSubmit} className=''>
            <div className='flex flex-wrap gap-y-[8px] md:gap-y-[24px]'>
              <div className='w-full'>
                <InputField
                  label='email'
                  type='text'
                  inputColor='white'
                  name='email'
                  value={email}
                  // error={isError}
                  errorText={emailErr}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <ErrorMessage error={error} setError={handleChangeGenError} />
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

export default withApollo()(ForgotPasswordForm)
