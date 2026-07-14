import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/site/Layout";
import { ScrollToTop } from "./components/site/ScrollToTop";
import Index from "./pages/index";
import About from "./pages/about";
import Contact from "./pages/contact";
import Kids from "./pages/kids";
import MenAccessories from "./pages/men-accessories";
import NewArrivals from "./pages/new-arrivals";
import Offers from "./pages/offers";
import Shoes from "./pages/shoes";
import ProductDetails from "./pages/product.$id";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/men-accessories" element={<MenAccessories />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
