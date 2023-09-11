import { useQuery } from '@apollo/client'

import bakersQuery from './bakers.gql'

/**
 * Gets the bakers list based on search parameters
 *
 * @returns {Array} the bakers' list
 */
export default function useBakers() {
  const { data, loading, refetch } = useQuery(bakersQuery)

  const bakers = data?.bakers?.nodes

  return [bakers, loading, refetch]
}
