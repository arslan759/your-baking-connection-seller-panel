import { Button, Typography } from '@mui/material'
import { PrimaryBtnProps } from 'types'

const TertiaryBtn = ({ handleClick, type = 'button', text }: PrimaryBtnProps) => {
  return (
    <Button
      className={`flex items-center justify-center w-full h-full group`}
      disableElevation
      type={type}
      variant='contained'
      sx={{
        textTransform: 'capitalize',
        backgroundColor: '#fff',
        borderRadius: '5px',
        border: '1px solid #7DDEC1',
        padding: '10px',
        '&:hover': {
          backgroundColor: 'transparent',
          border: '1px solid #39d4a5',
        },
      }}
      onClick={handleClick}
    >
      {<Typography className='text-black group-hover:text-primary'>{text}</Typography>}
    </Button>
  )
}

export default TertiaryBtn
