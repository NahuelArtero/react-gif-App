import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState(["Mario Bros"]);
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-4 text-center">Gif App</h2>
      <AddCategory setCategories={setCategories} />
      <hr className="my-4 border-t-2 border-gray-300" />
      <div className="grid gap-4">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
export default GifApp;
