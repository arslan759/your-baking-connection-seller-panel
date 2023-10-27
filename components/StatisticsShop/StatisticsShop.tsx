import { Rating, LinearProgress, Typography, Button } from '@mui/material'
import Image from 'next/image'
import { PrimaryBtn } from '../Buttons'
import { useState } from 'react'
// import AddReviewCard from '../AddReviewCard'
// import AddReviewCardShop from '../AddReviewCardShop'

const rating = 3.2
const noOfRating = 46
const linearProgress = [
  { value: 20, name: '5 stars' },
  { value: 30, name: '4 stars' },
  { value: 48, name: '3 stars' },
  { value: 25, name: '2 stars' },
  { value: 8, name: '1 stars' },
]

const StatisticsShop = ({ refetchReviews }: any) => {
  const [addReviewModal, setAddReviewModal] = useState(false)
  const handleAddReviewModalOpen = () => {
    setAddReviewModal(true)
    console.log('clicked')
  }
  const handleAddReviewModalClose = () => setAddReviewModal(false)
  return (
    <>
      <div className='flex justify-between w-full flex-wrap'>
        <div className='flex gap-[48px] flex-wrap md:flex-nowrap'>
          <div className='flex flex-col justify-center'>
            <div className='text-center text-[20px] font-bold text-black leading-6'>{rating}</div>
            <Rating
              sx={{
                gap: '1px',
                color: '#000',
              }}
              name='read-only'
              value={rating}
              readOnly
            />
            <div className='text-center text-[16px] font-bold text-[#6C6C6C] leading-6'>
              {noOfRating} ratings
            </div>
          </div>
          <div className='flex flex-col text-center text-[20px] font-bold text-black leading-6 '>
            <div>86%</div>
            <div className='text-[#6C6C6C]'>Recommended</div>
            <div className='text-[#6C6C6C]'>(13 of 15)</div>
          </div>
          <div className='w-full grid md:block justify-center md:auto'>
            {linearProgress.map((star) => (
              <div
                key={star.name}
                className='mb-[10px] text-[#6C6C6C] font-[400] text-[14px] w-full flex'
              >
                <LinearProgress
                  sx={{
                    width: '160px',
                    borderRadius: '30px',
                    height: '12px',
                    backgroundColor: '#F4F4F4',
                    color: '#7DDEC1',
                    '& .MuiLinearProgress-bar': {
                      borderBottomRightRadius: '30px',
                      borderTopRightRadius: '30px',
                      backgroundColor: '#7DDEC1',
                    },
                  }}
                  variant='determinate'
                  value={star.value}
                />
                <span className='mt-[-5px] ml-[10px]'>({star.name})</span>
              </div>
            ))}
          </div>
        </div>
        {/* <div className='flex gap-[12px] self-end'>
          <div className='w-[100%] self-center'>
            <PrimaryBtn
              text='Write a review'
              handleClick={handleAddReviewModalOpen}
              loading=
            />
          </div>
          <div className='w-[100%] self-center'>
            <Button
              sx={{
                border: '2px solid #7DDEC1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '44px',
                textTransform: 'capitalize',
                backgroundColor: 'transparent',
                borderRadius: '5px',
                padding: '8px 16px',
                color: '#000',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#fff',
                },
              }}
              disableElevation
              onClick={() => {
                console.log('Review clicked')
              }}
            >
              <Typography
                sx={{
                  color: '#7DDEC1',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  position: 'relative',
                  width: 'fit-content',
                  '&:hover': {
                    scale: 1.25,
                    transition: 'all 300ms ease-in-out',
                  },
                }}
                variant='body2'
              >
                See all reviews
              </Typography>
            </Button>
          </div>
        </div> */}
      </div>
      {/* <AddReviewCardShop
        open={addReviewModal}
        onClose={handleAddReviewModalClose}
        refetchReviews={refetchReviews}
      /> */}
    </>
  )
}

export default StatisticsShop
