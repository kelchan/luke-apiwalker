import './App.css';
import { Routes, Route } from "react-router-dom";
import ApiForm from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import Films from './components/Films';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
import StarShips from './components/StarShips';

function App() {

  return (
    <div className="App">

      
      <ApiForm></ApiForm>
      <Routes>
        <Route path="/people/:id" element={<People/>}> </Route>
        <Route path="/planets/:id" element={<Planets/>}> </Route>
        <Route path="/films/:id" element={<Films/>}> </Route>
        <Route path="/species/:id" element={<Species/>}> </Route>
        <Route path="/vehicles/:id" element={<Vehicles/>}> </Route>
        <Route path="/starShips/:id" element={<StarShips/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
