import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { GalleryProductsData } from 'Constants/constants'
import CustomPagination from '../CustomPagination/CustomPagination'
import useCatalogItems from 'hooks/Products/useCatalogItems'
import Spinner from '../Spinner'
const BakerAvailableProducts = () => {
  //items per page to display
  const [itemsPerPage, setItemsPerPage] = useState<number>(6)

  //total number of pages for the paginator
  const [pageCount, setPageCount] = useState<number>(0)

  //we are using this state to display the current page, which differs from the offset value
  const [page, setCurrentPage] = useState(1)

  //for the offset filter
  const [offset, setOffset] = useState(0)

  const handlePageClick = (pageNum: number) => {
    setOffset((pageNum - 1) * itemsPerPage)
    setCurrentPage(pageNum)
  }

  const [catalogItems, loadingItems, refetchItems, totalCount] = useCatalogItems({
    shopIds: ['cmVhY3Rpb24vc2hvcDpkU3VYTGIzRHg3TXNvV29nSg=='],
    first: itemsPerPage,
    offset,
    sortBy: 'updatedAt',
    sortOrder: 'desc',
  })

  useEffect(() => {
    let page = Math.ceil(totalCount / itemsPerPage)

    setPageCount(page)
  }, [totalCount])

  console.log('coming to baker available products')
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[90vw] flex flex-wrap justify-start gap-x-[2%] gap-y-[8px] md:gap-y-[24px]'>
        {loadingItems ? (
          <div className='w-full flex flex-col items-center'>
            <Spinner />
          </div>
        ) : (
          <>
            {catalogItems?.map((item: any) => {
              const { product } = item?.node
              const { pricing } = product.variants[0]

              return (
                <ProductCard
                  key={item.id}
                  image={product?.media[0]?.URLs?.thumbnail}
                  title={product?.title}
                  description={product?.description}
                  category={item?.category}
                  oldPrice={pricing[0].compareAtPrice?.amount}
                  newPrice={pricing[0].price}
                />
              )
            })}
          </>
        )}
      </div>

      <div className='w-[90vw] flex justify-center mt-[24px] md:mt-[48px]'>
        {totalCount && ( // Conditional rendering for the paginator
          <div className='w-[90vw] flex justify-center mt-[24px] md:mt-[48px]'>
            <CustomPagination
              count={pageCount}
              boundaryCount={1}
              siblingCount={1}
              page={page}
              onChange={handlePageClick}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default BakerAvailableProducts
