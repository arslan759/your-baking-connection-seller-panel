import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { PrimaryBtn } from '../Buttons'
import InputField from '../InputField'

// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// }

interface ConfirmationModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  confirmationString: string
  isReason: boolean
  handleConfirm: any
  reason?: string
  reasonError?: string
  setReason?: (reason: string) => void
  loading?: boolean
}

export default function ConfirmationModal({
  open,
  setOpen,
  reason,
  setReason,
  isReason,
  reasonError,
  loading,
  confirmationString,
  handleConfirm,
}: ConfirmationModalProps) {
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

            {isReason && (
              <div className='w-full'>
                <InputField
                  label='Rejection Reason'
                  type='textarea'
                  inputColor='white'
                  rows={7}
                  name='rejectionReason'
                  value={reason ? reason : ''}
                  errorText={reasonError}
                  required={true}
                  changeHandler={setReason}
                />
              </div>
            )}

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
                  disabled={!reason}
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
