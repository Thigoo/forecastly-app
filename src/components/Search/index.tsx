import { ChangeEvent, FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

export const Search = ({ onSearch }: { onSearch(input: string): void }) => {
  const [input, setInput] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <>
      <form
        className="bg-purple-400 flex  justify-between w-full p-2 m-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search for place"
          className="bg-opacity-50 p-2 border-none outline-none rounded-lg w-full mr-2"
          value={input}
          onChange={handleInput}
        />
        <button
          className="flex items-center gap-2 px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          type="submit"
        >
          <FaSearch />
          Search
        </button>
      </form>
    </>
  );
};
