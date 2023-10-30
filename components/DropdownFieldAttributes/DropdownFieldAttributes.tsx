import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { InputLabel, Typography, dividerClasses } from '@mui/material'
import { DropdownAttributeProps } from 'types'
import { useEffect, useState } from 'react'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 'fit-content',
      minWidth: 250,
    },
  },
}

const DropdownFieldAttributes = ({
  options,
  required,
  name,
  label,
  error,
  placeholder,
  errorText,
  inputColor,
  value,
  onChange,
}: DropdownAttributeProps) => {
  const [errorState, setErrorState] = useState(errorText ? true : false)

  const handleChange = (event: SelectChangeEvent) => {
    // onChange(event.target.name ,event.target.value)

    const value: any = event.target.value

    console.log('event.target.value is ', value.optionLabel)

    const { optionLabel, price } = value

    onChange(name, optionLabel, price)

    if (event.target.value === '') setErrorState(true)
    else setErrorState(false)
  }

  useEffect(() => {
    setErrorState(errorText ? true : false)
  }, [errorText, errorState])

  useEffect(() => {
    console.log('placeholder is ', placeholder)
  }, [placeholder])

  console.log('attribute options are ', options)

  console.log('attribute value is ', value)

  useEffect(() => {
    console.log('value is ', value)
  }, [value])

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
        error={errorState}
      >
        {/* <InputLabel id='demo-simple-select-label'>Age</InputLabel> */}
        <Select
          labelId='demo-multiple-name-label'
          id='demo-multiple-name'
          autoWidth={true}
          displayEmpty={placeholder ? true : false}
          value={value}
          disabled={options?.length === 0 || !options ? true : false}
          onChange={handleChange}
          renderValue={(selected: any) => {
            console.log('selected is ', selected)
            return value?.optionLabel ? selected?.optionLabel : placeholder
          }}
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

          {options?.map((option, index) => (
            <MenuItem
              sx={{
                textTransform: 'capitalize',
                width: '100%',
                '&.MuiMenuItem-root': {
                  display: 'flex !important',
                  justifyContent: 'space-between !important',
                  alignItems: 'center !important',
                },
              }}
              key={index}
              value={option}
            >
              <span>{option?.optionLabel}</span>
              <span>{option?.price ? `$${option.price}` : ''}</span>
            </MenuItem>
          ))}
        </Select>
        {errorState ? <FormHelperText>{errorText}</FormHelperText> : ''}
      </FormControl>
    </div>
  )
}

export default DropdownFieldAttributes
