export const getFetchGifs = async (category) => {
  try {
    const API_KEY = "2urqkSv6V9eOngIprIXizVK0jKYBp40N";
    const BASE_URL = "https://api.giphy.com/v1/gifs";
    const url = `${BASE_URL}/search?q=${encodeURI(
      category
    )}&limit=12&api_key=${API_KEY}`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url,
      };
    });

    return gifs;
  } catch (error) {
    console.error("Error : ", error);
    throw error;
  }
};

export default getFetchGifs;
