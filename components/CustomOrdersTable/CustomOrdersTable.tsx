import {
  Button,
  ButtonGroup,
  CircularProgress,
  Modal,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import CustomPagination from '../CustomPagination/CustomPagination'
import moment from 'moment'
import useUpdateCustomOrder from 'hooks/orders/useUpdateCustomOrder'
import useTaxRates from 'hooks/baker/useTaxRates'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'
import { PrimaryBtn } from '../Buttons'
import InputField from '../InputField'

interface CustomOrdersTableProps {
  orders: any
}

const options = ['accept', 'reject']

const CustomOrdersTable = ({ orders }: CustomOrdersTableProps) => {
  const shopId = localStorage.getItem('shopId')
  const [updateCustomOrder, loadingUpdateCustomOrder] = useUpdateCustomOrder()
  const [taxRate, loadingTaxRate, refetchTaxRate] = useTaxRates(shopId)

  console.log('taxRate is ', taxRate)

  const [orderToAcceptOrReject, setOrderToAcceptOrReject] = useState('')

  const [isAccept, setIsAccept] = useState(false)
  const [isReject, setIsReject] = useState(false)

  // Accept Custom Order States
  const [price, setPrice] = useState('')
  const [isSalesTax, setIsSalesTax] = useState(false)

  // Reject Custom Order States
  const [rejectionReason, setRejectionReason] = useState('')
  // Error States
  const [priceError, setPriceError] = useState('')
  const [salesTaxRateError, setSalesTaxRateError] = useState('')
  const [rejectionReasonError, setRejectionReasonError] = useState('')

  const handleRejectionReasonChange = (e: any) => {
    const { value } = e.target
    setRejectionReason(value)
    console.log('rejection reason is ', value)
    setRejectionReasonError(value ? '' : 'Please enter reason for rejection')
  }

  const handlePriceChange = (e: any) => {
    const { value } = e.target
    setPrice(value)
    setPriceError(value ? '' : 'Price is Required')
  }

  // handle Radio Button change  for  sale tax
  const handleSaleTaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'yes') {
      setIsSalesTax(true)
      setSalesTaxRateError('')
    } else {
      setIsSalesTax(false)
      setSalesTaxRateError('')
    }
  }

  const acceptOrder = async () => {
    const input = {
      orderId: orderToAcceptOrReject,
      shopId: '',
      workflow: 'approved',
    }

    //@ts-ignore
    const result = await updateCustomOrder({
      variables: {
        input,
      },
    })
  }

  const rejectOrder = async () => {
    if (!rejectionReason) return

    try {
      const input = {
        orderId: orderToAcceptOrReject,
        shopId,
        workflow: 'rejected',
        rejectionReason,
      }

      //@ts-ignore
      const result = await updateCustomOrder({
        variables: {
          input,
        },
      })

      console.log('result is ', result)

      setOrderToAcceptOrReject('')
    } catch (error: any) {
      console.log('error is ', error.message)
    }
  }

  return (
    <>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead
            sx={{
              '& .MuiTableCell-root': {
                fontFamily: 'Open Sans',
                color: '#090909',
                fontSize: '16px !important',
                fontWeight: '600 !important',
                '@media (max-width: 767px)': {
                  fontSize: '14px !important',
                },
              },
            }}
          >
            <TableRow>
              <TableCell>Order ID</TableCell>
              {/* <TableCell>Bakery Name</TableCell> */}
              <TableCell>Order Placed</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Fullfillment Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              '& .MuiTableCell-root': {
                fontFamily: 'Open Sans',
                color: '#888',
                textTransform: 'capitalize',
                fontSize: '16px !important',
                fontWeight: '600 !important',
                '@media (max-width: 767px)': {
                  fontSize: '14px !important',
                },
              },
            }}
          >
            {orders?.map((order: any, index: number) => (
              <TableRow key={order._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {order.referenceId}
                </TableCell>
                {/* <TableCell>{row.bakeryName}</TableCell> */}
                <TableCell>{moment(order.createdAt).format('DD MMM YYYY')}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>{moment(order.fulfillmentDate).format('DD MMM YYYY')}</TableCell>
                <TableCell>{order.workflow}</TableCell>
                <TableCell>
                  {/* {loadingUpdateCustomOrder ? (
                    <CircularProgress
                      sx={{
                        color: '#7DDEC1',
                      }}
                    />
                  ) : ( */}
                  <ButtonGroup
                    disableElevation
                    variant='contained'
                    aria-label='Disabled elevation buttons'
                    disabled={order.workflow !== 'created'}
                  >
                    <PrimaryBtn
                      text='Accept'
                      handleClick={() => {
                        console.log('orderId is ', order?._id)
                        setOrderToAcceptOrReject(order?._id)
                        setIsAccept(true)
                      }}
                    />
                    <PrimaryBtn
                      text='Reject'
                      handleClick={() => {
                        console.log('orderId is ', order?._id)
                        setOrderToAcceptOrReject(order?._id)
                        setIsReject(true)
                      }}
                      backgroundColor='#F4364C'
                      onHoverBackgroundColor='#E3001E'
                    />
                  </ButtonGroup>
                  {/* )} */}
                </TableCell>
                <TableCell>
                  <img
                    src='/Images/purchase-details.svg'
                    alt='details'
                    className='h-[24px] md:h-[32px] w-[24px] md:w-[32px]'
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={isAccept}
        // onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='w-[95vw] md:w-[760px] h-[fit-content] absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] bg-[rgba(0,0,0,0.7)] p-[40px] rounded-[6px] md:rounded-[15px] '>
          <div className='w-full flex flex-col gap-y-[14px] md:gap-y-[36px]'>
            <div className='w-full flex flex-col items-center gap-y-[9px] md:gap-y-[24px]'>
              <Typography
                // variant='h1'
                sx={{
                  color: '#7DDEC1',
                  fontSize: '24px !important',
                  fontFamily: 'Josefin Sans',
                  fontWeight: '700 !important',
                  lineHeight: 'normal',
                  textTransform: 'uppercase',
                  '@media (max-width: 768px)': {
                    fontSize: '18px !important',
                  },
                }}
              >
                Accept Custom Order
              </Typography>
            </div>

            <div className='w-full'>
              <InputField
                label='price'
                type='number'
                inputColor='white'
                // rows={7}
                name='price'
                value={price}
                errorText={priceError}
                required={true}
                changeHandler={(e: any) => setPrice(e.target.value)}
              />
            </div>

            <div className='w-full md:w-[50%]'>
              <Typography
                sx={{
                  fontSize: '16px !important',
                  fontFamily: 'Open Sans',
                  fontWeight: '600 !important',
                  lineHeight: 'normal',
                  color: '#fff',
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
                  color: '#fff',
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
            </div>

            <div className='w-full flex flex-col items-center sm:items-end gap-y-[9px] md:gap-y-[24px]'>
              <div className='w-full sm:w-[30%]'>
                <PrimaryBtn text='Confirm' handleClick={() => {}} />
              </div>
              <div className='w-full sm:w-[30%]'>
                <PrimaryBtn
                  text='Cancel'
                  handleClick={() => setIsAccept(false)}
                  backgroundColor='#F4364C'
                  onHoverBackgroundColor='#E3001E'
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <ConfirmationModal
        open={isReject}
        setOpen={setIsReject}
        confirmationString='Are you sure you want to reject this order?'
        isReason={true}
        reason={rejectionReason}
        reasonError={rejectionReasonError}
        setReason={handleRejectionReasonChange}
        handleConfirm={rejectOrder}
        // @ts-ignore
        loading={loadingUpdateCustomOrder}
      />

      <div className='mt-[32px] md:mt-[56px] flex justify-center'>
        <CustomPagination onChange={() => console.log('test')} />
      </div>
    </>
  )
}

export default CustomOrdersTable
