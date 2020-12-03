import styled, { css, DefaultTheme } from 'styled-components/native';
import { Text } from '../../styles/common';
import { InputProps } from '.';

const textInputModifiers = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary};
  `,
};

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled(Text)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const TextInput = styled.TextInput<Omit<InputProps, 'label'>>`
  ${({ theme, type }) => css`
    width: 100%;
    height: 46px;
    border: 1px solid ${theme.colors.gray};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    font-family: ${theme.font.family.normal};
    font-size: ${theme.font.sizes.normal};
    border-radius: ${theme.spacings.xxsmall};

    ${type && textInputModifiers[type](theme)}
  `}
`;
