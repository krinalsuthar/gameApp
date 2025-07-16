import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CommonCard from '../components/commonComponents/CommonCard';
import LogInPage from '../pages/LogInPage';
import RegisterPage from '../pages/RegisterPage';
import CommonList from '../components/commonComponents/CommonList';
import Casion from '../components/commonComponents/Casino';
import PromotionRefer from '../components/commonComponents/PromotionRefer';
import CommonMatch from '../components/commonComponents/CommonMatch';
import AuraGame from '../components/gameUI/AuraGame';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/common-list/:data" element={<CommonList />} />
        <Route path="/common-card/:item" element={<Casion />} />
        <Route path="/category/:segment" element={<CommonCard />} />
        <Route path="/show-more" element={<CommonCard />} />
        <Route path="/aura-game" element={<AuraGame />} />
        <Route path="/common-page/:segment" element={<CommonCard />} />
        <Route path="/common-match/:segment" element={<CommonMatch />} />
        <Route path="/promotion-refer/:item" element={<PromotionRefer />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
    </Routes>
);

export default AppRoutes;
