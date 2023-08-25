import { Typography } from '@mui/material'
import React from 'react'
import { SectionheadingProps } from 'types'

const Sectionheading = ({ title }: SectionheadingProps) => {
  return (
    <div className='flex'>
      <Typography
        sx={{
          textTransform: 'uppercase',
          lineHeight: 'normal',
        }}
        variant='h4'
        align='center'
      >
        {title}
      </Typography>
      <div className='h-[24px] md:h-[36px] w-[12px] bg-green ml-[8px] md:ml-[12px]' />
    </div>
  )
}

export default Sectionheading
