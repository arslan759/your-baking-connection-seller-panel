import React, { useState, useEffect, ChangeEvent } from 'react'
import { CircularProgress, Typography } from '@mui/material'
import useFileUpload from 'hooks/fileUpload/useFileUpload'

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

import { AddBakerProductImagesProps } from 'types'

const AddBakerProductImages = ({ productMedia, setProductMedia }: AddBakerProductImagesProps) => {
  const [imageUploadCounter, setImageUploadCounter] = useState<number>(0)
  const [images, setImages] = useState<any[]>([])
  const [imageLoading, setImageLoading] = useState([true, true, true, true, true])

  useEffect(() => {
    const updatedLoadingArray = [...imageLoading]
    updatedLoadingArray[productMedia?.length - 1] = false
    setImageUploadCounter(productMedia?.length)
    setImageLoading(updatedLoadingArray)
  }, [productMedia])

  const [uploadFile, loadingUploadFile] = useFileUpload()

  const [uploadError, setUploadError] = useState<string>('')

  async function handleFileUpload(e: ChangeEvent<HTMLInputElement>) {
    try {
      setUploadError('')
      //@ts-ignore
      const image = e.target.files[0]

      console.log('image is ', image)

      console.log('picture is ', image?.name)

      if (!image) return

      if (imageUploadCounter >= 5) {
        return
      }

      if (image.size > 1024 * 1024 * 1) {
        setUploadError('Picture size should be less than 1MB')
        return
      }

      if (image.type !== 'image/jpeg' && image.type !== 'image/png') {
        setUploadError('Selected file must be an image')
        return
      }

      setImages([
        ...images,
        {
          image: URL.createObjectURL(image),
          loading: true,
          name: image.name,
          size: image.size / (1024 * 1024),
        },
      ])

      //@ts-ignore
      const uploadRes = await uploadFile(image, '/product-images')
      if (uploadRes.result.status) {
        console.log('setting product media', uploadRes.result.data[0].url)
        setProductMedia(uploadRes.result.data[0].url)
      }

      setUploadError('')
    } catch (err: any) {
      setUploadError(err?.message)
    }
  }

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
          {productMedia.length > 0 && (
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
              {imageUploadCounter} / 5
            </Typography>
          )}
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

            <input type='file' onChange={(e) => handleFileUpload(e)} />

            <span style={{ color: 'red' }}>{uploadError}</span>
          </Typography>
        </div>
        <div className='w-full md:w-[48%] flex flex-col gap-y-[12px]'>
          {images?.map((image: any, index: any) => (
            <div
              key={index}
              className={`rounded-[4px] flex gap-x-[10px] py-[10px] px-[16px] ${
                !imageLoading[index] ? 'bg-[#000]/[0.80]' : 'bg-[#EAEAEA]'
              }`}
            >
              <img
                src={image?.image}
                alt={image?.name}
                className='w-[38px] h-[44px] object-cover rounded-[2px]'
              />
              <div className='w-full flex justify-between'>
                <div className='h-full'>
                  <Typography
                    sx={{
                      color: !imageLoading[index] ? '#fff' : '212529',
                      fontSize: '16px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '400 !important',
                      lineHeight: 'normal',
                      '@media (max-width: 767px)': {
                        fontSize: '12px !important',
                      },
                    }}
                  >
                    {image?.name}
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
                    {image?.size?.toFixed(2)} MB
                  </Typography>
                </div>
                <div className='h-full flex items-center'>
                  {!imageLoading[index] ? (
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
              {imageUploadCounter}/5
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBakerProductImages
