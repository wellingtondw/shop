import React from 'react';
import { ImageProps } from 'react-native';
import * as S from './styles';

import ImagePlaceholder from '../../assets/images/image-placeholder.png';

export interface ProductImageProps extends ImageProps {
  size?: 'small' | 'large';
}

const ProductImage: React.FC<ProductImageProps> = ({
  source,
  resizeMode,
  size = 'small',
}) => {
  return (
    <S.Image
      source={source || ImagePlaceholder}
      resizeMode={resizeMode}
      size={size}
    />
  );
};

export default ProductImage;
