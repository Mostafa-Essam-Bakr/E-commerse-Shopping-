import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  // استرجاع cart من الـ state مباشرة بدلاً من إرجاع الـ state بالكامل
  const cart = useSelector(state => state.cart)

  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="logo-container">
          <img src="logo.png" className="logo" alt="Logo" />
        </div>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/">
          <p>About</p>
        </NavLink>
        <NavLink to="/">
          <p>Contact US</p>
        </NavLink>
        <NavLink to="/">
          <p>Blog</p>
        </NavLink>
        <NavLink to="/Services">
          <p>Services</p>
        </NavLink>
      </div>

      <NavLink to="/cart">
        <div className="cart-container">
          <FaShoppingCart className="cart-icon" />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>
      </NavLink>
    </nav>
  )
}

export default Navbar
