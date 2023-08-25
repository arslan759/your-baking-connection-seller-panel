import { Checkbox, FormControl, FormHelperText, Radio, Typography } from '@mui/material'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import DropdownField from '../DropdownField/DropdownField'
import {
  cities,
  countries,
  pickupDayOptions,
  pickupHoursOptions,
  states,
} from 'Constants/constants'
import { PrimaryBtn } from '../Buttons'

const DeliveryDetailsForm = () => {
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [postCode, setPostCode] = useState('')
  const [state, setState] = useState<string | null>('')
  const [city, setCity] = useState<string | null>('')
  const [additionalNotes, setAdditionalNotes] = useState('')
  const [deliveryMethod, setDeliveryMethod] = useState(true)
  const [pickupDay, setPickupDay] = useState('')
  const [pickupHours, setPickupHours] = useState('')
  const [termsAndConditions, setTermsAndConditions] = useState(false)

  // Error states
  const [addressError, setAddressError] = useState('')
  const [countryError, setCountryError] = useState('')
  const [postCodeError, setPostCodeError] = useState('')
  const [stateError, setStateError] = useState('')
  const [cityError, setCityError] = useState('')
  const [deliveryMethodError, setDeliveryMethodError] = useState('')
  const [termsAndConditionsError, setTermsAndConditionsError] = useState('')

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'address') {
      setAddress(value)
      setAddressError(value ? '' : 'Address is required')
    } else if (name === 'postCode') {
      setPostCode(value)
      setPostCodeError(value ? '' : 'Postcode is required')
    } else if (name === 'additionalNotes') {
      setAdditionalNotes(value)
    }
  }

  // handle Radio Button change  for Delivery Method
  const handleDeliveryMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'selfPickup') {
      setDeliveryMethod(true)
      setDeliveryMethodError('')
    } else {
      setDeliveryMethod(false)
      setDeliveryMethodError('')
    }
  }

  // handleCheckBox function for Terms and Conditions
  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target

    setTermsAndConditions(checked)
    setTermsAndConditionsError(checked ? '' : 'Please accept the terms and conditions')
  }

  // handleCountryChange function for country dropdown
  const handleCountryChange = (country: string) => {
    setCountry(country)
    setCountryError(country ? '' : 'Country is required')
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

  // handlePickupDayChange function for pickupDay dropdown
  const handlePickupDayChange = (day: string) => {
    setPickupDay(day)
    // setPickupDayError(day ? '' : 'Pickup Day is required')
  }

  // handlePickupHoursChange function for Pickup hour dropdown
  const handlePickupHoursChange = (hour: string) => {
    setPickupHours(hour)
    // setPickupHoursError(hour ? '' : 'Pickup Hour is required')
  }

  // handleSubmit function for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Checks if all fields are filled
    if (
      !address ||
      !country ||
      !postCode ||
      !state ||
      !city ||
      !deliveryMethod ||
      !termsAndConditions
    ) {
      if (!address) {
        setAddressError('Address is required')
      }

      if (!country) {
        setCountryError('Country is required')
      }

      if (!postCode) {
        setPostCodeError('Postcode is required')
      }

      if (!state) {
        setStateError('State is required')
      }

      if (!city) {
        setCityError('City is required')
      }

      if (!deliveryMethod) {
        setDeliveryMethodError('Delivery Method is required')
      }

      if (!termsAndConditions) {
        setTermsAndConditionsError('Please accept the terms and conditions')
      }

      // Stops the execution of the function
      return
    }

    // Logs the form data
    console.log('address is ', address)
    console.log('country is ', country)
    console.log('postCode is ', postCode)
    console.log('state is ', state)
    console.log('city is ', city)
    console.log('additionalNotes is ', additionalNotes)
    console.log('deliveryMethod is ', deliveryMethod)
    console.log('pickupDay is ', pickupDay)
    console.log('pickupHours is ', pickupHours)
    console.log('termsAndConditions is ', termsAndConditions)

    // Resets the form fields
    setAddress('')
    setCountry('')
    setPostCode('')
    setState('')
    setCity('')
    setAdditionalNotes('')
    setDeliveryMethod(true)
    setPickupDay('')
    setPickupHours('')
    setTermsAndConditions(false)

    // Resets the error states
    setAddressError('')
    setCountryError('')
    setPostCodeError('')
    setStateError('')
    setCityError('')
    setDeliveryMethodError('')
    setTermsAndConditionsError('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full flex flex-wrap gap-y-[24px] md:gap-y-[24px] justify-between'>
        <div className='w-full'>
          <InputField
            label='Address'
            type='text'
            inputColor='#212529'
            name='address'
            value={address}
            errorText={addressError}
            required
            onChange={handleChange}
          />
        </div>

        <div className='w-full md:w-[45%]'>
          <DropdownField
            label='country'
            required
            name='country'
            errorText={countryError}
            value={country}
            options={countries}
            inputColor='#212529'
            onChange={handleCountryChange}
          />
        </div>

        <div className='w-full md:w-[45%]'>
          <InputField
            label='postcode'
            type='text'
            inputColor='#212529'
            name='postCode'
            value={postCode}
            errorText={postCodeError}
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
            inputColor='#212529'
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
            inputColor='#212529'
            onChange={handleCityChange}
          />
        </div>

        <div className='w-full'>
          <InputField
            label='additional notes'
            type='textarea'
            rows={4}
            inputColor='#212529'
            name='additionalNotes'
            value={additionalNotes}
            // errorText={''}
            required={false}
            onChange={handleChange}
          />
        </div>

        <div className='w-full flex flex-wrap gap-y-[16px] md:gap-y-[16px] justify-between'>
          <Typography
            sx={{
              fontSize: '24px !important',
              fontFamily: 'Open Sans',
              fontWeight: '700 !important',
              lineHeight: '32px',
              color: '#7DDEC1',
              fontFeatureSettings: "'clig' off, 'liga' off",
              textTransform: 'capitalize',
              '@media (max-width: 767px)': {
                fontSize: '24px !important',
              },
            }}
          >
            Delivery Method
          </Typography>

          <div className='w-full mt-[20px]'>
            <div className='flex items-center gap-x-[12px]'>
              <Radio
                sx={{
                  color: '#212529',
                  padding: '0px',
                  '&.Mui-checked': {
                    color: '#7DDEC1',
                  },
                }}
                checked={deliveryMethod === true}
                onChange={handleDeliveryMethodChange}
                value={'selfPickup'}
                name='radio-buttons'
                inputProps={{ 'aria-label': 'A' }}
              />
              <Typography
                sx={{
                  color: '#212529',
                  fontSize: '16px !important',
                  fontFamily: 'Open Sans',
                  fontWeight: '600 !important',
                  lineHeight: '24px',
                }}
              >
                Self pickup
              </Typography>
            </div>
          </div>

          <div className='w-full flex flex-wrap justify-between gap-y-[12px]'>
            <div className='w-full md:w-[45%]'>
              <DropdownField
                // label='pickupHours'
                required={false}
                name='pickup'
                // errorText={''}
                placeholder='Select pickup day'
                value={pickupDay}
                options={pickupDayOptions}
                inputColor='#212529'
                onChange={handlePickupDayChange}
              />
            </div>

            <div className='w-full md:w-[45%]'>
              <DropdownField
                // label='pickupHours'
                required={false}
                name='city'
                // errorText={''}
                placeholder='Select pickup hours'
                value={pickupHours}
                options={pickupHoursOptions}
                inputColor='#212529'
                onChange={handlePickupHoursChange}
              />
            </div>
          </div>

          <div className='w-full'>
            <div className='flex items-center gap-x-[12px]'>
              <Radio
                sx={{
                  color: '#212529',
                  padding: '0px',
                  '&.Mui-checked': {
                    color: '#7DDEC1',
                  },
                }}
                checked={deliveryMethod === false}
                onChange={handleDeliveryMethodChange}
                value={'delivery'}
                name='radio-buttons'
                inputProps={{ 'aria-label': 'A' }}
              />
              <Typography
                sx={{
                  color: '#212529',
                  fontSize: '16px !important',
                  fontFamily: 'Open Sans',
                  fontWeight: '600 !important',
                  lineHeight: '24px',
                  textTransform: 'capitalize',
                }}
              >
                Delivery
              </Typography>
            </div>
          </div>
        </div>

        <div className=''>
          <FormControl error={termsAndConditions ? false : true}>
            <div className='flex justify-start items-center gap-x-[15px] text-[white]'>
              <Checkbox
                checked={termsAndConditions}
                onChange={handleCheckBox}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{
                  padding: '0px',
                  width: '20px',
                  height: '20px',

                  '& .MuiSvgIcon-root': {
                    width: '20px',
                    height: '20px',
                    color: '#212529',
                    borderRadius: '2px',
                    padding: '0px',
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: '16px !important',
                  fontFamily: 'Open Sans',
                  fontWeight: '400 !important',
                  lineHeight: 'normal',
                  color: '#212529',
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                }}
              >
                I agree to all the Term of conditions & Privacy Policy
              </Typography>
            </div>
            {termsAndConditionsError ? (
              <FormHelperText> {termsAndConditionsError} </FormHelperText>
            ) : (
              ''
            )}
          </FormControl>
        </div>

        <div className='w-full h-[45px]'>
          <PrimaryBtn text='place order' type='submit' />
        </div>
      </div>
    </form>
  )
}

export default DeliveryDetailsForm
