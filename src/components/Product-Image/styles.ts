import styled, { css } from 'styled-components/native';
import { ProductImageProps } from '.';

const imageModifiers = {
  small: () => css`
    width: 45px;
    height: 45px;
  `,
  large: () => css`
    width: 195px;
    height: 185px;
  `,
};

interface ImageContainerType extends ProductImageProps {
  hasImage: boolean;
}

export const ImageContainer = styled.View<ImageContainerType>`
  ${({ theme, withBorder, hasImage }) => css`
    ${hasImage &&
    css`
      padding: 2px;
    `}

    ${withBorder &&
    css`
      border: 1px solid ${theme.colors.gray};
    `}
  `}
`;

export const Image = styled.Image<ProductImageProps>`
  ${({ size }) => css`
    ${size && imageModifiers[size]};
  `}
`;
