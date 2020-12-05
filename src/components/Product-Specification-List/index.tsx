import React from 'react';
import { FlatList, FlatListProps, ListRenderItem } from 'react-native';
import * as S from './styles';
import ProductSpecification, {
  ProductSpecificationProps,
} from '../Product-Specification';

export interface ProductSpecificationListProps
  extends FlatListProps<ProductSpecificationProps> {
  data: ProductSpecificationProps[];
}

const ProductSpecificationList: React.FC<
  Omit<ProductSpecificationListProps, 'renderItem'>
> = ({ data, ...rest }) => {
  const renderProductSpecification: ListRenderItem<ProductSpecificationProps> = ({
    item: productSpecification,
    index,
  }) => {
    return (
      <ProductSpecification
        {...productSpecification}
        lastChild={data.length - 1 === index}
      />
    );
  };

  return (
    <S.Container>
      <FlatList
        data={data}
        keyExtractor={productSpecification => productSpecification.label}
        renderItem={renderProductSpecification}
        {...rest}
      />
    </S.Container>
  );
};

export default ProductSpecificationList;
