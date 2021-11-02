import { useHistory } from "react-router";
import { Container, NavBar, Products } from "./styles";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";
import Cart from "../../components/Cart";
import { useAPI } from "../../providers/Api";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const { logout, productList, getList, getCart } = useAPI();

  useEffect(() => {
    getList();
    getCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isCart, setIsCart] = useState<boolean>(false);

  const history = useHistory();

  const token = localStorage.getItem("Hamburgueria_token");

  if (!token) {
    history.push("/login");
  }

  const setCart = () => {
    setIsCart(!isCart);
  };

  return (
    <>
      {isCart && <Cart setCart={setCart} />}
      <Container>
        <NavBar>
          <FiShoppingCart onClick={setCart} />
          <FiLogOut onClick={logout} />
        </NavBar>
        <Products>
          {productList.map((elt, index) => {
            return <ProductCard key={index} product={elt} />;
          })}
        </Products>
      </Container>
    </>
  );
};

export default Home;
