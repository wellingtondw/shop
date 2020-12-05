import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

export type TypeProps = {
  type?: 'success';
};

export interface ButtonProps extends TypeProps, TouchableOpacityProps {
  text?: string;
}

const Button: React.FC<ButtonProps> = ({ children, text, type, ...rest }) => {
  return (
    <S.Container {...rest} type={type}>
      {text && <S.Text type={type}>{text}</S.Text>}
      {children}
    </S.Container>
  );
};

export default Button;
