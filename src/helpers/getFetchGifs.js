



    export const getFetchGifs = async( category ) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (category) }&limit=10&api_key=2urqkSv6V9eOngIprIXizVK0jKYBp40N`;

        const respuesta = await fetch(url);           // llama y espera a la url
         const {data} = await respuesta.json();           // espera una respuesta en formato json

         const gifs = data.map(img =>{
             return {
                 id: img.id,
                 title: img.title,
                 url: img.images?.downsized_medium.url
             }
         })

     return gifs;
    }