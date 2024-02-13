import React from "react";
import { useParams, Navigate } from "react-router-dom";


const DogDetails = (props) => {
    const params = useParams();
    
    const dog = props.dog.filter(dog => dog.name.toLowerCase() === params.name)
    console.log(dog)
    if (dog[0]) {
 return (
    <>
    <h2>Dog details:</h2>
    <h3>{dog[0].name}</h3>
    <h3>{dog[0].age}</h3>
    <h3>{dog[0].facts}</h3>
    </>
 )
    } else {
      return <Navigate to="/dogs" />
    }
}

export default DogDetails;