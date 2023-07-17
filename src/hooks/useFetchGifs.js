import { useEffect, useState } from "react";
import { getFetchGifs } from "../helpers/getFetchGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const img = await getFetchGifs(category);
        setState({
          data: img,
          isLoading: false,
        });
      } catch (error) {
        console.error("Error : ", error);
        setState({
          data: [],
          isLoading: false,
        });
      }
    };

    fetchData();
  }, [category]);

  return state;
};
