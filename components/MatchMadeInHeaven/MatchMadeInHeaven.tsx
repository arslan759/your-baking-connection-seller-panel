import { GalleryProductsData } from 'Constants/constants'
import React from 'react'
import GalleryProductCard from '../GalleryProductCard/GalleryProductCard'
import { Typography } from '@mui/material'

const MatchMadeInHeaven = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='flex flex-col items-center'>
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
          Match made in heaven
        </Typography>

        <Typography
          sx={{
            marginTop: '24px',
            fontSize: '18px !important',
            fontFamily: 'Open Sans',
            fontWeight: '500 !important',
            lineHeight: 'normal',
            letterSpacing: '1px',
            textAlign: 'center',
            alignSelf: 'stretch',
            color: '#090909',
            textTransform: 'capitalize',
            fontFeatureSettings: `'clig' off, 'liga' off`,
          }}
        >
          When our pies and your taste buds meet, magic happens
        </Typography>
      </div>

      <div className='w-[100%] flex flex-wrap justify-start gap-x-[2%] gap-y-[8px] md:gap-y-[24px] mt-[48px] md:mt-[32px]'>
        {GalleryProductsData.slice(0, 3).map((item) => {
          return (
            // <div className='w-full md:w-[32%]'>
            <GalleryProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              width='100% !important'
            />
            // </div>
          )
        })}
      </div>

      {/* <div className='w-[90vw] flex justify-center mt-[24px] md:mt-[48px]'>
        <CustomPagination />
      </div> */}
    </div>
  )
}

export default MatchMadeInHeaven
