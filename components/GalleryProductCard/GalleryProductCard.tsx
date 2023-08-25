import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GalleryProductCardProps } from 'types'
import GalleryProductCardMenu from '../GalleryProductCardMenu/GalleryProductCardMenu'
import { PrimaryBtn } from '../Buttons'

const GalleryProductCard = ({
  image,
  title,
  description,
  category,
  oldPrice,
  newPrice,
  width,
  mdWidth,
}: GalleryProductCardProps) => {
  const [isHovering, setIsHovering] = useState(false) // handle mouse enter and leave for more details on desktop view
  const [isDetailsVisible, setIsDetailsVisible] = useState(false) // Toggle More Details for mobile view

  // handle mouse enter and leave
  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  // More Details for mobile
  const handleToggleDetails = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setIsDetailsVisible(!isDetailsVisible)
    setIsHovering(false)
    // console.log('toggle details', isDetailsVisible)
  }

  // handle favourite click
  const handleFavouriteClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation()
    console.log('favourite clicked')
  }

  // handle more details click
  const handleMoreDetailsClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    console.log('more details clicked')
  }

  // console.log('isDetailsVisible', isDetailsVisible)
  // console.log('isHovering', isHovering)

  console.log('mdWidth', mdWidth)
  console.log('width', width)

  return (
    <Card
      elevation={0}
      sx={{
        width: mdWidth ? mdWidth : '32%',
        border: '0.5px solid #888',
        borderRadius: '5px',
        paddingBottom: '6px',

        '@media (max-width:767px)': {
          width: width ? width : '49%',
        },
        height: 'auto',
      }}
    >
      <div className='relative'>
        <CardMedia
          sx={{
            bordeRadius: '5px 5px 0px 0px',
            background:
              isHovering || isDetailsVisible
                ? `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${image}), lightgray 50% / cover no-repeat`
                : `url(${image}), lightgray 50% / cover no-repeat`,
            height: '365px',
            width: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            '@media (max-width:767px)': {
              height: '195px',
            },
          }}
          component='div'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleToggleDetails}
          // image={image}
          // alt={title}
        />
        <img
          onClick={handleFavouriteClick}
          src='/Images/favourite.svg'
          alt='heart'
          className='absolute top-4 right-4 cursor-pointer'
        />
        {(isHovering || isDetailsVisible) && (
          <div
            onMouseEnter={handleMouseEnter}
            className={`w-[55%] md:w-[35%] ${isHovering ? 'none' : 'block'}`}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <PrimaryBtn text='More details' handleClick={handleMoreDetailsClick} />
          </div>
        )}

        <GalleryProductCardMenu />
      </div>
      <CardContent
        sx={{
          '&.MuiCardContent-root': {
            paddingTop: '12px',
            paddingBottom: '0px',
            paddingLeft: '18px',
            paddingRight: '10px',
            '@media (max-width:767px)': {
              paddingTop: '8px',
              paddingLeft: '12px',
              paddingRight: '8px',
            },
          },
        }}
      >
        <Typography
          sx={{
            color: '#888',
            fontSize: '12px !important',
            fontWeight: '400',
            lineHeight: 'normal',
            fontFamily: 'Open Sans',
            textTransform: 'capitalize',
          }}
        >
          {category}
        </Typography>
        <Typography
          sx={{
            color: '#090909',
            marginTop: '12px',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: 'normal',
            fontFamily: 'Open Sans',
            textTransform: 'uppercase',
            '@media (max-width:767px)': {
              marginTop: '8px',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: '#090909',
            marginTop: '12px',
            fontSize: '12px !important',
            fontWeight: '400',
            lineHeight: 'normal',
            fontFamily: 'Open Sans',
            '@media (max-width:767px)': {
              marginTop: '8px',
            },
          }}
        >
          {description}
        </Typography>
        <div className='flex gap-x-[14px] items-center'>
          <Typography
            sx={{
              color: '#888',
              fontSize: '12px !important',
              fontWeight: '400',
              lineHeight: 'normal',
              fontFamily: 'Open Sans',
              textDecoration: 'line-through',
            }}
          >
            {parseInt(oldPrice)}$
          </Typography>
          <Typography
            sx={{
              color: '#090909',
              fontSize: '18px !important',
              fontWeight: '700',
              lineHeight: 'normal',
              fontFamily: 'Open Sans',
            }}
          >
            {parseInt(newPrice)}$
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default GalleryProductCard
