import React from 'react'
import styles from './styles.module.css'
import { Typography } from '@mui/material'
import ProfileBreadCrumbs from '../ProfileBreadCrumbs/ProfileBreadCrumbs'
import PreferencesForm from '../PreferencesForm/PreferencesForm'

const PreferencesCard = () => {
  return (
    <div className={styles.card}>
      <ProfileBreadCrumbs />

      <div className='mt-[56px] md:mt-[72px] flex flex-col items-center'>
        <Typography
          sx={{
            fontSize: '48px !important',
            fontWeight: '700 !important',
            fontFamily: 'Josefin Sans',
            lineHeight: 'normal',
            textAlign: 'center',
            color: '#7DDEC1',
            textTransform: 'capitalize',
            fontFeatureSettings: "'clig' off, 'liga' off",
            '@media (max-width: 767px)': {
              fontSize: '24px !important',
            },
          }}
        >
          Select your desired preferences
        </Typography>

        <Typography
          sx={{
            marginTop: '24px',
            fontSize: '18px !important',
            fontFamily: 'Open Sans',
            fontWeight: '500 !important',
            lineHeight: 'normal',
            letterSpacing: '1px',
            textAlign: 'center',
            alignSelf: 'stretch',
            color: '#090909',
            textTransform: 'capitalize',
            fontFeatureSettings: `'clig' off, 'liga' off`,
          }}
        >
          Personalize your experience with our preferences feature
        </Typography>
      </div>

      <div className='mt-[16px] md:mt-[42px] mb-0 md:mb-[40px] flex justify-center'>
        <PreferencesForm />
      </div>
    </div>
  )
}

export default PreferencesCard
