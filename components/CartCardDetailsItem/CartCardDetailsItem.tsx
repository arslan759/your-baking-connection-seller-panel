import { Typography } from '@mui/material'
import React from 'react'
import { CartCardDetailsItemProps } from 'types'

const CartCardDetailsItem = ({ icon, title, description, value }: CartCardDetailsItemProps) => {
  return (
    <div className='w-full flex justify-between'>
      <div className='w-[80%] flex items-center'>
        <img src={icon} alt={title} className='mr-[16px] h-[22px] w-[22px]' />
        <Typography
          sx={{
            fontSize: '16px !important',
            fontFamily: 'Open Sans',
            fontWeight: '600 !important',
            lineHeight: '24px',
            textTransform: 'capitalize',
            color: '#090909',
          }}
        >
          <span>{title} - </span>
          <span
            style={{
              color: '#888',
              fontWeight: '500 !important',
            }}
          >
            {description}
          </span>
        </Typography>
      </div>

      <div className='w-fit'>
        <Typography
          sx={{
            fontSize: '16px !important',
            fontFamily: 'Open Sans',
            fontWeight: '600 !important',
            lineHeight: '24px',
            textTransform: 'capitalize',
            textAlign: 'right',
            color: '#888',
          }}
        >
          {value}
        </Typography>
      </div>
    </div>
  )
}

export default CartCardDetailsItem
