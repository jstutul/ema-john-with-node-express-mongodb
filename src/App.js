import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Shop from "./components/Shop/Shop";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shipping from "./components/Shipping/Shipping";
function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Shop />}></Route>
            <Route exact path="/shop" element={<Shop />}></Route>
            <Route exact path="/review" element={<OrderReview />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route element={<PrivateRoute />}>
              <Route exact path="/placeorder" element={<PlaceOrder />}></Route>
              <Route exact path="/inventory" element={<Inventory />}></Route>
              <Route exact path="/shipping" element={<Shipping />}></Route>
            </Route>
            <Route exact path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
