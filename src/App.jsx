import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import SingUp from './pages/SignUp/SignUp';
import Gallery from './pages/Gallery/Gallery';
import LocalLetter from './pages/MoreLocal/LocalLetter';
import Events from './pages/MoreLocal/Events';
import ProductDetail from './pages/Gallery/ProductDetail';
import Mypage from './pages/Mypage/Mypage';
import MypageEdit from './pages/MypageEdit/MypageEdit';
import NewPassword from './pages/NewPassword/NewPassword';
import Brand from './pages/Brand/Brand';
import BrandRegist from './pages/BrandRegist/BrandRegist';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SingUp />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/gallery/product/:productId" element={<ProductDetail />} />
                <Route path="/localletter" element={<LocalLetter />} />
                <Route path="/events" element={<Events />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/mypage/userid" element={<MypageEdit />} />
                <Route path="/mypage/userid/newpassword" element={<NewPassword />} />
                <Route path="/brand/:brandId/products" element={<Brand />} />
                <Route path="/brand/regist" element={<BrandRegist />} />
                {/* 라우팅 경로 재설정 필요*/}
            </Routes>
        </div>
    );
}

export default App;
