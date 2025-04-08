import { data } from "react-router-dom";
import BasketCard from "../component/BasketCard";
import { useCart } from "../context/CartContext";
import Container from "../component/Container";
import BasketSidebar from "../component/BasketSidebar";

function CheckOutPage() {
  const [state, dispatch] = useCart();

  const clickHandeler = (type, payload) => dispatch({ type, payload });


  if (!state.itemsCounter) {
    return <p className="text-center font-bold text-2xl">empty</p>;
  }

  return (
    <Container>
      <div className="flex justify-evenly">
        <BasketSidebar state={state} clickHandeler={clickHandeler} />
        <div className="flex-col">
          {state.selectedItems.map((product) => (
            <BasketCard
              key={product.id}
              clickHandeler={clickHandeler}
              data={product}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default CheckOutPage;
