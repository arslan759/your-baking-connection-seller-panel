import { Button, CircularProgress, Typography } from '@mui/material'
import { PrimaryBtnProps } from 'types'

const PrimaryBtn = ({
  handleClick,
  type = 'button',
  text,
  disabled,
  loading,
  backgroundColor,
  onHoverBackgroundColor,
  textColor,
  onHoverTextColor,
}: PrimaryBtnProps) => {
  return (
    <Button
      // className={`flex items-center justify-center w-full h-full group`}
      disabled={disabled || loading ? true : false}
      disableElevation
      type={type}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        width: '100%',
        height: '100%',
        textTransform: 'capitalize',
        backgroundColor: disabled ? 'grey' : backgroundColor ? backgroundColor : '#7DDEC1',
        borderRadius: '5px',
        padding: '10px',
        color: textColor ? textColor : '#000',
        '&:hover': {
          backgroundColor: onHoverBackgroundColor ? onHoverBackgroundColor : '#39d4a5',
          color: onHoverTextColor ? onHoverTextColor : '#fff',
        },
      }}
      onClick={handleClick}
    >
      {loading ? (
        <CircularProgress
          sx={{
            color: 'grey',
            width: '20px !important',
            height: '20px !important',
          }}
        />
      ) : (
        <Typography className='text-black group-hover:text-white'>{text}</Typography>
      )}
    </Button>
  )
}

export default PrimaryBtn
