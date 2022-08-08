import { useNavigate } from "react-router-dom";
import "./App.css";
import Router from "./router";

const products = [
  {
    name: "Burguer 1",
  },
  {
    name: "Burguer 2",
  },
  {
    name: "Burguer 3",
  },
  {
    name: "Burguer 4",
  },
  {
    name: "Burguer 5",
  },
  {
    name: "Burguer 6",
  },
  {
    name: "Burguer 7",
  },
];

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/settings")}>Settings</a>
      </div>
      <Router products={products} />
    </div>
  );
};

export default App;
