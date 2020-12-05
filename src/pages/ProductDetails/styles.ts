import styled, { css } from 'styled-components/native';
import LinearG from 'react-native-linear-gradient';
import TitleComponent from '../../components/Title';

export const HeaderContainer = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const Title = styled(TitleComponent)`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0 ${theme.spacings.large};
  `}
`;

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const LinearGradient = styled(LinearG)`
  flex: 1;
  height: 36px;
`;

export const ButtonWrapper = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    margin-left: ${theme.spacings.large};
    width: 65%;
  `}
`;

export const InputContainer = styled.View`
  width: 48%;
`;

export const FooterContainer = styled.View`
  ${({ theme }) => css`
    border-top-width: 1px;
    padding-top: ${theme.spacings.small};
    border-color: ${theme.colors.gray};
    align-items: flex-end;
    margin-top: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.small};
  `}
`;
