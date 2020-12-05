import React from 'react';

import Input from '../Input';
import * as S from './styles';

export type ProductSpecificationProps = {
  label: string;
  unitOfMeasurement: string;
  value: string | number;
  lastChild?: boolean;
};

const ProductSpecification: React.FC<ProductSpecificationProps> = ({
  label,
  unitOfMeasurement,
  value,
  lastChild,
  ...rest
}) => {
  return (
    <S.Container {...rest} lastChild={lastChild}>
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
