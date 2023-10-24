import React from 'react'
import FooterLinks from '../FooterLinks/FooterLinks'
import Image from 'next/image'
import { Typography } from '@mui/material'
import styles from './styles.module.css'
import Link from 'next/link'

const FooterDesktop = () => {
  return (
    <div
      className={`${styles.background}  mt-[100px] pb-[30px] flex flex-col md:flex-row items-center md:items-start`}
    >
      <div className='px-0 mt-[148px] md:px-8 w-[40%] flex justify-center items-center'>
        <div className='relative w-[117px] md:w-[165px] h-[108px] md:h-[152px]'>
          <Link href='/'>
            <Image
              // layout='fill'
              fill={true}
              style={{ objectFit: 'contain', cursor: 'pointer' }}
              src='/Images/footerLogo.svg'
              alt='footer-logo'
            />
          </Link>
        </div>
        {/* <Typography
          variant='body1'
          className='w-[80%] md:w-full mt-[14px] text-center md:text-start'
        >
          The bakers of Your Baking Connection are passionate business owners who operate home-based
          bakeries in compliance with their individual state laws. All{' '}
        </Typography> */}
      </div>
      <div className='mt-[80px] w-[auto] md:w-[100%] flex flex-col md:flex-row gap-[10px] items-center md:items-start flex-nowrap md:flex-wrap'>
        <FooterLinks
          header='Quick Links'
          title1='About Your Baking Connection'
          link1={`${process.env.NEXT_PUBLIC_BLOG_URL}/about-your-baking-connection/`}
          title2='About The Bakers'
          link2={`${process.env.NEXT_PUBLIC_BLOG_URL}/about-the-bakers/`}
          title3='FAQs'
          link3={`${process.env.NEXT_PUBLIC_BLOG_URL}/faqs/`}
        />
        <FooterLinks
          header='Resources'
          title1='Are You a Baker?'
          link1={`${process.env.NEXT_PUBLIC_OWN_URL}/membership/`}
          title2='Baker Resources'
          link2={`${process.env.NEXT_PUBLIC_BLOG_URL}/baker-resources/`}
          title3='Baker Terms & Conditions'
          link3={`${process.env.NEXT_PUBLIC_INFO_URL}/baker-terms-of-use/`}
        />
        <FooterLinks
          header='Useful Information'
          link2={`${process.env.NEXT_PUBLIC_BLOG_URL}/privacy-policy/`}
          link3={`${process.env.NEXT_PUBLIC_INFO_URL}/terms-of-use/`}
          link1={`${process.env.NEXT_PUBLIC_OWN_URL}/search/`}
          title3='Terms & Conditions'
          title2='Privacy Policy'
          title1='Search'
        />
        <FooterLinks
          header='Follow Us'
          // link1='support@yourbakingconnection.com'
          // link2='172 S Broadway,Denver, Colorado '
          // link3='+1-234-567-89'
        />
        <FooterLinks
          header='Contact Us'
          title1='support@yourbakingconnection.com'
          title2='172 S Broadway, Denver, Colorado '
          title3='+1-234-567-89'
        />
      </div>
    </div>
  )
}

export default FooterDesktop
