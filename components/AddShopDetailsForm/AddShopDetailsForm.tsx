import { Chip, CircularProgress, Radio, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputField from '../InputField/InputField'
import DropdownField from '../DropdownField/DropdownField'
import { cities, states, weOfferData } from 'Constants/constants'
import Image from 'next/image'
import { PrimaryBtn } from '../Buttons'
import UploadInputField from '../UploadInputField/UploadInputField'
import MultiSelectDropdownField from '../MultiSelectDropdownField/MultiSelectDropdownField'
import useCreateShop from 'hooks/shop/useCreateShop'
import useUpdateShop from 'hooks/shop/useUpdateShop'
import { withApollo } from 'lib/apollo/withApollo'
import useStores from 'hooks/useStores'
import { AddShopDetailsFormProps } from 'types'
import useFileUpload from 'hooks/fileUpload/useFileUpload'
import CustomAutocomplete from '../CustomAutocomplete'
import { getCitiesApi, getStatesApi } from 'helpers/apis'
import useEnablePaymentMethodForShop from 'hooks/shop/useEnablePaymentMethodForShop'
import useCreateTaxRate from 'hooks/shop/useCreateTaxRate'
const AddShopDetailsForm = ({ openSuccess }: AddShopDetailsFormProps) => {
  // auth store
  //@ts-ignore
  const { authStore } = useStores()
  const { account } = authStore

  const [shopName, setShopName] = useState('')
  const [shopDescription, setShopDescription] = useState('')

  const [shopTax, setShopTax] = useState('')
  const [shopTaxError, setShopTaxError] = useState('')
  const [logo, setLogo] = useState<File | null>(null)
  const [featuredImage, setFeaturedImage] = useState<File | null>(null)

  useEffect(() => {
    // console.log('logo is ', logo)
  }, [logo])

  const [states, setStates] = useState<any>([])
  const [isLoadingStates, setIsLoadingStates] = useState(false)
  const [state, setState] = useState<string | null>('')
  const [isLoadingCities, setIsLoadingCities] = useState(false)
  const [cities, setCities] = useState<any>([])
  const [city, setCity] = useState<string | null>('')

  const [pickupService, setPickupService] = useState(true)

  const [whatWeOffer, setWhatWeOffer] = useState<any[]>([])

  // Error states
  const [shopNameError, setShopNameError] = useState('')
  const [shopDescriptionError, setShopDescriptionError] = useState('')
  const [logoError, setLogoError] = useState('')
  const [featuredImageError, setFeaturedImageError] = useState('')
  const [stateError, setStateError] = useState('')
  const [cityError, setCityError] = useState('')
  const [whatWeOfferError, setWhatWeOfferError] = useState('')
  const [pickupServiceError, setPickupServiceError] = useState('')

  //phone number state for shop creation/updation
  const [phone, setPhone] = useState<string>()

  useEffect(() => {
    setPhone(account?.phone)
    setState(account?.state)
    setCity(account?.city)
  }, [account])

  // const [cities, setCities] = useState([])
  // const [states, setStates] = useState([])

  useEffect(() => {
    getStatesApi(setStates, setIsLoadingStates)
  }, [])

  useEffect(() => {
    setCities([])
    setCity('')
    getCitiesApi(state, setCities, setIsLoadingCities)
  }, [state])

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'shopName') {
      setShopName(value)
      setShopNameError(value ? '' : 'Shop name is required')
    }
    if (name === 'shopDescription') {
      setShopDescription(value)
      setShopDescriptionError(value ? '' : 'Shop description is required')
    }
    if (name === 'shopTax') {
      setShopTax(value)
      setShopTaxError(value ? '' : 'Tax percentage is required')
    }
  }

  // handle Radio Button change  for pickup service
  const handlePickupServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'yes') {
      setPickupService(true)
      setPickupServiceError('')
    } else {
      setPickupService(false)
      setPickupServiceError('')
    }
  }

  const handleDeleteChip = (chipToDelete: string) => {
    setWhatWeOffer((chips) => chips.filter((chip) => chip !== chipToDelete))
  }

  // handleStateChange function for state dropdown
  const handleStateChange = (state: string) => {
    setState(state)
    setStateError(state ? '' : 'State is required')
  }

  // handleCityChange function for city dropdown
  const handleCityChange = (state: string) => {
    setCity(state)
    setCityError(state ? '' : 'City is required')
  }

  const [error, setError] = useState<string>()

  const [createShop, loadingCreateShop] = useCreateShop()
  const [updateShop, loadingUpdateShop] = useUpdateShop()

  const [createTax, loadingCreateTaxRate] = useCreateTaxRate()
  const [enablePayment, loadingEnablePayment] = useEnablePaymentMethodForShop()

  const handleUpdateShop = async (shopId: string) => {
    const shopUpdated = await updateShop({
      variables: {
        input: {
          shopId,
          shopLogoUrls: {
            primaryShopLogoUrl: logoImageUrl,
          },
          featuredShopImages: {
            URLs: {
              thumbnail: featuredImageUrl?.thumbnail,
              medium: featuredImageUrl?.medium,
              large: featuredImageUrl?.large,
              small: featuredImageUrl?.small,
              original: featuredImageUrl?.original,
            },
            priority: 1,
          },
          isPickup: pickupService,
          categories: whatWeOffer?.map((item) => item.title),
          addressBook: {
            fullName: account?.firstName ? account?.firstName : 'N/A',
            phone: phone ? phone : 'N/A',
            postal: '12345',
            address1: 'sample address',
            city,
            region: state,
            country: 'USA',
            isCommercial: false,
          },
        },
      },
    })
    // console.log('updated shop is ', shopUpdated)
    const shopId2 = shopUpdated?.data?.updateShop?.shop?._id
    if (shopId2) {
      localStorage.setItem('shopId', shopId2)
      handleCreateTaxRate(shopId2)
    }

    try {
    } catch (err: any) {
      setError(err.message)
    }
  }

  const handleEnablePayment = async (shopId: string) => {
    try {
      const enabledPayment = await enablePayment({
        variables: {
          shopId,
          paymentMethodName: 'iou_example',
          isEnabled: true,
        },
      })

      console.log('enablePayment', enabledPayment)
      if (enabledPayment) {
        openSuccess()
      }
    } catch (err: any) {
      setError(err.message)
    }
  }
  const handleCreateTaxRate = async (shopId: string) => {
    try {
      const taxRate = await createTax({
        variables: {
          shopId,
          country: 'United States',
          region: state,
          rate: parseFloat(shopTax),
        },
      })
      console.log('tax rate is ', taxRate)

      if (taxRate?.data?.createTaxRate?.taxRate?._id) {
        handleEnablePayment(shopId)
      }
    } catch (err: any) {
      console.log('err', err)
    }
  }

  const handleCreateShop = async () => {
    try {
      const shop = await createShop({
        variables: {
          name: shopName,
          description: shopDescription,
        },
      })
      const shopId = shop?.data?.createShop?.shop?._id
      if (shopId) {
        handleUpdateShop(shopId)
      }
      // console.log('shop created is ', shop)
    } catch (err: any) {
      setError(err.message)
    }
  }

  const [uploadFile, loadingUploadFile] = useFileUpload()
  const [logoImageUrl, setLogoImageUrl] = useState<string>()
  const [isLoadingLogo, setIsLoadingLogo] = useState(false)
  const [featuredImageUrl, setFeaturedImageUrl] = useState<any>()
  const [isLoadingFeaturedImage, setIsLoadingFeaturedImage] = useState(false)

  //handle logo image
  async function handleUploadLogo(e: any) {
    const logoImage = e.target.files[0]
    if (logoImage.size > 1024 * 1024 * 1) {
      setLogoError('Picture size should be less than 1MB')
      return
    }

    if (logoImage?.type !== 'image/jpeg' && logoImage?.type !== 'image/png') {
      setLogoError('Selected file must be an image')
      return
    }

    setIsLoadingLogo(true)
    //@ts-ignore
    const uploadRes = await uploadFile(logoImage, '/profile-images')

    if (uploadRes?.result?.status) {
      const availableSizes = uploadRes?.result?.data[0]?.availableSizes
      availableSizes['original'] = availableSizes?.large
      availableSizes['small'] = availableSizes?.thumbnail

      // console.log('available sizes are ', availableSizes)

      setLogoImageUrl(availableSizes?.medium)
      setIsLoadingLogo(false)

      // setLogoImageUrl(uploadRes.result.data[0].url[0])
    }

    setIsLoadingLogo(false)
  }

  async function handleUploadFeatureImage(e: any) {
    const featuredImage = e.target.files[0]
    if (featuredImage?.size > 1024 * 1024 * 1) {
      setFeaturedImageError('Picture size should be less than 1MB')
      return
    }

    if (featuredImage?.type !== 'image/jpeg' && featuredImage?.type !== 'image/png') {
      setFeaturedImageError('Selected file must be an image')
      return
    }

    setIsLoadingFeaturedImage(true)
    //@ts-ignore
    const uploadRes = await uploadFile(featuredImage, '/profile-images')

    // console.log(
    //   'uploadRes.result.data[0].url.availableSizes',
    //   uploadRes?.result?.data[0]?.availableSizes,
    // )

    if (uploadRes?.result?.status) {
      const availableSizes = uploadRes?.result?.data[0]?.availableSizes
      availableSizes['original'] = availableSizes?.large
      availableSizes['small'] = availableSizes?.thumbnail

      // console.log('available sizes are ', availableSizes)

      setIsLoadingFeaturedImage(false)
      setFeaturedImageUrl(availableSizes)
      // setFeaturedImageUrl(uploadRes.result.data[0].availableSizes)
    }
    setIsLoadingFeaturedImage(false)
  }

  // handleSubmit function for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Checks if all fields are filled
    if (!shopName || !state || !city) {
      if (!shopName) {
        setShopNameError('Shop name is required')
      }
      if (!state) {
        setStateError('State is required')
      }
      if (!city) {
        setCityError('City is required')
      }
      // Stops the execution of the function
      return
    }

    await handleCreateShop()

    // Logs the form data
    // console.log('form submitted')
    // console.log('shop name is ', shopName)
    // console.log('shop description is ', shopDescription)
    // console.log('logo is ', logo)
    // console.log('featured image is ', featuredImage)
    // console.log('state is ', state)
    // console.log('city is ', city)
    // console.log('what we offer is ', whatWeOffer)
    // console.log('pickup service is ', pickupService)

    // // Resets the form fields
    // setShopName('')
    // setShopDescription('')
    // setLogo(null)
    // setFeaturedImage(null)
    // setState('')
    // setCity('')
    // setWhatWeOffer([])
    // setPickupService(false)

    // Resets the error states
    setShopNameError('')
    setShopDescriptionError('')
    setLogoError('')
    setFeaturedImageError('')
    setStateError('')
    setCityError('')
    setWhatWeOfferError('')
    setPickupServiceError('')
  }

  return (
    <div className='flex justify-center md:justify-end md:mr-[50px] mt-[-10px] md:mt-[30px] pb-[10px]'>
      <div
        style={{
          borderRadius: '5px',
          background: 'rgba(0, 0, 0, 0.60)',
          backdropFilter: 'blur(12.5px)',
        }}
        className='w-[80vw] h-[auto] md:w-[50vw] p-[20px] md:pl-[44px] md:pb-[44px] relative'
      >
        <div className=''>
          <div className='md:mt-[24px]'>
            <Typography
              sx={{
                fontSize: '14px !important',
                fontFamily: 'Josefin Sans',
                lineHeight: 'normal',
                fontWeight: '500',
                letterSpacing: '1px',
                padding: '0px',
                textTransform: 'uppercase',
                color: '#fff',
                '@media (max-width: 767px)': {
                  fontSize: '12px !important',
                },
              }}
            >
              {' '}
              joining is quick and easy
            </Typography>

            <Typography
              sx={{
                marginTop: '10px',
                padding: '0px',
                fontSize: '32px !important',
                fontFamily: 'Open Sans',
                lineHeight: 'normal',
                fontWeight: '800 !important',
                textTransform: 'capitalize',
                color: '#7DDEC1',
                '@media (max-width: 767px)': {
                  fontSize: '24px !important',
                },
              }}
            >
              {' '}
              Add Bakery details
            </Typography>
          </div>
        </div>
        <Image
          src='/Images/x-square.svg'
          alt='x-square'
          width={24}
          height={24}
          className='absolute top-[20px] right-[20px] cursor-pointer'
        />
        {/* </div> */}
        <div className='mt-[24px] md:mt-[42px]'>
          <form onSubmit={handleSubmit}>
            <div className='w-full flex flex-wrap gap-y-[8px] md:gap-y-[24px] justify-between'>
              <div className='w-full md:w-[45%]'>
                <InputField
                  label='shop name'
                  type='text'
                  inputColor='white'
                  name='shopName'
                  value={shopName}
                  errorText={shopNameError}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                {/* <DropdownField
                  label='state'
                  required
                  name='state'
                  errorText={stateError}
                  value={state}
                  options={states}
                  inputColor='white'
                  onChange={handleStateChange}
                /> */}
                <CustomAutocomplete
                  label='state'
                  loading={isLoadingStates}
                  required
                  name='state'
                  inputColor='white'
                  options={states}
                  value={state}
                  errorText={stateError}
                  // setValue={setState}
                  onChange={handleStateChange}
                  setError={setStateError}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                {/* <DropdownField
                  label='city'
                  required
                  name='city'
                  errorText={cityError}
                  value={city}
                  options={cities}
                  inputColor='white'
                  onChange={handleCityChange}
                /> */}
                <CustomAutocomplete
                  label='city'
                  loading={isLoadingCities}
                  required
                  name='city'
                  inputColor='white'
                  options={cities}
                  value={city}
                  errorText={cityError}
                  // setValue={setCity}
                  onChange={handleCityChange}
                  setError={setCityError}
                />
              </div>

              <div className='w-full md:w-[45%]'>
                <InputField
                  label='shop tax rate(%)'
                  type='number'
                  inputColor='white'
                  name='shopTax'
                  value={shopTax}
                  errorText={shopTaxError}
                  required
                  onChange={handleChange}
                />
              </div>

              {/* <span style={{ fontSize: '10px', color: 'white' }}>
                *Enter Tax percentage that will be applicable to individual products
              </span> */}

              <div className='mt-[16px] md:mt-[0px] w-full h-[1px] bg-[#fff]' />

              <div className='w-full'>
                <Typography
                  sx={{
                    mt: '0px',
                    fontSize: '14px !important',
                    fontFamily: 'Josefin Sans',
                    lineHeight: 'normal',
                    fontWeight: '500',
                    letterSpacing: '1px',
                    padding: '0px',
                    textTransform: 'uppercase',
                    color: '#fff',
                    '@media (max-width: 767px)': {
                      mt: '16px',
                      fontSize: '12px !important',
                    },
                  }}
                >
                  {`You can start adding these bakery details now or later!`}
                </Typography>
              </div>

              <div className='w-full md:w-[45%]'>
                <UploadInputField
                  label='upload logo'
                  inputColor='white'
                  name='logo'
                  // value={logo}
                  // errorText={logoError}
                  required={false}
                  // onChange={handleChange}
                >
                  <input
                    className='w-full bg-transparent'
                    type='file'
                    onChange={handleUploadLogo}
                  />
                </UploadInputField>
              </div>
              {isLoadingLogo ? (
                <div>
                  <CircularProgress
                    sx={{
                      color: '#7DDEC1',
                      height: '20px !important',
                      width: '20px !important',
                    }}
                  />
                </div>
              ) : (
                <div>
                  <img style={{ height: '80px', borderRadius: '10px' }} src={logoImageUrl} />
                </div>
              )}

              <div className='w-full md:w-[45%]'>
                <UploadInputField
                  label='featured image'
                  inputColor='white'
                  name='featuredImage'
                  // value={featuredImage}
                  // errorText={featuredImageError}
                  required={false}
                  // onChange={handleChange}
                >
                  <input
                    className='w-full bg-transparent'
                    type='file'
                    onChange={handleUploadFeatureImage}
                  />
                </UploadInputField>
              </div>
              {isLoadingFeaturedImage ? (
                <div>
                  <CircularProgress
                    sx={{
                      color: '#7DDEC1',
                      height: '20px !important',
                      width: '20px !important',
                    }}
                  />
                </div>
              ) : (
                <div>
                  <img
                    style={{ height: '80px', borderRadius: '10px' }}
                    src={featuredImageUrl?.thumbnail}
                  />
                </div>
              )}

              <div className='w-full md:w-[45%]'>
                <div className='flex flex-col capitalize'>
                  <label
                    style={{
                      color: 'white',
                    }}
                  >
                    <Typography sx={{}} className={`text-[12px]`} variant='body1'>
                      Pickup service
                    </Typography>
                  </label>

                  <div className='flex gap-x-[33px]'>
                    <div className='flex items-center gap-x-[18px]'>
                      <Radio
                        sx={{
                          color: '#7DDEC1',
                          '&.Mui-checked': {
                            color: '#7DDEC1',
                          },
                        }}
                        checked={pickupService === true}
                        onChange={handlePickupServiceChange}
                        value={'yes'}
                        name='radio-buttons'
                        inputProps={{ 'aria-label': 'A' }}
                      />
                      <Typography
                        sx={{
                          color: 'white',
                        }}
                        className={`text-[12px]`}
                        variant='body1'
                      >
                        yes
                      </Typography>
                    </div>
                    <div className='flex items-center gap-x-[18px]'>
                      <Radio
                        sx={{
                          color: '#7DDEC1',
                          '&.Mui-checked': {
                            color: '#7DDEC1',
                          },
                        }}
                        checked={pickupService === false}
                        onChange={handlePickupServiceChange}
                        value={'no'}
                        name='radio-buttons'
                        inputProps={{ 'aria-label': 'B' }}
                      />
                      <Typography
                        sx={{
                          color: 'white',
                          fontSize: '12px !important',
                        }}
                      >
                        no
                      </Typography>
                    </div>
                  </div>

                  {pickupServiceError && (
                    <Typography
                      sx={{
                        color: 'red',
                        fontSize: '12px !important',
                      }}
                    >
                      {pickupServiceError}
                    </Typography>
                  )}
                </div>
              </div>

              <div className='w-full'>
                <MultiSelectDropdownField
                  label='what we offer'
                  name='whatWeOffer'
                  value={whatWeOffer}
                  errorText={whatWeOfferError}
                  required={false}
                  options={weOfferData}
                  inputColor='white'
                  setValue={setWhatWeOffer}
                />

                {whatWeOffer?.length > 0 && (
                  <div className='flex flex-wrap gap-x-[24px] gap-y-[10px] mt-[15px]'>
                    {whatWeOffer?.map((chip, index) => (
                      <Chip
                        key={index}
                        label={chip.title}
                        deleteIcon={
                          // <div className='h-full flex items-center'>
                          <img src='/Images/x.svg' alt='x' className='h-[12px] w-[12px]' />
                          // </div>
                        }
                        sx={{
                          backgroundColor: '#fff',
                          padding: '8px 12px',
                          borderRadius: '16px',
                          height: '32px',
                          fontSize: '12px',
                          lineHeight: 'normal',
                          fontFamily: 'Open Sans',
                          fontWeight: '400',
                          color: '#090909',
                          textTransform: 'capitalize',
                        }}
                        onDelete={() => handleDeleteChip(chip)}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className='w-full'>
                <InputField
                  label='shop description'
                  type='textarea'
                  inputColor='white'
                  rows={7}
                  name='shopDescription'
                  value={shopDescription}
                  errorText={shopDescriptionError}
                  required={false}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* {loadingCreateShop || loadingUpdateShop ? (
              <div className='mt-[10px]'>
                <p style={{ color: 'white' }}>Loading...</p>
              </div>
            ) : null} */}

            <div className='mt-[24px] md:mt-[23px]'>
              <PrimaryBtn
                text='Save and Continue'
                type='submit'
                loading={loadingCreateShop || loadingUpdateShop}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withApollo()(AddShopDetailsForm)
