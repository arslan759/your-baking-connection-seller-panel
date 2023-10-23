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
import React, { useEffect, useState } from 'react'
import CustomPagination from '../CustomPagination/CustomPagination'
import moment from 'moment'
import useUpdateCustomOrder from 'hooks/orders/useUpdateCustomOrder'
import useTaxRates from 'hooks/baker/useTaxRates'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'
import { PrimaryBtn } from '../Buttons'
import InputField from '../InputField'
import SuccessModal from '../SuccessModal'
import FailureModal from '../FailureModal/FailureModal'
import AcceptCustomOrderConfirmationModal from '../AcceptCustomOrderConfirmationModal'
import Link from 'next/link'

interface CustomOrdersTableProps {
  orders: any
  refetchOrders: any
}

const CustomOrdersTable = ({ orders, refetchOrders }: CustomOrdersTableProps) => {
  const shopId = localStorage.getItem('shopId')
  const [updateCustomOrder, loadingUpdateCustomOrder] = useUpdateCustomOrder()
  const [taxRate, loadingTaxRate, refetchTaxRate] = useTaxRates(shopId)

  // console.log('taxRate is ', taxRate)

  const [orderToAcceptOrReject, setOrderToAcceptOrReject] = useState('')

  // Confirmation Modal States
  const [isAccept, setIsAccept] = useState(false)
  const [isReject, setIsReject] = useState(false)

  // Success Modal States
  const [isAcceptSuccess, setIsSuccess] = useState(false)
  const [isRejectSuccess, setIsRejectSuccess] = useState(false)

  // Failire Modal States
  const [isAcceptFailure, setIsAcceptFailure] = useState(false)
  const [isRejectFailure, setIsRejectFailure] = useState(false)

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
    if (!price) return

    try {
      const input = {
        orderId: orderToAcceptOrReject,
        shopId,
        workflow: 'approved',
        pricing: {
          totalItemsPrice: parseFloat(price),
          isTaxable: isSalesTax,
          tax: parseFloat(taxRate),
        },
      }

      //@ts-ignore
      const result = await updateCustomOrder({
        variables: {
          input,
        },
      })

      console.log('result is ', result)

      setOrderToAcceptOrReject('')
      setPrice('')
      setIsSalesTax(false)
      setIsAccept(false)
      setIsSuccess(true)
    } catch (error: any) {
      console.log('error is ', error.message)
      setIsAccept(false)
      setIsAcceptFailure(true)
    }
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

      // throw new Error('error')
      //@ts-ignore
      const result = await updateCustomOrder({
        variables: {
          input,
        },
      })

      console.log('result is ', result)

      setOrderToAcceptOrReject('')
      setRejectionReason('')
      setIsReject(false)
      setIsRejectSuccess(true)
    } catch (error: any) {
      console.log('error is ', error.message)
      setIsReject(false)
      setIsRejectFailure(true)
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
                  <Link href={`/profile/custom-orders/${order._id}`}>
                    <img
                      src='/Images/purchase-details.svg'
                      alt='details'
                      className='h-[24px] md:h-[32px] w-[24px] md:w-[32px]'
                    />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Accept Order Modals */}
      <AcceptCustomOrderConfirmationModal
        open={isAccept}
        setOpen={setIsAccept}
        confirmationString='Are you sure you want to accept this order?'
        price={price}
        isSalesTax={isSalesTax}
        handleSaleTaxChange={handleSaleTaxChange}
        priceError={priceError}
        setPrice={handlePriceChange}
        handleConfirm={acceptOrder}
        // @ts-ignore
        loading={loadingUpdateCustomOrder}
      />

      <SuccessModal
        open={isAcceptSuccess}
        setOpen={setIsSuccess}
        SuccessString='Order Accepted Successfully'
        handleConfirm={() => {
          refetchOrders()
          setIsSuccess(false)
        }}
      />

      <FailureModal
        open={isAcceptFailure}
        setOpen={setIsAcceptFailure}
        failureString='Something went wrong! Please try again later.'
        // handleConfirm={() => {
        //   refetchOrders()
        //   setIsSuccess(false)
        // }}
      />

      {/* Reject Order Modals */}
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

      <SuccessModal
        open={isRejectSuccess}
        setOpen={setIsRejectSuccess}
        SuccessString='Order Rejected Successfully'
        handleConfirm={() => {
          refetchOrders()
          setIsRejectSuccess(false)
        }}
      />

      <FailureModal
        open={isRejectFailure}
        setOpen={setIsRejectFailure}
        failureString='Something went wrong! Please try again later.'
        // handleConfirm={() => {
        //   refetchOrders()
        //   setIsRejectSuccess(false)
        // }}
      />
    </>
  )
}

export default CustomOrdersTable
