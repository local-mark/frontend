import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import SingUp from './pages/SignUp/SignUp';
import Gallery from './pages/Gallery/Gallery';
import LocalLetter from './pages/MoreLocal/LocalLetter';
import LetterDetail from './pages/MoreLocal/LetterDetail';
import Events from './pages/MoreLocal/Events';
import EventDetail from './pages/MoreLocal/EventDetail';
import ProductDetail from './pages/Gallery/ProductDetail';
import Mypage from './pages/Mypage/Mypage';
import MypageEdit from './pages/MypageEdit/MypageEdit';
import NewPassword from './pages/NewPassword/NewPassword';
import Brand from './pages/Brand/Brand';
import BrandRegist from './pages/BrandRegist/BrandRegist';
import BrandManage from './pages/BrandManage/BrandManage';
import CreaterCommunity from './pages/CreaterCommunity/CreaterCommunity';
import Write from './pages/CreaterCommunity/Write';
import samplePosts from './pages/CreaterCommunity/samplePosts';
import PostDetail from './components/CreaterCommunity/PostDetail';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import BrandProfile from './pages/CreaterCommunity/BrandProfile';
import PaymentConfirmation from './pages/Payment/PaymentConfirmation ';
import Chatting from './pages/Chatting/Chatting';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SingUp />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/gallery/product/:productId" element={<ProductDetail />} />
                <Route path="/morelocal/letters" element={<LocalLetter />} />
                <Route path="/morelocal/letters/:letterId" element={<LetterDetail />} />
                <Route path="/morelocal/events" element={<Events />} />
                <Route path="/morelocal/events/:eventId" element={<EventDetail />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/mypage/userid" element={<MypageEdit />} />
                <Route path="/mypage/userid/newpassword" element={<NewPassword />} />
                <Route path="/brand/:brandId/products" element={<Brand />} />
                <Route path="/brand" element={<BrandRegist />} />
                <Route path="/brandmanage" element={<BrandManage />} />
                {/* 라우팅 경로 재설정 필요*/}
                <Route path="/creatercommunity/*" element={<CreaterCommunity />} />
                <Route path="/creatercommunity/write" element={<Write />} />
                <Route path="/creatercommunity/chat/posts/:id" element={<PostDetail posts={samplePosts} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/brandprofile/:brandId/products" element={<BrandProfile />} />
                <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
                <Route path="chatting" element={<Chatting />} />
            </Routes>
        </div>
    );
}

export default App;
