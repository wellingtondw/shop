import React from 'react';
import { ImageProps, ImageURISource } from 'react-native';
import * as S from './styles';

import ImagePlaceholder from '../../assets/images/image-placeholder.png';

export interface ProductImageProps extends ImageProps {
  size?: 'small' | 'large';
  withBorder?: boolean;
  source: ImageURISource;
}

const ProductImage: React.FC<ProductImageProps> = ({
  source,
  resizeMode,
  size = 'small',
  withBorder = false,
}) => {
  return (
    <S.ImageContainer withBorder={withBorder} hasImage={!!source.uri}>
      <S.Image
        source={(source.uri && source) || ImagePlaceholder}
        resizeMode={resizeMode}
        size={size}
      />
    </S.ImageContainer>
  );
};

export default ProductImage;
