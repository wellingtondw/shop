import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { ActivityIndicator, Alert, SafeAreaView } from 'react-native';
import ProductList from '../../components/Product-List';
import { CentralizeView, Container } from '../../styles/common';

import * as S from './styles';
import { ProductItemProps } from '../../components/Product-Item';
import { GET_SKUS } from '../../graphql/queries';

export type ProductListProps = {
  data: ProductItemProps[];
  loading: boolean;
  page: number;
  hasNext: boolean;
};

const perPage = 10;

const Home: React.FC = () => {
  const [productsList, setProductsList] = useState<ProductListProps>({
    data: [],
    loading: false,
    page: 1,
    hasNext: true,
  });
  const { loading, error, data, fetchMore } = useQuery(GET_SKUS, {
    variables: {
      page: productsList.page,
      perPage,
    },
  });

  useEffect(() => {
    if (!loading) {
      setProductsList({
        ...productsList,
        data: data.allSkus,
      });
    }
  }, [loading]);

  const loadPage = async () => {
    const currentPage = productsList.page + 1;

    if (!productsList.hasNext) return;
    setProductsList({
      ...productsList,
      loading: true,
    });

    const results = await fetchMore({
      variables: {
        page: currentPage,
        perPage: 10,
      },
    });

    setProductsList({
      data: [...productsList.data, ...results.data.allSkus],
      loading: false,
      page: currentPage,
      hasNext: results.data.allSkus.length >= perPage,
    });
  };

  if (loading)
    return (
      <CentralizeView>
        <ActivityIndicator size="large" color="#1C9956" />
      </CentralizeView>
    );
  if (error) {
    return Alert.alert(
      'Ocorreu um erro',
      'Entre em contato com nossa equipe de desenvovimento "teste@hotmail.com"',
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ProductList
          ListHeaderComponent={<S.Title>Produtos</S.Title>}
          data={productsList.data}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={loadPage}
          ListFooterComponent={() => (
            <>
              {productsList.loading && (
                <ActivityIndicator
                  size="small"
                  color="#1C9956"
                  style={{ marginTop: 12 }}
                />
              )}
            </>
          )}
        />
      </Container>
    </SafeAreaView>
  );
};

export default Home;
