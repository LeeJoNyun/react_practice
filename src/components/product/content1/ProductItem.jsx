import { Link } from "react-router-dom";

const ProductItem = ({ data }) => {
  const { id, name, photo } = data;
  return (
    <li>
      <Link to={`/product/${id}`}>
        <h3>{name}</h3>
        <p>
          <img src={photo} alt="" />
        </p>
      </Link>
    </li>
  );
};

export default ProductItem;
