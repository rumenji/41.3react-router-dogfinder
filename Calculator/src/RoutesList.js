
import { Route, Routes, Navigate } from 'react-router-dom';
import React, {useState} from 'react';
import Calc from "./Calc";



const RoutesList = () => {
  return(
    <Routes>
    <Route exact path="/:func/:num1/:num2" element={<Calc />}></Route>
    {/* <Route path="*" element={<Navigate to="/colors" />}></Route> */}
    </Routes>
  )
}

export default RoutesList;