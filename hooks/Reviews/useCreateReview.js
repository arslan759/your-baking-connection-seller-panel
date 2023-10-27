import { useMutation } from '@apollo/client'
import createReview from './createReview.gql'

/**
 * Update user profile info
 *
 * @returns {Function} the user profile settings
 */
export default function useCreateReview() {
  const [createReviewFunction, { _, loading }] = useMutation(createReview)
  return [createReviewFunction, loading]
}
