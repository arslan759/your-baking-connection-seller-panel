import React from 'react'
import NavBar from '../NavBar/NavBar'
import NotificationsCard from '../NotificationsCard'

const Notifications = () => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        <NotificationsCard />
      </div>
    </div>
  )
}

export default Notifications
