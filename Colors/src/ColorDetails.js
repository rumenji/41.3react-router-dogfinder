import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import "./ColorDetails.css";

const ColorDetails = (colors) => {
    const params = useParams();
    const color = colors.color.filter(color => color.name.toLowerCase() === params.color)
    
    if (color[0]) {
 return (
    <div style={{backgroundColor: color[0].name}}>
    <h2>Color details:</h2>
    <h3>{color[0].name}</h3>
    <h3>{color[0].hex}</h3>
    <Link to="/colors">Go back</Link>
    </div>
 )
    } else {
      return <Navigate to="/dogs" />
    }
}

export default ColorDetails;