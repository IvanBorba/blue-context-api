import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

const Router = ({ products }) => {
  return (
    <Routes>
      <Route path="/" element={<Home products={products} />} />
      <Route path="/settings" element={<Settings products={products} />} />
    </Routes>
  );
};

export default Router;
