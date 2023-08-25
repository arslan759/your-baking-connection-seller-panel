import { Typography } from '@mui/material'
import React from 'react'
import { ClientReviewCardProps } from 'types'
import styles from './styles.module.css'

const ClientReviewCard = ({ color, name, image, index, review }: ClientReviewCardProps) => {
  return (
    <div className='h-[90%] py-[80px]'>
      <div
        className='w-full h-[200px] md:h-[300px] flex flex-col items-center pb-[24px] !relative'
        style={{
          background: '#fff',
          boxShadow: '0px 1px 30px 0px rgba(0, 0, 0, 0.15)',
        }}
      >
        <div className='absolute left-[20px] top-[20px]'>
          <img
            src={index % 2 === 0 ? '/Images/pink-quote.svg' : '/Images/green-quote.svg'}
            alt='quote'
            className='w-[40px] md:w-[60px] h-[40px] md:h-[60px]'
          />
        </div>

        <div className={styles.cakeImage}>
          <img
            src={index % 2 === 0 ? '/Images/cake-right.svg' : '/Images/cake-left.svg'}
            alt='cake'
            className='w-[37px] md:w-[60px] h-[37px] md:h-[60px]'
          />
        </div>

        <img
          src={image}
          alt='avatar'
          className='w-[76px] md:w-[100px] h-[76px] md:h-[100px] mt-[-50px] md:mt-[-70px] rounded-full'
        />
        <div className='mt-[12px] md:mt-[16px]'>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: 'normal',
              textTransform: 'uppercase',
              fontFamily: 'Josefin Sans',
              color: color,
            }}
          >
            {name}
          </Typography>
        </div>
        <div className='mt-[12px] md:mt-[14px] flex gap-x-[12px] md:gap-x-[10px]'>
          <img
            src='/Images/instagramReview.svg'
            alt='avatar'
            className='w-[18px] md:w-[24px] h-[18px] md:h-[24px]'
          />
          <img
            src='/Images/facebookReview.svg'
            alt='avatar'
            className='w-[18px] md:w-[24px] h-[18px] md:h-[24px]'
          />
          <img
            src='/Images/twitterReview.svg'
            alt='avatar'
            className='w-[18px] md:w-[24px] h-[18px] md:h-[24px]'
          />
        </div>
        <div className='mt-[16px] md:mt-[28px] w-[70%]'>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '18px',
              '@media (max-width: 767px)': {
                fontSize: '12px',
              },
              fontWeight: '400',
              lineHeight: 'normal',
              fontFamily: 'Open Sans',
            }}
            className={styles.reviewText}
          >
            {review}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default ClientReviewCard
