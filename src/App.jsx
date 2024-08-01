import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import SingUp from "./pages/SignUp/SignUp";
import Gallery from "./pages/Gallery/Gallery";
import LocalLetter from "./pages/MoreLocal/LocalLetter";
import Events from "./pages/MoreLocal/Events";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/localletter" element={<LocalLetter />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
