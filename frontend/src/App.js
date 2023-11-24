import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from "./interfaces/login/login";
import Signup from "./interfaces/signup/signup";
import Inicial from "./interfaces/inicial/inicial";
import Busline from "./interfaces/busline/busline";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/busline" element={<Busline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
