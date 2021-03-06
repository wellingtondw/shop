import styled, { css } from 'styled-components/native';
import TitleComponent from '../../components/Title';

export const Title = styled(TitleComponent)`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0 ${theme.spacings.large};
  `}
`;
