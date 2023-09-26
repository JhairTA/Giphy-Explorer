import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () =>{
        getImages();
    }, []); // Si de deja vacio [], significa que el useEffect(hook) solo se va a disparar 
            // la primera vez que se crea

    return {
        images,
        isLoading
    }
}
