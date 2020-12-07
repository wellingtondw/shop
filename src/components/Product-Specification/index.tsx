import React from 'react';
import { HandleInputChangeProps } from '../../pages/ProductDetails';

import Input from '../Input';
import * as S from './styles';

export type ProductSpecificationProps = {
  label: string;
  unitOfMeasurement: string;
  value: string | number;
  lastChild?: boolean;
  handleProductSpecificationChange({
    text,
    field,
  }: HandleInputChangeProps): void;
};

const ProductSpecification: React.FC<ProductSpecificationProps> = ({
  label,
  unitOfMeasurement,
  value,
  lastChild,
  handleProductSpecificationChange,
  ...rest
}) => {
  const handleInputChange = (text: string) => {
    let field = '';

    switch (label) {
      case 'Peso':
        field = 'weight';
        break;
      case 'Altura':
        field = 'height';
        break;
      case 'Largura':
        field = 'width';
        break;
      case 'Profundidade':
        field = 'depth';
        break;
      default:
        field = '';
    }

    handleProductSpecificationChange({ text, field });
  };

  return (
    <S.Container {...rest} lastChild={!!lastChild} key={label}>
      <S.Label>{label}</S.Label>
      <S.RightContainer>
        <S.InputContainer>
          <Input
            value={String(value)}
            onChangeText={text => handleInputChange(text)}
            keyboardType="numeric"
          />
        </S.InputContainer>
        <S.UnitOfMeasurement>{unitOfMeasurement}</S.UnitOfMeasurement>
      </S.RightContainer>
    </S.Container>
  );
};

export default ProductSpecification;
