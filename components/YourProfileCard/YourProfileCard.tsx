import React, { useState } from 'react'
import styles from './styles.module.css'
import { Typography } from '@mui/material'
import { PrimaryBtn } from '../Buttons'
import YourProfileCardItem from '../YourProfileCardItem/YourProfileCardItem'
import { YourProfileCardItemData } from 'Constants/constants'
import EditProfile from '../EditProfile/EditProfile'

const YourProfileCard = () => {
  const [isEdited, setIsEdited] = useState(false)

  const handleEditUserProfile = () => {
    setIsEdited(!isEdited)
  }

  return (
    <div className={styles.card}>
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

      <div className='mt-[16px] md:mt-[32px] flex items-center gap-x-[24px]'>
        <img
          src={`https://image.winudf.com/v2/image1/bmV0LndsbHBwci5naXJsc19wcm9maWxlX3BpY3R1cmVzX3NjcmVlbl8xXzE2Njc3MjczMTZfMDE3/screen-1.webp?fakeurl=1&type=.webp`}
          alt=''
          className='w-[64px] md:w-[132px] h-[64px] md:h-[132px] rounded-full object-cover'
        />

        <div className='w-full flex flex-col gap-y-[12px]'>
          <div className='w-full md:w-[60%] flex justify-between'>
            <div>
              <Typography
                sx={{
                  fontSize: '16px !important',
                  fontWeight: '700 !important',
                  lineHeight: '28px',
                  fontFamily: 'Josefin Sans',
                  textTransform: 'capitalize',
                  color: '#7DDEC1',
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  '@media (max-width: 767px)': {
                    fontSize: '14px !important',
                  },
                }}
              >
                Foodie
              </Typography>
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
                Josh Avan
              </Typography>
            </div>

            <EditProfile />
          </div>

          {/* Desktop View Details*/}
          <div className='hidden md:block'>
            <div className='flex gap-x-[32px]'>
              <div>
                <Typography
                  sx={{
                    fontSize: '18px !important',
                    fontWeight: '600 !important',
                    lineHeight: '22px',
                    fontFamily: 'Josefin Sans',
                    textTransform: 'capitalize',
                    color: '#090909',
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    '@media (max-width: 767px)': {
                      fontSize: '14px !important',
                    },
                  }}
                >
                  Sprinkle Fanatic
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px !important',
                    fontWeight: '500 !important',
                    lineHeight: '22px',
                    fontFamily: 'Josefin Sans',
                    // textTransform: 'capitalize',
                    color: '#888',
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    '@media (max-width: 767px)': {
                      fontSize: '12px !important',
                    },
                  }}
                >
                  Favorite product
                </Typography>
              </div>

              <div>
                <Typography
                  sx={{
                    fontSize: '18px !important',
                    fontWeight: '600 !important',
                    lineHeight: '22px',
                    fontFamily: 'Josefin Sans',
                    textTransform: 'capitalize',
                    color: '#090909',
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    '@media (max-width: 767px)': {
                      fontSize: '14px !important',
                    },
                  }}
                >
                  Special Diet
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px !important',
                    fontWeight: '500 !important',
                    lineHeight: '22px',
                    fontFamily: 'Josefin Sans',
                    // textTransform: 'capitalize',
                    color: '#888',
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    '@media (max-width: 767px)': {
                      fontSize: '12px !important',
                    },
                  }}
                >
                  Dairy free
                </Typography>
              </div>
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
                <img src='/Images/profile-email.svg' alt='email' />{' '}
                <span>Josh.Avans@Gmail.Com</span>
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
        </div>
      </div>

      {/* Mobile view Details*/}
      <div className='mt-[12px] block md:hidden'>
        <div className='flex gap-x-[32px]'>
          <div>
            <Typography
              sx={{
                fontSize: '18px !important',
                fontWeight: '600 !important',
                lineHeight: '22px',
                fontFamily: 'Josefin Sans',
                textTransform: 'capitalize',
                color: '#090909',
                fontFeatureSettings: "'clig' off, 'liga' off",
                '@media (max-width: 767px)': {
                  fontSize: '14px !important',
                },
              }}
            >
              Sprinkle Fanatic
            </Typography>
            <Typography
              sx={{
                fontSize: '16px !important',
                fontWeight: '500 !important',
                lineHeight: '22px',
                fontFamily: 'Josefin Sans',
                // textTransform: 'capitalize',
                color: '#888',
                fontFeatureSettings: "'clig' off, 'liga' off",
                '@media (max-width: 767px)': {
                  fontSize: '12px !important',
                },
              }}
            >
              Favorite product
            </Typography>
          </div>

          <div>
            <Typography
              sx={{
                fontSize: '18px !important',
                fontWeight: '600 !important',
                lineHeight: '22px',
                fontFamily: 'Josefin Sans',
                textTransform: 'capitalize',
                color: '#090909',
                fontFeatureSettings: "'clig' off, 'liga' off",
                '@media (max-width: 767px)': {
                  fontSize: '14px !important',
                },
              }}
            >
              Special Diet
            </Typography>
            <Typography
              sx={{
                fontSize: '16px !important',
                fontWeight: '500 !important',
                lineHeight: '22px',
                fontFamily: 'Josefin Sans',
                // textTransform: 'capitalize',
                color: '#888',
                fontFeatureSettings: "'clig' off, 'liga' off",
                '@media (max-width: 767px)': {
                  fontSize: '12px !important',
                },
              }}
            >
              Dairy free
            </Typography>
          </div>
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
