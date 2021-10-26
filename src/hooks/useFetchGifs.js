import { useEffect, useState } from "react"
import { getFetchGifs } from "../helpers/getFetchGifs";


export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({

        data:[],
        loading: true
    });

    useEffect( () => {

        getFetchGifs(category)
            .then ( img => {
                    // setTimeout( () => {

                        setstate({
                            data:img,
                            loading: false
                        });
                    // }, 3000)
                    
            })



    }, [ category ]) 


    return state; // se inicializa asi      { data:[], loading: true };

}
