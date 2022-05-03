import React from "react";

import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../src/features/cart/cartSlice";
import Navbar from "./components/Navbar";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
