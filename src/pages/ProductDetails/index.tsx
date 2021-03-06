import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { RouteProp } from '@react-navigation/native';
import {
  FlatList,
  ListRenderItem,
  ActivityIndicator,
  Alert,
  SafeAreaView,
} from 'react-native';
import { ADD_PRODUCT_DETAILS } from '../../graphql/mutations';
import { GET_SKU } from '../../graphql/queries';
import convertValueIntoRealCurrency from '../../utils/convertValueIntoRealCurrency';

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
import onlyNumbersInTheString from '../../utils/onlyNumbersInTheString';

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

  const handleIncreaseQuantity = () => {
    setProductDetailsData({
      ...productDetailsData,
      quantity: Number(productDetailsData.quantity) + 1,
    });
  };

  const handleDecreaseQuantity = () => {
    if (productDetailsData.quantity > 0) {
      setProductDetailsData({
        ...productDetailsData,
        quantity: Number(productDetailsData.quantity) - 1,
      });
    }
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
          salePrice: onlyNumbersInTheString(String(salePrice)),
          promotionalPrice: onlyNumbersInTheString(String(promotionalPrice)),
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
            <IconButton
              name="minus"
              size={12}
              color="#BF1D08"
              onPress={handleDecreaseQuantity}
            />
          </S.LinearGradient>
          <S.LinearGradient colors={gradientColors}>
            <IconButton
              name="plus"
              size={12}
              color="#1C9956"
              style={{ borderLeftWidth: 0 }}
              onPress={handleIncreaseQuantity}
            />
          </S.LinearGradient>
        </S.ButtonWrapper>
      </S.RowContainer>

      <S.RowContainer style={{ marginTop: 20 }}>
        <S.InputContainer>
          <Input
            type="secondary"
            label="Pre??o de venda"
            value={`R$ ${convertValueIntoRealCurrency(salePrice)}`}
            onChangeText={text => {
              handleInputChange({ text, field: 'salePrice' });
            }}
            keyboardType="numeric"
          />
        </S.InputContainer>
        <S.InputContainer>
          <Input
            type="secondary"
            label="Pre??o promocional"
            value={`R$ ${convertValueIntoRealCurrency(promotionalPrice)}`}
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
    <SafeAreaView style={{ flex: 1 }}>
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
              text="Salvar altera????es"
              onPress={handleSave}
            />
          </S.FooterContainer>
        )}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
      />
    </SafeAreaView>
  );
};

export default ProductDetails;
