import { ChangeEvent, FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface ISearchProps {
  onSearch(input: string): void;
  apiError: string | null;
}

export const Search = ({ onSearch, apiError }: ISearchProps) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string>("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput("");
      setError("");
    } else {
      setError("Please enter a city name");
    }
  };

  return (
    <>
      <form
        className="bg-purple-400 flex justify-between w-full p-2 mt-3"
        onSubmit={handleSubmit}
      >
        <div className="w-full mr-2 flex flex-col items-start">
          <input
            type="text"
            placeholder="Search for place"
            className="bg-opacity-50 p-2 border-none outline-none rounded-lg w-full mr-2"
            value={input}
            onChange={handleInput}
          />
          <p
            className={`text-red-500 ${apiError ? "visible" : "invisible"}`}
            style={{ height: "1.25rem" }}
          >
            {error ? error : apiError}
          </p>
        </div>
        <div className="flex items-start ">
          <button
            className="flex items-center gap-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            <FaSearch />
            Search
          </button>
        </div>
      </form>
    </>
  );
};
