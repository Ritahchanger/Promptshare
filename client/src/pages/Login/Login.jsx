import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";

import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      Swal.fire({
        title: "Error!",
        text: "Please enter both email and password.",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }

    if (email === "test@example.com" && password === "1234") {
      Swal.fire({
        title: "Success!",
        text: "You have successfully logged in.",
        icon: "success",
        confirmButtonText: "Okay",
      }).then(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/admin/dashboard/home");
        }, 3000);
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Invalid email or password.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center login">
      <div className="max-w-[600px] w-[90%] h-full flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-[100%] p-[1rem] shadow-md">
          <p className="text-3xl text-orange-600 text-center">LOGIN</p>
          <div className="input-group">
            <input
              type="email"
              name="email"
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Enter email"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Enter password"
            />
          </div>
          <div className="input-group">
            <input
              type="submit"
              className="h-[40px] w-full bg-orange-600 text-white"
              value={`${loading ? "LOADING..." : "LOGIN"}`}
            />
          </div>
          <p>
            Forgot password? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
