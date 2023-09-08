import { useEffect, useContext } from 'react'
import { useQuery } from '@apollo/client'
import useStores from 'hooks/useStores'

// import catalogItemsQuery from '../../containers/catalog/catalogItems.gql'
import catalogItemsQuery from './catalogItems.gql'

/**
 * Gets the product catalog for the shops and filters specified
 *
 * @returns {Array} the product catalog, loading state, refetch function and total count
 */
export default function useCatalogItems(input) {
  const { uiStore } = useStores()
  const { totalAvailableProducts, setTotalAvailableProducts } = uiStore

  const { loading, data, refetch } = useQuery(catalogItemsQuery, {
    variables: input,
  })

  const catalogItems = data?.catalogItems?.edges

  useEffect(() => {
    if (loading) {
      return
    }
    setTotalAvailableProducts(data?.catalogItems?.totalCount)
  }, [catalogItems])

  return [catalogItems, loading, refetch, totalAvailableProducts]
}
