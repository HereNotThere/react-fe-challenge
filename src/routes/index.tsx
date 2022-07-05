import { Route, Routes } from "react-router-dom";
import App from "../pages/App";
import Calendar from "../pages/Calendar";

const StaticRoutes = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/calendar" element={<Calendar />} />
  </Routes>
);

export default StaticRoutes;
