'use client'

import OrderDetail from '@/components/OrderDetail'

export default function CustomOrderDetailPage({ params }: { params: { orderId: string } }) {
  let { orderId } = params

  console.log('order id is ', orderId)
  return (
    <>
      <OrderDetail orderId={orderId} />
    </>
  )
}
