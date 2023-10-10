import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import CustomPagination from '../CustomPagination/CustomPagination'
import moment from 'moment'

interface CustomOrdersTableProps {
  orders: any
}

const CustomOrdersTable = ({ orders }: CustomOrdersTableProps) => {
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

      <div className='mt-[32px] md:mt-[56px] flex justify-center'>
        <CustomPagination onChange={() => console.log('test')} />
      </div>
    </>
  )
}

export default CustomOrdersTable
