import styled, { css } from 'styled-components/native';
import { TitleProps } from '.';

const types = {
  primary: {
    'font-size': '21px',
    'line-height': '24px',
  },
  secondary: {
    'font-size': '15px',
    'line-height': '20px',
  },
};

export const Title = styled.Text<TitleProps>`
  ${({ type }) => css`
    font-family: 'Rubik-Regular';
    ${type ? types[type] : types.primary}
    color: #333;
  `}
`;
