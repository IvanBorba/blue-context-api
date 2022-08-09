import { useNavigate } from "react-router-dom";
import "./App.css";
import Router from "./router";

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/settings")}>Settings</a>
      </div>
      <Router />
    </div>
  );
};

export default App;
