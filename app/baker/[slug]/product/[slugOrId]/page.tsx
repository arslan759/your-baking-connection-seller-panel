'use client'

import ProductDetail from '@/components/ProductDetail/ProductDetail'

export default function ProductDetailPage({ params }: { params: { slugOrId: string } }) {
  const { slugOrId } = params

  console.log('params are ', slugOrId)
  return (
    <>
      <div className=''>
        <ProductDetail slug={slugOrId} />
      </div>
    </>
  )
}
