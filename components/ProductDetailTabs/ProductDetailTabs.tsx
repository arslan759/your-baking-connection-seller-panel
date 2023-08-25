import { Tab, Tabs, Typography } from '@mui/material'
import { ProductDetailNavigationTabs } from 'Constants/constants'
import React from 'react'
import { ProductDetailTabsProps } from 'types'

const ProductDetailTabs = ({ activeTab, handleChange }: ProductDetailTabsProps) => {
  return (
    <Tabs
      value={activeTab}
      //   variant='scrollable'
      //   scrollButtons={true}
      //   allowScrollButtonsMobile
      onChange={handleChange}
      centered
      aria-label='scrollable prevent tabs example'
      sx={{
        padding: '0px',
        margin: '0px',
        borderBottom: '1px solid rgba(126, 126, 126, 0.40)',

        '& .MuiTabs-indicator': {
          backgroundColor: '#7DDEC1',
          height: '2px',
        },

        '& .MuiTab-root': {
          minWidth: 'unset',
          width: 'unset',
          maxWidth: 'unset',
          padding: '0px',
          marginRight: '112px',
          color: '#888 !important',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: 'normal',
          fontFamily: 'Josefin Sans',
          textTransform: 'capitalize',

          ':last-child': {
            marginRight: '0px',
          },
        },

        '@media (min-width:768px) and (max-width:1023px)': {
          '& .MuiTab-root': {
            marginRight: '42px',
          },
        },

        '@media (max-width:767px)': {
          '& .MuiTab-root': {
            marginRight: '50px',
          },
        },

        // '& .MuiTabs-scrollButtons': {
        //   color: '#090909',
        //   width: '30px',
        //   padding: '0px',
        //   maxWidth: '15px',
        // },

        // '& .MuiTabs-scrollButtons.Mui-disabled': {
        //   color: '#BDBDBD',
        // },

        '& .Mui-selected': {
          color: '#090909 !important',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: 'normal',
          fontFamily: 'Josefin Sans',
          textTransform: 'capitalize',
        },
      }}
    >
      {ProductDetailNavigationTabs.map((item, index) => (
        <Tab
          key={index}
          label={
            <Typography
              sx={{
                // color: '#090909',
                fontFamily: 'Open Sans',
                fontWeight: '600',
                fontSize: '18px',
                lineHeight: '22px',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                '@media (max-width:767px)': {
                  fontSize: '12px',
                },
              }}
            >
              {item.title}
            </Typography>
          }
        />
      ))}
    </Tabs>
  )
}

export default ProductDetailTabs
