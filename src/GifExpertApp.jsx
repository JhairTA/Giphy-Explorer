import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import 'animate.css';

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState([ 'Dragon Ball Z' ]); // inicializar conmo un arreglo

    const onAddCategory = ( newCategory) => {
        if( categories.includes(newCategory) ) return;

    // Primera Forma para agragar un item al array
    //     let newCategories = categories.slice();
    //     newCategories.push('Valorant');
    //    setCategories(newCategories);

    // Segunda Forma para agragar un item al array sin usar push
        setCategories( [newCategory, ...categories] );
    }


    return (
        <>
            <h1 className="animate__animated animate__fadeInDown">Giphy Explorer</h1>

            <AddCategory 

                onNewCategory = { value => onAddCategory(value) }
            />

            {
                categories.map(( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))   
            }

            
            <p className="footer">─ developed by Jhair Tirado ─</p>
            
        </>
    );
}