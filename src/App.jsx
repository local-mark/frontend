import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Gallery from './pages/Gallery/Gallery';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </div>
    );
}

export default App;
