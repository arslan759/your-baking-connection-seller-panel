import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ProductCardProps } from 'types'
import GalleryProductCardMenu from '../ProductCardMenu/ProductCardMenu'
import { PrimaryBtn } from '../Buttons'
// import { useRouter } from 'next/navigation'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import MoreDetails from '../MoreDetails'

const ProductCard = ({
  product,
  variants,
  category,
  // image,
  // title,
  // description,
  // category,
  slug,
  // oldPrice,
  // newPrice,
  width,
  mdWidth,
}: // media,
ProductCardProps) => {
  const [isHovering, setIsHovering] = useState(false) // handle mouse enter and leave for more details on desktop view
  const [isDetailsVisible, setIsDetailsVisible] = useState(false) // Toggle More Details for mobile view

  const router = useRouter()
  const pathname = usePathname()
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
  // const handleFavouriteClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
  //   e.stopPropagation()
  //   console.log('favourite clicked')
  // }

  // handle more details click
  const handleMoreDetailsClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()

    // console.log('slug', `/product/${slug}`)

    // router.push(`/product/${product?.slug}`)
    // router.push(`${pathname}/product/${product?.slug}`)
  }

  // console.log('isDetailsVisible', isDetailsVisible)
  // console.log('isHovering', isHovering)

  // console.log('mdWidth', mdWidth)
  // console.log('width', width)

  // slug={product?.slug}
  // image={product?.media[0]?.URLs?.thumbnail}
  // title={product?.title}
  // description={product?.description}
  // category={item?.category}
  // oldPrice={pricing[0].compareAtPrice?.amount}
  // newPrice={pricing[0].price}
  // media={product?.media}

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
                ? `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${product?.media[0]?.URLs?.thumbnail}), lightgray 50% / cover no-repeat`
                : `url(${product?.media[0]?.URLs?.thumbnail}), lightgray 50% / cover no-repeat`,
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
        {/* <img
          onClick={handleFavouriteClick}
          src='/Images/favourite.svg'
          alt='heart'
          className='absolute top-4 right-4 cursor-pointer'
        /> */}
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
            <Link href={`${pathname}/product/${slug}`}>
              <PrimaryBtn text='More details' />
            </Link>
          </div>
        )}

        <GalleryProductCardMenu product={product} variants={variants} category={category} />
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
          {product?.title}
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
          <Link href={`${pathname}/product/${slug}`}>
            <MoreDetails
              lineHeight='normal'
              color='#090909'
              fontFamily='Open Sans'
              fontWeight={400}
              fontSize={12}
              text={product?.description}
              words={100}
            />
          </Link>
        </Typography>
        <div className='flex gap-x-[14px] items-center'>
          {variants?.pricing[0]?.compareAtPrice?.amount ? (
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
              ${parseInt(variants?.pricing[0]?.compareAtPrice?.amount)}
            </Typography>
          ) : null}
          <Typography
            sx={{
              color: '#090909',
              fontSize: '18px !important',
              fontWeight: '700',
              lineHeight: 'normal',
              fontFamily: 'Open Sans',
            }}
          >
            ${parseInt(variants?.pricing[0].price)}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
