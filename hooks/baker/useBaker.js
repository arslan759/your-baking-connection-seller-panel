import { useQuery } from '@apollo/client'

import bakerQuery from './baker.gql'

/**
 * Gets the bakers list based on search parameters
 *
 * @returns {Array} the bakers' list
 */
export default function useBaker(shopId) {
  const { data, loading, refetch } = useQuery(bakerQuery, {
    variables: {
      shopId,
    },
  })
  const baker = data?.baker
  return [baker, loading, refetch]
}
