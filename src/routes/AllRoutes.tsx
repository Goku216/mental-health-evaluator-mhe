import { Routes, Route } from "react-router-dom";
import { Home, Login, PHQ9Form } from "../pages/Index";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<PHQ9Form />} />
    </Routes>
  );
};
