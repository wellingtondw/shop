import styled, { css } from 'styled-components/native';
import TitleComponent from '../Title';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(TitleComponent)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`;
