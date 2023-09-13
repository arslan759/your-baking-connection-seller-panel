import React, { useState, useContext } from 'react'
import { BakerTabsPanelProps } from 'types'
import ClientReviewSwiper from '../ClientReviewSwiper/ClientReviewSwiper'
import BakerNoAvailableProducts from '../BakerNoAvailableProducts/BakerNoAvailableProducts'
import BakerAvailableProducts from '../BakerAvailableProducts/BakerAvailableProducts'
import useStores from 'hooks/useStores'
import useCatalogItems from 'hooks/Products/useCatalogItems'
import { withApollo } from 'lib/apollo/withApollo'

const BakerTabsPanel = ({ activeTab, slug, fetchTotalProducts }: BakerTabsPanelProps) => {
  // const [products, setProducts] = useState(0)

  //@ts-ignore
  const { uiStore } = useStores()

  const { totalAvailableProducts } = uiStore

  console.log('total Available Products', totalAvailableProducts)

  const [, , , totalCount] = useCatalogItems({
    shopIds: [slug],
  })
  console.log('total count is ', totalCount)

  fetchTotalProducts(totalCount)

  return (
    <div>
      {activeTab == 0 &&
        (totalCount !== 0 ? <BakerAvailableProducts /> : <BakerNoAvailableProducts />)}
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

export default withApollo()(BakerTabsPanel)
