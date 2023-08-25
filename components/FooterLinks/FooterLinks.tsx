import { Typography } from '@mui/material'
import { FooterLinksProps } from 'types'

const FooterLinks = ({ header, link1, link2, link3 }: FooterLinksProps) => {
  // Follow Us Links

  if (header === 'Follow Us') {
    return (
      <div className='w-[100%] md:w-[33%] mb-[18px] md:mb-[36px] flex flex-col gap-2 items-center md:items-start justify-between'>
        <Typography variant='h6' className='text-[#000000] text-left relative'>
          {header}
        </Typography>

        <div className='flex gap-[12px] items-center justify-start shrink-0 relative'>
          <a rel='noreferrer' href='https://www.twitter.com' target='_blank'>
            <img
              src='/Images/twitter.svg'
              alt='mail-icon'
              className=' w-[18px] md:w-[24px] h-[18px] md:h-[24px] cursor-pointer'
            />
          </a>
          <a rel='noreferrer' href='https://www.facebook.com' target='_blank'>
            <img
              src='/Images/facebook.svg'
              alt='mail-icon'
              className=' w-[18px] md:w-[24px] h-[18px] md:h-[24px] cursor-pointer'
            />
          </a>
          <a rel='noreferrer' href='https://www.instagram.com' target='_blank'>
            <img
              src='/Images/instagram.svg'
              alt='mail-icon'
              className=' w-[18px] md:w-[24px] h-[18px] md:h-[24px] cursor-pointer'
            />
          </a>
        </div>
      </div>
    )
  }

  // First 4 Links

  return (
    <div className='w-[100%] md:w-[48%] lg:w-[32%] mb-[18px] md:mb-[36px] flex flex-col gap-2 items-center md:items-start justify-between'>
      <Typography variant='h6' className='text-[#000000] text-left relative'>
        {header}
      </Typography>

      {link1 && (
        <div className='flex flex-row gap-[12px] items-center justify-start shrink-0 relative'>
          {header === 'Contact Us' ? (
            <img
              src='/Images/mail.svg'
              alt='mail-icon'
              className=' w-[18px] md:w-[24px] h-[18px] md:h-[24px]'
            />
          ) : (
            <div className='hidden md:block bg-white shrink-0 w-2.5 h-2.5 relative'></div>
          )}
          <Typography
            sx={{ overflowWrap: 'anywhere' }}
            variant='body1'
            className='text-blackfor-text text-center md:text-left relative cursor-pointer w-full'
          >
            {link1}
          </Typography>
        </div>
      )}

      {link2 && (
        <div className='flex flex-row gap-[12px] items-center justify-start shrink-0 relative'>
          {header === 'Contact Us' ? (
            <img
              src='/Images/navigation.svg'
              alt='navigation-icon'
              className=' w-[18px] md:w-[24px] h-[18px] md:h-[24px]'
            />
          ) : (
            <div className='hidden md:block bg-white shrink-0 w-2.5 h-2.5 relative'></div>
          )}

          <Typography
            variant='body1'
            className='text-blackfor-text text-center md:text-left relative cursor-pointer'
          >
            {link2}
          </Typography>
        </div>
      )}

      {link3 && (
        <div className='flex flex-row gap-[12px] items-center justify-start shrink-0 relative'>
          {header === 'Contact Us' ? (
            <img
              src='/Images/phone-call.svg'
              alt='phone-icon'
              className=' w-[18px] md:w-[24px] h-[18px] md:h-[24px]'
            />
          ) : (
            <div className='hidden md:block bg-white shrink-0 w-2.5 h-2.5 relative'></div>
          )}

          <Typography
            variant='body1'
            className='text-blackfor-text text-center md:text-left relative cursor-pointer'
          >
            {link3}
          </Typography>
        </div>
      )}
    </div>
  )
}

export default FooterLinks
