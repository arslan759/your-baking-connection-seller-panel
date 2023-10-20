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
  image: string,
  bakeryName: string,
  price: string,
  quantity: string,
  orderPlaced: string,
  fulfillmentDate: string,
) {
  return { image, bakeryName, price, quantity, orderPlaced, fulfillmentDate }
}

const rows = [
  createData('/Images/cart-dummy-img.png', 'Fondant Delight', '2.99', '1', '04.12.23', '04.12.23'),
  createData('/Images/cart-dummy-img.png', 'Fondant Delight', '2.99', '1', '04.12.23', '04.12.23'),
  createData('/Images/cart-dummy-img.png', 'Fondant Delight', '2.99', '1', '04.12.23', '04.12.23'),
  createData('/Images/cart-dummy-img.png', 'Fondant Delight', '2.99', '1', '04.12.23', '04.12.23'),
  createData('/Images/cart-dummy-img.png', 'Fondant Delight', '2.99', '1', '04.12.23', '04.12.23'),
]

const OrderDetailsOrderTable = () => {
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
              <TableCell>#</TableCell>
              <TableCell>Product Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Order Placed</TableCell>
              <TableCell>Fulfillment Date</TableCell>
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
                  {index + 1}
                </TableCell>
                <TableCell>
                  <img
                    src={row.image}
                    alt={row.bakeryName}
                    className='w-[56px] md:w-[72px] h-[56px] md:h-[72px] rounded-[4px]'
                  />{' '}
                </TableCell>
                <TableCell>{row.bakeryName}</TableCell>
                <TableCell>${row.price}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{moment(row.orderPlaced).format('DD MMM YYYY')}</TableCell>
                <TableCell>{moment(row.fulfillmentDate).format('DD MMM YYYY')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} sx={{ border: 0 }}></TableCell>
              <TableCell
                colSpan={3}
                sx={{ border: 0, borderRight: '1px solid rgba(224, 224, 224, 1)' }}
              >
                Subtotal
              </TableCell>

              <TableCell sx={{ border: 0 }}>$120</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={3} sx={{ border: 0 }}></TableCell>
              <TableCell
                colSpan={3}
                sx={{ border: 0, borderRight: '1px solid rgba(224, 224, 224, 1)' }}
              >
                Delivery Charges
              </TableCell>

              <TableCell sx={{ border: 0 }}>$30</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={3} sx={{ border: 0 }}></TableCell>
              <TableCell
                colSpan={3}
                sx={{ border: 0, borderRight: '1px solid rgba(224, 224, 224, 1)' }}
              >
                Sales Tax
              </TableCell>

              <TableCell sx={{ border: 0 }}>$67</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={3} sx={{ border: 0 }}></TableCell>
              <TableCell
                colSpan={3}
                sx={{
                  border: 0,
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: '600 !important',
                  color: '#090909 !important',
                }}
              >
                Total
              </TableCell>

              <TableCell
                sx={{
                  border: 0,
                  // borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: '600 !important',
                  color: '#090909 !important',
                }}
              >
                $213
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      {/* <div className='mt-[32px] md:mt-[56px] flex justify-center'>
        <CustomPagination onChange={() => console.log('test')} />
      </div> */}
    </>
  )
}

export default OrderDetailsOrderTable
