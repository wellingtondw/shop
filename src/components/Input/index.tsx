import React from 'react';
import * as S from './styles';

export type InputProps = {
  type?: 'primary' | 'secondary';
  label: string;
};

const Input: React.FC<InputProps> = ({
  children,
  type = 'primary',
  label,
  ...rest
}) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.TextInput type={type} {...rest}>
        {children}
      </S.TextInput>
    </S.Container>
  );
};

export default Input;
