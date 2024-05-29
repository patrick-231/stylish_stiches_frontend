import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
//banner & svg
import bannermen from "./assets/bannermen.png"
import bannerwommen from "./assets/bannerwomen.png"
import bannerkids from "./assets/bannerkids.png"


function App() {
  return (
    <>
      <main className="text-tertiary ">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Category category={"men"} banner={bannermen}/>} />
            <Route path="/women" element={<Category category={"women"} banner={bannerwommen} />} />
            <Route path="/kids" element={<Category category={"kids"} banner={bannerkids}/>} />
            <Route path="/product" element={<Product />} />
            <Route>
              <Route path="product/:productId" element={<Product />} />
            </Route>
            <Route path='/cart-page' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
