import { Typography } from '@mui/material'
import { fullfillmentsData } from 'Constants/constants'
import React from 'react'

const FullfillmentSection = () => {
  return (
    <div className='w-full flex flex-wrap px-[20px] md:px-[72px] py-[24px] md:py-[74px] bg-primary'>
      {fullfillmentsData.map((fullfillment, index) => {
        const { id, title, description, img } = fullfillment
        return (
          <div
            key={index}
            className='w-[33%] flex justify-center items-start pr-[7px] py-[8px] md:py-[43px]'
            style={{
              borderBottom: id > 6 ? 'none' : '0.5px solid #6C6C6C',
              borderRight: id % 3 == 0 ? 'none' : '0.5px solid #6C6C6C',
            }}
          >
            <div className='w-[80%] flex flex-col justify-center items-center gap-y-[8px] md:gap-y-[24px]'>
              <img src={img} alt={title} className='w-[24px] md:w-[60px] h-[24px] md:h-[60px]' />

              <Typography
                sx={{
                  fontSize: '26px !important',
                  fontWeight: '600 !important',
                  fontFamily: 'Josefin Sans',
                  lineHeight: 'normal',
                  textAlign: 'center',
                  color: '#090909',
                  textTransform: 'capitalize',
                  '@media (max-width: 767px)': {
                    fontSize: '14px !important',
                  },
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '18px !important',
                  fontWeight: '400 !important',
                  fontFamily: 'Open Sans',
                  lineHeight: 'normal',
                  textAlign: 'center',
                  color: '#090909',
                  textTransform: 'capitalize',
                  '@media (max-width: 767px)': {
                    fontSize: '12px !important',
                  },
                }}
              >
                {description}
              </Typography>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FullfillmentSection
