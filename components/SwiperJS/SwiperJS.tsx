// @ts-ignore
// Import Swiper React components
// @ts-ignore
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { HomePageBackgrounds } from 'Constants/constants'
import { Typography } from '@mui/material'
import { PrimaryBtn } from '../Buttons'

const SwiperJS = () => {
  return (
    <Swiper
      // @ts-ignore
      modules={[Pagination]}
      rewind={true}
      pagination={{ clickable: true }}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='background-swiper'
    >
      {HomePageBackgrounds.map((background, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              style={{
                background: `url(${background?.url})`,
                backgroundSize: 'cover',
                backgroundPositionX: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              className={`w-full h-[630px] md:h-[730px] flex justify-center md:justify-start pb-[83px] md:pb-[112px]`}
            >
              <div className='w-[90%] md:w-[55%] h-[autox] md:mt-[108px] md:ml-[60px] flex flex-col justify-center items-center md:items-start'>
                <Typography
                  sx={{
                    fontSize: '96px',
                    fontFamily: 'Josefin Sans',
                    textTransform: 'uppercase',
                    fontWeight: '800',
                    color: '#000',
                    textAlign: 'left',
                    '@media (max-width: 768px)': {
                      fontSize: '48px',
                      textAlign: 'center !important',
                    },
                  }}
                  variant='h3'
                  className='mt-[100px]'
                >
                  {background?.title}
                </Typography>

                <div className='w-full md:w-[80%]'>
                  <Typography
                    sx={{
                      fontSize: '24px',
                      fontFamily: 'Open Sans',
                      fontWeight: '400',
                      color: '#000',
                      textAlign: 'left',
                      '@media (max-width: 768px)': {
                        textAlign: 'center !important',
                      },
                    }}
                    variant='h3'
                    className='mt-[24px] md:mt-[36px]'
                  >
                    {background?.subTitle}
                  </Typography>
                </div>

                <div className='mt-[24px] md:mt-[36px] w-[172px] md:w-[209px] h-[50px] rounded-full overflow-hidden'>
                  <PrimaryBtn text='get started now' />
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
      {/* <SwiperSlide>
        
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-[300px] w-full bg-primary'>slide 2</div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='h-[300px] w-full bg-primary'>slide 3</div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='h-[300px] w-full bg-primary'>slide 4</div>
      </SwiperSlide> */}
    </Swiper>
  )
}

export default SwiperJS
