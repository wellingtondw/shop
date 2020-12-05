import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ProductImage from '../Product-Image';

import * as S from './styles';

export type ProductItemProps = {
  id: string;
  imageUrl: string;
  name: string;
  salePrice: number;
  promotionalPrice?: number;
};

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  imageUrl,
  name,
  salePrice,
  promotionalPrice,
  ...rest
}) => {
  const navigation = useNavigation();

  return (
    <S.Container
      {...rest}
      onPress={() => navigation.navigate('ProductDetails', { id })}
    >
      <S.ImageContainer>
        <ProductImage
          withBorder
          source={{ uri: imageUrl }}
          resizeMode="contain"
        />
      </S.ImageContainer>
      <S.Wrapper>
        <S.Title type="secondary">{name}</S.Title>
        <S.PriceContainer>
          <S.NumberOfInstallments>1 x</S.NumberOfInstallments>
          <S.PromotionalPrice>
            R$
            {promotionalPrice}
          </S.PromotionalPrice>
          <S.Price>
            R$
            {salePrice}
          </S.Price>
        </S.PriceContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default ProductItem;
