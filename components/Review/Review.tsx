import { Rating } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import { ReviewCardsData } from 'Constants/constants'
import Image from 'next/image'
import formatDateAgo from 'utils/formatDateAgo'
const rating = 3

const Review = ({ reviewData }: any) => {
  console.log('review Data is ', reviewData)
  return (
    <div className='flex flex-col text-[16px] font-medium text-black leading-6 pb-[12px] pt-[24px] border-solid border-[0px] border-b-[1px] border-b-[#FFD9E4]'>
      {/* Desktop */}
      <div className='hidden lg:block'>
        <div className='flex'>
          <div>
            <Image
              className='rounded-full'
              src={reviewData?.reviewByInfo?.picture}
              alt='profile picture'
              width={140}
              height={140}
            />
          </div>
          <div className='w-full flex flex-col ml-[16px]'>
            <div className='flex flex-row justify-between'>
              <div className='text-[14px] bg-[#FFD9E4] px-[8px] py-[4px] rounded-2xl mb-[10px]'>
                Top Buyer
              </div>
              <div className=''>
                <Rating
                  sx={{
                    gap: '3px',
                  }}
                  name='read-only'
                  value={reviewData?.rating}
                  readOnly
                />
              </div>
            </div>
            <div className='text-[20px] font-[600] mb-[6px]'>
              <span>{reviewData?.title}</span>
            </div>
            <div className='text-[#090909] leading-6'>
              <span>{reviewData?.description}</span>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-between'>
          <div className='flex flex-col'>
            <div className='!font-[500]'>
              <span>
                {reviewData?.reviewByInfo?.firstName} {reviewData?.reviewByInfo?.lastName}
              </span>
            </div>
            <div className='text-[#7DDEC1]'>
              <Image
                className='mr-[5px]'
                src='/Images/verified.svg'
                alt='verified'
                height={12}
                width={10}
              />
              Verified Buyer
            </div>
          </div>
          <div className='flex flex-col text-[#888] '>
            <div className='text-right'>{formatDateAgo(new Date(reviewData?.createdAt))} ago</div>
            <div className='leading-4 text-[14px]'>
              <ThumbUpOffAltIcon
                onClick={() => console.log('ThumbsUpOff')}
                sx={{ height: '14px', width: '14px', cursor: 'pointer' }}
                className='mr-[6px] w-[14px] h-[14px]'
              />
              <ThumbUpOffAltIcon
                onClick={() => console.log('ThumbsUpOff')}
                sx={{ height: '14px', width: '14px', cursor: 'pointer' }}
                className='mr-[8px] transform scale-x-[-1] w-[14px] h-[14px]'
              />
              Was this helpful?
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className='block lg:hidden'>
        <div className='flex flex-col'>
          <div>
            <Image
              className='rounded-full'
              src='/Images/DefaultAvatar.jpg'
              alt='profile picture'
              width={60}
              height={60}
            />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <div className='!font-[500]'>John Mike</div>
              <div className='text-[#7DDEC1]'>
                <Image
                  className='mr-[5px]'
                  src='/Images/verified.svg'
                  alt='verified'
                  height={12}
                  width={10}
                />
                Verified Buyer
              </div>
            </div>
            <div className='flex flex-col text-[#888] '>
              <div className='text-right'>2 days ago</div>
              <div className='leading-4 text-[14px]'>
                <ThumbUpOffAltIcon
                  onClick={() => console.log('ThumbsUpOff')}
                  sx={{ height: '14px', width: '14px', cursor: 'pointer' }}
                  className='mr-[6px] w-[14px] h-[14px]'
                />
                <ThumbUpOffAltIcon
                  onClick={() => console.log('ThumbsUpOff')}
                  sx={{ height: '14px', width: '14px', cursor: 'pointer' }}
                  className='mr-[8px] transform scale-x-[-1] w-[14px] h-[14px]'
                />
                Was this helpful?
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-[16px]'>
            <div className='flex flex-row justify-between'>
              <div className='text-[14px] bg-[#FFD9E4] px-[8px] py-[4px] rounded-2xl mb-[10px]'>
                Top Buyer
              </div>
              <div className=''>
                <Rating
                  sx={{
                    gap: '3px',
                  }}
                  name='read-only'
                  value={reviewData?.rating}
                  readOnly
                />
              </div>
            </div>
            <div className='text-[20px] font-[600] mb-[6px]'>Berry Cream Fantasy</div>
            <div className='text-[#090909] leading-6 text-justify'>
              <span>{reviewData?.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
