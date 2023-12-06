import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { Typography } from '@mui/material'
import { PrimaryBtn, SecondaryBtn } from '../Buttons'
import YourProfileCardItem from '../YourProfileCardItem/YourProfileCardItem'
import { YourProfileCardItemData } from 'Constants/constants'
import EditProfile from '../EditProfile/EditProfile'
import ShowMore from '../ShowMore/ShowMore'
import useViewer from 'hooks/viewer/useViewer'
import useCreateConnectedAccount from 'hooks/shop/useCreateConnectedAccount'

const YourProfileCard = () => {
  const [isEdited, setIsEdited] = useState(false)

  const [createConnectAccount, loadingCreateConnectAccount] = useCreateConnectedAccount()

  const handleCreateConnectAccount = async (email: string) => {
    try {
      const input = {
        businessType: 'individual',
        country: 'USA',
        email: email,
        type: 'express',
      }

      // @ts-ignore
      const connectAccount = await createConnectAccount({
        variables: {
          input,
        },
      })

      console.log('connectAccount', connectAccount)

      if (connectAccount?.data?.createConnectedAccount) {
        const url = connectAccount.data.createConnectedAccount
        window.location.href = url
      }
    } catch (err: any) {
      console.log('err', err)
    }
  }

  const handleEditUserProfile = () => {
    setIsEdited(!isEdited)
  }

  const [viewer, loadingViewer] = useViewer()

  //data states
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [profileImage, setProfileImage] = useState<string>('')

  useEffect(() => {
    console.log('baker viewer is ', viewer)
    setFirstName(viewer?.firstName)
    setLastName(viewer?.lastName)
    setEmail(viewer?.primaryEmailAddress)
    setCity(viewer?.city)
    setState(viewer?.state)
    setPhone(viewer?.phone)
    setProfileImage(viewer?.picture)
  }, [viewer])

  return (
    <div className={styles.card}>
      {!viewer?.validStripeConnect && (
        <div
          className='flex flex-wrap items-center justify-between p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300'
          role='alert'
        >
          <div>
            <span className='font-medium'>Warning alert! </span> You have not completed Connect
            Account onboarding, you cannot receive payouts unless you complete it.
          </div>
          <span>
            <SecondaryBtn
              text='Complete Onboarding!'
              color='red'
              handleClick={() => handleCreateConnectAccount(viewer?.primaryEmailAddress)}
              // @ts-ignore
              loading={loadingCreateConnectAccount}
            />
          </span>
        </div>
      )}

      <Typography
        sx={{
          fontSize: '48px !important',
          fontWeight: '700 !important',
          lineHeight: 'normal',
          fontFamily: 'Josefin Sans',
          textTransform: 'capitalize',
          color: '#090909',
          fontFeatureSettings: "'clig' off, 'liga' off",
          '@media (max-width: 767px)': {
            fontSize: '24px !important',
          },
        }}
      >
        Your Profile
      </Typography>

      <div className='mt-[16px] md:mt-[32px] flex items-start gap-x-[24px]'>
        <img
          src={profileImage}
          alt=''
          className='w-[64px] md:w-[168px] h-[64px] md:h-[168px] rounded-full object-cover'
        />

        <div className='w-full flex flex-col gap-y-[12px]'>
          <div className='w-full md:w-[60%] flex justify-between'>
            <div>
              <Typography
                sx={{
                  fontSize: '28px !important',
                  fontWeight: '600 !important',
                  lineHeight: '38px',
                  fontFamily: 'Josefin Sans',
                  textTransform: 'capitalize',
                  color: '#090909',
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  '@media (max-width: 767px)': {
                    fontSize: '20px !important',
                    lineHeight: '32px',
                  },
                }}
              >
                {firstName} {lastName}
              </Typography>

              <Typography
                sx={{
                  fontSize: '18px !important',
                  fontWeight: '600 !important',
                  lineHeight: '28px',
                  fontFamily: 'Josefin Sans',
                  textTransform: 'capitalize',
                  color: '#888',
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  '@media (max-width: 767px)': {
                    fontSize: '12px !important',
                  },
                }}
              >
                <img src='/Images/profile-location.svg' alt='location' />{' '}
                <span>
                  <span style={{ textTransform: 'capitalize' }}>{state}</span>,
                  <span style={{ textTransform: 'capitalize' }}> {city}</span>, USA
                </span>
              </Typography>
            </div>

            <EditProfile />
          </div>

          {/* Desktop View Details*/}
          <div className='w-[60%] hidden md:block'>
            <div className='mt-[12px] flex flex-wrap gap-x-[12px] md:gap-x-[32px]'>
              <ShowMore
                text='As a seasoned baker, I am proud to share my love for creating delicious treats with all who visit my shop. From traditional pastries to quirky and creative confections, I pride myself on offering a wide variety of delicious options for all of my customers. As a seasoned baker, I am proud to share my love for creating delicious treats with all who visit my shop. From traditional pastries to quirky and creative confections, I pride myself on offering a wide variety of delicious options for all of my customers. As a seasoned baker, I am proud to share my love for creating delicious treats with all who visit my shop. From traditional pastries to quirky and creative confections, I pride myself on offering a wide variety of delicious options for all of my customers.'
                words={230}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view Details*/}
      <div className='mt-[12px] block md:hidden'>
        <div className='flex gap-x-[32px]'>
          <ShowMore
            text='As a seasoned baker, I am proud to share my love for creating delicious treats with all who visit my shop. From traditional pastries to quirky and creative confections, I pride myself on offering a wide variety of delicious options for all of my customers. As a seasoned baker, I am proud to share my love for creating delicious treats with all who visit my shop. From traditional pastries to quirky and creative confections, I pride myself on offering a wide variety of delicious options for all of my customers. As a seasoned baker, I am proud to share my love for creating delicious treats with all who visit my shop. From traditional pastries to quirky and creative confections, I pride myself on offering a wide variety of delicious options for all of my customers.'
            words={230}
          />
        </div>
        <div className='mt-[12px] flex flex-wrap gap-x-[12px] md:gap-x-[32px]'>
          <Typography
            sx={{
              fontSize: '18px !important',
              fontWeight: '600 !important',
              lineHeight: '28px',
              fontFamily: 'Josefin Sans',
              textTransform: 'capitalize',
              color: '#888',
              fontFeatureSettings: "'clig' off, 'liga' off",
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              '@media (max-width: 767px)': {
                fontSize: '12px !important',
              },
            }}
          >
            <img src='/Images/profile-location.svg' alt='location' /> <span>New York, USA</span>
          </Typography>

          <Typography
            sx={{
              fontSize: '18px !important',
              fontWeight: '600 !important',
              lineHeight: '28px',
              fontFamily: 'Josefin Sans',
              textTransform: 'lowercase',
              color: '#888',
              fontFeatureSettings: "'clig' off, 'liga' off",
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              '@media (max-width: 767px)': {
                fontSize: '12px !important',
              },
            }}
          >
            <img src='/Images/profile-email.svg' alt='email' /> <span>Josh.Avans@Gmail.Com</span>
          </Typography>

          <Typography
            sx={{
              fontSize: '18px !important',
              fontWeight: '600 !important',
              lineHeight: '28px',
              fontFamily: 'Josefin Sans',
              textTransform: 'capitalize',
              color: '#888',
              fontFeatureSettings: "'clig' off, 'liga' off",
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              '@media (max-width: 767px)': {
                fontSize: '12px !important',
              },
            }}
          >
            <img src='/Images/profile-phone.svg' alt='phone' /> <span>06372612312</span>
          </Typography>
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-full flex flex-wrap justify-center md:justify-start gap-y-[32px] md:gap-y-[56px] gap-x-[24px] mt-[48px] md:mt-[64px]'>
          {YourProfileCardItemData.map((item, index) => {
            const { image, title, description } = item
            return (
              <YourProfileCardItem
                key={title}
                title={title}
                image={image}
                isClickable={true}
                description={description}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default YourProfileCard
