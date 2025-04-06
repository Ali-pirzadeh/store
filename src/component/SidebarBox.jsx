import React from 'react'
import { createQueryObject } from '../helper/helper';
import { FaListUl } from 'react-icons/fa';


const categorys = [
  { id: 1, type: "all" },
  { id: 2, type: "electronics" },
  { id: 3, type: "jewelery" },
  { id: 4, type: "men's clothing" },
  { id: 5, type: "women's clothing" },
];

function SidebarBox({ setQuery }) {
  const CategoryHandeler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className="border-2 border-dashed border-red-400 rounded-sm p-4 w-full md:w-1/4 self-start">
      <div className="flex items-center mb-4">
        <FaListUl className="mr-2" />
        <p className="font-semibold">Categories</p>
      </div>
      <ul onClick={CategoryHandeler} className="space-y-2 cursor-pointer">
        {categorys.map((item) => (<li key={item.id} className="hover:text-red-400">{ item.type}</li>))}
      </ul>
    </div>
  );
}

export default SidebarBox