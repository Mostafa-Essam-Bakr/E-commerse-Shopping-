import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useMemo, useState } from "react";

const Cart = () => {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const cart = useSelector((state) => state.cart);

  const totalAmount = useMemo(() => {
    return cart.reduce((acc, curr) => acc + curr.price, 0);
  }, [cart]);

  const handleCheckout = () => {
    setCheckoutSuccess(true); // تحديد أن عملية الشراء تمت بنجاح
    setTimeout(() => {
      // بعد 3 ثوانٍ، إعادة تعيين الحالة لتسمح بعرض السلة مرة أخرى أو إعادة التوجيه
      setCheckoutSuccess(false);
    }, 3000);
  };

  return (
    <div className="cart-container">
      {checkoutSuccess ? (
        <div className="checkout-success-animation">
          <div className="checkout-success-message">
            <h2>Purchase Successful!</h2>
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            <p>Thank you for your purchase!</p>
          </div>
        </div>
      ) : (
        <>
          {cart.length > 0 ? (
            <div className="cart-content">
              <div className="cart-items">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              <div className="cart-summary-container">
                <div>
                  <div className="cart-summary-title">Your Cart</div>
                  <div className="cart-summary-subtitle">Summary</div>
                  <p className="cart-summary-item-count">
                    <span>Total Items: {cart.length}</span>
                  </p>
                </div>

                <div className="cart-summary-total">
                  <p>
                    Total Amount:{" "}
                    <span className="font-bold">${totalAmount.toFixed(2)}</span>
                  </p>
                  <button className="checkout-button" onClick={handleCheckout}>
                    Checkout Now
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-cart">
              <h1>Your cart is Empty</h1>
              <Link to="/">
                <button className="shop-now-button">Shop Now</button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
