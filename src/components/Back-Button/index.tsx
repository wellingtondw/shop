import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

const BackButton: React.FC<TouchableOpacityProps> = props => {
  return (
    <S.BackButton {...props}>
      <S.Icon name="chevron-left" />
    </S.BackButton>
  );
};

export default BackButton;
