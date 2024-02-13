
import { Route, Routes, Navigate } from 'react-router-dom';
import React, {useState} from 'react';
import ColorsList from "./ColorsList";
import ColorDetails from "./ColorDetails";

import colorsList from "./colors";
import ColorForm from "./ColorForm";



const RoutesList = () => {
  const [colors, setColors] = useState(colorsList)

  const addColors = (color) => {
    setColors(colors => [color, ...colors])
  }

  return(
    <Routes>
    <Route exact path="/colors" element={<ColorsList colors={colors}/>}></Route>
    <Route exact path="/colors/:color" element={<ColorDetails color={colors} />}></Route>
    <Route exact path="/colors/add" element={<ColorForm add={addColors} />}></Route>
    <Route path="*" element={<Navigate to="/colors" />}></Route>
    </Routes>
  )
}

export default RoutesList;