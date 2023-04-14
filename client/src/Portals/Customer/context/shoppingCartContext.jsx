import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const [tempItem, setTempItem] = useState({ _id: "", quanity: 0 });
  const getItemQuanity = (_id) => {
    console.log(cartItem);
    return cartItem.find((item) => item._id === _id)?.quanity || 0;
  };

  const getTempQuanity = (_id) => {
    return tempItem.quanity || 0;
  };
  const increaseCartTemp = (_id) => {
    setTempItem((currItem) => {
      if (currItem._id !== _id) {
        return { _id: _id, quanity: 1 };
      } else {
        return { _id: _id, quanity: currItem.quanity + 1 };
      }
    });
  };
  console.log(tempItem);

  const decreaseCartTemp = (_id) => {
    setTempItem((currItem) => {
      if (currItem._id === _id) {
        if (currItem.quanity === 1) {
          return {};
        } else {
          return { _id: _id, quanity: tempItem.quanity - 1 };
        }
      }
    });
  };

  const increaseCartQuantity = (_id) => {
    setCartItem((currItem) => {
      if (currItem.find((item) => item._id === _id) == null) {
        return [...currItem, { _id: _id, quanity: 1 }];
      } else {
        return currItem.map((item) => {
          if (item._id === _id) {
            return { ...item, quanity: item.quanity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuanity = (_id) => {
    console.log("inside increaseCart ");
    setCartItem((currItem) => {
      if (currItem.find((item) => item._id) === 1) {
        return currItem.filter((item) => item._id !== _id);
      } else {
        return currItem.map((item) => {
          if (item._id === _id) {
            return { ...item, quanity: item.quanity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (_id) => {
    return setCartItem((currItem) => {
      return currItem.filter((item) => item._id !== _id);
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuanity,
        getTempQuanity,
        increaseCartTemp,
        decreaseCartTemp,
        increaseCartQuantity,
        decreaseCartQuanity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
