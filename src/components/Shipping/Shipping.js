import React from "react";
import useAuth from "../../hooks/useAuth";
import "./Shipping.css";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Shipping = () => {
  const { user } = useAuth();
  const [products] = useProducts();
  const [setCart] = useCart(products);
  const history = useNavigate();
  const handlePayment = () => {
    setCart([]);
    clearTheCart();
    history("/placeorder");
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    data.order = savedCart;
    fetch("https://serene-plains-10501.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Your ordered is processing");
          reset();
          clearTheCart();
        }
      });
  };

  return (
    <div>
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />
        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}
        <input placeholder="Enter Address" {...register("address")} />
        <input placeholder="Enter City" {...register("city")} />
        <input placeholder="Enter Phone" {...register("phone")} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
