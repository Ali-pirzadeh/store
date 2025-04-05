import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const SearchHandeler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div className="flex justify-start mb-4">
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        className="border rounded-md p-2 w-full max-w-xs"
      />
      <button
        className="bg-red-300 mx-2 rounded-[25%] p-2 hover:cursor-pointer"
        onClick={SearchHandeler}
      >
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
