import React from 'react'
import Navbar from '../NavBar/NavBar'
import BakerProducts from '../BakerProducts/BakerProducts'
import BakerWeOffer from '../BakerWeOffer/BakerWeOffer'
import BakerLocation from '../BakerLocation/BakerLocation'
import BakerMainContent from '../BakerMainContent/BakerMainContent'
import BakerSwiper from '../BakerSwiper/BakerSwiper'

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col lg:flex-row'>
        <div>
          <div className='mt-[48px] lg:mt-[100px] w-[100vw] lg:w-[50vw]'>
            <BakerSwiper />
          </div>

          {/* Gallery Location Info for Desktop View */}
          <div className='hidden lg:block mt-[-30px]'>
            <BakerLocation />
          </div>
        </div>
        <div className='relative w-[100%] lg:w-[50%] px-[20px] lg:px-[40px]'>
          <BakerMainContent />

          {/* We Offer section for Desktop View */}
          <div className='mt-[60px] hidden lg:block'>
            <BakerWeOffer />
          </div>
        </div>
        {/* Gallery Location Info for Mobile View */}
        <div className='block lg:hidden overflow-hidden'>
          <BakerLocation />

          {/* We Offer Section for Mobile View */}
          <div className='-mt-[80px]'>
            <BakerWeOffer />
          </div>
        </div>
      </div>

      <div className='mt-[48px]'>
        <BakerProducts />
      </div>
    </div>
  )
}

export default Gallery
