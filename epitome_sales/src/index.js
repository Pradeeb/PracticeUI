import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { APP_NAME } from './components/common/Config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route path={`${APP_NAME}/`} element={<Login />} />
        <Route path={`${APP_NAME}/dashboard`} element={<Dashboard dashboardContent={"dashboardTable"} />} />
        <Route path={`${APP_NAME}/clientform`} element={<Dashboard dashboardContent={"clientform"} />} />
      </Routes>
    </Router>
  </>
);

reportWebVitals();
