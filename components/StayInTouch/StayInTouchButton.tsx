import React from 'react'
import { Button, Typography } from '@mui/material'

type StayInTouchButtonProps = {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const StayInTouchButton = ({ handleSubmit }: StayInTouchButtonProps) => {
  return (
    <Button
      className={`bg-green hover:bg-[#39d4a5] rounded-[12px] p-[10px] flex items-center justify-center w-1/3 h-full group`}
      disableElevation
      sx={{ textTransform: 'capitalize' }}
      onClick={handleSubmit}
    >
      <Typography className='text-black font-medium  group-hover:text-white'>Submit</Typography>
    </Button>
  )
}

export default StayInTouchButton
