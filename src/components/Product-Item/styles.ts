import styled, { css } from 'styled-components/native';
import { Text } from '../../styles/common';
import TitleComponent from '../Title';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    border-color: ${theme.colors.gray};
    border-bottom-width: 1px;
    flex-direction: row;
    padding: ${theme.spacings.medium} 0;
    align-items: center;
  `}
`;

export const ImageContainer = styled.View`
  ${({ theme }) => css`
    width: 50px;
    height: 50px;
    margin-right: ${theme.spacings.medium};
    border: 1px solid ${theme.colors.gray};
    padding: ${theme.spacings.xxsmall};
    align-self: flex-start;
  `}
`;

export const Image = styled.Image`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  max-width: 220px;
`;

export const Title = styled(TitleComponent)`
  ${({ theme }) => css`
    align-self: flex-start;
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const PriceContainer = styled.View`
  flex-direction: row;
`;

export const NumberOfInstallments = styled(Text)`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.normal};
  `}
`;

export const PromotionalPrice = styled(NumberOfInstallments)`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
    color: ${theme.colors.secondary};
    text-decoration: line-through;
  `}
`;

export const Price = styled(NumberOfInstallments)`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
  `}
`;
