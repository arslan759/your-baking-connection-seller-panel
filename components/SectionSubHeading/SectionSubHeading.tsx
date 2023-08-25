import { Typography } from '@mui/material'
import React from 'react'
import { SectionSubHeadingProps } from 'types'

const SectionSubHeading = ({ subHeading }: SectionSubHeadingProps) => {
  return (
    <div className='mt-[12px] md:mt-[36px]'>
      <Typography variant='body1' align='center'>
        {subHeading}
      </Typography>
    </div>
  )
}

export default SectionSubHeading
