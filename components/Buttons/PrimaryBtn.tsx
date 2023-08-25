import { Button, Typography } from '@mui/material'
import { PrimaryBtnProps } from 'types'

const PrimaryBtn = ({ handleClick, type = 'button', text }: PrimaryBtnProps) => {
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
        backgroundColor: '#7DDEC1',
        borderRadius: '5px',
        padding: '10px',
        color: '#000',
        '&:hover': {
          backgroundColor: '#39d4a5',
          color: '#fff',
        },
      }}
      onClick={handleClick}
    >
      {<Typography className='text-black group-hover:text-white'>{text}</Typography>}
    </Button>
  )
}

export default PrimaryBtn
