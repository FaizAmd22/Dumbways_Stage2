import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPartai from "./pages/AddPartai";
import AddPaslon from "./pages/AddPaslon";
import Admin from "./pages/Admin";
import DetailArticle from "./pages/DetailArticle";
import Home from "./pages/Home";
import Partai from "./pages/Partai";
import Paslon from "./pages/Paslon";
import Vote from "./pages/Vote";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<DetailArticle />} />
        <Route path="/partai" element={<Partai />} />
        <Route path="/partai/add" element={<AddPartai />} />
        <Route path="/paslon" element={<Paslon />} />
        <Route path="/paslon/add" element={<AddPaslon />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);