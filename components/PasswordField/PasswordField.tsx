import { IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { PasswordFieldProps } from 'types'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import { useEffect, useState } from 'react'

const PasswordField = ({
  name,
  label,
  inputColor,
  placeholder,
  value,
  onChange,
  required,
  error,
  errorText,
}: PasswordFieldProps) => {
  const [errorState, setErrorState] = useState(errorText ? true : false)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    onChange(name, value)

    if (value === '') setErrorState(true)
    else setErrorState(false)
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  useEffect(() => {
    setErrorState(errorText ? true : false)
  }, [errorText, errorState])

  return (
    <div className='flex flex-col capitalize mt-[8px]'>
      <label
        htmlFor={name}
        style={{
          color: inputColor,
        }}
      >
        <Typography
          sx={{
            color: inputColor,
            fontSize: '12px !important',
            '@media (max-width: 767px)': {
              fontSize: '12px !important',
            },
            '::after': required
              ? {
                  content: "'*'",
                  marginLeft: '5px',
                  color: 'red',
                }
              : {},
          }}
        >
          {label}
        </Typography>
      </label>
      <TextField
        sx={{
          '& .MuiOutlinedInput-root': {
            color: inputColor,
            height: '35px',
            padding: '5px',
            borderRadius: '5px',
            fontSize: '12px',
            marginTop: label ? '5px' : '0px',
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
            <InputAdornment
              position='end'
              sx={{
                color: 'white',
              }}
            >
              <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                {showPassword ? (
                  <VisibilityOffOutlinedIcon sx={{ color: '#fff' }} />
                ) : (
                  <VisibilityOutlinedIcon sx={{ color: '#fff' }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        name='password'
        type={showPassword ? 'text' : 'password'}
        error={errorState}
        onChange={handleChange}
        id='outlined-error-helper-text'
        defaultValue={value}
        helperText={errorState ? errorText : ''}
      />
    </div>
  )
}

export default PasswordField
