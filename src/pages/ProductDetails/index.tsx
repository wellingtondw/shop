import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { RouteProp } from '@react-navigation/native';

import { Text } from 'react-native';
import { Container } from '../../styles/common';
import Header from '../../components/Header';
import * as S from './styles';

const GET_SKU = gql`
  query Sku($id: ID!) {
    Sku(id: $id) {
      id
      name
      imageUrl
      salePrice
      promotionalPrice
    }
  }
`;

type RootStackParamList = {
  ProductDetails: { id: number };
};

export type ProductDetailsProps = {
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ route }) => {
  const { id } = route.params;
  const { loading, error, data } = useQuery(GET_SKU, {
    variables: { id },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  const { name } = data.Sku;

  return (
    <>
      <Header title="Produtos" />
      <Container>
        <S.Title>{name}</S.Title>
      </Container>
    </>
  );
};

export default ProductDetails;
