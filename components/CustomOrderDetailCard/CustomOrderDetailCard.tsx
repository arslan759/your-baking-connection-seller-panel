import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Typography } from '@mui/material'
import CustomBreadCrumbs from '../CustomBreadCrumbs/CustomBreadCrumbs'
import YourProfileCardItem from '../YourProfileCardItem'
// import OrderDetailsUserTable from '../OrderDetailsOrderTable'
import OrderDetailsOrderTable from '../OrderDetailsOrderTable'
import OrderDetailsUserTable from '../OrderDetailsUserTable'

interface CustomOrderDetailCardProps {
  orderId: string
}

const CustomOrderDetailCard = ({ orderId }: CustomOrderDetailCardProps) => {
  return (
    <div className={styles.card}>
      <CustomBreadCrumbs
        breadCrumbs={[
          {
            name: 'your profile',
            route: '/profile',
          },
          {
            name: 'custom orders',
            route: '/profile/custom-orders',
          },
          {
            name: 'order details',
            route: `/profile/custom-orders/${orderId}`,
          },
        ]}
      />

      <div className='w-full flex flex-col gap-y-[56px]'>
        <div className='w-full flex justify-center'>
          <div className='w-full flex flex-wrap justify-center md:justify-start gap-y-[32px] md:gap-y-[56px] gap-x-[24px] mt-[48px] md:mt-[64px]'>
            <YourProfileCardItem
              title='Fulfillment Method'
              image='/Images/profile-order-management.svg'
              description='Pickup'
              isClickable={false}
            />
            <YourProfileCardItem
              title='Payment Method'
              image='/Images/profile-payment-details.svg'
              description='Cash On Delivery'
              isClickable={false}
            />
            <YourProfileCardItem
              title='Order Status'
              image='/Images/profile-purchase-history.svg'
              description='Completed'
              isClickable={false}
            />
          </div>
        </div>

        <div className='w-full'>
          <Typography
            sx={{
              fontSize: '48px !important',
              fontWeight: '700 !important',
              lineHeight: 'normal',
              fontFamily: 'Josefin Sans',
              textTransform: 'capitalize',
              color: '#090909',
              fontFeatureSettings: "'clig' off, 'liga' off",
              '@media (max-width: 767px)': {
                fontSize: '24px !important',
              },
            }}
          >
            User Details
          </Typography>

          <div className='w-full mt-[24px] md:mt-[32px]'>
            <OrderDetailsUserTable />
          </div>
        </div>

        <div className='w-full'>
          <Typography
            sx={{
              fontSize: '48px !important',
              fontWeight: '700 !important',
              lineHeight: 'normal',
              fontFamily: 'Josefin Sans',
              textTransform: 'capitalize',
              color: '#090909',
              fontFeatureSettings: "'clig' off, 'liga' off",
              '@media (max-width: 767px)': {
                fontSize: '24px !important',
              },
            }}
          >
            Order Details
          </Typography>

          <div className='w-full mt-[24px] md:mt-[32px]'>
            <OrderDetailsOrderTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomOrderDetailCard
