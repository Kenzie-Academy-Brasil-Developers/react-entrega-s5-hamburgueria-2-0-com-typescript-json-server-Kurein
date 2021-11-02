import { useAPI } from "../../providers/Api";
import { Container } from "./styles";

interface ProductData {
  name: string;
  category: string;
  price: number;
  img: string;
  id: number;
}

const ProductCard = ({ product }: { product: ProductData }) => {
  const { category, name, img, price } = product;

  const { addToCart } = useAPI();

  return (
    <Container>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <h3>{`R$${price}`}</h3>
      <p>{category}</p>
      <button
        onClick={() => {
          addToCart(product);
        }}
      >
        Adicionar ao Carrinho
      </button>
    </Container>
  );
};

export default ProductCard;
