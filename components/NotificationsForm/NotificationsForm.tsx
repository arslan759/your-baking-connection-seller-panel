import React, { useState } from 'react'
import styles from './styles.module.css'
import { Typography } from '@mui/material'
import DropdownField from '../DropdownField/DropdownField'
import { bakingStyleOptions, dietaryRestrictionOptions } from 'Constants/constants'
import CustomSwitch from '../CustomSwitch/CustomSwitch'
import { PrimaryBtn } from '../Buttons'

const NotificationsForm = () => {
  const [dietaryRestriction, setDietaryRestriction] = useState('')
  const [bakingStyle, setBakingStyle] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderCompleted, setOrderCompleted] = useState(false)
  const [promotionsAvailable, setPromotionsAvailable] = useState(false)

  //   Error state for input fields
  const [dietaryRestrictionError, setDietaryRestrictionError] = useState('')
  const [bakingStyleError, setBakingStyleError] = useState('')

  //   dropdown change functions
  const handleDietaryRestrictionChange = (dietaryRestriction: string) => {
    setDietaryRestriction(dietaryRestriction)
    // setDietaryRestrictionError(dietaryRestriction ? '' : 'dietaryRestriction is required')
  }

  const handleBakingStyleChange = (bakingStyle: string) => {
    setBakingStyle(bakingStyle)
    // setDietaryRestrictionError(bakingStyle ? '' : 'bakingStyle is required')
  }

  //   switch change functions
  const handleOrderPlacedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderPlaced(event.target.checked)
  }

  const handleOrderCompletedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderCompleted(event.target.checked)
  }

  const handlePromotionsAvailableChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromotionsAvailable(event.target.checked)
  }

  // handle submit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // form logs
    console.log('dietaryRestriction: ', dietaryRestriction)
    console.log('bakingStyle: ', bakingStyle)
    console.log('orderPlaced: ', orderPlaced)
    console.log('orderCompleted: ', orderCompleted)
    console.log('promotionsAvailable: ', promotionsAvailable)

    // reset error states
    // setDietaryRestrictionError('')
    // setBakingStyleError('')

    // reset form
    // setDietaryRestriction('')
    // setBakingStyle('')
    // setOrderPlaced(false)
    // setOrderCompleted(false)
    // setPromotionsAvailable(false)

    console.log('form submitted')
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '18px !important',
            fontFamily: 'Open Sans',
            fontWeight: '700 !important',
            lineHeight: 'normal',
            letterSpacing: '0.5px',
            color: '#090909',
            textTransform: 'capitalize',
            '@media (max-width: 767px)': {
              fontSize: '16px !important',
            },
          }}
        >
          <img src='/Images/customize-icon.svg' alt='Customize' className='w-[22px] h-[22px]' />
          <span>Customization</span>
        </Typography>
      </div>

      <div className='mt-[32px]'>
        <div className='w-full'>
          <DropdownField
            label='Dietary Restrictions'
            required={false}
            name='dietaryRestrictions'
            errorText={dietaryRestrictionError}
            placeholder='Select your desired restriction'
            value={dietaryRestriction}
            options={dietaryRestrictionOptions}
            inputColor='#888'
            onChange={handleDietaryRestrictionChange}
          />
          <Typography
            sx={{
              marginTop: '4px',
              fontSize: '14px !important',
              fontFamily: 'Open Sans',
              fontWeight: '600 !important',
              lineHeight: '20px',
              color: '#676767',
            }}
          >
            Choose from a wide range of fields, such as food allergies
          </Typography>
        </div>

        <div className='mt-[22px] w-full'>
          <DropdownField
            label='baking Style'
            required={false}
            name='bakingStyle'
            errorText={bakingStyleError}
            placeholder='Choose a preferred baking style '
            value={bakingStyle}
            options={bakingStyleOptions}
            inputColor='#888'
            onChange={handleBakingStyleChange}
          />
          <Typography
            sx={{
              marginTop: '4px',
              fontSize: '14px !important',
              fontFamily: 'Open Sans',
              fontWeight: '600 !important',
              lineHeight: '20px',
              color: '#676767',
            }}
          >
            Choose from a wide range of fields, such as vegan, gluten-free and dairy-free
          </Typography>
        </div>

        <div className='mt-[48px]'>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '18px !important',
              fontFamily: 'Open Sans',
              fontWeight: '700 !important',
              lineHeight: 'normal',
              letterSpacing: '0.5px',
              color: '#090909',
              textTransform: 'capitalize',
              '@media (max-width: 767px)': {
                fontSize: '16px !important',
              },
            }}
          >
            <img
              src='/Images/notification-icon.svg'
              alt='notification'
              className='w-[22px] h-[22px]'
            />
            <span>Notifications</span>
          </Typography>
        </div>

        <div className='mt-[32px] flex flex-col gap-y-[16px]'>
          <div className='flex justify-between w-full md:w-[40%] items-center'>
            <Typography
              sx={{
                fontSize: '16px !important',
                fontFamily: 'Open Sans',
                fontWeight: '400 !important',
                lineHeight: 'normal',
                color: '#747474',
              }}
            >
              Order placed
            </Typography>
            <CustomSwitch value={orderPlaced} handleChange={handleOrderPlacedChange} />
          </div>
          <div className='flex justify-between w-full md:w-[40%] items-center'>
            <Typography
              sx={{
                fontSize: '16px !important',
                fontFamily: 'Open Sans',
                fontWeight: '400 !important',
                lineHeight: 'normal',
                color: '#747474',
              }}
            >
              Order completed
            </Typography>
            <CustomSwitch value={orderCompleted} handleChange={handleOrderCompletedChange} />
          </div>
          <div className='flex justify-between w-full md:w-[40%] items-center'>
            <Typography
              sx={{
                fontSize: '16px !important',
                fontFamily: 'Open Sans',
                fontWeight: '400 !important',
                lineHeight: 'normal',
                color: '#747474',
              }}
            >
              Promotions available
            </Typography>
            <CustomSwitch
              value={promotionsAvailable}
              handleChange={handlePromotionsAvailableChange}
            />
          </div>
        </div>

        <div className='mt-[48px] w-full h-[45px]'>
          <PrimaryBtn type='submit' text='Save preference settings' />
        </div>
      </div>
    </form>
  )
}

export default NotificationsForm
