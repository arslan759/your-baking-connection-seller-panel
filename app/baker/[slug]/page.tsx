'use client'
import Baker from '@/components/Baker'

export default function BakerPage({ params }: { params: { slug: string } }) {
  let { slug } = params

  slug = decodeURIComponent(slug)

  return (
    <>
      <div className=''>
        <Baker slug={slug} />
      </div>
    </>
  )
}
