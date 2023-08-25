import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Menu, MenuItem, styled, Grid, Toolbar, Typography } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { PrimaryBtn, SecondaryBtn } from '../Buttons'
import styles from './styles.module.css'
import ToggleNavBar from '../ToggleNavBar/ToggleNavBar'
import { NavBarProps } from 'types'
import useViewer from 'hooks/viewer/useViewer'
import { withApollo } from 'lib/apollo/withApollo'

const Navbar = ({ itemsColor = 'black', activeItemColor = '#7DDEC1' }: NavBarProps) => {
  const [viewer, loading, refetch] = useViewer()

  console.log('viewer is ', viewer)

  const [open, SetOpen] = useState(false)
  const pathName = usePathname()
  const router = useRouter()
  const StyledToolbar = styled(Toolbar)({
    // display: "flex",
    justifyContent: 'space-between',
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

  const handleLogOut = () => {
    localStorage.clear()
    router.push('/signin')
  }
  useEffect(() => {
    console.log('viewre in navbar', viewer)
  }, [viewer])

  return (
    <AppBar
      sx={{
        background: 'transparent',
        // paddingLeft: { xs: '1px', sm: '25px' },
        // paddingRight: { xs: '1px', md: '30px' },
      }}
      position={'static'}
      elevation={0}
    >
      <StyledToolbar>
        <Box
          sx={{
            gap: { md: '16px', lg: '36px' },
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
                  pathName === `${item.path}`
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
          {loading ? (
            <p style={{ color: 'black' }}>loading...</p>
          ) : (
            <Grid>
              {!viewer || Object.keys(viewer).length === 0 ? (
                <Box
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
                </Box>
              ) : (
                <Box
                  sx={{
                    alignItems: 'center',
                  }}
                  className={styles.navbar}
                >
                  <p style={{ color: 'black', fontWeight: 700, marginRight: '10px' }}>
                    {`${viewer?.firstName} ${viewer?.lastName}`}
                  </p>{' '}
                  <PrimaryBtn text={'Logout'} handleClick={handleLogOut} />
                </Box>
              )}
            </Grid>
          )}
          <div className={styles.navbarMenu}>
            <ToggleNavBar navbarIconColor={itemsColor} />
          </div>
        </SearchBox>
      </StyledToolbar>
      {/* <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={() => SetOpen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ width: 350, height: '90vh' }}>
          {MenuItems.map((item, i) => (
            <MenuItem
              key={i}
              sx={{
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                textTransform: 'uppercase',
                fontFamily: 'Rubik',
                lineHeight: '18px',
                fontStyle: 'normal',
                textAlign: 'center',
              }}
            >
              <Link
                style={
                  pathName === `${item.path}`
                    ? {
                        color: 'white',
                        textAlign: 'center',
                        textDecoration: 'none',
                        borderRadius: '25px',
                        padding: '7px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        border: '2px solid #FF6744',
                      }
                    : { color: 'white', textDecoration: 'none' }
                }
                href={item.path}
              >
                {item.name}
              </Link>
            </MenuItem>
          ))}
        </Box>
      </Menu> */}
    </AppBar>
  )
}

export default withApollo()(Navbar)
