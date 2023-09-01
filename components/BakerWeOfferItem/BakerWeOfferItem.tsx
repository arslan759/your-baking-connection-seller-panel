import React from 'react'
import { BakerWeOfferItemProps } from 'types'
import styles from './styles.module.css'
import { Typography } from '@mui/material'

const BakerWeOfferItem = ({ image, title }: BakerWeOfferItemProps) => {
  return (
    <div className={styles.item}>
      <img src={image} alt={title} className='w-[36px] md:w-[48px] h-[36px] md:h-[48px]' />
      <Typography
        sx={{
          textAlign: 'center',
          color: '#090909',
          width: '90%',
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: 'normal',
          fontFamily: 'Open Sans',
          textTransform: 'capitalize',
          '@media (max-width:767px)': {
            fontSize: '12px',
          },
        }}
      >
        {title}
      </Typography>
    </div>
  )
}

export default BakerWeOfferItem
