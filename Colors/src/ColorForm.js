import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
const ColorForm = ({add}) => {
    const INITIAL_STATE = {name: "", hex: ""};
    const navigate = useNavigate();
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(fData => ({...fData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        add(formData)
        setFormData(INITIAL_STATE)
        navigate("/colors");
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange}></input>
            <input type="color" name="hex" onChange={handleChange}></input>
            <button>Add color</button>
        </form>
        <Link to="/colors">Go back</Link>
        </>
    )
}

export default ColorForm;