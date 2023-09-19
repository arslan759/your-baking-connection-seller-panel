import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { Typography } from '@mui/material'
import CustomField from '../CustomField'
import { PrimaryBtn } from '../Buttons'
import { parse } from 'path'

interface Option {
  optionLabel: string
  price: number | string
}

interface Attribute {
  attribute: string
  options: Option[]
}

interface CustomBuilderProps {
  productAttributes: Attribute[]
  showPriceFields: boolean[]
  setProductAttributes: (productAttributes: Attribute[]) => void
  setShowPriceFields: (showPriceFields: boolean[]) => void
  productAttributesError: any[]
  removeAttributeError: (index: number) => void
  removeOptionError: (attrIndex: number, optionIndex: number) => void
}

function CustomBuilder({
  productAttributes,
  showPriceFields,
  setProductAttributes,
  setShowPriceFields,
  productAttributesError,
  removeAttributeError,
  removeOptionError,
}: CustomBuilderProps) {
  // const [productAttributes, setProductAttributes] = useState<Attribute[]>([])
  // const [showPriceFields, setShowPriceFields] = useState<boolean[]>([])

  const handleAttributeChange = (e: any, index: number, attribute: string) => {
    e.preventDefault()
    e.stopPropagation()
    const updatedAttributes = [...productAttributes]
    updatedAttributes[index].attribute = attribute
    setProductAttributes(updatedAttributes)

    removeAttributeError(index)
  }

  const handleOptionChange = (
    attrIndex: number,
    optionIndex: number,
    label: string,
    price: number | string,
  ) => {
    const updatedAttributes = [...productAttributes]
    updatedAttributes[attrIndex].options[optionIndex] = {
      optionLabel: label,
      price: price ? parseFloat(price as string) : parseFloat('0'),
    }
    setProductAttributes(updatedAttributes)

    removeOptionError(attrIndex, optionIndex)
  }

  const togglePriceField = (attrIndex: number) => {
    const updatedShowPriceFields = [...showPriceFields]
    updatedShowPriceFields[attrIndex] = !updatedShowPriceFields[attrIndex]
    setShowPriceFields(updatedShowPriceFields)
  }

  const addAttribute = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setProductAttributes([
      ...productAttributes,
      { attribute: '', options: [{ optionLabel: '', price: '' }] },
    ])
    setShowPriceFields([...showPriceFields, false])
  }

  const removeAttribute = (e: any, attrIndex: number) => {
    e.preventDefault()
    e.stopPropagation()
    const updatedAttributes = [...productAttributes]
    updatedAttributes.splice(attrIndex, 1)
    setProductAttributes(updatedAttributes)

    const updatedShowPriceFields = [...showPriceFields]
    updatedShowPriceFields.splice(attrIndex, 1)
    setShowPriceFields(updatedShowPriceFields)

    removeAttributeError(attrIndex)
  }

  const addOption = (e: any, attrIndex: number) => {
    e.preventDefault()
    e.stopPropagation()
    const updatedAttributes = [...productAttributes]
    updatedAttributes[attrIndex].options.push({ optionLabel: '', price: '' })
    setProductAttributes(updatedAttributes)
  }

  const removeOption = (e: any, attrIndex: number, optionIndex: number) => {
    const updatedAttributes = [...productAttributes]
    updatedAttributes[attrIndex].options.splice(optionIndex, 1)

    setProductAttributes(updatedAttributes)

    removeOptionError(attrIndex, optionIndex)
  }

  return (
    <div className={styles.card}>
      <div className='w-full flex justify-between items-center'>
        <Typography
          sx={{
            fontSize: '16px !important',
            fontFamily: 'Open Sans',
            fontWeight: '600 !important',
            lineHeight: 'normal',
            color: '#676767',
          }}
        >
          {`Create Custom Field`}
        </Typography>

        <img src='/Images/brush.svg' alt='brush' className='w-[20px] h-[20px]' />
      </div>
      <div className='w-full'>
        <Typography
          sx={{
            fontSize: '14px !important',
            fontFamily: 'Open Sans',
            fontWeight: '400 !important',
            lineHeight: '16px',
            color: '#676767',
          }}
        >
          {`Create wide range of fields, such as color and flavor, to personalize your catalog`}
        </Typography>
      </div>

      <div className='mt-[32px] flex flex-col w-full gap-y-[28px]'>
        {productAttributes?.map((attribute, attrIndex) => (
          // <div key={attrIndex}>
          //   <input
          //     type='text'
          //     value={attribute.attribute}
          //     onChange={(e) => handleAttributeChange(e, attrIndex, e.target.value)}
          //   />
          //   <label>
          //     Enable Price for this attribute:
          //     <input
          //       type='checkbox'
          //       checked={showPriceFields[attrIndex]}
          //       onChange={() => togglePriceField(attrIndex)}
          //     />
          //   </label>
          //   <button onClick={(e) => addOption(e, attrIndex)}>Add Option</button>
          //   <button onClick={(e) => removeAttribute(e, attrIndex)}>Delete Attribute</button>
          //   {attribute.options.map((option, optionIndex) => (
          //     <div key={optionIndex}>
          //       <input
          //         type='text'
          //         value={option.optionLabel}
          //         onChange={(e) =>
          //           handleOptionChange(attrIndex, optionIndex, e.target.value, option.price)
          //         }
          //       />
          //       {showPriceFields[attrIndex] && (
          //         <input
          //           type='number'
          //           value={option.price}
          //           onChange={(e) =>
          //             handleOptionChange(
          //               attrIndex,
          //               optionIndex,
          //               option.optionLabel,
          //               Number(e.target.value),
          //             )
          //           }
          //         />
          //       )}
          //       <button onClick={(e) => removeOption(e, attrIndex, optionIndex)}>
          //         Remove Option
          //       </button>
          //     </div>
          //   ))}
          // </div>
          <CustomField
            key={attrIndex}
            attrIndex={attrIndex}
            attribute={attribute}
            handleAttributeChange={handleAttributeChange}
            showPriceFields={showPriceFields}
            togglePriceField={togglePriceField}
            addOption={addOption}
            removeAttribute={removeAttribute}
            handleOptionChange={handleOptionChange}
            removeOption={removeOption}
            productAttributesError={productAttributesError}
          />
        ))}
      </div>

      <div className='w-full mt-[28px]'>
        <PrimaryBtn text='Add New Field' handleClick={(e) => addAttribute(e)} />
      </div>
      {/* <button onClick={(e) => addAttribute(e)}>Add Attribute</button> */}
    </div>
  )
}

export default CustomBuilder
