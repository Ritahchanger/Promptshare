import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
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

    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:8000/api/auth/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.data.success) {
        Swal.fire({
          title: "Error",
          text: response.data.message,
          icon: "error",
          confirmButtonText: "Okay",
        });
        setLoading(false); 
        return;
      }

      Swal.fire({
        title: "Success!",
        text: "You have successfully logged in.",
        icon: "success",
        confirmButtonText: "Okay",
      }).then(() => {
        navigate("/admin/dashboard/home");
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: `Login failed: ${error.response ? error.response.data.message : error.message}`,
        icon: "error",
        confirmButtonText: "Okay",
      });
    } finally {
      setLoading(false); 
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
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="submit"
              className="h-[40px] w-full bg-orange-600 text-white"
              value={`${loading ? "LOADING..." : "LOGIN"}`}
              disabled={loading} 
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
