import React from 'react';
import { useNavigation } from '@react-navigation/native';

import BackButton from '../Back-Button';

import * as S from './styles';

export type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title, ...rest }) => {
  const navigation = useNavigation();

  return (
    <S.Container {...rest}>
      <BackButton onPress={() => navigation.goBack()} />
      <S.Title type="secondary">{title}</S.Title>
    </S.Container>
  );
};

export default Header;
