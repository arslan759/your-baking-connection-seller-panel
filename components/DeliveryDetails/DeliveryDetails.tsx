import React from 'react'
import styles from './styles.module.css'
import { Typography } from '@mui/material'
import DeliveryDetailsForm from '../DeliveryDetailsForm/DeliveryDetailsForm'

const DeliveryDetails = () => {
  return (
    <div className={styles.card}>
      <div>
        <Typography
          sx={{
            fontSize: '24px !important',
            fontFamily: 'Open Sans',
            fontWeight: '700 !important',
            lineHeight: 'normal',
            color: '#7DDEC1',
            fontFeatureSettings: "'clig' off, 'liga' off",
            textTransform: 'capitalize',
            '@media (max-width: 767px)': {
              fontSize: '24px !important',
            },
          }}
        >
          Delivery Details
        </Typography>
      </div>

      <div className='mt-[24px] md:mt-[22px]'>
        <DeliveryDetailsForm />
      </div>
    </div>
  )
}

export default DeliveryDetails
