import { SettingsContainer } from "./styles";
import ProductsList from "../../components/ProductsList";

const Settings = () => {
  return (
    <SettingsContainer>
      <h1>Editar Produtos</h1>
      <ProductsList edit />
    </SettingsContainer>
  );
};

export default Settings;
