import './App.css';
import Events from './components/Events';
import {
  Routes,
  BrowserRouter,
  Route
} from "react-router-dom";
import Eventmain from './components/Eventmain';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Events />} />
          <Route exact path='/event/:id' element={<Eventmain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
