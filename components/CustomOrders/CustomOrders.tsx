import { Typography } from '@mui/material'
import React from 'react'
import CustomOrdersForm from '../CustomOrdersForm/CustomOrdersForm'

const CustomOrders = () => {
  return (
    <div>
      <Typography
        variant='h1'
        sx={{
          textAlign: 'center',
          fontSize: '48px',
          color: '#7DDEC1',
          fontFamily: 'Josefin Sans',
          fontWeight: '700',
          textTransform: 'capitalize',
          lineHeight: 'normal',
          fontFeatureSettings: "'clig' off, 'liga' off",
          '@media (max-width: 767px)': {
            fontSize: '24px',
          },
        }}
      >
        {`Custom Orders`}
      </Typography>

      <div className='mt-[24px] md:mt-[50px]'>
        <CustomOrdersForm />
      </div>
    </div>
  )
}

export default CustomOrders
