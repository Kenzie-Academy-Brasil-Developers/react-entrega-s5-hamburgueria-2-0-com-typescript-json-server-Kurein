import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

interface APIProps {
  children: ReactNode;
}

interface Product {
  name: string;
  category: string;
  price: number;
  img: string;
  id: number;
}

interface CartProduct {
  name: string;
  category: string;
  price: number;
  img: string;
  id: number;
  userId: number;
  amount: number;
}

interface User {
  email: string;
  password: string;
}

interface APIProviderData {
  productList: Product[];
  cartList: CartProduct[];
  getList: () => void;
  getCart: () => void;
  updateAmount: (itemId: number, buttonPressed: boolean) => void;
  addToCart: (product: Product) => void;
  deleteFromCart: (itemId: number) => void;
  login: (user: User) => void;
  logout: () => void;
}

const APIContext = createContext<APIProviderData>({} as APIProviderData);

export const APIProvider = ({ children }: APIProps) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [cartList, setCartList] = useState<CartProduct[]>([]);

  const token = JSON.parse(localStorage.getItem("Hamburgueria_token") || "{}");
  const userId = Number(localStorage.getItem("Hamburgueria_id") || "0");

  const getList = () => {
    axios
      .get("https://hamburgeria-kaueh.herokuapp.com/products")
      .then((resp) => setProductList(resp.data))
      .catch((err) => console.log(err));
  };

  const getCart = () => {
    axios
      .get("https://hamburgeria-kaueh.herokuapp.com/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => setCartList(resp.data))
      .catch((err) => console.log(err));
  };

  const updateAmount = (itemId: number, buttonPressed: boolean) => {
    const item = cartList.find((elt) => {
      return elt.id === itemId;
    });

    const updatedAmount = { amount: item?.amount || 1 };

    if (item && buttonPressed) {
      updatedAmount.amount += 1;
    }
    if (item && !buttonPressed) {
      updatedAmount.amount -= 1;
    }

    axios
      .patch(
        `https://hamburgeria-kaueh.herokuapp.com/cart/${itemId}`,
        updatedAmount,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => console.log(err));
  };

  const addToCart = (product: Product) => {
    const { id, name, category, price, img } = product;
    const cartProduct: CartProduct = {
      id,
      name,
      category,
      price,
      img,
      userId: userId,
      amount: 1,
    };

    const productCheck = cartList.find((elt) => {
      return elt.name === product.name;
    });

    if (productCheck) {
      updateAmount(productCheck.id, true);
    } else {
      axios
        .post("https://hamburgeria-kaueh.herokuapp.com/cart", cartProduct, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteFromCart = (itemId: number) => {
    axios
      .delete(`https://hamburgeria-kaueh.herokuapp.com/cart/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => console.log(err));
  };

  const login = (user: User) => {
    axios
      .post("https://hamburgeria-kaueh.herokuapp.com/login", user)
      .then((resp) => {
        const userToken = resp.data.accessToken;
        const id = resp.data.user.id;

        localStorage.setItem("Hamburgueria_token", JSON.stringify(userToken));
        localStorage.setItem("Hamburgueria_id", JSON.stringify(id));

        document.location.reload();
      });
  };

  const logout = () => {
    localStorage.clear();
    document.location.reload();
  };

  return (
    <APIContext.Provider
      value={{
        getList,
        productList,
        cartList,
        getCart,
        updateAmount,
        addToCart,
        deleteFromCart,
        login,
        logout,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export const useAPI = () => useContext(APIContext);
