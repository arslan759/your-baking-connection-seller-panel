import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/NavBar'
import BakerProducts from '../BakerProducts/BakerProducts'
import BakerWeOffer from '../BakerWeOffer/BakerWeOffer'
import BakerLocation from '../BakerLocation/BakerLocation'
import BakerMainContent from '../BakerMainContent/BakerMainContent'
import BakerSwiper from '../BakerSwiper/BakerSwiper'
import Loader from '@/components/Loader/Loader'

import useBaker from 'hooks/baker/useBaker'

import { withApollo } from 'lib/apollo/withApollo'
import withAuth from 'hocs/withAuth'

interface BakerProps {
  slug: string
}

const Baker = ({ slug }: BakerProps) => {
  const [baker, loadingBaker] = useBaker(slug)

  const [bakerName, setBakerName] = useState<string>()
  const [bakerLogo, setBakerLogo] = useState<string>()
  const [bakerDescription, setBakerDescription] = useState<string>()
  const [categories, setCategories] = useState<string[] | null | undefined>()
  const [featuredImages, setFeaturedImages] = useState<string[] | null>()

  useEffect(() => {
    // console.log('baker is', baker)
    setBakerName(baker?.name)
    setBakerDescription(baker?.description)
    setCategories(baker?.categories)
    setBakerLogo(baker?.shopLogoUrls?.primaryShopLogoUrl)
    setFeaturedImages(baker?.featuredShopImages)
  }, [baker])

  return (
    <>
      {loadingBaker ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <div className='flex flex-col lg:flex-row'>
            <div>
              <div className='mt-[48px] lg:mt-[100px] w-[100vw] lg:w-[50vw]'>
                <BakerSwiper featuredImages={featuredImages} />
              </div>

              {/* Gallery Location Info for Desktop View */}
              <div className='hidden lg:block mt-[-30px]'>
                <BakerLocation />
              </div>
            </div>
            <div className='relative w-[100%] lg:w-[50%] px-[20px] lg:px-[40px]'>
              <BakerMainContent
                bakerLogo={bakerLogo}
                bakerName={bakerName}
                description={bakerDescription}
                slug={slug}
              />

              {/* We Offer section for Desktop View */}
              <div className='mt-[60px] hidden lg:block'>
                <BakerWeOffer categories={categories} />
              </div>
            </div>
            {/* Gallery Location Info for Mobile View */}
            <div className='block lg:hidden overflow-hidden'>
              <BakerLocation />

              {/* We Offer Section for Mobile View */}
              <div className='-mt-[80px]'>
                <BakerWeOffer categories={categories} />
              </div>
            </div>
          </div>

          <div className='mt-[48px]'>
            <BakerProducts slug={slug} />
          </div>
        </div>
      )}
    </>
  )
}

export default withApollo()(withAuth(Baker))
