import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { CircularProgress, Typography } from '@mui/material'
import InputField from '../InputField/InputField'
import { PrimaryBtn } from '../Buttons'
import DropdownField from '../DropdownField/DropdownField'
import { BakeryNameOptions, DurationOptions, RatingOptions } from 'Constants/constants'
import OrderManagementTable from '../OrderManagementTable/OrderManagementTable'
import ProfileBreadCrumbs from '../ProfileBreadCrumbs/ProfileBreadCrumbs'
import useCustomOrdersByShop from 'hooks/orders/useCustomOrdersByShop'
import CustomOrdersTable from '../CustomOrdersTable/CustomOrdersTable'
import CustomPagination from '../CustomPagination'

const CustomOrderManagementCard = () => {
  //items per page to display
  const [itemsPerPage, setItemsPerPage] = useState<number>(5)

  //total number of pages for the paginator
  const [pageCount, setPageCount] = useState<number>(0)

  //we are using this state to display the current page, which differs from the offset value
  const [page, setCurrentPage] = useState(1)

  //for the offset filter
  const [offset, setOffset] = useState(0)

  const handlePageClick = (pageNum: number) => {
    setOffset((pageNum - 1) * itemsPerPage)
    setCurrentPage(pageNum)
  }

  const [customOrders, loadingCustomOrders, totalCount, refetchCustomOrders] =
    useCustomOrdersByShop({
      first: itemsPerPage,
      offset,
    })

  console.log('customOrders', customOrders)

  const [search, setSearch] = useState('')

  const [duration, setDuration] = useState('')
  const [bakeryName, setBakeryName] = useState('')
  const [rating, setRating] = useState('')

  //   Error state for input fields
  const [searchError, setSearchError] = useState('')

  const [durationError, setDurationError] = useState('')
  const [bakeryNameError, setBakeryNameError] = useState('')
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

  // handleBakeryNameChange function for bakery name dropdown
  const handleBakeryNameChange = (name: string) => {
    setBakeryName(name)
    // setBakeryNameError(name ? '' : 'Bakery name is required')
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
    console.log('bakery name is ', bakeryName)
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

  useEffect(() => {
    let page = Math.ceil(totalCount / itemsPerPage)
    setPageCount(page)
  }, [totalCount])

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
          custom orders
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
                  placeholder='Search item name'
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
              Orders placed in
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

            {/* <div className='w-full md:w-[15%]'>
              <DropdownField
                // label='state'
                required
                name='bakeryName'
                errorText={bakeryNameError}
                placeholder='Bakery name'
                value={bakeryName}
                options={BakeryNameOptions}
                inputColor='#888'
                onChange={handleBakeryNameChange}
              />
            </div> */}

            {/* <div className='w-full md:w-[15%]'>
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
            </div> */}
          </div>
        </form>
      </div>

      {loadingCustomOrders ? (
        <div className='w-full flex justify-center items-center mt-[56px] md:mt-[64px]'>
          <CircularProgress
            sx={{
              color: '#7DDEC1',
            }}
          />
        </div>
      ) : (
        <>
          <div className='mt-[56px] md:mt-[64px]'>
            <CustomOrdersTable orders={customOrders} refetchOrders={refetchCustomOrders} />
          </div>
          <div className='mt-[32px] md:mt-[56px] flex justify-center'>
            <CustomPagination
              count={pageCount}
              boundaryCount={1}
              siblingCount={1}
              page={page}
              onChange={handlePageClick}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default CustomOrderManagementCard
