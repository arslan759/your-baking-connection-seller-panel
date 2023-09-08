import React from 'react'
import NavBar from '../NavBar/NavBar'
import OrderManagementCard from '../OrderManagementCard'

const OrderManagement = () => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        <OrderManagementCard />
      </div>
    </div>
  )
}

export default OrderManagement
