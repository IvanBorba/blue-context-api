import { ProductCardContainer, EditButton } from "./styles";

const ProductCard = ({ product, edit }) => {
  return (
    <ProductCardContainer>
      <h3>{product.name}</h3>
      {edit && <EditButton>Editar</EditButton>}
    </ProductCardContainer>
  );
};

export default ProductCard;
