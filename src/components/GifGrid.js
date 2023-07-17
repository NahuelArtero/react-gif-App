import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold mb-2 p-5">{category}</h3>
      {loading ? (
        <p className="text-gray-500">LOADING...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      )}
    </div>
  );
};
