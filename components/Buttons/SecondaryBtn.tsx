import { Button, Typography } from '@mui/material'
import { useEffect } from 'react'
import { SecondaryBtnProps } from 'types'
import styles from './styles.module.css'

const SecondaryBtn = ({ handleClick, text, color }: SecondaryBtnProps) => {
  // console.log('SecondaryBtn color is', color)

  useEffect(() => {}, [color])

  return (
    <Button
      // className={`bg-transparent hover:bg-transparent cursor-default rounded-[5px] p-[10px] flex items-center justify-center w-full h-full`}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        cursor: 'default',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        borderRadius: '5px',
        padding: '10px',
        color: '#000',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '#fff',
        },
      }}
      disableElevation
      disableFocusRipple
      disableRipple
    >
      <Typography
        onClick={handleClick}
        sx={{
          color: color,
          cursor: 'pointer',
          textTransform: 'capitalize',
          position: 'relative',
          width: 'fit-content',
          '::after': {
            content: '""',
            position: 'absolute',
            bottom: '2px',
            left: '0',
            width: '100%',
            height: '1px',
            backgroundColor: color,
          },
          '&:hover': {
            scale: 1.25,
            transition: 'all 300ms ease-in-out',
          },
        }}
        variant='body2'
      >
        {text}
      </Typography>
    </Button>
  )
}

export default SecondaryBtn
