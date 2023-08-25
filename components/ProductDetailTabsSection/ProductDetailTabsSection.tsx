import React, { useState } from 'react'
import ProductDetailTabs from '../ProductDetailTabs/ProductDetailTabs'
import ProductDetailTabsPanel from '../ProductDetailTabsPanel/ProductDetailTabsPanel'

const ProductDetailTabsSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log('newValue', newValue)
    setActiveTab(newValue)
  }

  return (
    <>
      <div className='w-fit'>
        <ProductDetailTabs activeTab={activeTab} handleChange={handleChange} />
      </div>

      <div className='mt-[48px] md:mt-[60px] w-[90%]'>
        <ProductDetailTabsPanel activeTab={activeTab} />
      </div>
    </>
  )
}

export default ProductDetailTabsSection
