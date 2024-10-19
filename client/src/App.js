import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";


import Signup from "./pages/SignUp/Signup";

import Home from "./pages/Dashboard/HomePage/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/dashboard/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
