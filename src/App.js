import './App.css';
import { Route, Routes } from "react-router-dom";
import Beranda from './Components/Beranda';
import Portofolio from './Components/Portofolio';
import Kontak from './Components/Kontak';

function App() {
  return (
  <>
    <Routes>
      <Route  path="/" element={<Beranda />}/>
      <Route path="/Portofolio" element={<Portofolio />}/>
      <Route path="/Kontak" element={<Kontak />}/>
    </Routes>
  </>
  );
}

export default App;
