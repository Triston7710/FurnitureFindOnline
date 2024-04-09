import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import sofa_banner from "./Components/Assets/banner_sofa.png";
import men_banner from "./Components/Assets/banner_chair.png";
import bed_banner from "./Components/Assets/banner_bed.png";
import table_banner from "./Components/Assets/banner_table.png";
import wardrobe_banner from "./Components/Assets/banner_wardrobe.jpg";
import LoginSignup from "./Pages/LoginSignup";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
         
          <Route path="/sofa1" element={<ShopCategory banner={sofa_banner} category="sofa1" />} />
          <Route path="/chair" element={<ShopCategory banner={men_banner} category="chair" />} />
          <Route path="/table" element={<ShopCategory banner={table_banner} category="table" />} />
          <Route path="/wardrobe" element={<ShopCategory banner={wardrobe_banner} category="wardrobe" />} />
          <Route path="/bed" element={<ShopCategory banner={bed_banner} category="bed" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
