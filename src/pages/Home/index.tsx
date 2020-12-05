import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Text } from 'react-native';
import ProductList from '../../components/Product-List';
import { Container } from '../../styles/common';

import * as S from './styles';

const GET_SKUS = gql`
  query {
    allSkus(page: 1, perPage: 20) {
      id
      name
      imageUrl
      salePrice
      promotionalPrice
    }
  }
`;

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_SKUS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <Container>
      <ProductList
        ListHeaderComponent={<S.Title>Produtos</S.Title>}
        data={data.allSkus}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
