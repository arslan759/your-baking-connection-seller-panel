import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Menu, MenuItem, styled, Grid, Toolbar, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { PrimaryBtn, SecondaryBtn } from '../Buttons'
import styles from './styles.module.css'
import ToggleNavBar from '../ToggleNavBar/ToggleNavBar'
import { NavBarProps } from 'types'

const ProfileNavbar = ({ itemsColor = 'black', activeItemColor = '#7DDEC1' }: NavBarProps) => {
  const [open, SetOpen] = useState(false)
  const router = usePathname()
  const StyledToolbar = styled(Toolbar)({
    // display: 'flex',
    // justifyContent: 'space-between',
    height: '88px',
  })
  const SocialBox = styled(Box)({
    display: 'flex',
    // gap: 12,
  })
  const SearchBox = styled(Box)({
    display: 'flex',
    gap: 5,
  })
  const MenuItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT BAKERS', path: '/about-bakers' },
    { name: 'MEMBERSHIP', path: '/membership' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'SEARCH', path: '/search' },
  ]

  return (
    <AppBar
      sx={{
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        width: 'fit-content',
      }}
      position={'static'}
      elevation={0}
    >
      <StyledToolbar>
        <Box
          sx={{
            gap: '36px',
            alignItems: 'center',
          }}
          className={styles.navbar}
        >
          {MenuItems.map((item, index) => (
            <Typography
              key={index}
              sx={{
                cursor: 'pointer',
              }}
              variant='body2'
              className='hover:scale-110 ease-in-out transition-all duration-300'
            >
              <Link
                style={
                  router === `${item.path}`
                    ? {
                        color: `${activeItemColor}`,
                        fontWeight: '700',
                        textDecoration: 'none',
                        borderRadius: '25px',
                        padding: '10px',
                        width: '2px',
                      }
                    : { color: `${itemsColor}`, textDecoration: 'none' }
                }
                href={item.path}
              >
                {item.name}
              </Link>
            </Typography>
          ))}
        </Box>

        <SearchBox sx={{ display: 'flex', alignItems: 'center' }}>
          <Grid>
            {/* <Box
              sx={{
                alignItems: 'center',
              }}
              className={styles.navbar}
            >
              <div className='w-[146px] h-[50px]'>
                <a href='/signup'>
                  <PrimaryBtn handleClick={() => {}} text='register' />
                </a>
              </div>
              <div className='w-[146px] h-[50px]'>
                <a href='/signin'>
                  <SecondaryBtn handleClick={() => {}} text='sign in' color={`${itemsColor}`} />
                </a>
              </div>
            </Box> */}
          </Grid>
          <div className={styles.navbarMenu}>
            <ToggleNavBar navbarIconColor={itemsColor} />
          </div>
        </SearchBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default ProfileNavbar
