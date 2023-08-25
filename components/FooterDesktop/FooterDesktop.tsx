import React from 'react'
import FooterLinks from '../FooterLinks/FooterLinks'
import Image from 'next/image'
import { Typography } from '@mui/material'
import styles from './styles.module.css'

const FooterDesktop = () => {
  return (
    <div
      className={`${styles.background}  mt-[100px] pb-[30px] flex flex-col md:flex-row items-center md:items-start gap-x-[40px] lg:gap-x-[100px]`}
    >
      <div className='px-0 mt-[148px] md:px-8 w-[100%] md:w-[30%] flex flex-col items-center md:items-start'>
        <div className='relative w-[117px] md:w-[165px] h-[108px] md:h-[152px]'>
          <Image
            // layout='fill'
            fill={true}
            style={{ objectFit: 'contain' }}
            src='/Images/footerLogo.svg'
            alt='footer-logo'
          />
        </div>
        <Typography
          variant='body1'
          className='w-[80%] md:w-full mt-[14px] text-center md:text-start'
        >
          The bakers of Your Baking Connection are passionate business owners who operate home-based
          bakeries in compliance with their individual state laws. All{' '}
        </Typography>
      </div>
      <div className='mt-[80px] w-[auto] md:w-[100%] flex flex-col md:flex-row gap-[10px] items-center md:items-start flex-nowrap md:flex-wrap'>
        <FooterLinks
          header='Quick Links'
          link1='About Your Baking Connection'
          link2='About The Bakers'
          link3='FAQs'
        />
        <FooterLinks
          header='Resources'
          link3='Baker Terms & Conditions'
          link1='Are You a Baker?'
          link2='Baker Resources'
        />
        <FooterLinks
          header='Useful Information'
          link3='Terms & Conditions'
          link2='Privacy Policy'
          link1='Search'
        />
        <FooterLinks
          header='Contact Us'
          link1='support@yourbakingconnection.com'
          link2='172 S Broadway, Denver, Colorado '
          link3='+1-234-567-89'
        />
        <FooterLinks
          header='Follow Us'
          // link1='support@yourbakingconnection.com'
          // link2='172 S Broadway,Denver, Colorado '
          // link3='+1-234-567-89'
        />
      </div>
    </div>
  )
}

export default FooterDesktop
