import { Breadcrumbs, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const ProfileBreadCrumbs = () => {
  const router = useRouter()
  const pathName = usePathname()
  const lastPathName = pathName?.split('/').pop()

  const handleBreadCrumbs = () => {
    router.push('/profile')
  }

  return (
    <Breadcrumbs>
      <Typography
        sx={{
          fontSize: '18px !important',
          fontWeight: '600 !important',
          lineHeight: '28px',
          fontFamily: 'Josefin Sans',
          textTransform: 'capitalize',
          color: '#888',
          cursor: 'pointer',
          fontFeatureSettings: "'clig' off, 'liga' off",
          '@media (max-width: 767px)': {
            fontSize: '16px !important',
          },
        }}
        onClick={handleBreadCrumbs}
      >
        your profile
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

export default ProfileBreadCrumbs
