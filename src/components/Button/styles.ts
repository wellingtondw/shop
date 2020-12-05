import styled, { css, DefaultTheme } from 'styled-components/native';
import { Text as Txt } from '../../styles/common';
import { ButtonProps, TypeProps } from '.';

const buttonModifiers = {
  success: (theme: DefaultTheme) => css`
    background: ${theme.colors.green};
    color: ${theme.colors.white};
  `,
};

export const Container = styled.TouchableOpacity<Omit<ButtonProps, 'text'>>`
  ${({ theme, type }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    ${type && buttonModifiers[type!](theme)}
    border-radius: ${theme.border.radius};
    align-items: center;
    justify-content: center;
  `}
`;

export const Text = styled(Txt)<TypeProps>`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;
