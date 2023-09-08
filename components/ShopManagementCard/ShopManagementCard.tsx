import React, { useState } from 'react'
import styles from './styles.module.css'
import { Typography } from '@mui/material'
import InputField from '../InputField/InputField'
import { PrimaryBtn } from '../Buttons'
import DropdownField from '../DropdownField/DropdownField'
import { BakeryNameOptions, DurationOptions, RatingOptions } from 'Constants/constants'
import ProfileBreadCrumbs from '../ProfileBreadCrumbs/ProfileBreadCrumbs'
import ShopManagementTable from '../ShopManagementTable/ShopManagementTable'

const ShopManagementCard = () => {
  const [search, setSearch] = useState('')

  const [duration, setDuration] = useState('')
  const [itemName, setItemName] = useState('')
  const [rating, setRating] = useState('')

  //   Error state for input fields
  const [searchError, setSearchError] = useState('')

  const [durationError, setDurationError] = useState('')
  const [itemNameError, setItemNameError] = useState('')
  const [ratingError, setRatingError] = useState('')

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'search') {
      setSearch(value)
      //   setSearchError(value ? '' : 'search is required')
    }
  }

  // handleDurationChange function for duration dropdown
  const handleDurationChange = (duration: string) => {
    setDuration(duration)
    // setDurationError(duration ? '' : 'duration is required')
  }

  // handleItemNameChange function for item name dropdown
  const handleItemNameChange = (name: string) => {
    setItemName(name)
    // setItemNameError(name ? '' : 'Item name is required')
  }

  // handleRatingChange function for rating dropdown
  const handleRatingChange = (rating: string) => {
    setRating(rating)
    // setRatingError(rating ? '' : 'Rating is required')
  }

  //   handleFilters function for filters icon
  const handleFilters = () => {
    console.log('filters clicked')
  }

  //   handleFiltersSubmit function for filters form
  const handleFiltersSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // form logs
    console.log('duration is ', duration)
    console.log('item name is ', itemName)
    console.log('rating is ', rating)

    console.log('filters submitted')
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // form logs
    console.log('search is ', search)

    // Reset form
    setSearch('')

    // Reset error state
    setSearchError('')

    console.log('form submitted')
  }

  return (
    <div className={styles.card}>
      <ProfileBreadCrumbs />

      <div className='flex flex-col md:flex-row items-start md:items-center justify-between mt-[48px] gap-y-[24px]'>
        <Typography
          sx={{
            fontSize: '48px !important',
            fontWeight: '700 !important',
            lineHeight: 'normal',
            fontFamily: 'Josefin Sans',
            textTransform: 'capitalize',
            color: '#090909',
            fontFeatureSettings: "'clig' off, 'liga' off",
            '@media (max-width: 767px)': {
              fontSize: '24px !important',
            },
          }}
        >
          Shop Management
        </Typography>

        <div>
          <form onSubmit={handleSearchSubmit}>
            <div className='flex gap-x-[12px] md:gap-x-[24px]'>
              <div className='w-[50%] md:w-[298px]'>
                <InputField
                  // label='last name'
                  type='text'
                  inputColor='#888'
                  name='search'
                  placeholder='Search desired sale item'
                  value={search}
                  errorText={searchError}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className='w-[40%] md:w-[94px] h-[35px]'>
                <PrimaryBtn type='submit' text='search' />
              </div>

              <div className='block md:hidden w-[10%]'>
                <img
                  src='/Images/filters-icon.svg'
                  alt='line'
                  className='h-[35px]'
                  onClick={handleFilters}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className='hidden md:block mt-[24px] md:mt-[48px]'>
        <form onSubmit={handleFiltersSubmit}>
          <div className='flex gap-x-[12px] items-center'>
            <Typography
              sx={{
                fontSize: '18px !important',
                fontWeight: '600 !important',
                lineHeight: 'normal',
                fontFamily: 'Open Sans',
                // textTransform: 'capitalize',
                color: '#090909',
              }}
            >
              Sale item placed in catalog
            </Typography>

            <div className='w-full md:w-[15%]'>
              <DropdownField
                // label='state'
                required
                name='duration'
                errorText={durationError}
                placeholder='past 1 week'
                value={duration}
                options={DurationOptions}
                inputColor='#888'
                onChange={handleDurationChange}
              />
            </div>

            <div className='w-full md:w-[15%]'>
              <DropdownField
                // label='state'
                required
                name='itemName'
                errorText={itemNameError}
                placeholder='Item name'
                value={itemName}
                options={BakeryNameOptions}
                inputColor='#888'
                onChange={handleItemNameChange}
              />
            </div>

            <div className='w-full md:w-[15%]'>
              <DropdownField
                // label='state'
                required
                name='rating'
                placeholder='Star rating'
                errorText={ratingError}
                value={rating}
                options={RatingOptions}
                inputColor='#888'
                onChange={handleRatingChange}
              />
            </div>
          </div>
        </form>
      </div>

      <div className='mt-[56px] md:mt-[64px]'>
        <ShopManagementTable />
      </div>
    </div>
  )
}

export default ShopManagementCard
