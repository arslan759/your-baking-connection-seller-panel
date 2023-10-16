import React from 'react'
import NavBar from '../NavBar/NavBar'
import { withApollo } from 'lib/apollo/withApollo'
// import PurchaseHistoryCard from '../PurchaseHistoryCard/PurchaseHistoryCard'

const Subscription = () => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        {/* <PurchaseHistoryCard /> */}
        Subscription
      </div>
    </div>
  )
}

export default withApollo()(Subscription)
