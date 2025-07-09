import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CommonCard from '../components/commonComponents/CommonCard';
import CommonPage from '../components/commonComponents/CommonPage';
import LogInPage from '../pages/LogInPage';
import RegisterPage from '../pages/RegisterPage';
import CommonList from '../components/commonComponents/CommonList';
import Casion from '../components/commonComponents/Casino';
import PromotionRefer from '../components/commonComponents/PromotionRefer';


const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/common-list/:data" element={<CommonList />} />
        <Route path="/common-card/:item" element={<Casion />} />
        <Route path="/category/:segment" element={<CommonCard />} />
        <Route path="/common-page/:segment" element={<CommonCard />} />
        <Route path="/promotion-refer/:item" element={<PromotionRefer />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
    </Routes>
);

export default AppRoutes;
