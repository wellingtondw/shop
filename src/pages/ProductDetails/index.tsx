import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { RouteProp } from '@react-navigation/native';

import { Text } from 'react-native';

import ProductImage from '../../components/Product-Image';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';
import IconButton from '../../components/Icon-Button';
import ProductSpecificationList from '../../components/Product-Specification-List';
import * as S from './styles';

const GET_SKU = gql`
  query Sku($id: ID!) {
    Sku(id: $id) {
      id
      name
      imageUrl
      salePrice
      promotionalPrice
      package
    }
  }
`;

export type SkuDataProps = {
  Sku: {
    id: string;
    name: string;
    imageUrl: string;
    salePrice: number;
    promotionalPrice: number;
    package: {
      width: number;
      height: number;
      depth: number;
      weight: number;
    };
  };
};

type RootStackParamList = {
  ProductDetails: { id: number };
};

export type ProductDetailsProps = {
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
};

const gradientColors = ['#FFFFFF', '#F9FAFB', '#FFFFFF'];

const ProductDetails: React.FC<ProductDetailsProps> = ({ route }) => {
  const { id } = route.params;
  const { loading, error, data } = useQuery(GET_SKU, {
    variables: { id },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  const { name, imageUrl, package: packageData } = data?.Sku;
  const { width, height, depth, weight } = packageData;

  const productSpecificationData = () => {
    return [
      {
        label: 'Peso',
        value: weight,
        unitOfMeasurement: 'kg',
      },
      {
        label: 'Altura',
        value: height,
        unitOfMeasurement: 'cm',
      },
      {
        label: 'Largura',
        value: width,
        unitOfMeasurement: 'cm',
      },
      {
        label: 'Profundidade',
        value: depth,
        unitOfMeasurement: 'cm',
      },
    ];
  };

  return (
    <>
      <Header title="Produtos" />
      <ProductSpecificationList
        data={productSpecificationData()}
        ListHeaderComponent={() => (
          <S.HeaderContainer>
            <S.Title>{name}</S.Title>

            <S.ImageContainer>
              <ProductImage
                size="large"
                source={{ uri: imageUrl }}
                resizeMode="cover"
              />
            </S.ImageContainer>

            <S.RowContainer>
              <Input label="Estoque" />
              <S.ButtonWrapper>
                <S.LinearGradient colors={gradientColors}>
                  <IconButton name="minus" size={12} color="#BF1D08" />
                </S.LinearGradient>
                <S.LinearGradient colors={gradientColors}>
                  <IconButton
                    name="plus"
                    size={12}
                    color="#1C9956"
                    style={{ borderLeftWidth: 0 }}
                  />
                </S.LinearGradient>
              </S.ButtonWrapper>
            </S.RowContainer>

            <S.RowContainer style={{ marginTop: 20 }}>
              <S.InputContainer>
                <Input type="secondary" label="Preço promocional" />
              </S.InputContainer>
              <S.InputContainer>
                <Input type="secondary" label="Estoque" />
              </S.InputContainer>
            </S.RowContainer>
          </S.HeaderContainer>
        )}
        ListFooterComponent={() => (
          <S.FooterContainer>
            <Button
              type="success"
              text="Salvar alterações"
              onPress={() => console.log('Ok')}
            />
          </S.FooterContainer>
        )}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default ProductDetails;
