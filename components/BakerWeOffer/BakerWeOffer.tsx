import { Typography } from '@mui/material'
import { weOfferData } from 'Constants/constants'
import React, { useEffect } from 'react'
import BakerWeOfferItem from '../BakerWeOfferItem/BakerWeOfferItem'

interface BakerWeOfferProps {
  categories: string[] | null | undefined
}

const BakerWeOffer = ({ categories }: BakerWeOfferProps) => {
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
          {categories?.map((item, index) => {
            const image = ''

            return <BakerWeOfferItem key={index} image={image} title={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default BakerWeOffer
