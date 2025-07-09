import ProductList from "./ProductList";
import { ContentStyle } from "./style";

const Content1 = () => {
  return (
    <ContentStyle>
      <div className="inner">
        <h2>베스트 상품</h2>
        <ProductList />
      </div>
    </ContentStyle>
  );
};

export default Content1;
