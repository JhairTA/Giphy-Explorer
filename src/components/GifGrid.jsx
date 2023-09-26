import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs.JS";

export const GifGrid = ({ category, onRemoveCategory }) => {

  const { images, isLoading } = useFetchGifs( category );

  console.log({ isLoading })

  


  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && ( <h2>Cargando...</h2> ) 
          
        }
        
        <div className="card-grid contenedor">
          {
            images.map(( image )=>(
              <GifItem 
                key={ image.id}
                { ...image }
              />
            ))
          }
        </div>
    </>
  )
}
