import { data } from "react-router-dom";
import BasketCard from "../component/BasketCard";
import { useCart } from "../context/CartContext";
import Container from "../component/Container";

function CheckOutPage() {
  const [state, dispatch] = useCart();

  const clickHandeler = (type, payload) => dispatch({ type, payload });

  return (
    <Container>
      <div className="flex-col">
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            clickHandeler={clickHandeler}
            data={product}
          />
        ))}
      </div>
    </Container>
  );
}

export default CheckOutPage;
