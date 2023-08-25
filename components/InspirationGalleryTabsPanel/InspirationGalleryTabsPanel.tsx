import React, { useState } from 'react'
import { InspirationGalleryTabsPanelProps } from 'types'
import GalleryNoAvailableProducts from '../GalleryNoAvailableProducts/GalleryNoAvailableProducts'
import GalleryAvailableProducts from '../GalleryAvailableProducts/GalleryAvailableProducts'
import ClientReviewSwiper from '../ClientReviewSwiper/ClientReviewSwiper'

const InspirationGalleryTabsPanel = ({ activeTab }: InspirationGalleryTabsPanelProps) => {
  const [products, setProducts] = useState(1)

  console.log('active tab is', activeTab)

  return (
    <div>
      {activeTab == 0 &&
        (products === 0 ? <GalleryNoAvailableProducts /> : <GalleryAvailableProducts />)}
      {activeTab == 1 && <div>Gallery of work</div>}
      {activeTab == 2 && <div>terms and conditions</div>}
      {activeTab == 3 && <div>allergen info</div>}
      {activeTab == 4 && (
        <div className='w-full flex justify-center'>
          <div className='review-swiper w-[90%]'>
            <ClientReviewSwiper />
          </div>
        </div>
      )}
    </div>
  )
}

export default InspirationGalleryTabsPanel
