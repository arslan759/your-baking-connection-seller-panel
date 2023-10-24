import React from 'react'
import NavBar from '../NavBar'
import OrderDetailCard from '../OrderDetailCard/OrderDetailCard'

interface OrderDetailProps {
  orderId: string
}

const OrderDetail = ({ orderId }: OrderDetailProps) => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        <OrderDetailCard orderId={orderId} />
      </div>
    </div>
  )
}

export default OrderDetail
