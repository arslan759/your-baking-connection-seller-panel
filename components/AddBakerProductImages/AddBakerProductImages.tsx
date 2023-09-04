import { CircularProgress, Typography } from '@mui/material'
import React from 'react'

const dummyImages = [
  {
    id: 1,
    name: 'image1',
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    size: '1.5mb',
    status: 'uploaded',
  },
  {
    id: 2,
    name: 'image2',
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    size: '2.5mb',
    status: 'uploaded',
  },
  {
    id: 3,
    name: 'image3',
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    size: '1.1mb',
    status: 'uploaded',
  },
  {
    id: 4,
    name: 'image4',
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    size: '594kb',
    status: 'uploaded',
  },
  {
    id: 5,
    name: 'image5',
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000',
    size: '1.5mb',
    status: 'loading',
  },
]

const AddBakerProductImages = () => {
  return (
    <div className='w-full'>
      <Typography
        sx={{
          color: '#212529',
          fontSize: '12px !important',
          '@media (max-width: 767px)': {
            fontSize: '12px !important',
          },
          '::after': {
            content: "'*'",
            marginLeft: '5px',
            color: 'red',
          },
        }}
      >
        Product images
      </Typography>

      <div
        className='w-full flex flex-col md:flex-row md:justify-between gap-y-[24px]'
        style={{
          borderRadius: '6px',
          marginTop: '8px',
          padding: '32px',
          width: '100%',
          backgroundColor: '#fff',
          boxShadow: '2px 2px 22px 0px rgba(0, 0, 0, 0.20)',
        }}
      >
        <div className='w-full block md:hidden'>
          <Typography
            sx={{
              color: '#212529',
              fontFamily: 'Open Sans',
              fontSize: '16px !important',
              fontWeight: '600 !important',
              lineHeight: 'normal',
              textAlign: 'end',
            }}
          >
            1/5
          </Typography>
        </div>
        <div className='w-full flex flex-col items-center justify-center md:w-[48%] h-[225px] p-[8px] border-dashed rounded-[4px] border-[0.5px] border-[#888]'>
          <Typography
            sx={{
              fontSize: '14px !important',
              fontFamily: 'Open Sans',
              fontWeight: '400 !important',
              lineHeight: 'normal',
              color: '#090909',
              letterSpacing: '0.5px !important',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <img src='/Images/photo-icon.svg' alt='photo-icon' className='w-[24px] h-[24px]' />
            <span>
              Drag and drop or{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                browse
              </span>{' '}
            </span>
          </Typography>
        </div>
        <div className='w-full md:w-[48%] flex flex-col gap-y-[12px]'>
          {dummyImages.map((image, index) => (
            <div
              key={index}
              className={`rounded-[4px] flex gap-x-[10px] py-[10px] px-[16px] ${
                image.status === 'uploaded' ? 'bg-[#000]/[0.80]' : 'bg-[#EAEAEA]'
              }`}
            >
              <img
                src={image.image}
                alt={image.name}
                className='w-[38px] h-[44px] object-cover rounded-[2px]'
              />
              <div className='w-full flex justify-between'>
                <div className='h-full'>
                  <Typography
                    sx={{
                      color: image.status === 'uploaded' ? '#fff' : '212529',
                      fontSize: '16px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '400 !important',
                      lineHeight: 'normal',
                      '@media (max-width: 767px)': {
                        fontSize: '12px !important',
                      },
                    }}
                  >
                    {image.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#747474',
                      fontSize: '14px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '400 !important',
                      lineHeight: 'normal',
                      '@media (max-width: 767px)': {
                        fontSize: '12px !important',
                      },
                    }}
                  >
                    {image.size}
                  </Typography>
                </div>
                <div className='h-full flex items-center'>
                  {image.status === 'uploaded' ? (
                    <img
                      src='/Images/list-icon.svg'
                      alt='check-icon'
                      className='h-[20px] w-[20px]'
                    />
                  ) : (
                    <CircularProgress
                      sx={{
                        color: '#7DDEC1',
                        height: '20px !important',
                        width: '20px !important',
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className='w-full hidden md:block'>
            <Typography
              sx={{
                color: '#212529',
                fontFamily: 'Open Sans',
                fontSize: '16px !important',
                fontWeight: '600 !important',
                lineHeight: 'normal',
                textAlign: 'end',
              }}
            >
              1/5
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBakerProductImages
