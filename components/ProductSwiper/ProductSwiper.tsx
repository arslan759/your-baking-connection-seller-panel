// @ts-ignore

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { useState } from 'react'
import { Typography } from '@mui/material'
import { ProductSwiperProps } from 'types'

const ProductSwiper = ({ images }: ProductSwiperProps) => {
  const [selected, setSelected] = useState(1) // selected index for pagination

  const handleSlideChange = (swiper: SwiperCore): void => {
    setSelected(swiper.realIndex + 1)
    console.log('selected slide is', swiper.realIndex + 1)
  }

  return (
    <div>
      <Swiper
        // @ts-ignore
        modules={[Pagination]}
        rewind={true}
        pagination={{
          clickable: false,
        }}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => console.log(swiper)}
        className='gallery-swiper'
      >
        {images?.map((background, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className='w-full h-[375px] md:h-[471px]'
                style={{
                  background: `url(${background?.URLs?.large}), lightgray 50% / cover no-repeat`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* <img src={background?.url} alt={background?.title} className=' object-cover' /> */}
                <div className='hidden lg:block absolute left-[52px] bottom-[34px]'>
                  <Typography
                    sx={{
                      // color: '#6C6C6C',
                      color: '#fff',
                      fontSize: '18px !important',
                      fontWeight: '400',
                      lineHeight: 'normal',
                      fontFamily: 'Open Sans',
                      textTransform: 'capitalize',
                    }}
                  >
                    {selected} / {images?.length}
                  </Typography>
                  <p className='text-center z-20 text-red-500'></p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ProductSwiper
