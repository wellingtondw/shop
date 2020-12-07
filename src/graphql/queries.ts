import { gql } from '@apollo/client';

export const GET_SKUS = gql`
  query allSkus($page: Int, $perPage: Int) {
    allSkus(page: $page, perPage: $perPage) {
      id
      name
      imageUrl
      salePrice
      promotionalPrice
    }
  }
`;

export const GET_SKU = gql`
  query Sku($id: ID!) {
    Sku(id: $id) {
      id
      name
      imageUrl
      salePrice
      quantity
      promotionalPrice
      package
    }
  }
`;
