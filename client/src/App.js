import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";


import Signup from "./pages/SignUp/Signup";

import Home from "./pages/Dashboard/HomePage/Home";

import Conversation from "./pages/Conversations/Conversation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/dashboard/home" element={<Home/>} />
        <Route path="/admin/dashboard/conversation" element={<Conversation/>} />
        <Route path="/admin/dashboard/conversation/:id" element={<Conversation/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
