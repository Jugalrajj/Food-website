import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/Storecontext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, RemovefromCart, getTotalcartAmount } = useContext(StoreContext);


  const navigate=useNavigate();

  return (
    <div>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>Rs.{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>Rs.{item.price * cartItems[item._id]}</p>
                    <p
                      onClick={() => RemovefromCart(item._id)}
                      className="cross"
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>



        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs.{getTotalcartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalcartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs.{getTotalcartAmount()===0?0:getTotalcartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
          </div>
        </div>
        
      </div>
      <div className="cart-promocode">
        <div>
          <p>If you have a promocode, Enter it here</p>
          <div className="cart-promo-input">
            <input type="text" placeholder="promocode"/>
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Cart;
