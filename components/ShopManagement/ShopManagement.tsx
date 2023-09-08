import React from 'react'
import NavBar from '../NavBar/NavBar'
import ShopManagementCard from '../ShopManagementCard/ShopManagementCard'

const ShopManagement = () => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        <ShopManagementCard />
      </div>
    </div>
  )
}

export default ShopManagement
