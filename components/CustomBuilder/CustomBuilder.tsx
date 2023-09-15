import React, { useState, useEffect } from 'react'

interface Option {
  optionLabel: string
  price: number
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
}

function CustomBuilder({
  productAttributes,
  showPriceFields,
  setProductAttributes,
  setShowPriceFields,
}: CustomBuilderProps) {
  // const [productAttributes, setProductAttributes] = useState<Attribute[]>([])
  // const [showPriceFields, setShowPriceFields] = useState<boolean[]>([])

  const handleAttributeChange = (e: any, index: number, attribute: string) => {
    e.preventDefault()
    e.stopPropagation()
    const updatedAttributes = [...productAttributes]
    updatedAttributes[index].attribute = attribute
    setProductAttributes(updatedAttributes)
  }

  const handleOptionChange = (
    attrIndex: number,
    optionIndex: number,
    label: string,
    price: number,
  ) => {
    const updatedAttributes = [...productAttributes]
    updatedAttributes[attrIndex].options[optionIndex] = {
      optionLabel: label,
      price: price,
    }
    setProductAttributes(updatedAttributes)
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
      { attribute: '', options: [{ optionLabel: '', price: 0 }] },
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
  }

  const addOption = (e: any, attrIndex: number) => {
    e.preventDefault()
    e.stopPropagation()
    const updatedAttributes = [...productAttributes]
    updatedAttributes[attrIndex].options.push({ optionLabel: '', price: 0 })
    setProductAttributes(updatedAttributes)
  }

  const removeOption = (e: any, attrIndex: number, optionIndex: number) => {
    const updatedAttributes = [...productAttributes]
    updatedAttributes[attrIndex].options.splice(optionIndex, 1)

    setProductAttributes(updatedAttributes)
  }

  return (
    <div>
      {productAttributes.map((attribute, attrIndex) => (
        <div key={attrIndex}>
          <input
            type='text'
            value={attribute.attribute}
            onChange={(e) => handleAttributeChange(e, attrIndex, e.target.value)}
          />
          <label>
            Enable Price for this attribute:
            <input
              type='checkbox'
              checked={showPriceFields[attrIndex]}
              onChange={() => togglePriceField(attrIndex)}
            />
          </label>
          <button onClick={(e) => addOption(e, attrIndex)}>Add Option</button>
          <button onClick={(e) => removeAttribute(e, attrIndex)}>Delete Attribute</button>
          {attribute.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                type='text'
                value={option.optionLabel}
                onChange={(e) =>
                  handleOptionChange(attrIndex, optionIndex, e.target.value, option.price)
                }
              />
              {showPriceFields[attrIndex] && (
                <input
                  type='number'
                  value={option.price}
                  onChange={(e) =>
                    handleOptionChange(
                      attrIndex,
                      optionIndex,
                      option.optionLabel,
                      Number(e.target.value),
                    )
                  }
                />
              )}
              <button onClick={(e) => removeOption(e, attrIndex, optionIndex)}>
                Remove Option
              </button>
            </div>
          ))}
        </div>
      ))}
      <button onClick={(e) => addAttribute(e)}>Add Attribute</button>
    </div>
  )
}

export default CustomBuilder
