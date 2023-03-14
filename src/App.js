import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.Page";
import Products from "./Pages/Products.Page";
import ProductDisplay from "./Pages/Product.Display.Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:url" element={<ProductDisplay />} />
    </Routes>
  );
}

export default App;
