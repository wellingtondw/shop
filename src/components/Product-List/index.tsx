import React from 'react';
import { FlatList, FlatListProps, ListRenderItem } from 'react-native';
import * as S from './styles';
import ProductItem, { ProductItemProps } from '../Product-Item';

export interface ProductListProps extends FlatListProps<ProductItemProps> {
  data: ProductItemProps[];
}

const ProductList: React.FC<Omit<ProductListProps, 'renderItem'>> = ({
  data,
  ...rest
}) => {
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
        {...rest}
      />
    </S.Container>
  );
};

export default ProductList;
