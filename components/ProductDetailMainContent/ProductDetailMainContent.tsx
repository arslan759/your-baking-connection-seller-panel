import { Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductDetailForm from '../ProductDetailForm/ProductDetailForm'
import CartCardDetailsItem from '../CartCardDetailsItem/CartCardDetailsItem'
import { ProductDetailMainContentProps } from 'types'
import ShowMore from '../ShowMore'

const ProductDetailMainContent = ({
  title,
  stock,
  oldPrice,
  newPrice,
  reviews,
  rating,
  shopId,
  description,
  productId,
  productVariantId,
  productAttributes,
}: ProductDetailMainContentProps) => {
  const [priceToDisplay, setPriceToDisplay] = useState<number>(newPrice)

  useEffect(() => {
    console.log('newPrice is ', priceToDisplay)
  }, [priceToDisplay])
  return (
    <div className='pb-[12px] lg:pb-[0px] bg-[#fff]'>
      <div className='w-full flex justify-between items-center'>
        <div className='w-[60%]  flex max-[276px]:flex-col flex-row md:flex-col gap-y-[20px]'>
          <Typography
            sx={{
              fontFamily: 'Josefin Sans',
              fontSize: '28px !important',
              fontWeight: '700 !important',
              lineHeight: 'normal',
              textTransform: 'capitalize',
              fontFeatureSettings: "'clig' off, 'liga' off",
              color: '#090909',
              '@media (max-width: 767px)': {
                fontSize: '24px !important',
              },
              '@media (max-width: 400px)': {
                fontSize: '18px !important',
              },
            }}
          >
            {title}
          </Typography>
        </div>
        <div className='w-fit rounded-[16px] bg-primary px-[8px] py-[4px]'>
          <Typography
            sx={{
              fontFamily: 'Open Sans',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '18px',
              color: '#090909',
              textAlign: 'center',
              letterSpacing: '0.32px',
              '@media (max-width: 767px)': {
                fontSize: '14px',
              },
            }}
          >
            {!stock ? `out of stock` : `${stock} left in stock`}
          </Typography>
        </div>
      </div>

      <div className='mt-[6px] md:mt-[9px] flex gap-x-[12px] items-center'>
        {oldPrice && (
          <Typography
            sx={{
              color: '#888',
              fontSize: '28px !important',
              fontWeight: '400',
              lineHeight: 'normal',
              fontFamily: 'Open Sans',
              textDecoration: 'line-through',
              '@media (max-width:767px)': {
                fontSize: '24px !important',
              },
            }}
          >
            ${oldPrice}
          </Typography>
        )}
        <Typography
          sx={{
            color: '#090909',
            fontSize: '28px !important',
            fontWeight: '700',
            lineHeight: 'normal',
            fontFamily: 'Open Sans',
            '@media (max-width:767px)': {
              fontSize: '24px !important',
            },
          }}
        >
          ${priceToDisplay.toFixed(2)}
        </Typography>
      </div>

      <div className='flex gap-x-[14px] items-center mt-[18px] lg:mt-[13px]'>
        <Rating
          sx={{
            gap: '5px',
          }}
          name='read-only'
          value={rating}
          readOnly
        />

        <Typography
          sx={{
            fontFamily: 'Open Sans',
            fontSize: '16px !important',
            fontWeight: '400 !important',
            lineHeight: '33px',
            letterSpacing: '0.32px',
            color: '#AAA',
            '@media (max-width: 767px)': {
              fontSize: '14px !important',
            },
          }}
        >{`(${reviews} reviews)`}</Typography>
      </div>

      <div className='w-[100%] lg:w-[95%] mt-[16px] lg:mt-[18px]'>
        <Typography
          component='div'
          sx={{
            fontFamily: 'Open Sans',
            fontSize: '18px !important',
            fontWeight: '400 !important',
            lineHeight: 'normal',
            // textTransform: 'capitalize',
            color: '#090909',
            '@media (max-width: 767px)': {
              fontSize: '16px !important',
            },
          }}
        >
          <ShowMore
            lineHeight='normal'
            color='#090909'
            fontFamily='Open Sans'
            fontWeight={400}
            fontSize={18}
            text={description || ''}
            words={500}
          />
        </Typography>
      </div>

      <div className=' mt-[16px] md:mt-[18px]'>
        <ProductDetailForm
          attributes={productAttributes}
          newPrice={newPrice}
          updatePrice={setPriceToDisplay}
          stock={stock}
          productId={productId}
          shopId={shopId}
          productVariantId={productVariantId}
        />
      </div>

      <div className='mt-[24px] md:mt-[20px] bg-[#000] h-[1px] w-full' />

      <Typography
        sx={{
          color: '#090909',
          fontSize: '24px !important',
          fontWeight: '700 !important',
          lineHeight: 'normal',
          fontFamily: 'Open Sans',
          marginTop: '15px',
          '@media (max-width:767px)': {
            fontSize: '20px !important',
          },
        }}
      >
        Pickup and Delivery
      </Typography>

      <div className='mt-[22px] md:mt-[15px] w-full flex flex-col items-start gap-y-[16px]'>
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

      {/* <div className='hidden lg:block mt-[12px] bg-[#6C6C6C] h-[0.5px] w-full' /> */}
    </div>
  )
}

export default ProductDetailMainContent
