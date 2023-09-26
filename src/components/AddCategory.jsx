import { useState } from "react"

export const AddCategory = ( { onNewCategory }) => {

    const [ inputvalue, setinputvalue ] = useState('');

    const onInputChange = (event) =>{
        setinputvalue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputvalue.trim().length <= 1) return;

       // setCategories( categories => [...categories, inputvalue]);
        onNewCategory( inputvalue.trim() )
        setinputvalue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputvalue}
            onChange={ onInputChange }
        />
    </form>
  )
}
