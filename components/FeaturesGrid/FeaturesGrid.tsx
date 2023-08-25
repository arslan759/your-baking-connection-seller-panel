import React from 'react'
import { Typography } from '@mui/material'

import Grid1BakeryMembership from '../../assets/icons/grid1BakeryMembership'
import Grid2BakeryMembership from '../../assets/icons/grid2BakeryMembership'
import Grid3BakeryMembership from '../../assets/icons/grid3BakeryMembership'
import Grid4BakeryMembership from '../../assets/icons/grid4BakeryMembership'
import Grid5BakeryMembership from '../../assets/icons/grid5BakeryMembership'
import Grid6BakeryMembership from '../../assets/icons/grid6BakeryMembership'
import Grid7BakeryMembership from '../../assets/icons/grid7BakeryMembership'
import Grid8BakeryMembership from '../../assets/icons/grid8BakeryMembership'
import Grid9BakeryMembership from '../../assets/icons/grid9BakeryMembership'

import { stylesModuleMui } from './styles.module'

const FeaturesGrid = () => {
  return (
    // <div className='relative w-full h-[430px] md:w-full md:h-[870px] grid grid-cols-3 p-4 bg-[#FFD9E4]'>
    <div className='relative w-full h-[430px] md:w-full md:h-[870px] grid grid-cols-3 bg-[#FFD9E4]'>
      {/* Grid Item 1 */}
      <div className='mt-[24px] ml-[23px] md:mt-[72px] md:ml-[74px]'>
        {/* <div className='p-4'> */}
        <div className='flex flex-col items-center'>
          <div className='w-[24px] h-[24px] md:w-[60px] md:h-[60px]'>
            <Grid1BakeryMembership />
          </div>
          <Typography variant='h5' align='center' sx={stylesModuleMui.headingGrid}>
            Virtual Storefront
          </Typography>
          <Typography variant='body2' align='center'>
            Your custom online bakery case will feature your beautiful creations
          </Typography>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className='absolute inset-x-1/3 w-[0.5px] h-[382px] md:h-[726px] bg-[#6C6C6C] mx-0 my-[24px] md:my-[72px]' />

      {/* Grid Item 2 */}
      <div className=''>
        <div className='flex flex-col items-center'>
          <div className='mb-2'>
            <Grid2BakeryMembership />
          </div>
          <Typography variant='subtitle1' align='center' sx={stylesModuleMui.headingGrid}>
            Title 2
          </Typography>
          <Typography variant='body2' align='center'>
            Description 2
          </Typography>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className='absolute inset-x-2/3 w-[0.5px] h-[382px] md:h-[726px] bg-[#6C6C6C] mx-0 my-[24px] md:my-[72px]' />

      {/* Grid Item 3 */}
      <div className=''>
        <div className='flex flex-col items-center'>
          <div className='mb-2'>
            <Grid3BakeryMembership />
          </div>
          <Typography variant='subtitle1' align='center' sx={stylesModuleMui.headingGrid}>
            Title 3
          </Typography>
          <Typography variant='body2' align='center'>
            Description 3
          </Typography>
        </div>
      </div>

      {/* Horizontal Divider */}
      {/* <div className='absolute inset-y-1/3 h-[0.5px] w-[390px] md:w-[1248px] bg-[#6C6C6C] my-0 mx-[20px] md:mx-[81px]' /> */}
      <div className='col-span-3 h-[0.5px] bg-[#6C6C6C] my-0 mx-[20px] md:mx-[81px]' />

      {/* Grid Item 4 */}
      <div className='p-4'>
        <div className='flex flex-col items-center'>
          <div className='mb-2'>
            <Grid4BakeryMembership />
          </div>
          <Typography variant='subtitle1' align='center' sx={stylesModuleMui.headingGrid}>
            Title 4
          </Typography>
          <Typography variant='body2' align='center'>
            Description 4
          </Typography>
        </div>
      </div>

      {/* Grid Item 5 */}
      <div className='p-4'>
        <div className='flex flex-col items-center'>
          <div className='mb-2'>
            <Grid5BakeryMembership />
          </div>
          <Typography variant='subtitle1' align='center' sx={stylesModuleMui.headingGrid}>
            Title 5
          </Typography>
          <Typography variant='body2' align='center'>
            Description 5
          </Typography>
        </div>
      </div>

      {/* Grid Item 6 */}
      <div className='p-4'>
        <div className='flex flex-col items-center'>
          <div className='mb-2'>
            <Grid6BakeryMembership />
          </div>
          <Typography variant='subtitle1' align='center' sx={stylesModuleMui.headingGrid}>
            Title 6
          </Typography>
          <Typography variant='body2' align='center'>
            Description 6
          </Typography>
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className='col-span-3 h-[0.5px] bg-[#6C6C6C] my-0 mx-[20px] md:mx-[81px]' />

      {/* Grid Item 7 */}
      <div className='p-4'>
        <div className='flex flex-col items-center'>
          <div className='mb-2'>
            <Grid7BakeryMembership />
          </div>
          <Typography variant='subtitle1' align='center' sx={stylesModuleMui.headingGrid}>
            Title 7
          </Typography>
          <Typography variant='body2' align='center'>
            Description 7
          </Typography>
        </div>
      </div>

      {/* Grid Item 8 */}
      <div className='p-4'>
        <div className='flex flex-col items-center'>
          <div className='mb-2'>
            <Grid8BakeryMembership />
          </div>
          <Typography variant='subtitle1' align='center' sx={stylesModuleMui.headingGrid}>
            Title 8
          </Typography>
          <Typography variant='body2' align='center'>
            Description 8
          </Typography>
        </div>
      </div>

      {/* Grid Item 9 */}
      <div className='p-4'>
        <div className='flex flex-col items-center'>
          <div className='mb-2'>
            <Grid9BakeryMembership />
          </div>
          <Typography variant='subtitle1' align='center' sx={stylesModuleMui.headingGrid}>
            Title 9
          </Typography>
          <Typography variant='body2' align='center'>
            Description 9
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default FeaturesGrid
