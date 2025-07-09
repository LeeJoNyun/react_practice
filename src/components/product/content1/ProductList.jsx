import ProductItem from "./ProductItem";
import { ProductUl } from "./style";
import data from "../../../assets/data";
const ProductList = () => {
  return (
    <ProductUl>
      {data.map((item) => (
        <ProductItem key={item.id} data={item} />
      ))}
    </ProductUl>
  );
};

export default ProductList;
