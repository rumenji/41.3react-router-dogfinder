import './App.css';
import RoutesList from "./RoutesList";
import { Route, Routes, useParams, BrowserRouter, Navigate } from 'react-router-dom';



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
