import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

import Signup from "./pages/SignUp/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
