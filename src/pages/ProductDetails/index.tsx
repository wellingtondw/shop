import React, { useEffect, useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { RouteProp } from '@react-navigation/native';
import {
  Text,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
  Alert,
} from 'react-native';

import ProductImage from '../../components/Product-Image';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';
import IconButton from '../../components/Icon-Button';
import * as S from './styles';
import ProductSpecification, {
  ProductSpecificationProps,
} from '../../components/Product-Specification';
import { CentralizeView, Container } from '../../styles/common';

const GET_SKU = gql`
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

const ADD_PRODUCT_DETAILS = gql`
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

export type HandleInputChangeProps = {
  text: string;
  field: string;
};

type RootStackParamList = {
  ProductDetails: { id: number };
};

export type ProductDetailsProps = {
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
};

export type ProductDetailsDataProps = {
  id: number | null;
  name: string;
  imageUrl: string;
  salePrice: number;
  promotionalPrice: number;
  quantity: number;
  package: {
    width: number;
    height: number;
    depth: number;
    weight: number;
  };
};

const gradientColors = ['#FFFFFF', '#F9FAFB', '#FFFFFF'];

const ProductDetails: React.FC<ProductDetailsProps> = ({ route }) => {
  const { id } = route.params;
  const { loading, error, data } = useQuery(GET_SKU, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });
  const [addProductDetails] = useMutation(ADD_PRODUCT_DETAILS);

  const [
    productDetailsData,
    setProductDetailsData,
  ] = useState<ProductDetailsDataProps>({
    id: null,
    name: '',
    imageUrl: '',
    salePrice: 0,
    promotionalPrice: 0,
    quantity: 0,
    package: {
      width: 0,
      height: 0,
      depth: 0,
      weight: 0,
    },
  });

  useEffect(() => {
    if (!loading) {
      setProductDetailsData({
        ...data.Sku,
      });
    }
  }, [loading, data]);

  const handleInputChange = ({ text, field }: HandleInputChangeProps) => {
    setProductDetailsData({ ...productDetailsData, [field]: text });
  };

  const handleProductSpecificationChange = ({
    text,
    field,
  }: HandleInputChangeProps) => {
    setProductDetailsData({
      ...productDetailsData,
      package: { ...productDetailsData.package, [field]: text },
    });
  };

  const handleSave = async () => {
    const {
      package: packageData,
      salePrice,
      promotionalPrice,
      quantity,
    } = productDetailsData;
    const { width, height, depth, weight } = packageData;

    try {
      await addProductDetails({
        variables: {
          id: Number(id),
          package: {
            width,
            height,
            depth,
            weight,
          },
          salePrice: Number(salePrice),
          promotionalPrice: Number(promotionalPrice),
          quantity: Number(quantity),
        },
      });

      Alert.alert('Sucesso', 'Salvo com sucesso!');
    } catch (err) {
      Alert.alert('Erro', 'Tente novamente!');
    }
  };

  if (loading || !productDetailsData.id)
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

  const {
    name,
    imageUrl,
    package: packageData,
    quantity,
    promotionalPrice,
    salePrice,
  } = productDetailsData;
  const { width, height, depth, weight } = packageData;

  const productSpecificationData = [
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

  const renderListHeaderComponent = () => (
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
        <Input
          label="Estoque"
          value={String(quantity)}
          onChangeText={text => {
            handleInputChange({ text, field: 'quantity' });
          }}
          keyboardType="numeric"
        />
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
          <Input
            type="secondary"
            label="Preço de venda"
            value={String(salePrice)}
            onChangeText={text => {
              handleInputChange({ text, field: 'salePrice' });
            }}
            keyboardType="numeric"
          />
        </S.InputContainer>
        <S.InputContainer>
          <Input
            type="secondary"
            label="Preço promocional"
            value={String(promotionalPrice)}
            onChangeText={text => {
              handleInputChange({ text, field: 'promotionalPrice' });
            }}
            keyboardType="numeric"
          />
        </S.InputContainer>
      </S.RowContainer>
    </S.HeaderContainer>
  );

  const renderProductSpecification: ListRenderItem<ProductSpecificationProps> = ({
    item: productSpecification,
    index,
  }) => {
    return (
      <Container>
        <ProductSpecification
          {...productSpecification}
          lastChild={data.length - 1 === index}
          handleProductSpecificationChange={handleProductSpecificationChange}
        />
      </Container>
    );
  };

  return (
    <>
      <Header title="Produtos" />
      <FlatList
        data={productSpecificationData}
        keyExtractor={productSpecification => productSpecification.label}
        renderItem={renderProductSpecification}
        ListHeaderComponent={renderListHeaderComponent()}
        ListFooterComponent={() => (
          <S.FooterContainer>
            <Button
              type="success"
              text="Salvar alterações"
              onPress={handleSave}
            />
          </S.FooterContainer>
        )}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
      />
    </>
  );
};

export default ProductDetails;
