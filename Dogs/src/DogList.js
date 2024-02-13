import React from "react";
import { Link } from "react-router-dom";

const DogList = (props) => {
    
 return (
    <>
    <h2>List of dogs:</h2>
    {props.dogs.map(dog => (
        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
 ))}
 </>
 )
}

export default DogList;