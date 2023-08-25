import { Tab, Tabs } from '@mui/material'
import { profileNavigation } from 'Constants/constants'
import React from 'react'
import { ProfileNavigationMobileProps } from 'types'

const ProfileNavigationMobile = ({ activeTab, handleChange }: ProfileNavigationMobileProps) => {
  return (
    <Tabs
      value={activeTab}
      variant='scrollable'
      onChange={handleChange}
      scrollButtons
      allowScrollButtonsMobile
      aria-label='scrollable prevent tabs example'
      sx={{
        backgroundColor: '#FCFCFC',
        borderBottom: '1px solid #BDBDBD',

        '& .MuiTabs-indicator': {
          backgroundColor: '#7DDEC1',
          height: '5px',
        },

        '& .MuiTab-root': {
          minWidth: 'unset',
          width: 'unset',
          maxWidth: 'unset',
          padding: '0px',
          marginRight: '12px',
          color: '#090909',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: 'normal',
          fontFamily: 'Josefin Sans',
          textTransform: 'capitalize',
        },

        '& .Mui-selected': {
          color: '#7DDEC1 !important',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: 'normal',
          fontFamily: 'Josefin Sans',
          textTransform: 'capitalize',
        },

        '& .MuiTabs-scrollButtons': {
          color: '#090909',
          width: '30px',
        },

        '& .MuiTabs-scrollButtons.Mui-disabled': {
          color: '#BDBDBD',
        },
      }}
    >
      {profileNavigation.map((item, index) => (
        <Tab key={index} label={item.title} />
      ))}
    </Tabs>
  )
}

export default ProfileNavigationMobile
