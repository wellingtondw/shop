import styled, { css } from 'styled-components/native';
import { Text } from '../../styles/common';

export const Container = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-color: ${theme.colors.gray};
    padding: 12px 8px 12px 0;
  `}
`;

export const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  max-width: 100px;
`;

export const Label = styled(Text)`
  flex: 1;
`;

export const InputContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    margin-right: ${theme.spacings.small};
  `}
`;

export const UnitOfMeasurement = styled(Text)``;
