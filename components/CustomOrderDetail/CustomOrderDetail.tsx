import React from 'react'
import NavBar from '../NavBar'
import CustomOrderDetailCard from '../CustomOrderDetailCard'

interface CustomOrderDetailProps {
  orderId: string
}

const CustomOrderDetail = ({ orderId }: CustomOrderDetailProps) => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        <CustomOrderDetailCard orderId={orderId} />
      </div>
    </div>
  )
}

export default CustomOrderDetail
