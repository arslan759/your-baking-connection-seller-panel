import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { PrimaryBtn } from '../Buttons'
import CustomSwitch from '../CustomSwitch/CustomSwitch'
import styles from './styles.module.css'
import PasswordField from '../PasswordField'

const PreferencesForm = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderCompleted, setOrderCompleted] = useState(false)
  const [promotionsAvailable, setPromotionsAvailable] = useState(false)

  //   Error state for input fields

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

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'old_password') {
      setOldPassword(value)
    } else if (name === 'new_password') {
      setNewPassword(value)
    } else if (name === 'confirm_password') {
      setConfirmPassword(value)
    }
  }
  // handle submit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // form logs
    console.log('orderPlaced: ', orderPlaced)
    console.log('orderCompleted: ', orderCompleted)
    console.log('promotionsAvailable: ', promotionsAvailable)
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
          <img src='/Images/profile-icon-pink.svg' alt='Customize' className='w-[22px] h-[22px]' />
          <span>Profile</span>
        </Typography>
      </div>

      <div className='mt-[32px]'>
        <div className='mt-[22px] w-full'>
          <PasswordField
            label='Current Password'
            placeholder='Enter your current password'
            name='old_password'
            value={oldPassword}
            inputColor='#888'
            onChange={handleChange}
          />
          <PasswordField
            label='new password'
            placeholder='Enter your new password'
            name='new_password'
            value={newPassword}
            inputColor='#888'
            onChange={handleChange}
          />
          <PasswordField
            label='confirm password'
            placeholder='Confirm your new password'
            name='confirm_password'
            value={confirmPassword}
            inputColor='#888'
            onChange={handleChange}
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
            Please reset your password by entering previous and current password
          </Typography>
        </div>

        {/* <div className='mt-[48px]'>
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
        </div> */}

        {/* <div className='mt-[32px] flex flex-col gap-y-[16px]'>
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
        </div> */}

        <div className='mt-[48px] w-full h-[45px]'>
          <PrimaryBtn type='submit' text='Save personalization settings' />
        </div>
      </div>
    </form>
  )
}

export default PreferencesForm
