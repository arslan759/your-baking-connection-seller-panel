import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import CustomPagination from '../CustomPagination/CustomPagination'

function createData(bakeryName: string, reviewDate: string, rating: string, content: string) {
  return { bakeryName, reviewDate, rating, content }
}

const rows = [
  createData(
    'Sweet Spot',
    '04.12.23',
    '4.5',
    '“The cupcakes were delicious and the packaging was perfect. Will definitely order again.”',
  ),
  createData(
    'Sweet Spot',
    '04.12.23',
    '4.5',
    '“The cupcakes were delicious and the packaging was perfect. Will definitely order again.”',
  ),
  createData(
    'Sweet Spot',
    '04.12.23',
    '4.5',
    '“The cupcakes were delicious and the packaging was perfect. Will definitely order again.”',
  ),
  createData(
    'Sweet Spot',
    '04.12.23',
    '4.5',
    '“The cupcakes were delicious and the packaging was perfect. Will definitely order again.”',
  ),
  createData(
    'Sweet Spot',
    '04.12.23',
    '4.5',
    '“The cupcakes were delicious and the packaging was perfect. Will definitely order again.”',
  ),
]

const LedgerTable = () => {
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
              <TableCell>Bakery Name</TableCell>
              <TableCell>Review Date</TableCell>
              <TableCell>Star Rating</TableCell>
              <TableCell>Review Content</TableCell>
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
                <TableCell>{row.bakeryName}</TableCell>
                <TableCell>{row.reviewDate}</TableCell>
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
                <TableCell component='th' scope='row'>
                  {row.content.length > 100 ? row.content.slice(0, 100) + '...' : row.content}
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

export default LedgerTable
