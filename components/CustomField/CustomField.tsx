import { Checkbox, Typography } from '@mui/material'
import React from 'react'
import { PrimaryBtn, TertiaryBtn } from '../Buttons'
import InputField from '../InputField'
import DeleteIcon from '@mui/icons-material/Delete'

interface CustomFieldProps {
  attrIndex: number
  attribute: any
  handleAttributeChange: any
  showPriceFields: any
  togglePriceField: any
  addOption: any
  removeAttribute: any
  handleOptionChange: any
  removeOption: any
  productAttributesError: any
}

const CustomField = ({
  attrIndex,
  attribute,
  handleAttributeChange,
  showPriceFields,
  togglePriceField,
  addOption,
  removeAttribute,
  productAttributesError,
  removeOption,
  handleOptionChange,
}: CustomFieldProps) => {
  return (
    <div className='w-full flex flex-col gap-[24px] bg-[#EAEAEA] p-[24px] rounded-[8px]'>
      <div>
        <InputField
          label='Attribute Name'
          type='text'
          inputColor='#090909'
          name='price'
          value={attribute.attribute}
          errorText={productAttributesError[attrIndex]?.attribute}
          required={false}
          changeHandler={(e: any) => handleAttributeChange(e, attrIndex, e.target.value)}
        />
      </div>

      <div className='w-full flex flex-col justify-start gap-y-[8px]'>
        <Typography
          sx={{
            fontSize: '16px !important',
            fontFamily: 'Open Sans',
            fontWeight: '600 !important',
            lineHeight: '16px',
            color: '#212529',
          }}
        >
          Enable pricing option
        </Typography>

        <div className='w-full flex gap-[10px] items-start md:items-center'>
          <Checkbox
            checked={showPriceFields[attrIndex]}
            onChange={() => togglePriceField(attrIndex)}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{
              padding: '0px',
              width: '20px',
              height: '20px',

              '& .MuiSvgIcon-root': {
                width: '20px',
                height: '20px',
                color: '#7DDEC1',
                borderRadius: '2px',
                padding: '0px',
              },
            }}
          />
          <Typography
            sx={{
              fontSize: '14px !important',
              fontFamily: 'Open Sans',
              fontWeight: '400 !important',
              lineHeight: '16px',
              color: '#212529',
            }}
          >
            Enable price to be set for the input field
          </Typography>
        </div>
      </div>

      {attribute?.options?.map((option: any, optionIndex: number) => (
        <div key={optionIndex} className='w-full '>
          <div className='flex flex-col md:flex-row gap-[10px] md:gap-[20px]'>
            <div className='w-[100%] md:w-[50%]'>
              <InputField
                label='option label'
                type='text'
                inputColor='#090909'
                name='optionLabel'
                value={option.optionLabel}
                errorText={productAttributesError[attrIndex]?.options[optionIndex]?.optionLabel}
                required={false}
                changeHandler={(e: any) =>
                  handleOptionChange(attrIndex, optionIndex, e.target.value, option.price)
                }
              />
            </div>

            {showPriceFields[attrIndex] && (
              <div className='w-[100%] md:w-[50%]'>
                <InputField
                  label='Price'
                  type='number'
                  inputColor='#090909'
                  name='price'
                  value={option.price}
                  errorText={productAttributesError[attrIndex]?.options[optionIndex]?.price}
                  required={false}
                  changeHandler={(e: any) =>
                    handleOptionChange(
                      attrIndex,
                      optionIndex,
                      option.optionLabel,
                      Number(e.target.value),
                    )
                  }
                />
              </div>
            )}
            <div className='mt-0 sm:mt-[30px]'>
              <DeleteIcon
                onClick={(e) => removeOption(e, attrIndex, optionIndex)}
                sx={{
                  color: '#d64038',
                  fontSize: '20px !important',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>
          {/* <div className='w-fit mt-[8px]'>
          
            <DeleteIcon
              onClick={(e) => removeOption(e, attrIndex, optionIndex)}
              sx={{
                color: '',
                fontSize: '20px !important',
                cursor: 'pointer',
              }}
            />
          </div> */}
        </div>
      ))}

      <div className='w-full flex flex-col md:flex-row gap-[18px]'>
        <div className='h-[35px] w-[100%] md:w-fit'>
          <PrimaryBtn text='Add Option' handleClick={(e) => addOption(e, attrIndex)} />
        </div>
        <div className='h-[35px] w-[100%] md:w-fit'>
          <TertiaryBtn text='Delete Attribute' handleClick={(e) => removeAttribute(e, attrIndex)} />
        </div>
      </div>
    </div>
  )
}

export default CustomField
