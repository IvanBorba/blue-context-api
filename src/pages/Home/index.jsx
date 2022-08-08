import { HomeContainer } from "./styles";
import ProductsList from "../../components/ProductsList";

const Home = ({ products }) => {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <ProductsList products={products} />
    </HomeContainer>
  );
};

export default Home;
