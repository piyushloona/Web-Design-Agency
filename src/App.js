import logo from './logo.svg';
import './App.css';
import './Assets/sass/style.scss';
import Home from './Assets/Components/Home';

 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      
      </BrowserRouter>
     

      
    </div>
  );
}

export default App;
