import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Membership from "./pages/Membership";
//banner & svg
import bannermen from "./assets/bannermen.png";
import bannerwommen from "./assets/bannerwomen.png";
import bannerkids from "./assets/bannerkids.png";
import TopBrand from "./components/TopBrand";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user]);

  return (
    <>
      <main className="text-tertiary ">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/men"
              element={
                localStorage.getItem("user") ? (
                  <Category category={"men"} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/women"
              element={
                localStorage.getItem("user") ? (
                  <Category category={"women"} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/kids"
              element={
                localStorage.getItem("user") ? (
                  <Category category={"kids"} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/product" element={<Product />} />
            <Route path="/membership-club" element={<Membership />} />
            <Route>
              <Route path="product/:productId" element={<Product />} />
            </Route>
            <Route path="/cart-page" element={<Cart />} />
            <Route
              path="/login"
              element={
                !user ? <Login setUser={setUser} /> : <Navigate to="/" />
              }
            />
            <Route
              path="/signup"
              element={
                !user ? <Signup setUser={setUser} /> : <Navigate to="/" />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
