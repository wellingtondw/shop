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

export const Image = styled.Image<ProductImageProps>`
  ${({ size }) => css`
    ${size && imageModifiers[size]}
  `}
`;
