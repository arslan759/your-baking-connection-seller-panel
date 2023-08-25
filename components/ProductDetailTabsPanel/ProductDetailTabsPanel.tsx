import React from 'react'
import { ProductDetailTabsPanelProps } from 'types'
import ProductDetailDescription from '../ProductDetailDescription/ProductDetailDescription'
import ClientReviewSwiper from '../ClientReviewSwiper/ClientReviewSwiper'

const ProductDetailTabsPanel = ({ activeTab }: ProductDetailTabsPanelProps) => {
  return (
    <div>
      {activeTab == 0 && <ProductDetailDescription />}
      {activeTab == 1 && (
        <div className='review-swiper w-full'>
          <ClientReviewSwiper />
        </div>
      )}
      {activeTab == 2 && <div>Faqs</div>}
    </div>
  )
}

export default ProductDetailTabsPanel
