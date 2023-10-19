import React from 'react'

interface OrderDetailProps {
  orderId: string
}

const OrderDetail = ({ orderId }: OrderDetailProps) => {
  return <div>OrderDetail with orderId is {orderId}</div>
}

export default OrderDetail
