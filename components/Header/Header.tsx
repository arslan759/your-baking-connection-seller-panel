import { Grid } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'

const Header = () => {
  return (
    <Grid container alignItems='center' justifyContent='center' direction='column'>
      <div className={styles.imageContainer}>
        <img src='/gif/header.gif' alt='Header GIF' className={styles.responsiveImage} />
      </div>
    </Grid>
  )
}

export default Header
