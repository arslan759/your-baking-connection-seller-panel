import {
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material'
import React from 'react'
import moment from 'moment'

function createData(
  orderId: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  state: string,
  city: string,
) {
  return { orderId, firstName, lastName, email, phone, state, city }
}

const rows = [
  createData(
    'AKN12508',
    'Erika',
    'Jackson',
    'erica@jackson.com',
    '1234567890',
    'California',
    'Los Angeles',
  ),
]

const OrderDetailsUserTable = () => {
  return (
    <>
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
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>State</TableCell>
              <TableCell>City</TableCell>
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
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component='th' scope='row'>
                  {row.orderId}
                </TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>${row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.city}</TableCell>
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

export default OrderDetailsUserTable
