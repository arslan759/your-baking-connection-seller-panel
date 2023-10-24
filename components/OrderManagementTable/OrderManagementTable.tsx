import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const OrderManagementTable = ({ orders }: any) => {
  return (
    <>
      {/* <TableContainer sx={{ maxHeight: 440 }}> */}
      <TableContainer>
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
              <TableCell>Bakery Name</TableCell>
              <TableCell>Order Placed</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Ordered By</TableCell>
              <TableCell>Total</TableCell>

              {/* <TableCell>Star Rating</TableCell> */}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              '& .MuiTableCell-root': {
                fontFamily: 'Open Sans',
                color: '#888',
                fontSize: '16px !important',
                fontWeight: '600 !important',
                '@media (max-width: 767px)': {
                  fontSize: '14px !important',
                },
              },
            }}
          >
            {orders?.orders?.edges?.map((row: any, index: any) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row?.node?.referenceId}
                </TableCell>
                <TableCell>{row?.node?.shop?.name}</TableCell>
                <TableCell>{moment(row?.node?.updatedAt).format('DD MMM YYYY')}</TableCell>
                <TableCell>{'Card'}</TableCell>
                <TableCell>{row?.node?.account?.primaryEmailAddress}</TableCell>
                <TableCell>${row?.node?.summary?.total?.amount}</TableCell>
                {/* <TableCell>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <img src='/Images/star.svg' alt='details' className='h-[15px] w-[15px]' />{' '}
                    {row.rating}
                  </div>
                </TableCell> */}
                <TableCell>
                  <Link href={`/profile/order-management/${row?.node._id}`}>
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

      {/* <div className='mt-[32px] md:mt-[56px] flex justify-center'>
        <CustomPagination onChange={() => console.log('test')} />
      </div> */}
    </>
  )
}

export default OrderManagementTable
