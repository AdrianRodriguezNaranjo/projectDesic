import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from "./interfaces/login/login";
import Signup from "./interfaces/signup/signup";
import Inicial from "./interfaces/inicial/inicial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inicial" element={<Inicial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
