import React from 'react';
import * as S from './styles';

export type ProductItemProps = {
  id: string;
  imageUrl: string;
  name: string;
  salePrice: number;
  promotionalPrice?: number;
};

const ProductItem: React.FC<ProductItemProps> = ({
  imageUrl,
  name,
  salePrice,
  promotionalPrice,
}) => {
  return (
    <S.Container>
      <S.Image source={{ uri: imageUrl }} />
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
