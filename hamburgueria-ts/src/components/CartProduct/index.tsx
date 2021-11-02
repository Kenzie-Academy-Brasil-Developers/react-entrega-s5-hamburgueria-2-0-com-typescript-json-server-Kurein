import {
  Container,
  SubContainer,
  ButtonContainer,
  SubContainerButton,
} from "./styles";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useAPI } from "../../providers/Api";
import { useState, Dispatch, SetStateAction } from "react";

interface ProductData {
  name: string;
  category: string;
  price: number;
  img: string;
  id: number;
  userId: number;
  amount: number;
}

interface CartProductData {
  product: ProductData;
  productsList: ProductData[];
  setProductsList: Dispatch<SetStateAction<ProductData[]>>;
}

const CartProduct = ({
  product,
  productsList,
  setProductsList,
}: CartProductData) => {
  const { updateAmount, deleteFromCart } = useAPI();
  const { name, price, img, id } = product;

  const [amount, setAmount] = useState(product.amount);

  const amountHandler = (check: boolean) => {
    if (check) {
      setAmount(amount + 1);
      updateAmount(id, check, amount);
    }
    if (!check && amount >= 2) {
      setAmount(amount - 1);
      updateAmount(id, check, amount);
    }
  };

  const deleteHandler = (name: string, id: number) => {
    deleteFromCart(id);
    setProductsList(
      productsList.filter((elt) => {
        return elt.name !== name;
      })
    );
  };

  return (
    <Container>
      <SubContainer>
        <img src={img} alt={name} />
        <SubContainerButton>
          <h1>{name}</h1>
          <ButtonContainer>
            <FiMinus onClick={() => amountHandler(false)} />
            <p>{amount}</p>
            <FiPlus onClick={() => amountHandler(true)} />
          </ButtonContainer>
        </SubContainerButton>
        <SubContainerButton>
          <h2>{`Total = R$ ${price * amount}`}</h2>
          <FiTrash2 onClick={() => deleteHandler(name, id)} />
        </SubContainerButton>
      </SubContainer>
    </Container>
  );
};

export default CartProduct;
