import styled from 'styled-components/native';
import { Text } from '../../styles/common';
import TitleComponent from '../Title';

export const Container = styled.TouchableOpacity`
  border-color: #dfe3e8;
  border-bottom-width: 1px;
  flex-direction: row;
  padding: 16px 0;
  align-items: center;
`;

export const ImageContainer = styled.View`
  width: 50px;
  height: 50px;
  margin-right: 16px;
  border: 1px solid #dfe3e8;
  padding: 2px;
  align-self: flex-start;
`;

export const Image = styled.Image`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  max-width: 220px;
`;

export const Title = styled(TitleComponent)`
  align-self: flex-start;
  margin-bottom: 8px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
`;

export const NumberOfInstallments = styled(Text)`
  margin-right: 4px;
  font-size: 13px;
`;

export const PromotionalPrice = styled(NumberOfInstallments)`
  margin-right: 4px;
  color: #637381;
  text-decoration: line-through;
`;

export const Price = styled(NumberOfInstallments)`
  margin-right: 4px;
`;
