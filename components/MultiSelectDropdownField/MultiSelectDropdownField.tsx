import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { InputLabel, Typography, dividerClasses } from '@mui/material'
import { MultiSelectDropdownFieldProps } from 'types'
import { useEffect, useState } from 'react'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const MultiSelectDropdownField = ({
  options,
  required,
  name,
  label,
  error,
  placeholder,
  errorText,
  inputColor,
  value,
  setValue,
}: MultiSelectDropdownFieldProps) => {
  const [errorState, setErrorState] = useState(errorText ? true : false)

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event

    console.log('value is', value)
    setValue(value)
  }

  useEffect(() => {
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
      <FormControl
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
        error={errorState}
      >
        {/* <InputLabel id='demo-simple-select-label'>Age</InputLabel> */}
        <Select
          // className='mt-[5px]'
          labelId='demo-multiple-name-label'
          id='demo-multiple-name'
          displayEmpty={placeholder ? true : false}
          value={value}
          multiple
          onChange={handleChange}
          //   renderValue={(selected: any) => <span>{selected.title}</span>}
          IconComponent={() => (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M6 9L12 15L18 9'
                stroke={inputColor}
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          )}
          // input={<OutlinedInput label='Name' />}
          MenuProps={MenuProps}
        >
          {placeholder ? (
            <MenuItem disabled value=''>
              {placeholder}
            </MenuItem>
          ) : null}

          {options.map((option: any, index: number) => (
            <MenuItem key={index} value={option}>
              {option.title}
            </MenuItem>
          ))}
        </Select>
        {errorState ? <FormHelperText>{errorText}</FormHelperText> : ''}
      </FormControl>
    </div>
  )
}

export default MultiSelectDropdownField
