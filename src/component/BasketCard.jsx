import React from "react";
import { MdDeleteOutline } from "react-icons/md";

function BasketCard({ data, clickHandeler }) {

    
  const truncateTitle = (text, wordLimit) => {
    return (
      text.split(" ").slice(0, wordLimit).join(" ") +
      (text.split(" ").length > wordLimit ? "" : "")
    );
  };

  return (
    <div>
      <div className="flex items-center w-full border-2 border-dashed border-red-400 rounded-xl my-5">
        <img
          src={data.image}
          alt={data.title}
          className="w-30 h-30 rounded-full object-contain p-2"
        />
        <p>{truncateTitle(data.title, 3)}</p>
        <div>
          {data.quantity === 1 && (
            <button onClick={() => clickHandeler("REMOVE_ITEM", data)}>
              <MdDeleteOutline
                size={24}
                className="cursor-pointer hover:text-red-600/50"
              />
            </button>
          )}
          {data.quantity > 1 && (
            <button
              className="cursor-pointer bg-red-500 py-1 px-2 rounded-xl text-xl text-center"
              onClick={() => clickHandeler("DECREASE", data)}
            >
              -
            </button>
          )}
          <span>{data.quantity}</span>
          <button
            className="cursor-pointer bg-red-500 py-1 px-2 rounded-xl text-xl text-center"
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
