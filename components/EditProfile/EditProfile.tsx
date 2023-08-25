import { Modal, Typography } from '@mui/material'

import React, { useEffect, useRef, useState } from 'react'
import InputField from '../InputField/InputField'
import { PrimaryBtn } from '../Buttons'
import { validateEmail } from 'helpers/validations'
import DropdownField from '../DropdownField/DropdownField'
import { cities, states } from 'Constants/constants'

const EditProfile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState<string | null>('')
  const [city, setCity] = useState<string | null>('')
  const [address, setAddress] = useState('')
  const [picture, setPicture] = useState('')

  // Edit Button Modal State
  const [isEdited, setIsEdited] = useState(false)

  // Error states
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [stateError, setStateError] = useState('')
  const [cityError, setCityError] = useState('')
  const [addressError, setAddressError] = useState('')
  const [pictureError, setPictureError] = useState('')

  // handleEditUserProfile function for edit button
  const handleEditUserProfile = () => {
    console.log('edit button clicked')
    setIsEdited(!isEdited)
  }

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'firstname') {
      setFirstName(value)
      // setFirstNameError(value ? '' : 'Firstname is required')
    } else if (name === 'lastname') {
      setLastName(value)
      // setLastNameError(value ? '' : 'Lastname is required')
    } else if (name === 'email') {
      setEmail(value)
      setEmailError('')
    } else if (name === 'phone') {
      setPhone(value)
      // setPhoneError(value ? '' : 'Phone is required')
    } else if (name === 'address') {
      setAddress(value)
      // setAddressError(value ? '' : 'Address is required')
    }
  }

  // handleStateChange function for state dropdown
  const handleStateChange = (state: string) => {
    setState(state)
    // setStateError(state ? '' : 'State is required')
  }

  // handleCityChange function for city dropdown
  const handleCityChange = (state: string) => {
    setCity(state)
    // setCityError(state ? '' : 'City is required')
  }

  // handleClick function for file upload

  const handleClick = () => {
    // Trigger the click event of the file input
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  // handlePictureChange function for picture upload
  const handlePictureChange = (e: any) => {
    const file = e.target.files[0]

    console.log('files are ', e.target.files)
    console.log('picture is ', file?.name)

    if (file.size > 1024 * 1024 * 5) {
      setPictureError('Picture size should be less than 5mb')
      return
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      setPictureError('Invalid file type')
      return
    }

    setPictureError('')
    setPicture(file.name)
  }

  // handleSubmit function for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Checks if email is valid

    if (email) {
      const isEmailValid = validateEmail(email)

      if (!isEmailValid) {
        setEmailError('Email is not valid')
        return
      }
    }

    // Logs the form data
    console.log('form submitted')
    console.log('firstname is ', firstName)
    console.log('lastname is ', lastName)
    console.log('email is ', email)
    console.log('phone is ', phone)
    console.log('state is ', state)
    console.log('city is ', city)
    console.log('address is ', address)

    // Resets the form fields
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setState('')
    setCity('')
    setAddress('')

    // Resets the error states
    setFirstNameError('')
    setLastNameError('')
    setEmailError('')
    setPhoneError('')
    setStateError('')
    setCityError('')
    setAddressError('')
  }

  return (
    <>
      {/* desktop View  Edit Button*/}
      <div className='hidden md:block rounded-[8px] overflow-hidden w-[117px] h-[41px]'>
        <PrimaryBtn text='Edit profile' handleClick={handleEditUserProfile} />
      </div>

      {/* Mobile View  Edit Button*/}
      <img
        src='/Images/edit.svg'
        alt='edit-icon'
        className='block md:hidden cursor-pointer self-start mt-[7px]'
        onClick={() => handleEditUserProfile()}
      />

      <Modal
        sx={{
          // position: 'absolute',
          // top: '50%',
          // left: '50%',
          // transform: 'translate(-50%, -50%)',
          // width: '100%',
          // height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        open={isEdited}
        onClose={handleEditUserProfile}
      >
        <div
          className='w-[90vw] max-h-[90vh] overflow-y-scroll md:overflow-visible md:w-[686px] md:h-fit bg-[#fff] p-[16px] md:p-[36px] relative'
          style={{
            border: 'none !important',
            boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.15)',
            borderRadius: '8px',
          }}
        >
          <img
            src='/Images/x-circle-black.svg'
            alt='close-btn'
            className='w-[24px] h-[24px] absolute left-[91%] top-[24px] cursor-pointer z-[1]'
            onClick={handleEditUserProfile}
          />

          <div className='w-full flex justify-center mt-[0px] md:mt-[-100px] rounded-full overflow-hidden relative'>
            <img
              src={
                picture
                  ? picture
                  : `https://image.winudf.com/v2/image1/bmV0LndsbHBwci5naXJsc19wcm9maWxlX3BpY3R1cmVzX3NjcmVlbl8xXzE2Njc3MjczMTZfMDE3/screen-1.webp?fakeurl=1&type=.webp`
              }
              alt=''
              className='w-[129px] h-[129px] rounded-full object-cover'
            />
          </div>
          <div className='w-full flex gap-[12px] justify-center items-center mt-[8px]'>
            <Typography
              sx={{
                color: '#090909',
                fontSize: '24px !important',
                fontWeight: '500 !important',
                lineHeight: '32px',
                fontFamily: 'Josefin Sans',
                textTransform: 'capitalize',
                textAlign: 'center',
                '@media (max-width: 767px)': {
                  fontSize: '18px !important',
                  lineHeight: '24px !important',
                },
              }}
            >
              John
            </Typography>
            <img
              onClick={handleClick}
              src='/Images/edit.svg'
              alt='edit-icon'
              className='w-[24px] h-[24px] cursor-pointer'
            />
          </div>
          <form onSubmit={handleSubmit} className='mt-[36px]'>
            <div className='w-full flex flex-wrap gap-y-[8px] md:gap-y-[24px] justify-between'>
              <div className='w-full md:w-[45%]'>
                <InputField
                  label='first name'
                  type='text'
                  inputColor='#090909'
                  name='firstname'
                  value={firstName}
                  errorText={firstNameError}
                  required={false}
                  onChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <InputField
                  label='last name'
                  type='text'
                  inputColor='#090909'
                  name='lastname'
                  value={lastName}
                  errorText={lastNameError}
                  required={false}
                  onChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <InputField
                  label='email'
                  type='text'
                  inputColor='#090909'
                  name='email'
                  value={email}
                  errorText={emailError}
                  required={false}
                  onChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <InputField
                  label='phone'
                  type='text'
                  inputColor='#090909'
                  name='phone'
                  value={phone}
                  errorText={phoneError}
                  required={false}
                  onChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <DropdownField
                  label='state'
                  required={false}
                  name='state'
                  errorText={stateError}
                  value={state}
                  options={states}
                  inputColor='#090909'
                  onChange={handleStateChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <DropdownField
                  label='city'
                  required={false}
                  name='city'
                  errorText={cityError}
                  value={city}
                  options={cities}
                  inputColor='#090909'
                  onChange={handleCityChange}
                />
              </div>
              <div className='w-full md:w-[100%]'>
                <InputField
                  label='current address'
                  type='textarea'
                  inputColor='#090909'
                  // multiline
                  rows={5}
                  name='address'
                  value={address}
                  errorText={addressError}
                  required={false}
                  onChange={handleChange}
                />
              </div>

              <input
                type='file'
                ref={fileInputRef}
                onChange={handlePictureChange}
                style={{ display: 'none' }} // Hide the file input
              />
            </div>

            <div className='mt-[24px] md:mt-[23px]'>
              <PrimaryBtn text='save' type='submit' />
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default EditProfile
