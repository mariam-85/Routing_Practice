import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CategoriesPage from "./pages/CategoriesPage";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDescrPage from "./pages/ProductDescrPage";



export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:category" element={<ProductsPage />} />
          <Route path="product/:id" element={<ProductDescrPage />} />
          

        </Route>
      </Routes>
    </div>
  );
}
