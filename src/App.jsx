import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SingUp from './pages/SignUp/SignUp';
import Gallery from './pages/Gallery/Gallery';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SingUp />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </div>
    );
}

export default App;
