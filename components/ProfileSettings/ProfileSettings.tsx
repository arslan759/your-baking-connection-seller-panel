'use client'

import Navbar from '@/components/NavBar/NavBar'
import ProfileNavbar from '@/components/ProfiileNavBar/ProfileNavBar'
import ProfileNavigationMobile from '@/components/ProfileNavigationMobile/ProfileNavigationMobile'
import Sidebar from '@/components/Sidebar/Sidebar'
import { useState } from 'react'
import ProfileTabsPanel from '../ProfileTabsPanel/ProfileTabsPanel'

export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  return (
    <>
      {/* Mobile View Navigation*/}
      <div className='block min-[951px]:hidden'>
        <Navbar />
        <div>
          <ProfileNavigationMobile activeTab={activeTab} handleChange={handleChange} />
          <div>
            <ProfileTabsPanel activeTab={activeTab} />
          </div>
        </div>
      </div>

      {/* Desktop View Navigation */}
      <div className='hidden min-[950px]:flex'>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className='w-full'>
          <div
            className='w-full flex justify-center'
            style={{
              borderBottom: '1px solid #BDBDBD',
            }}
          >
            <ProfileNavbar />
          </div>
          <div>
            <ProfileTabsPanel activeTab={activeTab} />
          </div>
        </div>
      </div>
    </>
  )
}
