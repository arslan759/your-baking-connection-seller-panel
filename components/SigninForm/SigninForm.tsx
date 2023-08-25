import React, { FC, useEffect, useState } from 'react'
import InputField from '../InputField/InputField'
import { PrimaryBtn } from '../Buttons'
import { validateEmail } from 'helpers/validations'
import PasswordField from '../PasswordField/PasswordField'
import { Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Image from 'next/image'
import useLoginUser from '../../hooks/Authentication/Login/useLoginUser'
import { withApollo } from 'lib/apollo/withApollo'
import { useRouter } from 'next/navigation'
import withAuth from '../../hocs/withAuth'

import useViewer from 'hooks/viewer/useViewer'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const SigninForm = () => {
  //login mutation
  const [loginUser, loadingLoginUser] = useLoginUser()
  const [viewer, loading, refetch] = useViewer()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = React.useState(false)

  // Error states
  const [emailErr, setEmailErr] = useState('')
  const [passwordErr, setPasswordErr] = useState('')

  const [genError, setGenError] = useState<String | any>('')

  const router = useRouter()

  // handle checkbox change for remember me
  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target

    setChecked(checked)
  }

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'email') {
      setEmail(value)
      setEmailErr(value ? '' : 'Email is required')
    } else {
      setPassword(value)
      setPasswordErr(value ? '' : 'Password is required')
    }
  }

  // handle submit function for form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Reset error states
    setEmailErr('')
    setPasswordErr('')

    // Checks if email is valid
    const isEmailValid = validateEmail(email)

    // Checks if email or password is empty
    if (!email || !password) {
      if (!email) {
        setEmailErr('Email is required')
      } else if (!isEmailValid) {
        setEmailErr('Email is not valid')
      }

      if (!password) {
        setPasswordErr('Password is required')
      }

      return
    }

    // Checks if email is valid
    if (!isEmailValid) {
      setEmailErr('Email is not valid')
      return
    }

    try {
      const res = await loginUser({
        variables: {
          user: {
            email,
            password,
          },
        },
      })
      const accessToken = res?.data?.loginUser?.loginResult?.tokens?.accessToken
      const refreshToken = res?.data?.loginUser?.loginResult?.tokens?.refreshToken

      if (accessToken) {
        localStorage.setItem('accounts:accessToken', accessToken)
        localStorage.setItem('accounts:refreshToken', refreshToken)
      }
    } catch (err: any) {
      console.log(err)
      setGenError(err?.message)
    }
  }

  const handleChangeGenError = (value: String) => {
    setGenError(value)
  }

  return (
    <div className='flex justify-center md:justify-end md:mr-[50px] md:mt-[126px]'>
      <div
        style={{
          borderRadius: '5px',
          background: 'rgba(0, 0, 0, 0.60)',
          backdropFilter: 'blur(12.5px)',
        }}
        className='w-[80vw] h-[626px] md:h-[auto] md:w-[488px] p-[20px] md:pl-[44px] md:pb-[44px] relative'
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
              WELCOME Back!
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
              Sign in
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
        <div className='mt-[24px] md:mt-[42px]'>
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
              <div className='w-full'>
                <PasswordField
                  label='password'
                  name='password'
                  value={password}
                  inputColor='white'
                  // error={isError}
                  errorText={passwordErr}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='w-full flex flex-col-reverse md:flex-row md:justify-between md:items-center mt-[24px]'>
              <div className=''>
                <div className='flex justify-start items-center gap-x-[15px] text-[white]'>
                  <Checkbox
                    checked={checked}
                    onChange={handleCheckBox}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{
                      padding: '0px',
                      width: '20px',
                      height: '20px',

                      '& .MuiSvgIcon-root': {
                        width: 20,
                        height: 20,
                        color: '#fff',
                        borderRadius: '2px',
                        padding: '0px',
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '12px !important',
                      fontFamily: 'Open Sans',
                      lineHeight: 'normal',
                      fontWeight: '400 !important',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'start',
                      color: '#fff',
                    }}
                  >
                    Remember Password
                  </Typography>
                </div>
              </div>
              <div className='flex justify-end'>
                <a
                  href='/forget-password'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px !important',
                      fontFamily: 'Open Sans',
                      lineHeight: 'normal',
                      fontWeight: '400 !important',
                      color: '#7DDEC1',
                    }}
                  >
                    Forget Password?
                  </Typography>
                </a>
              </div>
            </div>

            <div>
              <ErrorMessage error={genError} setError={handleChangeGenError} />
            </div>

            <div className='mt-[27px] md:mt-[20px]'>
              <PrimaryBtn text='Sign In' type='submit' />
            </div>

            <div className='flex justify-center items-center  mt-[20px]'>
              <div className='w-[97px] h-[0.5px] bg-[#fff]' />
              <Typography
                sx={{
                  fontSize: '12px !important',
                  fontFamily: 'Open Sans',
                  lineHeight: 'normal',
                  fontWeight: '400 !important',
                  color: '#fff',
                  marginX: '10px',
                }}
              >
                OR
              </Typography>

              <div className='w-[97px] h-[0.5px] bg-[#fff]' />
            </div>

            <div className='w-full flex flex-col items-center gap-[8px] md:gap-[24px] mt-[32px]'>
              <Typography
                sx={{
                  fontSize: '12px !important',
                  fontFamily: 'Open Sans',
                  lineHeight: 'normal',
                  fontWeight: '400 !important',
                  color: '#fff',
                }}
              >
                {`Don’t have an account? `}&nbsp;
                <a
                  href='/signup'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span
                    style={{
                      fontWeight: '600 !important',
                      color: '#7DDEC1',
                    }}
                  >
                    Sign Up
                  </span>
                </a>
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px !important',
                  fontFamily: 'Open Sans',
                  lineHeight: 'normal',
                  fontWeight: '400 !important',
                  color: '#fff',
                }}
              >
                Are you a baker? &nbsp;
                <a
                  href='/signin'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span
                    style={{
                      fontWeight: '600 !important',
                      color: '#7DDEC1',
                    }}
                  >
                    Login
                  </span>
                </a>
              </Typography>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withApollo()(withAuth(SigninForm))
