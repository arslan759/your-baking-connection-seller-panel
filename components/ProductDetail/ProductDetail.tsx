import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Typography } from '@mui/material'
import ProductDetailBreadCrumbs from '../ProductDetailBreadCrumbs/ProductDetailBreadCrumbs'
import BakerSwiper from '../BakerSwiper/BakerSwiper'
import ProductDetailMainContent from '../ProductDetailMainContent/ProductDetailMainContent'
import ProductDetailTabsSection from '../ProductDetailTabsSection/ProductDetailTabsSection'
import MatchMadeInHeaven from '../MatchMadeInHeaven/MatchMadeInHeaven'

const ProductDetail = () => {
  return (
    <div>
      <NavBar />

      <div
        style={{
          background: `url(${'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900'})`,
          backgroundSize: 'cover',
          width: '100%',
          // height: '100%',
          backgroundPositionX: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className={`w-full h-[325px] md:h-[450px] flex justify-start items-center`}
      >
        <div className='w-fit h-auto ml-[18px] md:ml-[118px]'>
          <Typography
            sx={{
              fontSize: '48px !important',
              fontFamily: 'Josefin Sans',
              textTransform: 'capitalize',
              fontWeight: '700 !important',
              color: '#fff',
              textAlign: 'left ',
              '@media (max-width: 768px)': {
                fontSize: '24px !important',
              },
            }}
          >
            Berry Cream Fantasy
          </Typography>

          <div className='w-fit mt-[10px] md:mt-[14px]'>
            <ProductDetailBreadCrumbs />
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center mt-[24px] md:mt-[32px]'>
        <div className='w-[90%] md:w-[95%]'>
          <div className='flex flex-col items-center lg:flex-row lg:items-start'>
            <div className='w-[100%] lg:w-[40vw]'>
              <BakerSwiper />
            </div>
            <div className='relative w-[100%] mt-[40px] lg:mt-[0px] lg:w-[100%] lg:pl-[40px]'>
              <ProductDetailMainContent />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center mt-[24px] md:mt-[32px]'>
        <ProductDetailTabsSection />
      </div>

      <div className='w-full flex flex-col items-center mt-[48px] md:mt-[64px]'>
        <div className='w-[90%] md:w-[95%]'>
          <MatchMadeInHeaven />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
