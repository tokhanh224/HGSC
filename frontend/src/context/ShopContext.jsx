import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    const product = products.find((item) => item._id === itemId);
    if (!product) {
      toast.error("Product not found");
      return;
    }

    let cartData = { ...cartItems }; // Clone object
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);

    // Hiển thị thông báo thành công
    toast.success(`${product.name} has been added to your cart!`);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      const sizes = cartItems[itemId];
      for (const size in sizes) {
        totalCount += sizes[size];
      }
    }

    return totalCount;
  };

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = { ...cartItems };
    if (cartData[itemId] && cartData[itemId][size]) {
      cartData[itemId][size] = quantity;
      setCartItems(cartData);
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (!itemInfo) continue;

      for (const size in cartItems[itemId]) {
        try {
          if (cartItems[itemId][size] > 0) {
            totalAmount += itemInfo.price * cartItems[itemId][size];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
