import React, { useState } from 'react'
import { BakerTabsPanelProps } from 'types'
import ClientReviewSwiper from '../ClientReviewSwiper/ClientReviewSwiper'
import BakerNoAvailableProducts from '../BakerNoAvailableProducts/BakerNoAvailableProducts'
import BakerAvailableProducts from '../BakerAvailableProducts/BakerAvailableProducts'

const BakerTabsPanel = ({ activeTab }: BakerTabsPanelProps) => {
  const [products, setProducts] = useState(0)

  console.log('active tab is', activeTab)

  return (
    <div>
      {activeTab == 0 &&
        (products === 0 ? <BakerNoAvailableProducts /> : <BakerAvailableProducts />)}
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

export default BakerTabsPanel
