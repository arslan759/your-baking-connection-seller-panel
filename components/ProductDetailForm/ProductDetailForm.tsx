import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import DropdownField from '../DropdownField/DropdownField'
import { states } from 'Constants/constants'
import { Typography } from '@mui/material'
import ServeItem from './ServeItem'
import { PrimaryBtn } from '../Buttons'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

const ProductDetailForm = () => {
  const [color, setColor] = useState('')
  const [flavor, setFlavor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [serves, setServes] = useState<string | null>('1')
  const [isFavorite, setIsFavorite] = useState(false)

  // error states
  const [colorError, setColorError] = useState('')
  const [flavorError, setFlavorError] = useState('')

  // handleFlavorChange function for flavor dropdown
  const handleFlavorChange = (flavor: string) => {
    setFlavor(flavor)
    setFlavorError(flavor ? '' : 'Flavor is required')
  }

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'color') {
      setColor(value)
      setColorError(value ? '' : 'Color is required')
    }
  }

  //   onClick function for serves
  const handleServesChange = (serves: string) => {
    setServes(serves)
  }

  // function for add and subtract quantity
  const handleAddQuantity = (name: string, quantity: number) => {
    console.log('add clicked for', name)

    quantity = quantity + 1

    console.log('quantity is now', quantity)
  }

  const handleSubtractQuantity = (name: string, quantity: number) => {
    console.log('subtract clicked for', name)

    quantity = quantity - 1

    console.log('quantity is now', quantity)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // form logs
    console.log('color is ', color)
    console.log('flavor is ', flavor)
    console.log('serves is ', serves)
    console.log('quantity is ', quantity)
    console.log('isFavorite is ', isFavorite)

    // reset error fields
    setColorError('')
    setFlavorError('')

    // reset form
    setColor('')
    setFlavor('')
    setServes('1')
    setQuantity(1)
    setIsFavorite(false)

    console.log('form submitted')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col md:flex-row gap-x-[32px] gap-y-[12px]'>
        <div>
          <Typography
            sx={{
              color: '#888',
              fontSize: '12px !important',
              '@media (max-width: 767px)': {
                fontSize: '12px !important',
              },
              '::after': {
                content: "'*'",
                marginLeft: '5px',
                color: 'red',
              },
            }}
          >
            Serves
          </Typography>
          <div className='flex gap-[8px] mt-[5px] items-center w-[50%] md:w-[20%]'>
            {['1', '2', '3', '4+'].map((item, index) => (
              <ServeItem
                key={index}
                item={item}
                isSelected={serves == item}
                onSelect={handleServesChange}
              />
            ))}
          </div>
        </div>

        <div className='max-[400px]:w-[100%] w-[60%] md:w-[25%]'>
          <DropdownField
            label='flavor'
            required
            name='flavor'
            errorText={flavorError}
            value={flavor}
            placeholder='Select flavor'
            options={states}
            inputColor='#888'
            onChange={handleFlavorChange}
          />
        </div>

        <div className='max-[400px]:w-[100%] w-[60%] md:w-[25%]'>
          <InputField
            label='color'
            type='text'
            inputColor='#888'
            name='color'
            placeholder='Enter color'
            value={color}
            // error={isError}
            errorText={colorError}
            required
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='w-full mt-[18px] flex flex-wrap gap-[16px]'>
        <div className=' bg-[#000] w-fit flex items-center text-white rounded-[4px] px-[10px] py-[8px] gap-[8px] overflow-hidden'>
          <div
            className='flex items-center justify-center w-[20px] h-[20px] px-[4px] py-[4px] cursor-pointer'
            onClick={() => handleSubtractQuantity('subtract', 1)}
          >
            -
          </div>
          <div className='flex items-center text-[18px]'>1</div>
          <div
            className='flex items-center justify-center w-[20px] h-[20px] px-[4px] py-[4px] cursor-pointer'
            onClick={() => handleAddQuantity('Add', 1)}
          >
            +
          </div>
        </div>

        <div className='w-[100px] md:w-[146px]'>
          <PrimaryBtn text='Add to Cart' type='submit' />
        </div>

        <div
          onClick={() => setIsFavorite(!isFavorite)}
          className='bg-[#7DDEC1] flex items-center justify-center rounded-full h-[40px] w-[40px] cursor-pointer'
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
      </div>
    </form>
  )
}

export default ProductDetailForm
