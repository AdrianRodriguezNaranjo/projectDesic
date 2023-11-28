import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from "./interfaces/login/login";
import Signup from "./interfaces/signup/signup";
import Inicial from "./interfaces/inicial/inicial";
import Busline from "./interfaces/busline/busline";
import BuslineUpdate from "./components/buslineUpdate/buslineUpdate";
import Stop from "./interfaces/stop/stop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/busline" element={<Busline />} />
        <Route path="/buslineupdate" element={<BuslineUpdate />} />
        <Route path="/stop" element={<Stop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
