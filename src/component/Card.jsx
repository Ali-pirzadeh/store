import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";

function Card({ data }) {
  const { id, title, description, image, price } = data;

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
          className="w-32 h-32 rounded-full object-cover"
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
        <button>
          <TbShoppingBagCheck
            size={24}
            className="cursor-pointer hover:text-green-600/50"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
