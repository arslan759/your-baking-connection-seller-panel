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
              <img src='/Images/upload.svg' alt='upload' className='w-[16px] h-[16px]' />
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
