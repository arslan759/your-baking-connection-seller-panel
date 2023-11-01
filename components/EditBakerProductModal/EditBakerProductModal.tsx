import React, { useEffect, useState } from 'react'
import { PrimaryBtn } from '../Buttons'
import { Modal, Radio, Slider, Stack, Typography } from '@mui/material'
import InputField from '../InputField/InputField'
import CancelBtn from '../Buttons/CancelBtn'
import AddBakerProductImages from '../AddBakerProductImages/AddBakerProductImages'
import useUpdateProduct from 'hooks/product/useUpdateProduct'
import useUpdateProductVariant from 'hooks/product/useUpdateProductVariant'
import useUpdateSimpleInventory from 'hooks/product/useUpdateSimpleInventory'
import useUpdatePublishProduct from 'hooks/product/usePublishProduct'
import toast from 'react-hot-toast'
import { withApollo } from 'lib/apollo/withApollo'
import { ProductMediaInterface } from 'types'
import { useRouter } from 'next/navigation'
import CustomBuilder from '../CustomBuilder'
import { validateDates } from 'helpers/validations'
import EditBakerProductImages from '../EditBakerProductImages'

interface EditBakerProductModalProps {
  product: any
  variants: any
  category: string
  open: boolean
  onClose: () => void
}

interface Option {
  optionLabel: string
  price: number | string
}

interface Attribute {
  attribute: string
  options: Option[]
}

