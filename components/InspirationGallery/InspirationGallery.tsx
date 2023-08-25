import { Typography } from '@mui/material'
import React, { useState } from 'react'
import InspirationGalleryForm from '../InspirationGalleryForm/InspirationGalleryForm'
import InspirationGalleryNavigation from '../InspirationGalleryNavigation/InspirationGalleryNavigation'
import InspirationGalleryTabsPanel from '../InspirationGalleryTabsPanel/InspirationGalleryTabsPanel'
import CustomOrders from '../CustomOrders/CustomOrders'

const InspirationGallery = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log('newValue', newValue)
    setActiveTab(newValue)
  }

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[90vw] md:w-[70vw] flex flex-col items-center'>
        <div className='w-[100%] md:w-[60%]'>
          <Typography
            variant='h1'
            sx={{
              textAlign: 'center',
              color: '#7DDEC1',
              fontSize: '18px !important',
              fontWeight: '700',
              lineHeight: 'normal',
              fontFamily: 'Open Sans',
              letterSpacing: '1px',
              textTransform: 'capitalize',
              '@media (max-width:767px)': {
                fontSize: '14px',
              },
            }}
          >{`Looking for a specific type of treat? Filter our available products here!`}</Typography>
        </div>

        <div className='w-[70%] md:w-full mt-[42px]  flex justify-center'>
          <InspirationGalleryForm />
        </div>
      </div>

      <div className='w-[90vw] mt-[48px] flex justify-center'>
        <InspirationGalleryNavigation activeTab={activeTab} handleChange={handleChange} />
      </div>

      <div className='w-full mt-[24px] md:mt-[50px]'>
        <InspirationGalleryTabsPanel activeTab={activeTab} />
      </div>

      <div className='w-[90vw] mt-[48px] md:mt-[100px]'>
        <CustomOrders />
      </div>
    </div>
  )
}

export default InspirationGallery
