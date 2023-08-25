import React, { useState } from 'react'
import DropdownField from '../DropdownField/DropdownField'
import { ProductsCatagory } from 'Constants/constants'
import InputField from '../InputField/InputField'
import { PrimaryBtn, SecondaryBtn } from '../Buttons'

const InspirationGalleryForm = () => {
  const [catagory, setCatagory] = useState('')
  // const [search, setSearch] = useState('')

  const [catagoryError, setCatagoryError] = useState('')
  // const [searchErr, setSearchErr] = useState('')

  // handle change function for input fields
  // const handleChange = (name: string, value: string) => {
  //   if (name === 'search') {
  //     setSearch(value)
  //     // setSearchErr(value ? '' : 'Search is required')
  //   }
  // }

  // handle Reset function for form reset
  // const handleReset = () => {
  //   console.log('reset')
  //   setCatagory('')
  //   setSearch('')
  // }

  // handle Catagory Change function for catagory dropdown
  const handleCatagoryChange = (catagory: string) => {
    setCatagory(catagory)
    setCatagoryError(catagory ? '' : 'State is required')
  }

  // handleSubmit function for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Logs the form data
    console.log('catagory is ', catagory)
    // console.log('search is ', search)

    // Resets the form fields
    // setCatagory('')
    // setSearch('')

    // Resets the error states
    // setCatagoryError('')
    // setSearchErr('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full md:w-[50%] flex flex-col md:flex-row justify-between md: items-center  gap-[12px]'
    >
      <div className='w-full md:w-[70%]  flex flex-col md:flex-row gap-x-[24px] gap-y-[12px]'>
        <div className='w-full'>
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

        {/* <div className='w-full md:w-[45%]'>
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
        </div> */}
      </div>
      <div className='w-full md:w-[30%]  flex justify-center gap-[20px] md:justify-between'>
        {/* <div className='flex items-center'>
          <SecondaryBtn text='reset' color='#090909' handleClick={handleReset} />
        </div> */}
        <div className='w-[100%] md:w-[140px] h-[35px]'>
          <PrimaryBtn text='search' type='submit' />
        </div>
      </div>
    </form>
  )
}

export default InspirationGalleryForm
