import React, { useEffect } from "react";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Deals from "./pages/Deals";
import About from "./pages/About";
import GiftCard from "./pages/GiftCard";
import ShopingCart from "./pages/ShopingCart";
import Main from "./pages/Main";
import Details from "./pages/Details";
import Info from "./components/Info";
import InfoPs3 from "./components/InfoPs3";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./slices/userSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const checkUserSelf = async () => {
      try {
        const jwt = localStorage.getItem("jwt");
        const response = await axios.get(
          "http://localhost:4444/api/v1/users/self",
          {
            headers: { Authorization: `Bearer ${jwt}` },
          }
        );
        const data = response.data;
        dispatch(setUser(data));
      } catch (error) {
        if (!error?.response?.data?.isOk) navigate("/auth/signin");
      }
    };
    checkUserSelf();
  }, []);
  return (
    <>
      {isAuth ? (
        <>
          <Header></Header>
          <main className="main container">
            <Catalog></Catalog>
            <div className="render">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/game" element={<Game />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/about" element={<About />} />
                <Route path="/giftcard" element={<GiftCard />} />
                <Route path="/shopingcart" element={<ShopingCart />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/info/:id" element={<Info />} />
                <Route path="/infops3/:id" element={<InfoPs3 />} />
              </Routes>
            </div>
          </main>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/auth/signin" element={<Signin />} />
            <Route path="/auth/signup" element={<Signup />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;

// <Route path='/giftcard' element={<GiftCard/>} />
// <Route path='/deals' element={<Deals/>} />
// <Route path='/shopingcart' element={<ShopingCart/>} />
// <Route path='/about' element={<About/>} />
