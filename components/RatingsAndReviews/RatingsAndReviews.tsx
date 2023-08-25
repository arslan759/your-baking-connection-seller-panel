import React from 'react'
import NavBar from '../NavBar/NavBar'
import RatingsAndReviewsCard from '../RatingsAndReviewsCard/RatingsAndReviewsCard'

const RatingsAndReviews = () => {
  return (
    <div>
      <NavBar />

      <div className='mt-[24px] md:mt-[100px] flex justify-center'>
        <RatingsAndReviewsCard />
      </div>
    </div>
  )
}

export default RatingsAndReviews
