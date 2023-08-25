import { Typography } from '@mui/material'
import FooterDesktop from '../FooterDesktop/FooterDesktop'
import FooterMobile from '../FooterMobile/FooterMobile'

export default function Footer() {
  return (
    <div className='relative'>
      {/* Desktop View */}
      <div className='hidden md:block'>
        <FooterDesktop />
      </div>

      {/* Mobile View */}
      <div className='block md:hidden'>
        <FooterMobile />
      </div>
      <Typography variant='body1' className='text-center py-[16px] w-full bg-[#FFD9E4]'>
        Copyright © 2023 Your Baking Connection. All Rights Reserved
        <span className='absolute right-3'>v1.1</span>
      </Typography>
    </div>
  )
}
