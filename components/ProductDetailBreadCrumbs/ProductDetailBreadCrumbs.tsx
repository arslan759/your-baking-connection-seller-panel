import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

const ProductDetailBreadCrumbs = () => {
  const router = useRouter()
  const pathName = usePathname()
  const lastPathName = pathName?.split('/').pop()

  const handleBreadCrumbs = () => {
    router.push('/gallery')
  }

  return (
    <Breadcrumbs
      sx={{
        '& .MuiBreadcrumbs-separator': {
          color: '#7DDEC1',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: '18px !important',
          fontWeight: '600 !important',
          lineHeight: '28px',
          fontFamily: 'Josefin Sans',
          textTransform: 'capitalize',
          color: '#fff',
          cursor: 'pointer',
          fontFeatureSettings: "'clig' off, 'liga' off",
          '@media (max-width: 767px)': {
            fontSize: '16px !important',
          },
        }}
        onClick={handleBreadCrumbs}
      >
        Gallery
      </Typography>

      <Typography
        sx={{
          fontSize: '18px !important',
          fontWeight: '600 !important',
          lineHeight: '28px',
          fontFamily: 'Josefin Sans',
          textTransform: 'capitalize',
          color: '#7DDEC1',
          fontFeatureSettings: "'clig' off, 'liga' off",
          '@media (max-width: 767px)': {
            fontSize: '16px !important',
          },
        }}
      >
        {lastPathName?.replaceAll('-', ' ')}
      </Typography>
    </Breadcrumbs>
  )
}

export default ProductDetailBreadCrumbs
