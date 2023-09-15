'use client'

import ProductDetail from '@/components/ProductDetail/ProductDetail'

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  console.log('params are ', slug)
  return (
    <>
      <div className=''>
        <ProductDetail slug={slug} />
      </div>
    </>
  )
}
