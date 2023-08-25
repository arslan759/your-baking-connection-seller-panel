import { Typography } from '@mui/material'
import { weOfferData } from 'Constants/constants'
import React from 'react'
import GalleryWeOfferItem from '../GalleryWeOfferItem/GalleryWeOfferItem'

const GalleryWeOffer = () => {
  return (
    <div className='w-full'>
      <Typography
        sx={{
          fontFamily: 'Josefin Sans',
          fontSize: '26px',
          fontWeight: '600',
          lineHeight: 'normal',
          textTransform: 'uppercase',
          color: '#090909',
          '@media (min-width: 768px) and (max-width: 1023px)': {
            textAlign: 'center',
            fontSize: '26px',
          },
          '@media (max-width: 767px)': {
            fontSize: '18px',
            textAlign: 'center',
          },
        }}
      >
        {`We Offer`}
      </Typography>

      <div className='w-full flex justify-center'>
        <div className='w-[95%] lg:w-full flex flex-wrap justify-center lg:justify-start gap-[11px] mt-[24px] lg:[36px]'>
          {weOfferData.map((item, index) => {
            const { image, title } = item
            return <GalleryWeOfferItem key={title} image={image} title={title} />
          })}
        </div>
      </div>
    </div>
  )
}

export default GalleryWeOffer
