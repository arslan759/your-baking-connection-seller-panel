import { Chip, Radio, Typography } from '@mui/material'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import DropdownField from '../DropdownField/DropdownField'
import { cities, states } from 'Constants/constants'
import Image from 'next/image'
import { PrimaryBtn } from '../Buttons'
import UploadInputField from '../UploadInputField/UploadInputField'

const SignupForm = () => {
  const [shopName, setShopName] = useState('')
  const [shopDescription, setShopDescription] = useState('')
  const [logo, setLogo] = useState<File | null>(null)
  const [featuredImage, setFeaturedImage] = useState<File | null>(null)

  const [state, setState] = useState<string | null>('')
  const [city, setCity] = useState<string | null>('')

  const [PickupService, setPickupService] = useState(true)

  const [whatWeOffer, setWhatWeOffer] = useState<string>('')
  const [whatWeOfferChips, setWhatWeOfferChips] = useState<string[]>([])

  // Error states
  const [shopNameError, setShopNameError] = useState('')
  const [shopDescriptionError, setShopDescriptionError] = useState('')
  const [logoError, setLogoError] = useState('')
  const [featuredImageError, setFeaturedImageError] = useState('')
  const [stateError, setStateError] = useState('')
  const [cityError, setCityError] = useState('')
  const [whatWeOfferError, setWhatWeOfferError] = useState('')
  const [pickupServiceError, setPickupServiceError] = useState('')

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'shopName') {
      setShopName(value)
      setShopNameError(value ? '' : 'Shop name is required')
    }

    if (name === 'whatWeOffer') {
      setWhatWeOffer(value)
      console.log(value)
      setWhatWeOfferError('')
    }

    if (name === 'shopDescription') {
      setShopDescription(value)
      setShopDescriptionError(value ? '' : 'Shop description is required')
    }
  }

  // handle Radio Button change  for pickup service
  const handlePickupServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'yes') {
      setPickupService(true)
      setPickupServiceError('')
    } else {
      setPickupService(false)
      setPickupServiceError('')
    }
  }

  // handleKeyPress function for what we offer input field
  const handleAddChip = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // e.stopPropagation()
    if (e.key === 'Enter') {
      e.preventDefault()
      if (whatWeOffer.length) {
        setWhatWeOfferChips([...whatWeOfferChips, whatWeOffer])
        setWhatWeOffer('')
      }
    }
  }

  const handleDeleteChip = (chipToDelete: string) => {
    setWhatWeOfferChips((chips) => chips.filter((chip) => chip !== chipToDelete))
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Checks if all fields are filled
    if (!shopName || !state || !city) {
      if (!shopName) {
        setShopNameError('Shop name is required')
      }
      if (!state) {
        setStateError('State is required')
      }
      if (!city) {
        setCityError('City is required')
      }
      // Stops the execution of the function
      return
    }

    // Logs the form data
    console.log('form submitted')
    console.log('shop name is ', shopName)
    console.log('shop description is ', shopDescription)
    console.log('logo is ', logo)
    console.log('featured image is ', featuredImage)
    console.log('state is ', state)
    console.log('city is ', city)
    console.log('what we offer is ', whatWeOffer)
    console.log('what we offer chips are ', whatWeOfferChips)
    console.log('pickup service is ', PickupService)

    // Resets the form fields
    setShopName('')
    setShopDescription('')
    setLogo(null)
    setFeaturedImage(null)
    setState('')
    setCity('')
    setWhatWeOffer('')
    setWhatWeOfferChips([])
    setPickupService(false)

    // Resets the error states
    setShopNameError('')
    setShopDescriptionError('')
    setLogoError('')
    setFeaturedImageError('')
    setStateError('')
    setCityError('')
    setWhatWeOfferError('')
    setPickupServiceError('')
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
              Add shop details
            </Typography>
          </div>
        </div>
        <Image
          src='/Images/x-square.svg'
          alt='x-square'
          width={24}
          height={24}
          className='absolute top-[20px] right-[20px] cursor-pointer'
        />
        {/* </div> */}
        <div className='mt-[24px] md:mt-[42px]'>
          <form onSubmit={handleSubmit}>
            <div className='w-full flex flex-wrap gap-y-[8px] md:gap-y-[24px] justify-between'>
              <div className='w-full md:w-[45%]'>
                <InputField
                  label='shop name'
                  type='text'
                  inputColor='white'
                  name='shopName'
                  value={shopName}
                  errorText={shopNameError}
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

              <div className='mt-[16px] md:mt-[0px] w-full h-[1px] bg-[#fff]' />

              <div className='w-full'>
                <Typography
                  sx={{
                    mt: '0px',
                    fontSize: '14px !important',
                    fontFamily: 'Josefin Sans',
                    lineHeight: 'normal',
                    fontWeight: '500',
                    letterSpacing: '1px',
                    padding: '0px',
                    textTransform: 'uppercase',
                    color: '#fff',
                    '@media (max-width: 767px)': {
                      mt: '16px',
                      fontSize: '12px !important',
                    },
                  }}
                >
                  {`You can start adding these bakery details now or later!`}
                </Typography>
              </div>

              <div className='w-full md:w-[45%]'>
                <UploadInputField
                  label='upload logo'
                  inputColor='white'
                  name='logo'
                  value={shopName}
                  errorText={shopNameError}
                  required={false}
                  onChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <UploadInputField
                  label='featured image'
                  inputColor='white'
                  name='shopName'
                  value={shopName}
                  errorText={shopNameError}
                  required={false}
                  onChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <div className='flex flex-col capitalize'>
                  <label
                    style={{
                      color: 'white',
                    }}
                  >
                    <Typography sx={{}} className={`text-[12px]`} variant='body1'>
                      Pickup service
                    </Typography>
                  </label>

                  <div className='flex gap-x-[33px]'>
                    <div className='flex items-center gap-x-[18px]'>
                      <Radio
                        sx={{
                          color: '#7DDEC1',
                          '&.Mui-checked': {
                            color: '#7DDEC1',
                          },
                        }}
                        checked={PickupService === true}
                        onChange={handlePickupServiceChange}
                        value={'yes'}
                        name='radio-buttons'
                        inputProps={{ 'aria-label': 'A' }}
                      />
                      <Typography
                        sx={{
                          color: 'white',
                        }}
                        className={`text-[12px]`}
                        variant='body1'
                      >
                        yes
                      </Typography>
                    </div>
                    <div className='flex items-center gap-x-[18px]'>
                      <Radio
                        sx={{
                          color: '#7DDEC1',
                          '&.Mui-checked': {
                            color: '#7DDEC1',
                          },
                        }}
                        checked={PickupService === false}
                        onChange={handlePickupServiceChange}
                        value={'no'}
                        name='radio-buttons'
                        inputProps={{ 'aria-label': 'B' }}
                      />
                      <Typography
                        sx={{
                          color: 'white',
                          fontSize: '12px !important',
                        }}
                      >
                        no
                      </Typography>
                    </div>
                  </div>

                  {pickupServiceError && (
                    <Typography
                      sx={{
                        color: 'red',
                        fontSize: '12px !important',
                      }}
                    >
                      {pickupServiceError}
                    </Typography>
                  )}
                </div>
              </div>

              <div className='w-full'>
                <InputField
                  label='what we offer'
                  type='text'
                  inputColor='white'
                  name='whatWeOffer'
                  value={whatWeOffer}
                  errorText={whatWeOfferError}
                  required={false}
                  handleKeyPress={handleAddChip}
                  onChange={handleChange}
                />

                {whatWeOfferChips.length > 0 && (
                  <div className='flex flex-wrap gap-x-[24px] gap-y-[10px] mt-[15px]'>
                    {whatWeOfferChips.map((chip, index) => (
                      <Chip
                        key={index}
                        label={chip}
                        deleteIcon={
                          // <div className='h-full flex items-center'>
                          <img src='/Images/x.svg' alt='x' className='h-[12px] w-[12px]' />
                          // </div>
                        }
                        sx={{
                          backgroundColor: '#fff',
                          padding: '8px 12px',
                          borderRadius: '16px',
                          height: '32px',
                          fontSize: '12px',
                          lineHeight: 'normal',
                          fontFamily: 'Open Sans',
                          fontWeight: '400',
                          color: '#090909',
                          textTransform: 'capitalize',
                        }}
                        onDelete={() => handleDeleteChip(chip)}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className='w-full'>
                <InputField
                  label='shop description'
                  type='textarea'
                  inputColor='white'
                  rows={7}
                  name='shopDescription'
                  value={shopDescription}
                  errorText={shopDescriptionError}
                  required={false}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='mt-[24px] md:mt-[23px]'>
              <PrimaryBtn text='Save and Continue' type='submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupForm
