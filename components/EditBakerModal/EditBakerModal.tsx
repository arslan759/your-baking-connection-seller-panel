import { Chip, Modal, Radio, Typography } from '@mui/material'
import React, { useState } from 'react'
import { PrimaryBtn } from '../Buttons'
import InputField from '../InputField/InputField'
import UploadInputField from '../UploadInputField/UploadInputField'
import DropdownField from '../DropdownField/DropdownField'
import { cities, states, weOfferData } from 'Constants/constants'
import MultiSelectDropdownField from '../MultiSelectDropdownField/MultiSelectDropdownField'
import CancelBtn from '../Buttons/CancelBtn'

const EditBakerModal = () => {
  // Edit Button Modal State
  const [isEdited, setIsEdited] = useState(false)

  // handleEdit function for edit button
  const handleEditShop = () => {
    console.log('edit button clicked')
    setIsEdited(!isEdited)
  }

  const [shopName, setShopName] = useState('')
  const [shopDescription, setShopDescription] = useState('')
  const [logo, setLogo] = useState<File | null>(null)
  const [featuredImage, setFeaturedImage] = useState<File | null>(null)

  const [state, setState] = useState<string | null>('')
  const [city, setCity] = useState<string | null>('')

  const [PickupService, setPickupService] = useState(true)

  const [whatWeOffer, setWhatWeOffer] = useState<any[]>([])

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

    if (name === 'shopDescription') {
      setShopDescription(value)
      setShopDescriptionError(value ? '' : 'Shop description is required')
    }
  }

  const chipLabel = (title: string, image: string) => {
    return (
      <div className='flex flex-col items-center'>
        <img src={image} alt={title} className='w-[24px] md:w-[32px] h-[24px] md:h-[32px]' />
        <Typography
          sx={{
            textAlign: 'center',
            color: '#090909',
            width: '90%',
            fontSize: '14px !important',
            fontWeight: '500 !important',
            lineHeight: 'normal',
            fontFamily: 'Open Sans',
            textTransform: 'capitalize',
            '@media (max-width:767px)': {
              fontSize: '10px !important',
            },
          }}
        >
          {title}
        </Typography>
      </div>
    )
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

  const handleDeleteChip = (chipToDelete: string) => {
    console.log('chip to delete is', chipToDelete)
    console.log('what we offer is', whatWeOffer)
    setWhatWeOffer((chips) => chips.filter((chip) => chip !== chipToDelete))
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

    // Logs the form data
    console.log('form submitted')
    console.log('shop name is ', shopName)
    console.log('shop description is ', shopDescription)
    console.log('logo is ', logo)
    console.log('featured image is ', featuredImage)
    console.log('state is ', state)
    console.log('city is ', city)
    console.log('what we offer is ', whatWeOffer)
    console.log('pickup service is ', PickupService)

    // Resets the form fields
    setShopName('')
    setShopDescription('')
    setLogo(null)
    setFeaturedImage(null)
    setState('')
    setCity('')
    setWhatWeOffer([])
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
    <>
      <div className='w-[10%] flex justify-end'>
        <div className='flex flex-col items-center justify-end lg:justify-start gap-y-[4px] md:gap-y-[12px]'>
          <img
            src='/Images/edit.svg'
            alt='edit-icon'
            className='w-[18px] md:w-[24px] h-[18px] md:h-[24px] cursor-pointer'
            onClick={handleEditShop}
          />
          <Typography
            sx={{
              fontFamily: 'Josefin Sans',
              fontSize: '16px !important',
              fontWeight: '500 !important',
              lineHeight: 'normal',
              textTransform: 'capitalize',
              fontFeatureSettings: "'clig' off, 'liga' off",
              color: '#090909',
              '@media (max-width: 767px)': {
                fontSize: '12px !important',
              },
            }}
          >
            edit
          </Typography>
        </div>
      </div>

      <Modal
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        open={isEdited}
        onClose={handleEditShop}
      >
        <div
          className='w-[90vw] max-h-[90vh] overflow-scroll md:w-[686px] md:h-fit bg-[#fff] p-[16px] md:p-[36px] relative'
          style={{
            border: 'none !important',
            boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.15)',
            borderRadius: '8px',
          }}
        >
          <Typography
            sx={{
              fontSize: '18px !important',
              fontFamily: 'Open Sans',
              fontWeight: '700 !important',
              lineHeight: 'normal',
              color: '#090909',
              letterSpacing: '0.5px !important',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              '@media (min-width: 768px)': {
                fontSize: '16px !important',
              },
            }}
          >
            <img
              src='/Images/information-icon.svg'
              alt='information'
              className='w-[20px] h-[20px]'
            />
            Information
          </Typography>

          <div className='w-full h-full  mt-[22px]'>
            <form onSubmit={handleSubmit}>
              <div className='w-full flex flex-wrap gap-y-[8px] md:gap-y-[24px] justify-between'>
                <div className='w-full'>
                  <InputField
                    label='shop name'
                    type='text'
                    inputColor='#212529'
                    name='shopName'
                    value={shopName}
                    errorText={shopNameError}
                    required={false}
                    onChange={handleChange}
                  />
                </div>

                <div className='w-full'>
                  <DropdownField
                    label='state'
                    required={false}
                    name='state'
                    errorText={stateError}
                    value={state}
                    options={states}
                    inputColor='#212529'
                    onChange={handleStateChange}
                  />
                </div>

                <div className='w-full'>
                  <DropdownField
                    label='city'
                    required={false}
                    name='city'
                    errorText={cityError}
                    value={city}
                    options={cities}
                    inputColor='#212529'
                    onChange={handleCityChange}
                  />
                </div>

                <div className='w-full'>
                  <UploadInputField
                    label='upload logo'
                    inputColor='#212529'
                    name='logo'
                    value={shopName}
                    errorText={shopNameError}
                    required={false}
                    onChange={handleChange}
                  />
                </div>

                <div className='w-full'>
                  <UploadInputField
                    label='featured image'
                    inputColor='#212529'
                    name='shopName'
                    value={shopName}
                    errorText={shopNameError}
                    required={false}
                    onChange={handleChange}
                  />
                </div>

                <div className='w-full'>
                  <div className='flex flex-col capitalize'>
                    <label
                      style={{
                        color: '#212529',
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
                            color: '#212529',
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
                            color: '#212529',
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
                  <MultiSelectDropdownField
                    label='what we offer'
                    name='whatWeOffer'
                    value={whatWeOffer}
                    errorText={whatWeOfferError}
                    required={false}
                    options={weOfferData}
                    inputColor='#212529'
                    setValue={setWhatWeOffer}
                  />

                  {whatWeOffer.length > 0 && (
                    <div className='flex flex-wrap gap-x-[24px] gap-y-[10px] mt-[15px]'>
                      {whatWeOffer.map((chip: any, index) => (
                        <Chip
                          key={index}
                          label={chipLabel(chip.title, chip.image)}
                          deleteIcon={
                            // <div className='h-full flex items-center'>
                            <img
                              src='/Images/x-circle-black.svg'
                              alt='x'
                              className='absolute h-[15px] w-[15px] top-[5px] right-[1px]'
                            />
                          }
                          sx={{
                            position: 'relative',
                            backgroundColor: '#FFD9E4',
                            padding: '5px 8px',
                            borderRadius: '10px',
                            height: '100px',
                            width: '100px',
                            '& .MuiChip-label': {
                              display: 'block',
                              whiteSpace: 'normal',
                              width: '100%',
                            },
                            fontSize: '12px',
                            lineHeight: 'normal',
                            fontFamily: 'Open Sans',
                            fontWeight: '400',
                            color: '#090909',
                            textTransform: 'capitalize',
                            '@media (max-width:767px)': {
                              height: '80px',
                              width: '80px',
                            },
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
                    inputColor='#212529'
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

              <div className='mt-[24px] md:mt-[23px]'>
                <CancelBtn text='cancel' type='button' handleClick={handleEditShop} />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default EditBakerModal
