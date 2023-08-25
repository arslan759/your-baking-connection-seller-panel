import React from 'react'
import GalleryProductCard from '../GalleryProductCard/GalleryProductCard'
import { GalleryProductsData } from 'Constants/constants'
import CustomPagination from '../CustomPagination/CustomPagination'

const GalleryAvailableProducts = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[90vw] flex flex-wrap justify-start gap-x-[2%] gap-y-[8px] md:gap-y-[24px]'>
        {GalleryProductsData.map((item) => {
          return (
            <GalleryProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
            />
          )
        })}
      </div>

      <div className='w-[90vw] flex justify-center mt-[24px] md:mt-[48px]'>
        <CustomPagination />
      </div>
    </div>
  )
}

export default GalleryAvailableProducts
