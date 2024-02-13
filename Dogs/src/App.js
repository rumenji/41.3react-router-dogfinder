import './App.css';
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import { Route, Routes, useParams, BrowserRouter, Navigate } from 'react-router-dom';
import NavBar from './NavBar';


const dogProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "duke",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "perry",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "tubby",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar dogs={dogProps.dogs}/>
      <Routes>
    <Route exact path="/dogs" element={<DogList dogs={dogProps.dogs}/>}></Route>
    <Route exact path="/dogs/:name" element={<DogDetails dog={dogProps.dogs} />}></Route>
    <Route path="*" element={<Navigate to="/dogs" />}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
