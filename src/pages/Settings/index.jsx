import { SettingsContainer } from "./styles";
import ProductsList from "../../components/ProductsList";

const Settings = ({ products }) => {
  return (
    <SettingsContainer>
      <h1>Editar Produtos</h1>
      <ProductsList products={products} edit />
    </SettingsContainer>
  );
};

export default Settings;
