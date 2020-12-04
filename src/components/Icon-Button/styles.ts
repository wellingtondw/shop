import styled, { css } from 'styled-components/native';
import Btn from '../Button';

type IconContainerProps = {
  color: string;
};

export const Button = styled(Btn)`
  ${({ theme }) => css`
    border-width: 1px;
    border-color: ${theme.colors.gray};
  `}
`;

export const IconContainer = styled.View<IconContainerProps>`
  ${({ color }) => css`
    width: 22px;
    height: 22px;
    border-radius: 22px;
    border-width: 2px;
    border-color: ${color};
    align-items: center;
    justify-content: center;
  `}
`;
