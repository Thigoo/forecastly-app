import { FaSearch } from "react-icons/fa";

export const Search = () => {
  return (
    <>
      <div className="bg-purple-400 flex  justify-between w-full p-2 m-3">
        <input
          type="text"
          placeholder="Search for place"
          className="bg-opacity-50 p-2 border-none outline-none rounded-lg w-full mr-2"
        />
        <button className="flex items-center gap-2 px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          <FaSearch />
          Search
        </button>
      </div>
    </>
  );
};
