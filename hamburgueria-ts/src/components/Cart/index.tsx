import { useState } from "react";
import { FiX } from "react-icons/fi";
import { useAPI } from "../../providers/Api";
import CartProduct from "../CartProduct";
import { Container, BodyContainer, PoductContainer } from "./styles";

interface CartData {
  setCart: () => void;
}

const Cart = ({ setCart }: CartData) => {
  const { cartList } = useAPI();

  const [productsList, setProductsList] = useState(cartList);

  return (
    <>
      <BodyContainer />
      <Container>
        <FiX onClick={setCart} />
        <PoductContainer>
          {productsList.map((elt, index) => {
            return (
              <CartProduct
                key={index}
                product={elt}
                productsList={productsList}
                setProductsList={setProductsList}
              />
            );
          })}
        </PoductContainer>
      </Container>
    </>
  );
};

export default Cart;
