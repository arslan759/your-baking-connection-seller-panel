import { Button, FormControl, FormHelperText, Typography } from '@mui/material'
import { withApollo } from 'lib/apollo/withApollo'
import Checkbox from '@mui/material/Checkbox'
import Image from 'next/image'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import { PrimaryBtn } from '../Buttons'
import { checkPassword, validateEmail } from 'helpers/validations'
import DropdownField from '../DropdownField/DropdownField'
import { cities, states } from 'Constants/constants'
import useCreateUserWithOtp from '../../hooks/Authentication/SignUp/useCreateUserOtp'
import { useRouter } from 'next/navigation'
import { SignUpFormProps } from 'types'
import withAuth from 'hocs/withAuth'

const SignupForm = ({ openOtp }: SignUpFormProps) => {
  //sign up mutation hook
  const [signUp, loadingSignUp] = useCreateUserWithOtp()

  const router = useRouter()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState<string | null>('')
  const [city, setCity] = useState<string | null>('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [checked, setChecked] = useState(false)

  // Error states
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [stateError, setStateError] = useState('')
  const [cityError, setCityError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [checkedError, setCheckedError] = useState('')

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'firstname') {
      setFirstName(value)
      setFirstNameError(value ? '' : 'Firstname is required')
    } else if (name === 'lastname') {
      setLastName(value)
      setLastNameError(value ? '' : 'Lastname is required')
    } else if (name === 'email') {
      setEmail(value)
      setEmailError(value ? '' : 'Email is required')
    } else if (name === 'phone') {
      setPhone(value)
      setPhoneError(value ? '' : 'Phone is required')
    } else if (name === 'password') {
      setPassword(value)
      setPasswordError(value ? '' : 'Password is required')
    } else {
      setConfirmPassword(value)
      setConfirmPasswordError(value ? '' : 'Confirm password is required')
    }
  }

  // handleCheckBox function for Terms and Conditions
  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target

    setChecked(checked)
    setCheckedError(checked ? '' : 'Please accept the terms and conditions')
  }

  // handleStateChange function for state dropdown
  const handleStateChange = (state: string) => {
    setState(state)
    setStateError(state ? '' : 'State is required')
  }

  // handleCityChange function for city dropdown
  const handleCityChange = (state: string) => {
    setCity(state)
    setCityError(state ? '' : 'City is required')
  }

  // handleSubmit function for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Checks if email is valid
    const isEmailValid = validateEmail(email)

    // Checks if password and confirm password match
    const isPasswordMatched = checkPassword(password, confirmPassword)

    // Checks if all fields are filled
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !state ||
      !city ||
      !password ||
      !confirmPassword ||
      !checked
    ) {
      if (!firstName) {
        setFirstNameError('Firstname is required')
      }

      if (!lastName) {
        setLastNameError('Lastname is required')
      }

      if (!email) {
        setEmailError('Email is required')
      } else {
        if (!isEmailValid) {
          setEmailError('Email is not valid')
        }
      }

      if (!phone) {
        setPhoneError('Phone is required')
      }

      if (!state) {
        setStateError('State is required')
      }

      if (!city) {
        setCityError('City is required')
      }

      if (!password) {
        setPasswordError('Password is required')
      }

      if (!confirmPassword) {
        setConfirmPasswordError('Confirm password is required')
      }

      // Checks if password and confirm password match
      if (!isPasswordMatched) {
        setConfirmPasswordError('Passwords do not match')
      }

      if (!checked) {
        setCheckedError('Please accept the terms and conditions')
      }

      // Stops the execution of the function
      return
    }

    // Checks if password and confirm password match
    if (!isPasswordMatched) {
      setConfirmPasswordError('Passwords do not match')
      return
    }

    // Checks if email is valid
    if (!isEmailValid) {
      setEmailError('Email is not valid')
      return
    }

    // Logs the form data
    console.log('form submitted')
    console.log('firstname is ', firstName)
    console.log('lastname is ', lastName)
    console.log('email is ', email)
    console.log('phone is ', phone)
    console.log('state is ', state)
    console.log('city is ', city)
    console.log('password is ', password)
    console.log('confirm password is ', confirmPassword)
    console.log('checked is ', checked)

    // Resets the form fields
    // setFirstName('')
    // setLastName('')
    // setEmail('')
    // setPhone('')
    // setState('')
    // setCity('')
    // setPassword('')
    // setConfirmPassword('')
    // setChecked(false)

    // Resets the error states
    // setFirstNameError('')
    // setLastNameError('')
    // setEmailError('')
    // setPhoneError('')
    // setStateError('')
    // setCityError('')
    // setPasswordError('')
    // setConfirmPasswordError('')

    //registration handler

    try {
      const userRand = Date.now()
      const result = await signUp({
        variables: {
          user: { username: `u${userRand.toString()}`, email, password, type: 'email' },
          profile: { firstName, lastName, state, city },
        },
      })
      let userId = result?.data?.createUserWithOtp?.userId
      if (userId) {
        localStorage.setItem('userId', userId)

        openOtp()
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='flex justify-center md:justify-end md:mr-[50px] mt-[-10px] md:mt-[30px] pb-[10px]'>
      <div
        style={{
          borderRadius: '5px',
          background: 'rgba(0, 0, 0, 0.60)',
          backdropFilter: 'blur(12.5px)',
        }}
        className='w-[80vw] h-[auto] md:w-[50vw] p-[20px] md:pl-[44px] md:pb-[44px] relative'
      >
        <div className=''>
          <div className='md:mt-[24px]'>
            <Typography
              variant='body2'
              className='text-white text-[12px] md:text-[14px] uppercase tracking-[1px] p-0'
            >
              {' '}
              joining is quick and easy
            </Typography>

            <Typography
              variant='h5'
              className='text-green font-open_sans_bold capitalise mt-[10px] p-0'
            >
              {' '}
              Sign up
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
          <form onSubmit={handleSubmit}>
            <div className='w-full flex flex-wrap gap-y-[8px] md:gap-y-[24px] justify-between'>
              <div className='w-full md:w-[45%]'>
                <InputField
                  label='first name'
                  type='text'
                  inputColor='white'
                  name='firstname'
                  value={firstName}
                  errorText={firstNameError}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <InputField
                  label='last name'
                  type='text'
                  inputColor='white'
                  name='lastname'
                  value={lastName}
                  errorText={lastNameError}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <InputField
                  label='email'
                  type='text'
                  inputColor='white'
                  name='email'
                  value={email}
                  errorText={emailError}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <InputField
                  label='phone'
                  type='text'
                  inputColor='white'
                  name='phone'
                  value={phone}
                  errorText={phoneError}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <DropdownField
                  label='state'
                  required
                  name='state'
                  errorText={stateError}
                  value={state}
                  options={states}
                  inputColor='white'
                  onChange={handleStateChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <DropdownField
                  label='city'
                  required
                  name='city'
                  errorText={cityError}
                  value={city}
                  options={cities}
                  inputColor='white'
                  onChange={handleCityChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
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

              <div className='w-full md:w-[45%]'>
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

            <div className='mt-[20px]'>
              <FormControl error={checked ? false : true}>
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
                        width: '20px',
                        height: '20px',
                        color: '#fff',
                        borderRadius: '2px',
                        padding: '0px',
                      },
                    }}
                  />
                  <Typography
                    variant='body1'
                    className='text-[12px] flex justify-start items-center text-[white]'
                  >
                    I agree to all the Term of conditions & Privacy Policy
                  </Typography>
                </div>
                {checkedError ? <FormHelperText> {checkedError} </FormHelperText> : ''}
              </FormControl>
            </div>

            <div className='mt-[24px] md:mt-[23px]'>
              <PrimaryBtn text='Register' type='submit' />
            </div>

            <div className='w-full flex justify-center mt-[8px] md:mt-[12px]'>
              <Typography variant='body1' className='text-[12px] text-[white]'>
                Already have an account? &nbsp;
                <a
                  href='/signin'
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <span className='text-green'>Login</span>
                </a>
              </Typography>
            </div>

            <div className='flex justify-center items-center  mt-[8px] md:mt-[20px]'>
              <div className='w-[97px] h-[0.5px] bg-[#fff]' />
              <Typography variant='body1' className={`text-[12px] z-10 text-[white] mx-[10px]`}>
                OR
              </Typography>

              <div className='w-[97px] h-[0.5px] bg-[#fff]' />
            </div>

            <div className='w-full flex justify-center mt-[8px] md:mt-[20px]'>
              <Button
                style={{
                  width: '100%',
                  height: '45px',
                  // background: 'transparent',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '16px',
                  // color: '#fff',
                  border: '0.5px solid #7DDEC1',
                  cursor: 'pointer',
                }}
                className='bg-transparent hover:bg-green text-white hover:text-[#000] normal-case'
              > 
                Sign up with <img src='/Images/google.svg' alt='google-icon' />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withApollo()(withAuth(SignupForm))
