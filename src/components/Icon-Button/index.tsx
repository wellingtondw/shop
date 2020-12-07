import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';

export interface IconButtonProps extends TouchableOpacityProps {
  name: string;
  size: number;
  color: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  name,
  size,
  color,
  ...rest
}) => {
  return (
    <S.Button {...rest}>
      <S.IconContainer color={color}>
        <Icon name={name} size={size} color={color} />
      </S.IconContainer>
    </S.Button>
  );
};

export default IconButton;
