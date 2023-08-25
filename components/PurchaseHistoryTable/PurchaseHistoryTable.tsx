import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import CustomPagination from '../CustomPagination/CustomPagination'

function createData(
  orderdId: string,
  bakeryName: string,
  orderPlaced: string,
  paymentMethod: string,
  total: string,
  rating: string,
) {
  return { orderdId, bakeryName, orderPlaced, paymentMethod, total, rating }
}

const rows = [
  createData('AKN12508', 'Fondant Delight', '04.12.23', 'Credit Card', '14', '4.5'),
  createData('AKN12508', 'Fondant Delight', '04.12.23', 'Credit Card', '14', '4.5'),
  createData('AKN12508', 'Fondant Delight', '04.12.23', 'Credit Card', '14', '4.5'),
  createData('AKN12508', 'Fondant Delight', '04.12.23', 'Credit Card', '14', '4.5'),
  createData('AKN12508', 'Fondant Delight', '04.12.23', 'Credit Card', '14', '4.5'),
]

const PurchaseHistoryTable = () => {
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
              <TableCell>Bakery Name</TableCell>
              <TableCell>Order Placed</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Star Rating</TableCell>
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
            {rows.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.orderdId}
                </TableCell>
                <TableCell>{row.bakeryName}</TableCell>
                <TableCell>{row.orderPlaced}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell>${row.total}</TableCell>
                <TableCell>
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

      <div className='mt-[32px] md:mt-[56px] flex justify-center'>
        <CustomPagination />
      </div>
    </>
  )
}

export default PurchaseHistoryTable
