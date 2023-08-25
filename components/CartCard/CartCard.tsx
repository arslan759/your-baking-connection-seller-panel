import React from 'react'
import styles from './styles.module.css'
import CartTable from '../CartTable/CartTable'
import { Typography } from '@mui/material'
import CartCardDetailsItem from '../CartCardDetailsItem/CartCardDetailsItem'

const CartCard = () => {
  return (
    <div className={styles.card}>
      <div className='w-full flex flex-col gap-y-[40px] md:gap-y-[24px]'>
        <div className='w-full'>
          <CartTable />
        </div>

        <div className='w-full flex flex-col items-start gap-y-[16px]'>
          <CartCardDetailsItem
            icon='/Images/cart-pickup.svg'
            title='Pickup'
            description='Available for pickup on 12 Sep'
            value='Free'
          />
          <CartCardDetailsItem
            icon='/Images/cart-sales-tax.svg'
            title='Sales Tax'
            description='Eligible for sales tax'
            value='Not included                     '
          />
          <CartCardDetailsItem
            icon='/Images/cart-delivery-icon.svg'
            title='Home Delivery'
            description='Same day delivery available'
            value='3.95$'
          />
        </div>

        <div className='flex flex-col items-start gap-y-[8px] md:gap-y-[10px]'>
          <Typography
            sx={{
              fontSize: '16px !important',
              fontFamily: 'Open Sans',
              fontWeight: '600 !important',
              lineHeight: '24px',
              textTransform: 'capitalize',
              color: '#000',
            }}
          >
            Need Help?
          </Typography>
          <Typography
            sx={{
              fontSize: '16px !important',
              fontFamily: 'Open Sans',
              fontWeight: '500 !important',
              lineHeight: '24px',
              textTransform: 'capitalize',
              color: '#000',
              letterSpacing: '0.64px',
              textDecoration: 'underline',
            }}
          >
            Pickup and delivery
          </Typography>
          <Typography
            sx={{
              fontSize: '16px !important',
              fontFamily: 'Open Sans',
              fontWeight: '500 !important',
              lineHeight: '24px',
              textTransform: 'capitalize',
              color: '#000',
              letterSpacing: '0.64px',
              textDecoration: 'underline',
            }}
          >
            Contact us
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default CartCard
