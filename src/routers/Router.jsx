import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CommonCard from '../compoennts/commonComponents/CommonCard';
import CommonPage from '../compoennts/commonComponents/CommonPage';
import LogInPage from '../pages/LogInPage';
import RegisterPage from '../pages/RegisterPage';
import CommonList from '../compoennts/commonComponents/CommonList';


const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/common-card" element={<CommonCard />} /> */}
        <Route path="/category/:segment" element={<CommonCard />} />
        <Route path="/common-page" element={<CommonPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/common-list" element={<CommonList />} /> */}
        <Route path="/common-list/:data" element={<CommonList />} />
    </Routes>
);

export default AppRoutes;
