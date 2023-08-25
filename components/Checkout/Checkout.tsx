import React from 'react'
import NavBar from '../NavBar/NavBar'
import OrderCard from '../OrderCard/OrderCard'
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails'

const Checkout = () => {
  return (
    <div>
      <NavBar />

      <div className='w-full mt-[24px] md:mt-[100px] flex justify-center'>
        <div className='w-[90vw] md:[95vw] flex flex-col gap-y-[24px]'>
          <div className='w-full flex flex-col lg:flex-row items-start lg:justify-between gap-y-[24px]'>
            <div className='w-full lg:w-[48%]'>
              <DeliveryDetails />
            </div>

            <div className='w-full lg:w-[48%]'>
              <OrderCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
