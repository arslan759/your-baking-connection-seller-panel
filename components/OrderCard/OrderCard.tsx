import React, { useState } from 'react'
import styles from './styles.module.css'
import { Typography } from '@mui/material'
import { orderItemsData, paymentMethods } from 'Constants/constants'
import { PrimaryBtn, TertiaryBtn } from '../Buttons'

const OrderCard = () => {
  const [salesTax, setSalesTax] = useState(13)

  return (
    <div className={styles.card}>
      <Typography
        sx={{
          fontSize: '28px !important',
          fontFamily: 'Open Sans',
          fontWeight: '700 !important',
          lineHeight: 'normal',
          color: '#000',
          textTransform: 'capitalize',
          '@media (max-width: 767px)': {
            fontSize: '24px !important',
          },
        }}
      >
        your order
      </Typography>

      <div className='mt-[24px] md:[20px]'>
        <div
          className='w-full flex justify-between py-[16px]'
          style={{
            borderBottom: '1px solid #DEE2E6',
          }}
        >
          <Typography
            sx={{
              fontSize: '18px !important',
              fontFamily: 'Open Sans',
              fontWeight: '500 !important',
              lineHeight: 'normal',
              color: '#000',
              textTransform: 'capitalize',
            }}
          >
            product
          </Typography>

          <Typography
            sx={{
              fontSize: '18px !important',
              fontFamily: 'Open Sans',
              fontWeight: '500 !important',
              lineHeight: 'normal',
              color: '#000',
              textTransform: 'capitalize',
            }}
          >
            total
          </Typography>
        </div>

        {/* Cart item */}

        {orderItemsData.map((item, index) => {
          const { title, price, quantity } = item

          return (
            <div
              key={index}
              className='w-full flex justify-between py-[8px]'
              style={{
                borderBottom: '1px solid #212529',
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px !important',
                  fontFamily: 'Open Sans',
                  fontWeight: '500 !important',
                  lineHeight: '29px',
                  color: '#000',
                  letterSpacing: '0.32px',
                  textTransform: 'capitalize',
                }}
              >
                {title}{' '}
                <span
                  style={{
                    textTransform: 'lowercase',
                  }}
                >
                  x
                </span>{' '}
                <span
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  {quantity}
                </span>
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px !important',
                  fontFamily: 'Open Sans',
                  fontWeight: '500 !important',
                  lineHeight: '29px',
                  color: '#000',
                  letterSpacing: '0.32px',
                  textTransform: 'capitalize',
                }}
              >
                {price}$
              </Typography>
            </div>
          )
        })}

        <div
          className='w-full flex justify-between py-[8px]'
          style={{
            borderBottom: '1px solid #212529',
          }}
        >
          <Typography
            sx={{
              fontSize: '16px !important',
              fontFamily: 'Open Sans',
              fontWeight: '500 !important',
              lineHeight: '29px',
              color: '#000',
              letterSpacing: '0.32px',
              textTransform: 'capitalize',
            }}
          >
            Sales Tax
          </Typography>

          <Typography
            sx={{
              fontSize: '16px !important',
              fontFamily: 'Open Sans',
              fontWeight: '500 !important',
              lineHeight: '29px',
              color: '#000',
              letterSpacing: '0.32px',
              textTransform: 'capitalize',
            }}
          >
            {salesTax}$
          </Typography>
        </div>

        <div
          className='w-full flex justify-between py-[16px]'
          style={{
            borderBottom: '1px solid #212529',
          }}
        >
          <Typography
            sx={{
              fontSize: '16px !important',
              fontFamily: 'Open Sans',
              fontWeight: '700 !important',
              lineHeight: '29px',
              color: '#000',
              letterSpacing: '0.32px',
              textTransform: 'capitalize',
            }}
          >
            Cart Subtotal
          </Typography>

          <Typography
            sx={{
              fontSize: '16px !important',
              fontFamily: 'Open Sans',
              fontWeight: '500 !important',
              lineHeight: '29px',
              color: '#000',
              letterSpacing: '0.32px',
              textTransform: 'capitalize',
            }}
          >
            24$
          </Typography>
        </div>

        <div
          className='w-full flex justify-between py-[16px]'
          style={{
            borderBottom: '1px solid #212529',
          }}
        >
          <Typography
            sx={{
              fontSize: '18px !important',
              fontFamily: 'Open Sans',
              fontWeight: '700 !important',
              lineHeight: '29px',
              color: '#000',
              letterSpacing: '0.32px',
              textTransform: 'capitalize',
            }}
          >
            Order Total
          </Typography>

          <Typography
            sx={{
              fontSize: '16px !important',
              fontFamily: 'Open Sans',
              fontWeight: '700 !important',
              lineHeight: '29px',
              color: '#000',
              letterSpacing: '0.32px',
              textTransform: 'capitalize',
            }}
          >
            {orderItemsData.reduce(
              (acc, item) => acc + parseInt(item.price) * parseInt(item.quantity),
              0,
            ) + salesTax}
            ${' '}
          </Typography>
        </div>

        <div className='mt-[16px]'>
          <Typography
            sx={{
              fontSize: '16px !important',
              fontFamily: 'Open Sans',
              fontWeight: '600 !important',
              lineHeight: '24px',
              color: '#000',
            }}
          >
            Accepted Payment Methods
          </Typography>
        </div>

        <div className='mt-[16px] flex flex-wrap justify-start gap-x-[10px] md:gap-x-[20px] gap-y-[20px]'>
          {paymentMethods.map((item) => (
            <img key={item.title} src={item.img} alt={item.title} className='h-[22px]' />
          ))}
        </div>

        <div className='mt-[24px] w-full flex justify-between'>
          {/* Desktop View */}
          <div className='hidden md:block h-[38px] md:h-[57px] w-fit md:w-[45%]'>
            <TertiaryBtn text='Continue Shopping' />
          </div>

          {/* Mobile View */}
          <div className='block md:hidden h-[38px] md:h-[57px] w-fit md:w-[45%]'>
            <TertiaryBtn text='Continue' />
          </div>

          <div className='h-[38px] md:h-[57px] w-fit md:w-[45%]'>
            <PrimaryBtn text='Proceed to Checkout' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
