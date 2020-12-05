import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import * as S from './styles';
import ProductSpecification, {
  ProductSpecificationProps,
} from '../Product-Specification';

export type ProductSpecificationListProps = {
  data: ProductSpecificationProps[];
};

const ProductSpecificationList: React.FC<ProductSpecificationListProps> = ({
  data,
}) => {
  const renderProductSpecification: ListRenderItem<ProductSpecificationProps> = ({
    item: productSpecification,
  }) => {
    return <ProductSpecification {...productSpecification} />;
  };

  return (
    <S.Container>
      <FlatList
        data={data}
        keyExtractor={productSpecification => productSpecification.label}
        renderItem={renderProductSpecification}
      />
    </S.Container>
  );
};

export default ProductSpecificationList;
