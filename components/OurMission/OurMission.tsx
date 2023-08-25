import React from 'react'
import Sectionheading from '../SectionHeading/Sectionheading'
import { Typography } from '@mui/material'
import { PrimaryBtn } from '../Buttons'

const OurMission = () => {
  return (
    <section className='w-full flex flex-col items-center'>
      <div className='w-[87vw] md:w-[60vw] flex flex-col items-center mt-[48px] md:mt-[100px]'>
        <Sectionheading title='Our Mission' />
      </div>

      <div className='mt-[36px] md:mt-[50px] flex flex-wrap justify-center md:justify-start w-[100vw] md:w-[95vw]'>
        <img
          src='/Images/our-mission.png'
          alt='our-mission'
          className='w-[100vw] md:w-[45%] h-auto object-center object-cover 2xl:max-h-[380px]'
        />
        <div className='w-[90vw] md:w-[55%] pt-[12px] pl-[0px] md:pl-[27px]'>
          <div className='w-full flex justify-center'>
            <Typography variant='body1'>
              {' '}
              The bakers of Your Baking Connection are passionate business owners who operate
              home-based bakeries in compliance with their individual state laws. All 50 states have
              unique “Cottage Food Producer” laws allowing these talented artisans to sell
              home-baked goods.{' '}
            </Typography>
          </div>
          <div className='mt-[24px] md:mt-[36px] pl-[0px] md:pl-[27px] flex flex-col gap-y-[24px]'>
            <div className='flex items-center md:items-start gap-x-[24px]'>
              <img
                src='/Images/cake.svg'
                alt='cake'
                style={{
                  height: '24px',
                  width: '24px',
                }}
              />

              <div>
                <Typography variant='body1'>
                  {' '}
                  Creating a thriving marketplace enabling bakers to be successful while doing what
                  they love.
                </Typography>
              </div>
            </div>

            <div className='flex items-center md:items-start gap-x-[24px]'>
              <img
                src='/Images/cake-with-candles.svg'
                alt='cake-with-candles'
                style={{
                  height: '24px',
                  width: '24px',
                }}
              />

              <div>
                <Typography variant='body1'>
                  {' '}
                  Creating a thriving marketplace enabling bakers to be successful while doing what
                  they love.
                </Typography>
              </div>
            </div>

            <div className='flex items-center md:items-start gap-x-[24px]'>
              <img
                src='/Images/chip.svg'
                alt='chip'
                style={{
                  height: '24px',
                  width: '24px',
                }}
              />

              <div>
                <Typography variant='body1'>
                  {' '}
                  Creating a thriving marketplace enabling bakers to be successful while doing what
                  they love.
                </Typography>
              </div>
            </div>

            <div className='flex items-center md:items-start gap-x-[24px]'>
              <img
                src='/Images/pie.svg'
                alt='pie'
                style={{
                  height: '24px',
                  width: '24px',
                }}
              />

              <div>
                <Typography variant='body1'>
                  {' '}
                  Creating a thriving marketplace enabling bakers to be successful while doing what
                  they love.
                </Typography>
              </div>
            </div>
          </div>
          <div className='h-[45px] md:h-[50px] w-[160px] rounded-full overflow-hidden mt-[36px]'>
            <PrimaryBtn text='read More' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurMission
