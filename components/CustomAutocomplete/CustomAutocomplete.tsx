import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { CircularProgress, FormControl, FormHelperText, Typography } from '@mui/material'

interface CustomAutocompleteProps {
  options: string[]
  loading: boolean
  value: string | null
  // setValue: (value: string) => void
  setError?: (value: string) => void
  required: boolean
  label?: string
  placeholder?: string
  inputColor: string
  errorText?: string | undefined
  onChange: (value: string) => void
  name?: string
}

export default function CustomAutocomplete({
  options,
  loading,
  value,
  // setValue,
  setError,
  placeholder,
  required,
  label,
  onChange,
  errorText,
  inputColor,
  name,
}: CustomAutocompleteProps) {
  const [errorState, setErrorState] = React.useState(errorText ? true : false)

  const handleChange = (event: any, newValue: any) => {
    onChange(newValue)

    if (newValue === '') setErrorState(true)
    else setErrorState(false)
  }

  React.useEffect(() => {
    setErrorState(errorText ? true : false)
  }, [errorText, errorState])

  return (
    <div className='flex flex-col capitalize'>
      {!label ? null : (
        <label htmlFor={name}>
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
      )}
      <FormControl error={errorState}>
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          loading={loading}
          value={value ? value : null}
          onChange={handleChange}
          disabled={loading || !options}
          options={options ? options : []}
          // sx={{
          //   '& .MuiOutlinedInput-root': {
          //     color: inputColor,
          //     height: '35px',
          //     padding: '5px',
          //     borderRadius: '5px',
          //     fontSize: '12px !important',
          //     '@media (max-width: 767px)': {
          //       fontSize: '12px !important',
          //     },
          //     marginTop: label ? '5px' : '0px',

          //     '& fieldset': {
          //       borderColor: options?.length === 0 || !options ? '' : inputColor,
          //     },
          //     '&:hover fieldset': {
          //       borderColor: options?.length === 0 || !options ? '' : inputColor,
          //     },
          //     '&.Mui-focused fieldset': {
          //       borderColor: options?.length === 0 || !options ? '' : inputColor,
          //     },
          //   },
          // }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: inputColor,
                  height: '35px',
                  padding: '5px',
                  borderRadius: '5px',
                  fontSize: '12px !important',
                  '@media (max-width: 767px)': {
                    fontSize: '12px !important',
                  },
                  marginTop: label ? '5px' : '0px',

                  '& fieldset': {
                    borderColor: options?.length === 0 || !options ? '' : inputColor,
                  },
                  '&:hover fieldset': {
                    borderColor: options?.length === 0 || !options ? '' : inputColor,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: options?.length === 0 || !options ? '' : inputColor,
                  },
                },
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress sx={{ color: inputColor }} size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
        {errorState ? <FormHelperText>{errorText}</FormHelperText> : ''}
      </FormControl>
    </div>
  )
}
