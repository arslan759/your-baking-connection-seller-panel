import { Button, Typography } from '@mui/material'
import { PrimaryBtnProps } from 'types'

const CancelBtn = ({ handleClick, type = 'button', text, disabled }: PrimaryBtnProps) => {
  return (
    <Button
      // className={`flex items-center justify-center w-full h-full group`}
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
        backgroundColor: 'transparent',
        borderRadius: '5px',
        border: '1px solid #000',
        padding: '10px',
        color: '#000',
        '&:hover': {
          color: '#888',
          backgroundColor: 'transparent',
          border: '1px solid #888',
        },
      }}
      onClick={handleClick}
      disabled={disabled}
    >
      {<Typography className='text-black group-hover:text-white'>{text}</Typography>}
    </Button>
  )
}

export default CancelBtn
