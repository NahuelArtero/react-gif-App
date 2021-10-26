import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifApp = () => {

    //const categories = ['One Punche', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //    setCategories([...categories, 'HunterXHunter'])
    //     // setCategories(['HunterXHunter',  ...categories])   // para agregar "hunterXHUnter" al principio del arreglo


    //     //setCategories( catrgogorieess => [...catrgogorieess, 'HunterXHunter'])  // otra forma de hacerlo con un callback
    // }
    return(

        <>
            <h2> Gif App </h2>
            <AddCategory setCategories = { setCategories } />
            <hr />

            <ol>
                { 
                    categories.map(category => (
                        <GifGrid key = { category } category = { category } />
                    ))
                }
            </ol>
        </>
    )
}
export default GifApp;