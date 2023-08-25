import { Typography } from '@mui/material'
import { profileNavigation } from 'Constants/constants'
import React from 'react'
import { SidebarProps } from 'types'

const Sidebar = ({ setActiveTab, activeTab }: SidebarProps) => {
  return (
    <div className='w-[330px] min-h-[860px] bg-[#FCFCFC] flex flex-col'>
      <div
        className='h-[89px] flex justify-center items-center'
        style={{
          borderBottom: '1px solid #BDBDBD',
        }}
      >
        <Typography
          sx={{
            color: '#090909',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: 'normal',
            fontFamily: 'Josefin Sans',
            textTransform: 'capitalize',
          }}
        >
          my account
        </Typography>
      </div>

      <div className=''>
        {profileNavigation.map((item, index) => (
          <div
            key={index}
            className='w-[100%] h-[60px] flex justify-center items-center py-[18px]  cursor-pointer'
            style={{
              backgroundColor: activeTab === index ? '#7DDEC1' : '',
            }}
            onClick={() => setActiveTab(index)}
          >
            <div className='w-[80%] flex gap-[24px]'>
              <div className=''>
                <img src={item.icon} alt='user-icon' className='w-[21px] h-[24px]' />
              </div>
              <div className='flex items-center'>
                <Typography
                  sx={{
                    color: '#090909',
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: 'normal',
                    fontFamily: 'Josefin Sans',
                    textTransform: 'capitalize',
                  }}
                >
                  {item.title}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
