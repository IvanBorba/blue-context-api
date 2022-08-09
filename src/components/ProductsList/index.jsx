import { ProductsListContainer } from "./styles";
import ProductCard from "../ProductCard";
import { useProducts } from "../../contexts/products";

const ProductsList = ({ edit = false }) => {
  const { products } = useProducts();

  return (
    <ProductsListContainer>
      {products.map((element) => (
        <ProductCard product={element} key={element.id} edit={edit} />
      ))}
    </ProductsListContainer>
  );
};

export default ProductsList;
