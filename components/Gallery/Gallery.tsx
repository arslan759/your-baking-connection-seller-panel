import React from 'react'
import Navbar from '../NavBar/NavBar'
import GallerySwiper from '../GallerySwiper/GallerySwiper'
import GalleryLocation from '../GalleryLocation/GalleryLocation'
import GalleryMainContent from '../GalleryMainContent/GalleryMainContent'
import GalleryWeOffer from '../GalleryWeOffer/GalleryWeOffer'
import InspirationGallery from '../InspirationGallery/InspirationGallery'

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col lg:flex-row'>
        <div>
          <div className='mt-[48px] lg:mt-[100px] w-[100vw] lg:w-[50vw]'>
            <GallerySwiper />
          </div>

          {/* Gallery Location Info for Desktop View */}
          <div className='hidden lg:block mt-[-30px]'>
            <GalleryLocation />
          </div>
        </div>
        <div className='relative w-[100%] lg:w-[50%] px-[20px] lg:px-[40px]'>
          <GalleryMainContent />

          {/* We Offer section for Desktop View */}
          <div className='mt-[60px] hidden lg:block'>
            <GalleryWeOffer />
          </div>
        </div>
        {/* Gallery Location Info for Mobile View */}
        <div className='block lg:hidden overflow-hidden'>
          <GalleryLocation />

          {/* We Offer Section for Mobile View */}
          <div className='-mt-[80px]'>
            <GalleryWeOffer />
          </div>
        </div>
      </div>

      <div className='mt-[48px]'>
        <InspirationGallery />
      </div>
    </div>
  )
}

export default Gallery
