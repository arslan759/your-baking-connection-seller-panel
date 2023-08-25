// @ts-ignore
import React from 'react'
import ClientReviewCard from '../ClientReviewCard/ClientReviewCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

// import required modules
import { FreeMode, Navigation } from 'swiper/modules'
import { ReviewCardsData } from 'Constants/constants'

const ClientReviewSwiper = () => {
  const swiper = useSwiper()

  const swiperNextRef = React.useRef<HTMLDivElement | null>(null)
  const swiperPrevRef = React.useRef<HTMLDivElement | null>(null)

  const handleNextSlide = () => {
    swiperNextRef?.current?.click()
    console.log(swiperNextRef.current)
  }

  const handlePrevSlide = () => {
    swiperPrevRef?.current?.click()
    console.log('prev')
  }

  return (
    <div className='flex flex-col lg:flex-row items-center'>
      {/* Desktop View Prev Button */}
      <div className='hidden  mt-[100px] lg:block'>
        <img
          src='/Images/review-left.svg'
          alt='right-btn'
          onClick={handlePrevSlide}
          className='cursor-pointer h-[50px] w-[50px]'
        />
      </div>

      {/* Reviews Swiper */}
      <Swiper
        // @ts-ignore
        modules={[FreeMode, Navigation]}
        freeMode={true}
        rewind={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        slidesPerView={2}
        // spaceBetween={1}
        // autoHeight={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 1,
            direction: 'vertical',
          },

          1024: {
            slidesPerView: 2,
            direction: 'horizontal',
            spaceBetween: 1,
          },
        }}
      >
        {ReviewCardsData.map((review, index) => {
          const { name, content, image } = review
          return (
            <SwiperSlide key={index}>
              <ClientReviewCard
                color={index % 2 === 0 ? '#FFD9E4' : '#7DDEC1'}
                name={name}
                review={content}
                image={image}
                index={index}
                key={index}
              />
            </SwiperSlide>
          )
        })}

        <div
          className='swiper-button-next swiper-button-centered'
          ref={swiperNextRef}
          onClick={() => swiper?.slideNext()}
        />
        <div
          className='swiper-button-prev swiper-button-centered'
          ref={swiperPrevRef}
          onClick={() => swiper?.slidePrev()}
        />
      </Swiper>

      {/* Desktop View Next Button */}
      <div className='hidden mt-[100px] lg:block'>
        <img
          src='/Images/review-right.svg'
          alt='right-btn'
          onClick={handleNextSlide}
          className='cursor-pointer h-[50px] w-[50px]'
        />
      </div>

      {/* Mobile View Navigation Buttons */}
      <div className='flex mt-[20px] gap-x-[100px]'>
        <div className='block lg:hidden'>
          <img
            src='/Images/review-left.svg'
            alt='right-btn'
            onClick={handlePrevSlide}
            className='cursor-pointer h-[40px] w-[40px]'
          />
        </div>
        <div className='block lg:hidden'>
          <img
            src='/Images/review-right.svg'
            alt='right-btn'
            onClick={handleNextSlide}
            className='cursor-pointer h-[40px] w-[40px]'
          />
        </div>
      </div>
    </div>
  )
}

export default ClientReviewSwiper
