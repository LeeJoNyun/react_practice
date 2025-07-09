import { useNavigate, useParams } from "react-router-dom";
import dataList from "../assets/data";
import { Container, DetailSection } from "./style";
const ProductDetail = () => {
  const { productID } = useParams();
  const navigate = useNavigate();
  const data = dataList.find((item) => item.id === Number(productID));

  const { name, photo, price, description } = data;

  const onFirst = () => {
    navigate("/");
  };
  const onBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <DetailSection>
        <div className="inner">
          <h2>{productID}번 제품 상세페이지</h2>
          <article className="con-box">
            <div className="left">
              <h3>제품명 : {name}</h3>
              <strong>가격 : {price} </strong>
              <p>
                <img src={photo} alt="" />
              </p>
              <p>
                <button onClick={onFirst}>첫페이지</button>
                <button onClick={onBack}>목록</button>
              </p>
            </div>
            <div className="right">
              <h3>세부내용</h3>
              <span>{description}</span>
            </div>
          </article>
        </div>
      </DetailSection>
    </Container>
  );
};

export default ProductDetail;
