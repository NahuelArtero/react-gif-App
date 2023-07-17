import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (elem) => {
    setInputValue(elem.target.value);
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((categos) => [inputValue, ...categos]);
      setInputValue("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center mt-8"
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValue}
        placeholder="Search Gifs"
        className="border border-green-400 rounded px-2 py-1 focus:outline-none focus:border-green-500 w-48"
      />
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-1 ml-2 rounded focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
