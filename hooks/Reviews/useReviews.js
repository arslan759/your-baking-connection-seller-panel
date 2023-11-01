import { useQuery } from '@apollo/client'
import { useEffect } from 'react'

// import catalogItemsQuery from '../../containers/catalog/catalogItems.gql'
import reviews from './reviews.gql'

/**
 * Gets the product catalog for the shops and filters specified
 *
 * @returns {Array} the product catalog, loading state, refetch function and total count
 */

export default function useReviews(input) {
  console.log('input in reviews hook ', input)
  const { loading, data, refetch } = useQuery(reviews, {
    variables: input,
  })

  const catalogItems = data?.reviews?.nodes
  const totalCount = data?.reviews?.totalCount

  return [catalogItems, loading, refetch, totalCount]
}
