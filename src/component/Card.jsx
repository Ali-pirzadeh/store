import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { useCart } from "../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";
import { productQuantity } from "../helper/helper";

function Card({ data }) {
  const { id, title, description, image, price } = data;

  const [state, dispatch] = useCart()
  
  const clickHandeler = ( type ) => {
    dispatch({ type, payload: data });
  };

  const quantity = productQuantity(state, id);

  const truncateTitle = (text, wordLimit) => {
    return (
      text.split(" ").slice(0, wordLimit).join(" ") +
      (text.split(" ").length > wordLimit ? "" : "")
    );
  };

  return (
    <div className="flex flex-col w-full border border-dashed gap-4 p-4 shadow-xl rounded-2xl">
      <div className="w-full flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-32 h-32 rounded-full object-contain"
        />
      </div>
      <h3 className="text-center font-semibold text-lg text-red-600">
        {truncateTitle(title, 3)}
      </h3>
      <p className="text-center text-xl font-medium">{price} $</p>
      <div className="flex justify-between items-center mt-2 px-2">
        <Link to={`/products/${id}`}>
          <TbListDetails
            size={24}
            className="cursor-pointer hover:text-green-600/50"
          />
        </Link>

        {quantity === 1 && (
          <button onClick={() => clickHandeler("REMOVE_ITEM")}>
            <MdDeleteOutline
              size={24}
              className="cursor-pointer hover:text-red-600/50"
            />
          </button>
        )}
        {quantity > 1 && (
          <button
            className="cursor-pointer bg-red-500 py-1 px-2 rounded-xl text-xl text-center"
            onClick={() => clickHandeler("DECREASE")}
          >
            -
          </button>
        )}
        {!!quantity && <span className="text-xl text-center">{quantity}</span>}
        {quantity === 0 ? (
          <button onClick={() => clickHandeler("ADD_ITEM")}>
            <TbShoppingBagCheck
              size={24}
              className="cursor-pointer hover:text-green-600/50"
            />
          </button>
        ) : (
          <button
            className="cursor-pointer bg-green-500 py-1 px-2 rounded-xl text-xl text-center"
            onClick={() => clickHandeler("INCREASE")}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
