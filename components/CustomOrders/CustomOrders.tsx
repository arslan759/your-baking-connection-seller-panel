import React from 'react'
import NavBar from '../NavBar/NavBar'
import CustomOrdersCard from '../CustomOrdersCard'
import { withApollo } from 'lib/apollo/withApollo'

const CustomOrders = () => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        <CustomOrdersCard />
      </div>
    </div>
  )
}

export default withApollo()(CustomOrders)
