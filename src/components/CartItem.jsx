import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image-container">
        <img src={item.image} alt={item.title} className="cart-item-image" />
      </div>

      <div className="cart-item-info">
        <h1 className="cart-item-title">{item.title}</h1>
        <p className="cart-item-description">
          {item.description.split(" ").slice(1, 20).join(" ") + "..."}
        </p>
        <div className="cart-item-footer">
          <p className="cart-item-price">${item.price}</p>
          <div
            className="cart-item-delete"
            onClick={removeFromCart}
            title="Remove from cart"
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
