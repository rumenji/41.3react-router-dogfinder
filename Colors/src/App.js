import './App.css';
import ColorsList from "./ColorsList";
import ColorDetails from "./ColorDetails";
import RoutesList from "./RoutesList";
import { Route, Routes, useParams, BrowserRouter, Navigate } from 'react-router-dom';
import NavBar from './RoutesList';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesList />
      
    </BrowserRouter>
    </div>
  );
}

export default App;
