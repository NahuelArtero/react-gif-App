import React, {useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (elem) => {
        setInputValue( elem.target.value );
    }

    const handleSubmit = (evnt) => {
        evnt.preventDefault();

        if ( inputValue.trim().length > 2){  // trim borra espacios, la validacion requiere 2 o mas caracteres para ejecutar la funcion
        
            setCategories( categos => [inputValue, ...categos] );

            setInputValue('');  // vuelve el input a cero

        }

    }
    
    
    return (
        <form onSubmit = { handleSubmit } >
            <input 
                type='text' 
                value = { inputValue }
                onChange = { handleInputValue }
                />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
