import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 0 ${theme.spacings.medium};
  `}
`;

export const CentralizeView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.normal};
    font-size: ${theme.font.sizes.normal};
    line-height: ${theme.font.lineHeights.normal};
    color: ${theme.colors.primary};
  `}
`;
