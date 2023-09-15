import React, { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'
import EditBakerProductModal from '../EditBakerProductModal'

interface MenuProps {
  product: any
  variants: any
  category: string
}

const ProductCardMenu = ({ product, variants, category }: MenuProps) => {
  const [isEditProduct, setIsEditProduct] = useState(false)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(null)
  }

  const handleIsEditProduct = () => {
    setIsEditProduct(!isEditProduct)
    setAnchorEl(null)
  }

  return (
    <div>
      <img
        src='/Images/more-vertical.svg'
        alt='more'
        className='absolute bottom-4 right-4 cursor-pointer'
        aria-controls={open ? 'basic-menu' : undefined}
        onClick={handleClick}
      />
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={0}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiMenu-paper': {
            background: '#7DDEC1',
            borderRadius: '11px',
            width: 'fit-content',
            height: 'fit-content',
            padding: '5px 15px',
            position: 'relative',
            overflow: 'visible',
            marginLeft: '-23px',
            marginTop: '-20px',
          },

          '& .MuiMenu-list': {
            padding: '0px',
          },

          '& .MuiMenuItem-root': {
            color: '#090909',
            '&:hover': {
              background: '#39d4a5',
            },
            alignItems: 'center',
            gap: '14px',
          },
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: '10px',
            width: '18px',
            height: '18px',
            background: '#7DDEC1',
            // zIndex: ' 99999999999999999 !important',
            borderRadius: '0px 0px 2px 0px',
            transform: 'rotate(45deg)',
          }}
        />
        {/* <MenuItem onClick={handleClose}>
          <img src='/Images/plus-white.svg' alt='add-icon' className='mr-2' />
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '22px',
            }}
          >
            Add
          </Typography>
        </MenuItem> */}
        <MenuItem onClick={handleIsEditProduct}>
          <img src='/Images/edit-white.svg' alt='edit-icon' className='mr-2' />
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '22px',
            }}
          >
            Edit
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <img src='/Images/trash-white.svg' alt='delete-icon' className='mr-2' />
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '22px',
            }}
          >
            Delete
          </Typography>
        </MenuItem>
      </Menu>

      <EditBakerProductModal
        open={isEditProduct}
        onClose={handleIsEditProduct}
        product={product}
        variants={variants}
        category={category}
      />
    </div>
  )
}

export default ProductCardMenu
