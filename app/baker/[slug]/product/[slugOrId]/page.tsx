'use client'

import ProductDetail from '@/components/ProductDetail/ProductDetail'

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string; slugOrId: string }
}) {
  const { slug, slugOrId } = params

  console.log('params in product ', params)
  const Bakerslug = decodeURIComponent(slug)

  console.log('baker slug in product ', Bakerslug)
  return (
    <>
      <div className=''>
        <ProductDetail slug={slugOrId} shopId={Bakerslug} />
      </div>
    </>
  )
}
