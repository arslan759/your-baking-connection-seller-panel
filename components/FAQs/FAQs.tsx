import React from 'react'
import Sectionheading from '../SectionHeading/Sectionheading'
import SectionSubHeading from '../SectionSubHeading/SectionSubHeading'
import styles from './styles.module.css'
import CustomAccordion from '../CustomAccordion/CustomAccordion'

const FAQs = () => {
  return (
    <section className='w-full flex flex-col items-center'>
      <div className='w-[87vw] md:w-[60vw] flex flex-col items-center mt-[48px] md:mt-[100px]'>
        <Sectionheading title={`FAQ's`} />

        <SectionSubHeading subHeading={`Frequently asked questions`} />
      </div>

      <div className={`${styles.maskedDiv} flex items-center justify-start `}>
        <div className='w-[42%] h-full'>
          <img
            src='https://www.snackandbakery.com/ext/resources/images/bakeryproducts.jpg?1432238179'
            alt='image'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='w-[58%] h-[auto] flex items-center justify-center mt-[-25px] px-[20px] md:px-[80px]'>
          <CustomAccordion />
        </div>
      </div>
    </section>
  )
}

export default FAQs