const EditBakerProductModal = ({
  product,
  variants,
  category,
  open,
  onClose,
}: EditBakerProductModalProps) => {
  const router = useRouter()

  // input states
  const [productTitle, setProductTitle] = useState(product?.title)
  const [productDescription, setProductDescription] = useState(product?.description)
  const [productPrice, setProductPrice] = useState(variants?.pricing[0].price)
  const [compareAtPrice, setCompareAtPrice] = useState(variants?.pricing[0].compareAtPrice?.amount)
  const [customField, setCustomField] = useState('')

  const [isSalesTax, setIsSalesTax] = useState(variants?.isTaxable)
  const [productQuantity, setProductQuantity] = useState(variants?.inventoryInStock)
  const [listingStartDate, setListingStartDate] = useState(
    product?.productListingSchedule?.startDate,
  )
  const [listingEndDate, setListingEndDate] = useState(product?.productListingSchedule?.endDate)
  const [fulfillmentDate, setFulfillmentDate] = useState(product?.availableFulfillmentDates)

  const [productMedia, setProductMedia] = useState<ProductMediaInterface[]>([])
  const [productAttributes, setProductAttributes] = useState<Attribute[]>([])
  const [showPriceFields, setShowPriceFields] = useState<boolean[]>([])

  const [mediaPriority, setMediaPriority] = useState<number>(1)

  const handleChangeProductAttributes = (attributes: Attribute[]) => {
    setProductAttributes(attributes)
  }

  const handleChangeShowPriceFields = (fields: boolean[]) => {
    setShowPriceFields(fields)
  }

  const filterMedia = (media: any) => {
    return media?.map((item: any) => {
      return {
        productId: item.productId,
        URLs: {
          large: item.URLs.large,
          medium: item.URLs.medium,
          original: item.URLs.original,
          small: item.URLs.small,
          thumbnail: item.URLs.thumbnail,
        },
        priority: item.priority,
      }
    })
  }

  const filterAttributes = (attribute: any) => {
    return attribute?.map((item: any, index: number) => {
      return {
        attribute: item.attribute,
        options: item.options.map((option: any) => {
          if (option.price) {
            setShowPriceFields((prev) => {
              prev[index] = true
              return prev
            })
          }

          return {
            optionLabel: option.optionLabel,
            price: parseFloat(option.price),
          }
        }),
      }
    })
  }

  //test effect remove later
  useEffect(() => {
    // console.log('product in edit product modal is ', product)
    // console.log('variant in edit product modal is ', variants)

    // console.log('media is', product?.media)
    const updatedMedia = filterMedia(product?.media)
    const updatedAttributes = filterAttributes(product?.productAttributes)

    setProductMedia(updatedMedia)
    setProductAttributes(updatedAttributes)
    // setMediaPriority(updatedMedia.length + 1)

    // console.log('updated media is ', updatedMedia)
    // console.log('updated attributes is ', updatedAttributes)
  }, [product, variants])

  // error states
  const [productTitleError, setProductTitleError] = useState('')
  const [productDescriptionError, setProductDescriptionError] = useState('')
  const [productPriceError, setProductPriceError] = useState('')
  const [customFieldError, setCustomFieldError] = useState('')
  const [productImagesError, setProductImagesError] = useState('')
  const [productQuantityError, setProductQuantityError] = useState('')
  const [productListingError, setProductListingError] = useState('')
  const [fulfillmentDateError, setFulfillmentDateError] = useState('')
  const [productAttributesError, setProductAttributesError] = useState<any[]>([
    {
      attribute: '',
      options: [
        {
          optionLabel: '',
          price: '',
        },
      ],
    },
  ])

  const [updateProductFunction, loadingUpdateProduct] = useUpdateProduct()
  const [updateProductVariantFunction, loadingUpdateProductVariant] = useUpdateProductVariant()
  const [updateSimpleInventoryFunction, loadingUpdateSimpleInventory] = useUpdateSimpleInventory()
  const [publishProductFunction, loadingPublishProduct] = useUpdatePublishProduct()

  const [saveBtnDisable, setSaveBtnDisable] = useState(false)

  const shopId = localStorage.getItem('shopId')

  useEffect(() => {
    setSaveBtnDisable(
      loadingUpdateProduct ||
        loadingUpdateProductVariant ||
        loadingUpdateSimpleInventory ||
        loadingPublishProduct,
    )
  }, [
    loadingUpdateProduct,
    loadingUpdateProductVariant,
    loadingUpdateSimpleInventory,
    loadingPublishProduct,
  ])

  function ensureUniquePriorities(arr: any) {
    // Create an object to keep track of existing priorities
    const priorityCounts = {} as any

    // Loop through the array and check for duplicate priorities
    for (const item of arr) {
      if (item.priority in priorityCounts) {
        // Priority is not unique, generate a random number from 1 to 10
        let randomPriority
        do {
          randomPriority = Math.floor(Math.random() * 10) + 1
        } while (randomPriority in priorityCounts)

        // Update the item's priority and priorityCounts
        item.priority = randomPriority
        priorityCounts[randomPriority] = true
      } else {
        // Priority is unique, add it to priorityCounts
        priorityCounts[item.priority] = true
      }
    }

    setProductMedia(arr)
    return arr
  }

  //step 1: update Product
  const updateProduct = async () => {
    try {
      let variables = {
        shopId: shopId,
        productId: product?.productId,
        product: {
          title: productTitle,
          description: productDescription,
          isVisible: true,
          media: productMedia,
          productListingSchedule: {
            startDate: listingStartDate ? listingStartDate : '',
            endDate: listingEndDate ? listingEndDate : '',
          },
          availableFulfillmentDates: fulfillmentDate,
          productAttributes,
        },
      }
      const updatedProduct = await updateProductFunction({ variables })

      // console.log('updated product is', updatedProduct)

      //@ts-ignore
      const productId = updatedProduct?.data?.updateProduct?.product?._id
      //@ts-ignore
      const variantId = updatedProduct?.data?.updateProduct?.product?.variants[0]?._id

      if (productId) {
        // console.log('product Id', productId)
        await updateProductVariant(productId, variantId)
      }
    } catch (err: any) {
      toast.error(`Error is ', ${err?.message}`)
      // console.log('updateproduct error', err)
    }
  }

  //step 2: update product variant
  const updateProductVariant = async (productId: string, variantId: string) => {
    try {
      let variables = {
        shopId: shopId,
        variantId,
        variant: {
          isVisible: true,
          price: parseFloat(productPrice),
          compareAtPrice: parseFloat(compareAtPrice),
          attributeLabel: `${productTitle}-label`,
          isTaxable: isSalesTax,
          media: productMedia,
        },
      }

      const updatedProductVariant = await updateProductVariantFunction({ variables })

      // console.log('updated product variant is ', updatedProductVariant)

      if (updatedProductVariant?.data?.updateProductVariant?.variant?._id) {
        await publishProduct([productId], variantId)
      }
    } catch (err: any) {
      toast.error(`Error is ', ${err?.message}`)
      // console.log('error in updating variant', err)
    }
  }

  //step 2.5 (optional: only applicable if the quantity is not unlimited)
  const updateSimpleInventory = async (productId: string, variantId: string) => {
    try {
      let variables = {
        shopId: shopId,
        inventoryInStock: productQuantity,
        productConfiguration: {
          productId,
          productVariantId: variantId,
        },
        canBackOrder: false,
      }
      const updatedInventory = await updateSimpleInventoryFunction({ variables })

      // console.log('updated Inventory is ', updatedInventory)
    } catch (err: any) {
      toast.error(`Error is ', ${err?.message}`)
      // console.log('updating inventory error ', err)
    }
  }

  //step 3: publish product
  const publishProduct = async (productId: string[], variantId: string) => {
    try {
      //Product is not unlimited quantity

      if (productQuantity < 100) {
        await updateSimpleInventory(productId[0], variantId)
      }

      const publish = await publishProductFunction({
        variables: {
          productIds: productId,
        },
      })
      if (publish.data.publishProductsToCatalog[0]._id) {
        // console.log('coming to this condition')
        window.location.reload()
        onClose()
      }
      toast.success('Updated successfully')
      // console.log('publish product success', publish)
    } catch (err: any) {
      toast.error(`Error is ', ${err?.message}`)
      // console.log('error publishing product', err)
    }
  }

  // handleChange function for input fields
  const handleChange = (name: string, value: string) => {
    if (name === 'productTitle') {
      setProductTitle(value)
      setProductTitleError(value ? '' : 'Product title is required')
    }

    if (name === 'productDescription') {
      setProductDescription(value)
      setProductDescriptionError(value ? '' : 'Product description is required')
    }

    if (name === 'productPrice') {
      setProductPrice(value)
      setProductPriceError(value ? '' : 'Product price is required')
    }

    if (name === 'compareAtPrice') {
      setCompareAtPrice(value)
    }

    if (name === 'listingStartDate') {
      setListingStartDate(value)
      // setProductListingError(value ? '' : 'Listing start date is required')
    }

    if (name === 'listingEndDate') {
      setListingEndDate(value)
      // setProductListingError(value ? '' : 'Listing end date is required')
    }

    if (name === 'fulfillmentDate') {
      setFulfillmentDate(value)
      // setFulfillmentDateError(value ? '' : 'Fulfillment date is required')
    }
  }

  // handle Radio Button change  for  sale tax
  const handleSaleTaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'yes') {
      setIsSalesTax(true)
    } else {
      setIsSalesTax(false)
    }
  }

  // quantity slider handler
  const handleQuantityChange = (event: Event, newValue: number | number[]) => {
    setProductQuantity(newValue as number)
  }

  //update product images

  const handleUpdateProductMedia = (image: any) => {
    // console.log('image in parent is ', image)

    setMediaPriority((prev) => prev + 1)

    // console.log('before updated media ', [
    //   ...productMedia,
    //   {
    //     productId: '',
    //     URLs: image,
    //     priority: mediaPriority,
    //   },
    // ])

    const updatedProductMedia = ensureUniquePriorities([
      ...productMedia,
      {
        productId: '',
        URLs: image,
        priority: mediaPriority,
      },
    ])

    // console.log('updated product media is ', updatedProductMedia)

    setProductMedia(updatedProductMedia)
  }

  const validateProductAttributes = () => {
    let isValid = true
    let updatedProductAttributesError = [...productAttributesError]

    productAttributes.forEach((attribute, index) => {
      if (!attribute.attribute) {
        updatedProductAttributesError[index] = {
          attribute: 'Attribute is required',
          options: [],
        }
        isValid = false
      } else {
        updatedProductAttributesError[index] = {
          attribute: '',
          options: [],
        }
      }

      attribute.options.forEach((option, optionIndex) => {
        if (!option.optionLabel) {
          updatedProductAttributesError[index].options[optionIndex] = {
            optionLabel: 'Option label is required',
            price: '',
          }
          if (showPriceFields[index] && !option.price) {
            updatedProductAttributesError[index].options[optionIndex] = {
              optionLabel: 'Option label is required',
              price: 'Price is required',
            }
          } else {
            updatedProductAttributesError[index].options[optionIndex] = {
              optionLabel: 'Option label is required',
              price: '',
            }
          }
          isValid = false
        } else {
          updatedProductAttributesError[index].options[optionIndex] = {
            optionLabel: '',
            price: '',
          }
          if (showPriceFields[index] && !option.price) {
            updatedProductAttributesError[index].options[optionIndex] = {
              optionLabel: '',
              price: 'Price is required',
            }
            isValid = false
          } else {
            updatedProductAttributesError[index].options[optionIndex] = {
              optionLabel: '',
              price: '',
            }
          }
        }
      })
    })
    setProductAttributesError(updatedProductAttributesError)

    return isValid
  }

  const removeAttributeError = (index: number) => {
    let updatedProductAttributesError = [...productAttributesError]
    updatedProductAttributesError?.splice(index, 1)
    // updatedProductAttributesError[index] = {
    //   attribute: '',
    //   options: [],
    // }
    setProductAttributesError(updatedProductAttributesError)
  }

  const removeOptionError = (attrIndex: number, optionIndex: number) => {
    let updatedProductAttributesError = [...productAttributesError]
    updatedProductAttributesError[attrIndex]?.options?.splice(optionIndex, 1)
    // updatedProductAttributesError[attrIndex].options[optionIndex] = {
    //   optionLabel: '',
    //   price: '',
    // }
    setProductAttributesError(updatedProductAttributesError)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // console.log('product media is ', productMedia)

    // return

    if (
      !productTitle ||
      !productDescription ||
      !productPrice ||
      productMedia.length === 0 ||
      !productQuantity
    ) {
      setProductTitleError(productTitle ? '' : 'Product title is required')
      setProductDescriptionError(productDescription ? '' : 'Product description is required')
      setProductPriceError(productPrice ? '' : 'Product price is required')
      setProductImagesError(productMedia.length > 0 ? '' : 'Product images are required')
      setProductQuantityError(productQuantity ? '' : 'Product quantity is required')
      return
    }

    const isValidListingDates = validateDates(
      listingStartDate,
      listingEndDate,
      setProductListingError,
    )

    // console.log('listing start date is ', listingStartDate)
    // console.log('listing end date is ', listingEndDate)
    // console.log('fullfillment date is ', fulfillmentDate)

    // return

    const isValidFulfillmentDate = validateDates(fulfillmentDate, '', setFulfillmentDateError)
    const isValidAttributes = validateProductAttributes()

    if (!isValidListingDates || !isValidFulfillmentDate || !isValidAttributes) {
      return
    }

    await updateProduct()

    // console.log('product title is ', productTitle)
    // console.log('product description is ', productDescription)
    // console.log('product price is ', productPrice)
    // console.log('custom field is ', customField)
    // console.log('is sales tax ', isSalesTax)
    // console.log('product quantity is ', productQuantity)
    // console.log('listing start date is ', listingStartDate)
    // console.log('listing end date is ', listingEndDate)
    // console.log('fulfillment date is ', fulfillmentDate)

    // console.log('add product form submitted')
  }

  useEffect(() => {
    // console.log('product attributes are ', productAttributes)
    // console.log('show check', showPriceFields)
  }, [productAttributes, showPriceFields])
  return (
    <Modal
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      open={open}
      onClose={onClose}
    >
      <div
        className='w-[90vw] max-h-[90vh] overflow-scroll md:w-[720px] md:h-fit bg-[#fff] p-[16px] md:p-[36px] relative'
        style={{
          border: 'none !important',
          boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.15)',
          borderRadius: '8px',
        }}
      >
        <Typography
          sx={{
            fontSize: '18px !important',
            fontFamily: 'Open Sans',
            fontWeight: '700 !important',
            lineHeight: 'normal',
            color: '#090909',
            letterSpacing: '0.5px !important',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            '@media (min-width: 768px)': {
              fontSize: '16px !important',
            },
          }}
        >
          <img src='/Images/information-icon.svg' alt='information' className='w-[20px] h-[20px]' />
          Information
        </Typography>

        <div className='w-full h-full mt-[22px]'>
          <form onSubmit={handleSubmit}>
            <div className='w-full flex flex-wrap gap-y-[22px] justify-between'>
              <div className='w-full'>
                <InputField
                  label='product title'
                  type='text'
                  inputColor='#212529'
                  placeholder='Enter product title'
                  name='productTitle'
                  value={productTitle}
                  errorText={productTitleError}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className='w-full'>
                <InputField
                  label='product description'
                  type='textarea'
                  rows={6}
                  placeholder='Enter product description'
                  inputColor='#212529'
                  name='productDescription'
                  value={productDescription}
                  errorText={productDescriptionError}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className='flex w-full space-x-4'>
                <div className='flex-1 '>
                  <InputField
                    label='product price'
                    type='number'
                    inputColor='#212529'
                    placeholder='Enter product price'
                    name='productPrice'
                    value={productPrice}
                    errorText={productPriceError}
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className='flex-1'>
                  <InputField
                    label='compare at price (optional)'
                    type='number'
                    inputColor='#212529'
                    placeholder='Enter compare at price'
                    name='compareAtPrice'
                    value={compareAtPrice}
                    required={false}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='w-full'>
                {/* <AddBakerProductImages
                  productMedia={productMedia}
                  handleUpdateProductMedia={handleUpdateProductMedia}
                  setProductMedia={setProductMedia}
                /> */}
                <EditBakerProductImages
                  productMedia={productMedia}
                  handleUpdateProductMedia={handleUpdateProductMedia}
                  setProductMedia={setProductMedia}
                />

                {productImagesError && (
                  <span className='text-red-500 text-xs'>{productImagesError}</span>
                )}
              </div>

              <Typography
                sx={{
                  fontSize: '18px !important',
                  fontFamily: 'Open Sans',
                  fontWeight: '700 !important',
                  lineHeight: 'normal',
                  color: '#090909',
                  letterSpacing: '0.5px !important',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  '@media (min-width: 768px)': {
                    fontSize: '16px !important',
                  },
                }}
              >
                <img
                  src='/Images/customize-icon.svg'
                  alt='information'
                  className='w-[20px] h-[20px]'
                />
                Customization
              </Typography>
              <div className='w-full'>
                <div className='w-full'>
                  <Typography
                    sx={{
                      marginBottom: '8px',
                      fontSize: '14px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '600 !important',
                      lineHeight: 'normal',
                      color: '#676767',
                    }}
                  >
                    {`Custom Field`}
                  </Typography>
                </div>
                <div className='w-full'>
                  <CustomBuilder
                    productAttributes={productAttributes}
                    showPriceFields={showPriceFields}
                    setProductAttributes={handleChangeProductAttributes}
                    setShowPriceFields={handleChangeShowPriceFields}
                    productAttributesError={productAttributesError}
                    removeAttributeError={removeAttributeError}
                    removeOptionError={removeOptionError}
                  />
                </div>
              </div>
              <div className='mt-[14px] md:mt-[24px] w-full flex flex-col md:flex-row gap-y-[32px]'>
                <div className='w-full md:w-[50%]'>
                  <Typography
                    sx={{
                      fontSize: '16px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '600 !important',
                      lineHeight: 'normal',
                      color: '#212529',
                    }}
                  >
                    Sale Tax Rate
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: '4px',
                      fontSize: '14px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '600 !important',
                      lineHeight: '16px',
                      color: '#676767',
                    }}
                  >
                    Is the product eligible for sales tax?
                  </Typography>

                  <div className='mt-[12px] flex gap-x-[33px]'>
                    <div className='flex items-center gap-x-[8px]'>
                      <Radio
                        sx={{
                          color: '#7DDEC1',
                          padding: '0px !important',
                          '&.Mui-checked': {
                            color: '#7DDEC1',
                            padding: '0px !important',
                          },
                        }}
                        checked={isSalesTax === true}
                        onChange={handleSaleTaxChange}
                        value={'yes'}
                        name='radio-buttons'
                        inputProps={{ 'aria-label': 'A' }}
                      />
                      <Typography
                        sx={{
                          color: '#747474',
                          fontSize: '12px !important',
                          textTransform: 'capitalize',
                        }}
                      >
                        yes
                      </Typography>
                    </div>
                    <div className='flex items-center gap-x-[8px]'>
                      <Radio
                        sx={{
                          color: '#7DDEC1',
                          padding: '0px !important',
                          '&.Mui-checked': {
                            color: '#7DDEC1',
                          },
                        }}
                        checked={isSalesTax === false}
                        onChange={handleSaleTaxChange}
                        value={'no'}
                        name='radio-buttons'
                        inputProps={{ 'aria-label': 'B' }}
                      />
                      <Typography
                        sx={{
                          color: '#747474',
                          fontSize: '12px !important',
                          textTransform: 'capitalize',
                        }}
                      >
                        no
                      </Typography>
                    </div>
                  </div>

                  {/* {isSalesTax && (
                      <div className='mt-[10px] w-full md:w-[60%]'>
                        <InputField
                          // label='sales tax rate'
                          type='text'
                          inputColor='#888'
                          placeholder='Enter sales tax rate'
                          name='salesTaxRate'
                          value={salesTaxRate}
                          errorText={salesTaxRateError}
                          required
                          onChange={handleChange}
                        />
                      </div>
                    )} */}
                </div>

                <div className='w-full md:w-[50%]'>
                  <Typography
                    sx={{
                      fontSize: '16px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '600 !important',
                      lineHeight: 'normal',
                      color: '#212529',
                    }}
                  >
                    Quantity
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: '4px',
                      fontSize: '14px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '600 !important',
                      lineHeight: '16px',
                      color: '#676767',
                    }}
                  >
                    Choose product quantity between 1 and unlimited
                  </Typography>

                  <Stack spacing={2} direction='row' sx={{ mt: '30px' }} alignItems='center'>
                    <Slider
                      sx={{
                        color: '#7DDEC1',
                      }}
                      aria-label='quantity'
                      min={1}
                      defaultValue={1}
                      value={productQuantity}
                      onChange={handleQuantityChange}
                      valueLabelDisplay='auto'
                    />
                    <Typography
                      sx={{
                        color: '#212529',
                        fontSize: '14px !important',
                        fontFamily: 'Open Sans',
                        fontWeight: '500 !important',
                        lineHeight: '16px',
                        textTransform: 'capitalize',
                        letterSpacing: '-0.42px !important',
                      }}
                    >
                      unlimited
                    </Typography>
                  </Stack>
                </div>
              </div>
              <div className='w-full md:w-[50%]'>
                <div className='w-full md:w-[95%]'>
                  <Typography
                    sx={{
                      fontSize: '16px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '600 !important',
                      lineHeight: 'normal',
                      color: '#212529',
                    }}
                  >
                    Schedule Product Listing
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: '4px',
                      fontSize: '14px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '600 !important',
                      lineHeight: '16px',
                      color: '#676767',
                    }}
                  >
                    Schedule the product to be available for orders
                  </Typography>

                  <div className='mt-[12px] w-full flex justify-between'>
                    <div className='w-[48%]'>
                      <InputField
                        label='start date'
                        type='date'
                        inputColor='#888'
                        placeholder='Start date'
                        name='listingStartDate'
                        value={listingStartDate}
                        // errorText={productListingError}
                        required={false}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='w-[48%]'>
                      <InputField
                        label='end date'
                        type='date'
                        inputColor='#888'
                        placeholder='End date'
                        name='listingEndDate'
                        value={listingEndDate}
                        // errorText={productListingError}
                        required={false}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='w-full'>
                    {productListingError && (
                      <span className='text-red-500 text-xs'>{productListingError}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className='w-full md:w-[50%]'>
                <div className='w-full md:w-[95%]'>
                  <Typography
                    sx={{
                      fontSize: '16px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '600 !important',
                      lineHeight: 'normal',
                      color: '#212529',
                    }}
                  >
                    Available Fulfillment Dates
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: '4px',
                      fontSize: '14px !important',
                      fontFamily: 'Open Sans',
                      fontWeight: '600 !important',
                      lineHeight: '16px',
                      color: '#676767',
                    }}
                  >
                    Enter the dates this product will be available for fulfillment
                  </Typography>
                </div>

                <div className='mt-[12px] w-full'>
                  <InputField
                    label='Enter date'
                    type='date'
                    inputColor='#888'
                    placeholder='Enter date'
                    name='fulfillmentDate'
                    value={fulfillmentDate}
                    errorText={fulfillmentDateError}
                    required={false}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* <div className='w-full md:w-[45%]'>
                  <DropdownField
                    label='city'
                    required={false}
                    name='city'
                    errorText={cityError}
                    value={city}
                    options={cities}
                    inputColor='#888'
                    onChange={handleCityChange}
                  />
                </div> */}
              {/* <div className='w-full md:w-[45%]'>
                  <UploadInputField
                    label='upload logo'
                    inputColor='#888'
                    name='logo'
                    value={shopName}
                    errorText={shopNameError}
                    required={false}
                    onChange={handleChange}
                  />
                </div> */}
              {/* <div className='w-full md:w-[45%]'>
                  <UploadInputField
                    label='featured image'
                    inputColor='#888'
                    name='shopName'
                    value={shopName}
                    errorText={shopNameError}
                    required={false}
                    onChange={handleChange}
                  />
                </div> */}
            </div>

            {/* {saveBtnDisable ? <span>Loading...</span> : null} */}
            <div className='mt-[24px] md:mt-[23px]'>
              <PrimaryBtn text='Save product' type='submit' loading={saveBtnDisable} />
            </div>

            <div className='mt-[24px] md:mt-[23px]'>
              <CancelBtn text='cancel' type='button' handleClick={onClose} />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default withApollo()(EditBakerProductModal)
