import React, { Fragment } from "react";
import PropTypes from "prop-types";
import inject from "hocs/inject";
import { Query } from "@apollo/react-components";
import hoistNonReactStatic from "hoist-non-react-statics";
import { pagination, paginationVariablesFromUrlParams } from "lib/utils/pagination";
import catalogItemsQuery from "./catalogItems.gql";
import { makeStyles } from "@material-ui/core/styles";

/**
 * withCatalogItems higher order query component for fetching primaryShopId and catalog data
 * @name withCatalogItems
 * @param {React.Component} Component to decorate and apply
 * @returns {React.Component} - component decorated with primaryShopId and catalog as props
 */

export default function withCatalogItems(Component) {
  class CatalogItems extends React.Component {
    static propTypes = {
      primaryShopId: PropTypes.string,
      routingStore: PropTypes.object.isRequired,
      tag: PropTypes.shape({
        _id: PropTypes.string.isRequired,
      }),
      uiStore: PropTypes.object.isRequired,
    };

    render() {
      const { primaryShopId, routingStore, uiStore, tag } = this.props;
      const [sortBy, sortOrder] = uiStore.sortBy.split("-");
      const tagIds = tag && [tag._id];

      if (!primaryShopId) {
        return <Component {...this.props} />;
      }

      const variables = {
        shopId: primaryShopId,
        ...paginationVariablesFromUrlParams(routingStore.query, { defaultPageLimit: uiStore.pageSize }),
        tagIds,
        sortBy,
        sortByPriceCurrencyCode: uiStore.sortByCurrencyCode,
        sortOrder,
        searchQuery: uiStore.searchQuery,
        propertyFilters: uiStore.propertyFilters,
      };

      const useStyles = makeStyles((theme) => ({
        root: {
          color: "#272727",
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.down("xs")]: {
            paddingBottom: "50px",
          },
          "& > *": {
            margin: theme.spacing(1),
          },
        },
        continueBtn: {
          backgroundColor: "#21C18B",
          borderRadius: "8px",
          textTransform: "none",
          paddingRight: "90.5px",
          paddingLeft: "90.5px",
          marginBottom: "35px",
          marginTop: "20px",
          "&.MuiButton-containedPrimary:hover": {
            backgroundColor: "#21C18B",
            boxShadow: "none",
          },
        },
        paper: {
          position: "absolute",
          width: 391,
          backgroundColor: theme.palette.background.paper,
          border: "0px",
          borderRadius: "12px",
          // boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 3, 3),
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2, 2, 3),
          },
        },
      }));
      return (
        <Query errorPolicy="all" query={catalogItemsQuery} variables={variables} fetchPolicy="cache-and-network">
          {({ data, fetchMore, loading }) => {
            const { catalogItems } = data || {};
            return (
              <Fragment>
                {console.log("catalog items are ", catalogItems)}
                {console.log("fetchMore ", data)}
                <Component
                  {...this.props}
                  catalogItemsPageInfo={pagination({
                    fetchMore,
                    routingStore,
                    data,
                    queryName: "catalogItems",
                    limit: uiStore.pageSize,
                  })}
                  catalogItems={(catalogItems && catalogItems.edges) || []}
                  isLoadingCatalogItems={loading}
                />
              </Fragment>
            );
          }}
        </Query>
      );
    }
  }

  hoistNonReactStatic(CatalogItems, Component);

  return inject("primaryShopId", "routingStore", "uiStore")(CatalogItems);
}
