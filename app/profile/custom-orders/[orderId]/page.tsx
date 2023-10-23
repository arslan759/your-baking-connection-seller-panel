'use client'

import CustomOrderDetail from '@/components/CustomOrderDetail/CustomOrderDetail'

export default function CustomOrderDetailPage({ params }: { params: { orderId: string } }) {
  let { orderId } = params

  console.log('order id is ', orderId)
  return (
    <>
      <CustomOrderDetail orderId={orderId} />
    </>
  )
}
