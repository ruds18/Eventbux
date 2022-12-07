import './App.css';
import Events from './components/Events';
import {
  Routes,
  BrowserRouter,
  Route
} from "react-router-dom";
import Eventmain from './components/Eventmain';
import { ThemeProvider } from '@mui/system';
import theme from './components/styles/Styles'


function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Events />} />
          <Route exact path='/event/:id' element={<Eventmain />} />
        </Routes>
      </BrowserRouter>
    </div>
  </ThemeProvider>
  );
}

export default App;
