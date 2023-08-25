import Sectionheading from '../SectionHeading/Sectionheading'
import SectionSubHeading from '../SectionSubHeading/SectionSubHeading'
import { galleryImages } from 'Constants/constants'
import { PrimaryBtn } from '../Buttons'

const OurGallery = () => {
  return (
    <section className='w-full flex flex-col items-center'>
      <div className='w-[87vw] md:w-[60vw] flex flex-col items-center mt-[48px] md:mt-[100px]'>
        <Sectionheading title='Our Gallery' />
        <SectionSubHeading subHeading='See our inspiration gallery' />
      </div>

      {/* Mobile View */}
      <div className='block md:hidden'>
        <div className='mt-[40px] md:mt-[60px] max-h-[430px] flex flex-col flex-wrap w-[100vw] md:w-full'>
          {galleryImages.slice(0, 3).map((image, index) => {
            return (
              <img
                key={index}
                src={image.url}
                alt='gallery-image'
                className={`w-[50%] md:w-[23%] ${
                  index === 2 ? 'h-[430px]' : 'h-[215px]'
                } object-cover object-center`}
              />
            )
          })}
        </div>
      </div>

      {/* Desktop View */}
      <div className='hidden md:block'>
        <div className='mt-[40px] md:mt-[60px] max-h-[638px] flex flex-col flex-wrap items-center gap-[20px] w-[100vw] md:w-[95vw]'>
          {galleryImages.map((image, index) => {
            return (
              <img
                key={index}
                src={image.url}
                alt='gallery-image'
                className={`w-[50%] md:w-[23%] ${
                  index === 2 || index === 5 ? 'h-[633px]' : 'h-[306px]'
                } object-cover object-center rounded-[12px]`}
              />
            )
          })}
        </div>
      </div>

      <div className='mt-[24px] md:mt-[60px] w-[160px] h-[45px] md:h-[50px] rounded-full overflow-hidden'>
        <PrimaryBtn text='see More' />
      </div>
    </section>
  )
}

export default OurGallery
