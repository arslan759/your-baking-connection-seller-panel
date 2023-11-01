import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { UploadInputFieldProps } from 'types'
import { useEffect, useState } from 'react'

const UploadInputField = ({
  label,
  name,
  inputColor,
  required,
  // placeholder,
  // errorText,
  // value,
  children,
}: UploadInputFieldProps) => {
  // const [errorState, setErrorState] = useState(errorText ? true : false)

  return (
    <div className='flex flex-col capitalize'>
      {label ? (
        <label
          htmlFor={name}
          style={{
            color: inputColor,
          }}
        >
          <Typography
            className={`text-[12px] ${
              required ? "after:content-['*'] after:ml-[5px] after:text-[red]" : ''
            }`}
            variant='body1'
          >
            {label}
          </Typography>
        </label>
      ) : (
        ''
      )}

      <Button
        className={`${label ? 'mt-[5px]' : 'mt-[0px]'}`}
        sx={{
          color: inputColor,
          border: `1px solid ${inputColor}`,
          height: '35px',
          padding: '5px',
          paddingRight: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          backgroundColor: 'transparent',

          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        endIcon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10'
              stroke={inputColor}
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M11.3346 5.33333L8.0013 2L4.66797 5.33333'
              stroke={inputColor}
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path d='M8 2V10' stroke={inputColor} stroke-linecap='round' stroke-linejoin='round' />
          </svg>
        }
        // placeholder={placeholder}
        // type='text'
        // name={name}
        // error={errorState}
        // id='outlined-error-helper-text'
        // value={value}
        // helperText={errorState ? errorText : ''}
      >
        {children}
      </Button>
    </div>
  )
}

export default UploadInputField
