import Navbar from '../NavBar/NavBar'
import { InputAdornment, TextField, Typography } from '@mui/material'

import { PrimaryBtn } from '../Buttons'
import MapPinFindBaker from '../../assets/icons/mapPinFindBaker'
import SearchFindBaker from '../../assets/icons/searchFindBaker'
import SelecterFindBaker from '../../assets/icons/selecterFindBaker'

import styles from './styles.module.css'
import DropdownField from '../DropdownField/DropdownField'
import { useState } from 'react'
import { ProductTypes } from 'Constants/constants'
import InputField from '../InputField/InputField'

const Search = () => {
  const [address, setAddress] = useState('')
  const [search, setSearch] = useState('')
  const [productType, setProductType] = useState('')

  const [addressError, setAddressError] = useState('')
  const [searchErr, setSearchErr] = useState('')
  const [productTypeErr, setProductTypeErr] = useState('')

  // handle change function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'search') {
      setSearch(value)
      // setSearchErr(value ? '' : 'Search is required')
    } else if (name === 'address') {
      setAddress(value)
      // setAddressErr(value ? '' : 'Search is required')
    }
  }

  // handle Product Type Change function for Product Types dropdown
  const handleProductTypeChange = (type: string) => {
    setProductType(type)
    // setProductTypeErr(type ? '' : 'State is required')
  }

  // handleSubmit function for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Logs the form data
    console.log('address is ', address)
    console.log('search is ', search)
    console.log('product type is ', productType)

    // Resets the form fields
    // setAddress('')
    // setSearch('')
    // setProductType('')

    // Resets the error states
    // setAddressErr('')
    // setSearchErr('')
    // setProductTypeErr('')
  }

  return (
    <>
      <Navbar />
      <div className='relative flex flex-col justify-center items-center w-full'>
        <div
          className={`absolute top-[3%] md:top-[-5.2%] overflow-hidden w-[100vw] h-[432.26px] md:w-[932.14px] md:h-[853.55px] flex-shrink-0 ${styles.findYourBakerBackground}`}
        />
        <div className='flex flex-col justify-center items-center text-center w-[242px] h-[80px] md:w-[525px] md:h-[97px] mt-[35px] mb:mt-[100px]'>
          <Typography variant='h4' sx={{ color: '#7DDEC1' }}>
            Find Your Baker
          </Typography>

          <Typography variant='body2'>
            Discover amazing, talented bakers in your community!
          </Typography>
        </div>
        <div className='flex justify-center items-center w-[242px] h-[250px] md:w-[525px] md:h-[360px] mt-[24px]'>
          <img
            src='/Images/cupcake-findBaker.png'
            alt='cupcake'
            className='w-[204.808px] h-[250px] md:w-[295px] md:h-[360px]'
          />
        </div>

        {/* <form
          onSubmit={handleSubmit}
          className='w-full flex flex-col md:flex-row justify-between md: items-center gap-y-[12px]'
        >
          <div className='w-full md:w-[70%]  flex flex-col md:flex-row gap-x-[24px] gap-y-[12px]'>
            <div className='w-full md:w-[45%]'>
              <DropdownField
                // label='state'
                required={false}
                name='state'
                placeholder='Choose Product Category'
                errorText={catagoryError}
                value={catagory}
                options={ProductsCatagory}
                inputColor='#6C6C6C'
                onChange={handleCatagoryChange}
              />
            </div>

            <div className='w-full md:w-[45%]'>
              <InputField
                // label='search'
                type='text'
                placeholder='Search'
                inputColor='#6C6C6C'
                name='search'
                value={search}
                startIcon={<img src='/Images/search-input-icon.svg' alt='search' />}
                // error={isError}
                errorText={searchErr}
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='w-full md:w-[30%]  flex justify-center gap-[20px] md:justify-between'>
            <div className='flex items-center'>
              <SecondaryBtn text='reset' color='#090909' handleClick={handleReset} />
            </div>
            <div className='w-[45%] md:w-[60%]'>
              <PrimaryBtn text='search' type='submit' />
            </div>
          </div>
        </form> */}
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center items-center gap-y-[24px] w-[267px] h-[192px] md:w-[525px] md:h-[261px] mb-[48px] md:mb-[100px]'>
            <div className='w-full md:w-[55%]'>
              <InputField
                // label='search'
                type='text'
                placeholder='Enter your address here'
                inputColor='#6C6C6C'
                name='search'
                value={search}
                startIcon={<MapPinFindBaker />}
                // error={isError}
                errorText={searchErr}
                required
                onChange={handleChange}
              />
            </div>
            <div className='flex justify-center items-center'>
              <div className='w-[97px] h-[0.5px] bg-[#000000]' />
              <Typography variant='body1' className={`text-[12px] text-[#000000] mx-[10px]`}>
                OR
              </Typography>
              <div className='w-[97px] h-[0.5px] bg-[#000]' />
            </div>

            <div className='w-full md:w-[55%]'>
              <InputField
                // label='search'
                type='text'
                placeholder='Search by bakery name'
                inputColor='#6C6C6C'
                name='search'
                value={search}
                startIcon={<SearchFindBaker />}
                // error={isError}
                errorText={searchErr}
                required
                onChange={handleChange}
              />
            </div>

            <div className='w-full md:w-[55%]'>
              <DropdownField
                // label='state'
                required={false}
                name='state'
                placeholder='Product Type'
                errorText={productTypeErr}
                value={productType}
                options={ProductTypes}
                inputColor='#6C6C6C'
                onChange={handleProductTypeChange}
              />
            </div>
            <div className='rounded-[5px] w-[267px] h-[45px] mt-[24px]'>
              <PrimaryBtn type='submit' text='Search' />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Search
