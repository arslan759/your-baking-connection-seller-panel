import * as React from 'react'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { PrimaryBtn } from '../Buttons'
import InputField from '../InputField'
import { Radio } from '@mui/material'

interface AcceptCustomOrderConfirmationModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  confirmationString: string
  isSalesTax: boolean
  handleSaleTaxChange: any
  handleConfirm: any
  price: string
  priceError: string
  setPrice?: (reason: string) => void
  loading?: boolean
}

export default function AcceptCustomOrderConfirmationModal({
  open,
  setOpen,
  price,
  setPrice,
  isSalesTax,
  handleSaleTaxChange,
  priceError,
  loading,
  confirmationString,
  handleConfirm,
}: AcceptCustomOrderConfirmationModalProps) {
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='w-[95vw] md:w-[760px] h-[fit-content] absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] bg-[rgba(0,0,0,0.7)] p-[40px] rounded-[6px] md:rounded-[15px] '>
          <div className='w-full flex flex-col gap-y-[14px] md:gap-y-[36px]'>
            <div className='w-full flex flex-col items-center gap-y-[9px] md:gap-y-[24px]'>
              {/* <img
                src='/Images/smiley.svg'
                alt='success'
                className='w-[37px] md:w-[95px] h-[37px] md:h-[95px]'
              /> */}

              <Typography
                // variant='h1'
                sx={{
                  color: '#7DDEC1',
                  fontSize: '24px !important',
                  fontFamily: 'Josefin Sans',
                  fontWeight: '500 !important',
                  lineHeight: 'normal',
                  textTransform: 'uppercase',
                  '@media (max-width: 768px)': {
                    fontSize: '18px !important',
                  },
                }}
              >
                {confirmationString}
              </Typography>
            </div>

            <div className='w-full'>
              <InputField
                label='price'
                type='number'
                inputColor='white'
                // rows={7}
                name='price'
                value={price ? price : ''}
                errorText={priceError}
                required={true}
                changeHandler={setPrice}
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
              {/* <Typography
                // variant='h1'
                sx={{
                  color: '#fff',
                  fontSize: '24px !important',
                  fontFamily: 'Open Sans',
                  fontWeight: '500 !important',
                  lineHeight: 'normal',
                  textAlign: 'center',
                  '@media (max-width: 768px)': {
                    fontSize: '12px !important',
                  },
                }}
              >
                {`Thanks for joining! We're so excited you're here! You now have full feature access to easily create your bakery profile!`}
              </Typography> */}
              <div className='w-full sm:w-[30%]'>
                <PrimaryBtn
                  text='Confirm'
                  handleClick={handleConfirm}
                  disabled={!price}
                  loading={loading}
                />
              </div>
              <div className='w-full sm:w-[30%]'>
                <PrimaryBtn
                  text='Cancel'
                  disabled={loading}
                  handleClick={handleClose}
                  backgroundColor='#F4364C'
                  onHoverBackgroundColor='#E3001E'
                />
                {/* <PrimaryBtn text='Go To Bakery Profile' handleClick={handleClose} /> */}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
