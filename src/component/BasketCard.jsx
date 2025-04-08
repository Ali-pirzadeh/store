import React from "react";
import { MdDeleteOutline } from "react-icons/md";

function BasketCard({ data, clickHandeler }) {

    const {image , title , quantity} = data

  const truncateTitle = (text, wordLimit) => {
    return (
      text.split(" ").slice(0, wordLimit).join(" ") +
      (text.split(" ").length > wordLimit ? "" : "")
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full border-2 border-dashed border-red-200 rounded-xl my-5 px-5">
        <img
          src={image}
          alt={title}
          className="w-30 h-30 rounded-full object-contain p-2"
        />
        <p>{truncateTitle(data.title, 3)}</p>
        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandeler("REMOVE_ITEM", data)}>
              <MdDeleteOutline
                size={24}
                className="cursor-pointer hover:text-red-600/50 mr-2"
              />
            </button>
          )}
          {quantity > 1 && (
            <button
              className="cursor-pointer bg-red-500 py-1 px-2 rounded-xl text-xl text-center mr-2"
              onClick={() => clickHandeler("DECREASE", data)}
            >
              -
            </button>
          )}
          <span>{quantity}</span>
          <button
            className="cursor-pointer bg-red-500 py-1 px-2 rounded-xl text-xl text-center ml-2"
            onClick={() => clickHandeler("INCREASE", data)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketCard;
