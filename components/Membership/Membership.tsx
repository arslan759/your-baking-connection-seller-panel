import React from 'react'
import { Typography } from '@mui/material'

import Navbar from '../NavBar/NavBar'
import BasicMembershipCard from '../BasicMembershipCard/BasicMembershipCard'
import PremiumMembershipCard from '../PremiumMembershipCard/PremiumMembershipCard'
import MembershipVideoPlayer from '../MembershipVideoPlayer/MembershipVideoPlayer'
import FullfillmentSection from '../FullfillmentSection/FullfillmentSection'
import StayInTouchForm from '../StayInTouch'

const Membership = () => {
  return (
    <div>
      <Navbar />

      <div className='w-full flex flex-col items-center'>
        <div className='w-full mt-[48px] md:mt-[100px]'>
          <Typography
            sx={{
              fontSize: '48px !important',
              fontWeight: '700 !important',
              fontFamily: 'Josefin Sans',
              lineHeight: 'normal',
              textAlign: 'center',
              color: '#7DDEC1',
              textTransform: 'capitalize',
              fontFeatureSettings: "'clig' off, 'liga' off",
              '@media (max-width: 767px)': {
                fontSize: '24px !important',
              },
            }}
          >
            Membership
          </Typography>
        </div>

        <div className='w-full mt-[50px] flex flex-col md:flex-row'>
          <div
            className='w-[100%] md:w-[50%] h-[420px] md:h-[700px]'
            style={{
              background: `url("/Images/background-membership1.png"), lightgray 50% / cover no-repeat`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
          <div className='w-[100%] md:w-[50%] bg-[#F8B4CB] h-[420px] md:h-[700px] flex items-center justify-center'>
            <div className='px-[30px] md:px-[60px]'>
              <Typography
                sx={{
                  fontSize: '48px !important',
                  fontWeight: '700 !important',
                  fontFamily: 'Josefin Sans',
                  lineHeight: 'normal',
                  color: '#090909',
                  textTransform: 'uppercase',
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  '@media (max-width: 767px)': {
                    fontSize: '24px !important',
                  },
                }}
              >
                welcome to the future of the home Bakery industry!
              </Typography>

              <Typography
                sx={{
                  marginTop: '24px',
                  fontSize: '18px !important',
                  fontWeight: '400 !important',
                  fontFamily: 'Open Sans',
                  lineHeight: 'normal',
                  color: '#000',
                  // textTransform: 'uppercase',
                  '@media (max-width: 767px)': {
                    fontSize: '12px !important',
                  },
                }}
              >
                {`As a home cottage baker interested in growing your business, you’ve come to the right place! Your Baking Connection was thoughtfully created for you to provide a marketplace to connect with consumers looking for your incredible products!`}
              </Typography>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col-reverse md:flex-row'>
          <div
            className='w-[100%] md:w-[50%] h-[420px] md:h-[700px] flex items-center justify-center'
            style={{
              backgroundImage: `url("/Images/sprinkles.png")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className='px-[30px] md:px-[60px]'>
              <Typography
                sx={{
                  fontSize: '48px !important',
                  fontWeight: '700 !important',
                  fontFamily: 'Josefin Sans',
                  lineHeight: 'normal',
                  color: '#090909',
                  textTransform: 'uppercase',
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  '@media (max-width: 767px)': {
                    fontSize: '24px !important',
                  },
                }}
              >
                {`What makes Your Baking Connection special? Many things!`}
              </Typography>

              <div>
                <Typography
                  sx={{
                    marginTop: '24px',
                    fontSize: '18px !important',
                    fontWeight: '400 !important',
                    fontFamily: 'Open Sans',
                    lineHeight: 'normal',
                    color: '#000',
                    display: 'flex',
                    gap: '36px',
                    '@media (max-width: 767px)': {
                      fontSize: '14px !important',
                      gap: '24px',
                    },
                  }}
                >
                  <img
                    src='/Images/list-icon.svg'
                    alt='list-icon'
                    className='w-[12px] md:w-[24px] h-[12px] md:h-[24px]'
                  />
                  {`Eliminate wasted time and money creating a website to maintain and promote.`}
                </Typography>

                <Typography
                  sx={{
                    marginTop: '24px',
                    fontSize: '18px !important',
                    fontWeight: '400 !important',
                    fontFamily: 'Open Sans',
                    lineHeight: 'normal',
                    color: '#000',
                    display: 'flex',
                    gap: '36px',
                    '@media (max-width: 767px)': {
                      fontSize: '14px !important',
                      gap: '24px',
                    },
                  }}
                >
                  <img
                    src='/Images/list-icon.svg'
                    alt='list-icon'
                    className='w-[12px] md:w-[24px] h-[12px] md:h-[24px]'
                  />
                  {`Have your virtual storefront up and running in minutes!`}
                </Typography>

                <Typography
                  sx={{
                    marginTop: '24px',
                    fontSize: '18px !important',
                    fontWeight: '400 !important',
                    fontFamily: 'Open Sans',
                    lineHeight: 'normal',
                    color: '#000',
                    display: 'flex',
                    gap: '36px',
                    '@media (max-width: 767px)': {
                      fontSize: '14px !important',
                      gap: '24px',
                    },
                  }}
                >
                  <img
                    src='/Images/list-icon.svg'
                    alt='list-icon'
                    className='w-[12px] md:w-[24px] h-[12px] md:h-[24px]'
                  />
                  {`Immediately expand your reach and exposure to new customers!`}
                </Typography>

                <Typography
                  sx={{
                    marginTop: '24px',
                    fontSize: '18px !important',
                    fontWeight: '400 !important',
                    fontFamily: 'Open Sans',
                    lineHeight: 'normal',
                    color: '#000',
                    display: 'flex',
                    gap: '36px',
                    '@media (max-width: 767px)': {
                      fontSize: '14px !important',
                      gap: '24px',
                    },
                  }}
                >
                  <img
                    src='/Images/list-icon.svg'
                    alt='list-icon'
                    className='w-[12px] md:w-[24px] h-[12px] md:h-[24px]'
                  />
                  {`Features and tools you need to efficiently run your business and focus on what you do best while we do the rest.`}
                </Typography>
              </div>
            </div>
          </div>

          <div
            className='w-[100%] md:w-[50%] h-[420px] md:h-[700px]'
            style={{
              background: `url("/Images/background-membership2.png"), lightgray 50% / cover no-repeat`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </div>

        <div className='w-[85%] md:w-[80%] xlm:w-[50%] mt-[48px] md:mt-[100px]'>
          <div className='w-full'>
            <Typography
              sx={{
                fontSize: '48px !important',
                fontWeight: '700 !important',
                fontFamily: 'Josefin Sans',
                lineHeight: 'normal',
                textAlign: 'center',
                color: '#7DDEC1',
                textTransform: 'capitalize',
                fontFeatureSettings: "'clig' off, 'liga' off",
                '@media (max-width: 767px)': {
                  fontSize: '24px !important',
                },
              }}
            >
              {`We offer two membership plans to meet your needs – Basic and Premium`}
            </Typography>
          </div>

          <div className='mt-[128px] w-full flex flex-col md:flex-row md:justify-between gap-y-[170px]'>
            <div className='w-full md:w-[49%]'>
              <BasicMembershipCard />
            </div>

            <div className='w-full md:w-[49%]'>
              <PremiumMembershipCard />
            </div>
          </div>
        </div>

        <div className='w-[80%] mt-[48px] md:mt-[100px]'>
          <Typography
            sx={{
              fontSize: '48px !important',
              fontWeight: '700 !important',
              fontFamily: 'Josefin Sans',
              lineHeight: 'normal',
              textAlign: 'center',
              color: '#7DDEC1',
              textTransform: 'capitalize',
              fontFeatureSettings: "'clig' off, 'liga' off",
              '@media (max-width: 767px)': {
                fontSize: '24px !important',
              },
            }}
          >
            See Some of the Features for Yourself!
          </Typography>
        </div>

        <div className='mt-[48px] md:mt-[71px] w-full md:w-[90vw] h-[200px] md:h-[674px] md:rounded-[15px] overflow-hidden'>
          <MembershipVideoPlayer />
        </div>

        <div className='w-full mt-[48px] md:mt-[100px]'>
          <FullfillmentSection />
        </div>

        <div className='w-full'>
          <StayInTouchForm />
        </div>
      </div>
    </div>
  )
}

export default Membership
