import React from "react";
import { Link } from "react-router-dom";

const ColorsList = (colors) => {
    console.log(colors)
 return (
    <>
    <Link to={`/colors/add`}>Add new color</Link>
    <h2>List of colors:</h2>
    {colors.colors.map(color => (
        <Link to={`/colors/${color.name}`}>{color.name}</Link>
 ))}
 
 </>
 )
}

export default ColorsList;