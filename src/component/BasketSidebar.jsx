import React from 'react'
import { BsPatchCheck } from 'react-icons/bs';
import { FaHashtag } from 'react-icons/fa';
import { TbChecklist } from 'react-icons/tb'

function BasketSidebar({ state, clickHandeler }) {
    return (
      <div className="border-2 border-dashed border-red-400 rounded-sm p-4 w-full md:w-1/4 self-start">
        <div className="flex items-center mb-2">
          <TbChecklist className="mr-2" />
          <p>Total:</p>
          <span className="ml-2"> {state.totalPrice} $ </span>
        </div>
        <div className="flex items-center mb-2">
          <FaHashtag className="mr-2" />
          <p>Quantity:</p>
          <span className="ml-2">{state.itemsCounter}</span>
        </div>
        <div className="flex items-center mb-2">
          <BsPatchCheck className="mr-2" />
          <p>Status:</p>
          <span className="ml-2">{!state.checkOut && "pending..."}</span>
        </div>
        <button
          onClick={() => clickHandeler("CHECKOUT")}
          className="bg-red-400 py-1 px-3 rounded-md"
        >
          click
        </button>
      </div>
    );
}

export default BasketSidebar