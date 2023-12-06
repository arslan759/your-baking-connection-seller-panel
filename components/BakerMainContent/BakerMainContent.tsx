import { Typography } from '@mui/material'
import React from 'react'
import EditBakerModal from '../EditBakerModal/EditBakerModal'
import AddBakerProductModal from '../AddBakerProductModal/AddBakerProductModal'
import ShowMore from '../ShowMore'

interface BakerMainContent {
  bakerName?: string | undefined
  description?: string | undefined
  slug: string
  bakerLogo?: string | undefined
}

const BakerMainContent = ({ bakerName, description, slug, bakerLogo }: BakerMainContent) => {
  return (
    <div className='mt-[48px] lg:mt-[100px] pb-[12px] lg:pb-[0px] bg-[#fff]'>
      <div className='w-full flex'>
        <div className='w-[90%]  flex max-[276px]:flex-col flex-row md:flex-col gap-y-[20px]'>
          <div className='flex flex-col lg:flex-row gap-[12px] lg:gap-[24px]'>
            {/* <img src={bakerLogo} alt='logo' className='h-[44px] w-[35px]' /> */}
            <img src={bakerLogo} alt='logo' className='h-[74px] w-[55px]' />

            <Typography
              variant='h3'
              sx={{
                fontFamily: 'Josefin Sans',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: 'normal',
                textTransform: 'capitalize',
                fontFeatureSettings: "'clig' off, 'liga' off",
                color: '#090909',
                '@media (max-width: 767px)': {
                  fontSize: '24px',
                  color: '#7DDEC1',
                },
                '@media (max-width: 400px)': {
                  fontSize: '18px',
                  color: '#7DDEC1',
                },
              }}
            >
              {bakerName}
            </Typography>
          </div>
          <div className='flex items-end lg:items-center gap-[4px] max-[300px]:ml-[10px] ml-[27px] md:ml-0'>
            <img src='/Images/star.svg' alt='start' className='h-[24px] w-[24px]' />
            <Typography
              sx={{
                fontFamily: 'Josefin Sans',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: 'normal',
                textTransform: 'capitalize',
                fontFeatureSettings: "'clig' off, 'liga' off",
                color: '#090909',
              }}
            >{`4.8`}</Typography>
          </div>
        </div>

        <EditBakerModal />
      </div>

      <div className='mt-[12px] w-full'>
        <AddBakerProductModal slug={slug} />
      </div>

      <div className='hidden lg:block mt-[24px] bg-[#6C6C6C] h-[0.5px] w-full' />

      <div className='w-full lg:w-[95%] mt-[12px] lg:mt-[24px]'>
        <Typography
          sx={{
            fontFamily: 'Open Sans',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: 'normal',
            textTransform: 'capitalize',
            color: '#6C6C6C',
            '@media (max-width: 767px)': {
              fontSize: '12px',
            },
          }}
        >
          {bakerName}
        </Typography>
      </div>

      <div className='block lg:hidden mt-[12px] bg-[#6C6C6C] h-[0.5px] w-full' />

      <div className='w-[100%] lg:w-[95%] mt-[12px] lg:mt-[24px]'>
        <Typography
          sx={{
            fontFamily: 'Open Sans',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: 'normal',
            textTransform: 'capitalize',
            color: '#090909',
            '@media (max-width: 767px)': {
              fontSize: '12px',
            },
          }}
        >
          <ShowMore
            textTransform='capitalize'
            lineHeight='normal'
            color='#090909'
            fontFamily='Open Sans'
            fontWeight={500}
            fontSize={18}
            text={description || ''}
            words={500}
          />
        </Typography>
      </div>

      <div className='hidden lg:block mt-[12px] bg-[#6C6C6C] h-[0.5px] w-full' />
    </div>
  )
}

export default BakerMainContent
