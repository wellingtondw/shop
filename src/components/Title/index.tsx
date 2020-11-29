import React from 'react';
import { TextProps } from 'react-native';

import * as S from './styles';

export interface TitleProps extends TextProps {
  type?: 'primary' | 'secondary';
}

const Title: React.FC<TitleProps> = ({ children, ...rest }) => {
  return <S.Title {...rest}>{children}</S.Title>;
};

export default Title;
