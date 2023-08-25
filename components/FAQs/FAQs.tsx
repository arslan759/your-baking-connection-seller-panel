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

      <div className={`${styles.maskedDiv} flex items-start justify-end  `}>
        <div className='w-[58%]  h-[auto] md:h-[auto] flex items-start justify-center'>
          <CustomAccordion />
        </div>
      </div>
    </section>
  )
}

export default FAQs
