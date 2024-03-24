import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Details from "./pages/details";
import Favourites from "./pages/favorites";

function App() {
  return (
    <div>
      <div className="min-h-screen p-1 text-grey-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-item/:id" element={<Details />} />
          <Route path="/favourite" element={<Favourites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
