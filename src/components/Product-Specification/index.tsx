import React from 'react';

import Input from '../Input';
import * as S from './styles';

export type ProductSpecificationProps = {
  label: string;
  unitOfMeasurement: string;
  value: string | number;
};

const ProductSpecification: React.FC<ProductSpecificationProps> = ({
  label,
  unitOfMeasurement,
  value,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      <S.Label>{label}</S.Label>
      <S.RightContainer>
        <S.InputContainer>
          <Input value={String(value)} />
        </S.InputContainer>
        <S.UnitOfMeasurement>{unitOfMeasurement}</S.UnitOfMeasurement>
      </S.RightContainer>
    </S.Container>
  );
};

export default ProductSpecification;
