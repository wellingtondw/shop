import styled, { css } from 'styled-components/native';
import IC from 'react-native-vector-icons/FontAwesome';

export const BackButton = styled.TouchableOpacity`
  width: 30px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(IC)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.normal};
    color: ${theme.colors.secondary};
  `}
`;
