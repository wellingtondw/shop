import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import * as S from './styles';
import ProductItem, { ProductItemProps } from '../Product-Item';

export type ProductListProps = {
  data: ProductItemProps[];
};

const ProductList: React.FC<ProductListProps> = ({ data }) => {
  const renderProductItem: ListRenderItem<ProductItemProps> = ({
    item: product,
  }) => {
    return <ProductItem {...product} />;
  };

  return (
    <S.Container>
      <FlatList
        data={data}
        keyExtractor={product => product.id}
        renderItem={renderProductItem}
      />
    </S.Container>
  );
};

export default ProductList;
