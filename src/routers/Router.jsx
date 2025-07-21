import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CommonCard from '../components/commonComponents/CommonCard';
import LogInPage, { LoginDeposit } from '../pages/LogInPage';
import RegisterPage from '../pages/RegisterPage';
import CommonList from '../components/commonComponents/CommonList';
import Casion from '../components/commonComponents/Casino';
import PromotionRefer from '../components/commonComponents/PromotionRefer';
import CommonMatch from '../components/commonComponents/CommonMatch';
import AuraGame from '../components/gameUI/AuraGame';
import UserProfile from '../pages/UserProfile';
import CommonTable from '../components/commonComponents/CommonTable';
import Extra from '../components/DesktopComponent ';
import SportsBook from '../pages/SportsBook';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/common-table/:data" element={<CommonTable />} />
        <Route path="/show-more" element={<CommonCard />} />
        <Route path="/aura-game" element={<AuraGame />} />
        <Route path="/login-default/:data" element={<LoginDeposit />} />
        <Route path="/sports-book/:data" element={<SportsBook />} />
        <Route path="/aviator" element={<Extra />} />
        <Route path="/user-profile/:data" element={<UserProfile />} />
        <Route path="/common-list/:data" element={<CommonList />} />
        <Route path="/common-card/:item" element={<Casion />} />
        <Route path="/category/:segment" element={<CommonCard />} />
        <Route path="/common-page/:segment" element={<CommonCard />} />
        <Route path="/common-match/:segment" element={<CommonMatch />} />
        <Route path="/promotion-refer/:data" element={<PromotionRefer />} />
    </Routes>
);

export default AppRoutes;
