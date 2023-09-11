import React, { useState } from 'react'
import CustomOrders from '../CustomOrders/CustomOrders'
import BakerForm from '../BakerForm/BakerForm'
import BakerNavigation from '../BakerNavigation/BakerNavigation'
import BakerTabsPanel from '../BakerTabsPanel/BakerTabsPanel'

interface BakerProductsProps {
  slug: string
}

const BakerProducts = ({ slug }: BakerProductsProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log('newValue', newValue)
    setActiveTab(newValue)
  }

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[90vw] md:w-[70vw] flex flex-col items-center'>
        {/* <div className='w-[100%] md:w-[60%]'>
          <Typography
            variant='h1'
            sx={{
              textAlign: 'center',
              color: '#7DDEC1',
              fontSize: '18px !important',
              fontWeight: '700',
              lineHeight: 'normal',
              fontFamily: 'Open Sans',
              letterSpacing: '1px',
              textTransform: 'capitalize',
              '@media (max-width:767px)': {
                fontSize: '14px',
              },
            }}
          >{`Looking for a specific type of treat? Filter our available products here!`}</Typography>
        </div> */}

        <div className='w-[70%] md:w-full mt-[42px]  flex justify-center'>
          <BakerForm />
        </div>
      </div>

      <div className='w-[90vw] mt-[48px] flex justify-center'>
        <BakerNavigation activeTab={activeTab} handleChange={handleChange} />
      </div>

      <div className='w-full mt-[24px] md:mt-[50px]'>
        <BakerTabsPanel activeTab={activeTab} slug={slug} />
      </div>

      {/* <div className='w-[90vw] mt-[48px] md:mt-[100px]'>
        <CustomOrders />
      </div> */}
    </div>
  )
}

export default BakerProducts
