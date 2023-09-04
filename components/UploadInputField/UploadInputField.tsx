import { IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { UploadInputFieldProps } from 'types'
import { useEffect, useState } from 'react'

const UploadInputField = ({
  label,
  name,
  inputColor,
  required,
  placeholder,
  errorText,
  value,
}: UploadInputFieldProps) => {
  const [errorState, setErrorState] = useState(errorText ? true : false)

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

      <TextField
        className={`${label ? 'mt-[5px]' : 'mt-[0px]'}`}
        sx={{
          '& .MuiOutlinedInput-root': {
            color: inputColor,
            height: '35px',
            padding: '5px',
            paddingRight: '10px',
            borderRadius: '5px',
            fontSize: '12px',

            '& fieldset': {
              borderColor: inputColor,
            },
            '&:hover fieldset': {
              borderColor: inputColor,
            },
            '&.Mui-focused fieldset': {
              borderColor: inputColor,
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
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
                <path
                  d='M8 2V10'
                  stroke={inputColor}
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              {/* <img src={} alt='upload' className='w-[16px] h-[16px]' /> */}
            </InputAdornment>
          ),
        }}
        placeholder={placeholder}
        type='text'
        name={name}
        error={errorState}
        id='outlined-error-helper-text'
        value={value}
        helperText={errorState ? errorText : ''}
      />
    </div>
  )
}

export default UploadInputField
