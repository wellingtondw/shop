import { gql } from '@apollo/client';

export const ADD_PRODUCT_DETAILS = gql`
  mutation updateSku(
    $id: ID!
    $package: JSON
    $salePrice: Int
    $promotionalPrice: Int
    $quantity: Int
  ) {
    updateSku(
      id: $id
      package: $package
      salePrice: $salePrice
      promotionalPrice: $promotionalPrice
      quantity: $quantity
    ) {
      id
    }
  }
`;
