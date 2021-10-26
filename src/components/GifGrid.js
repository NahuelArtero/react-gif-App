import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GiffGridItem } from './GiffGridItem';

export const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifs(category);  // aca el data:images es solo para cambiarle el nombre, no hace nada mas

    return (
        <>
            <h3 className= 'animate__animated animate__fadeInLeftBig'> { category } </h3>

            {/* { loading ? 'Cargando...' : 'Data Cargada'} */}

            {/* { loading ? <p> LOADING... </p> : null }  */}
            
            { loading && <p className= 'animate__animated animate__flash'> LOADING... </p> }


            <div className= 'card-grid'>
            
                    {
                        images.map( ( img) => (    // para usarlo aca y que se entienda

                            <GiffGridItem key = {img.id} {...img} />
                        ))
                    }
            
            </div> 
        </>
    )
}
    