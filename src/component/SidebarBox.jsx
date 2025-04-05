import React from 'react'
import { createQueryObject } from '../helper/helper';
import { FaListUl } from 'react-icons/fa';

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
        <li>All</li>
        <li>electronics</li>
        <li>jewelery</li>
        <li>men's clothing</li>
        <li>women's clothing</li>
      </ul>
    </div>
  );
}

export default SidebarBox