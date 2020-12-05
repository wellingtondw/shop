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

export const ImageContainer = styled.View<Omit<ImageContainerType, 'source'>>`
  ${({ theme, withBorder, hasImage }) => css`
    ${hasImage &&
    css`
      padding: ${theme.spacings.xxsmall};
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
