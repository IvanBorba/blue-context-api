import { ProductsListContainer } from "./styles";
import ProductCard from "../ProductCard";

const ProductsList = ({ products, edit = false }) => {
  return (
    <ProductsListContainer>
      {products.map((element) => (
        <ProductCard product={element} key={element.id} edit={edit} />
      ))}
    </ProductsListContainer>
  );
};

export default ProductsList;
