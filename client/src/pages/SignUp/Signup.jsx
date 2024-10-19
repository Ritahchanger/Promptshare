import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import Swal from "sweetalert2";

const Signup = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (!formData.fName.trim()) {
      newErrors.fName = "First name is required";
    }

    if (!formData.lName.trim()) {
      newErrors.lName = "Last name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/auth/signup`,
          {
            fName: formData.fName,
            lName: formData.lName,
            email: formData.email,
            password: formData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          Swal.fire({
            title: "Success!",
            text: "Account created successfully",
            icon: "success",
            confirmButtonText: "Okay",
          }).then(() => {
            navigate("/");
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: response.data.message,
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      } catch (error) {
        console.error(`There was an error during signup: ${error.message}`);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  

  return (
    <div className="w-full h-[100vh] flex items-center justify-center login">
      <div className="max-w-[600px] w-[90%] h-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[100%] p-[1rem] shadow-md signup"
        >
          <p className="text-3xl text-orange-600 text-center">SIGN UP</p>

          <div className="input-group">
            <input
              type="text"
              name="fName"
              value={formData.fName}
              onChange={handleChange}
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Enter first name"
            />
            {errors.fName && <p className="error-text">{errors.fName}</p>}
          </div>

          <div className="input-group">
            <input
              type="text"
              name="lName"
              value={formData.lName}
              onChange={handleChange}
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Enter last name"
            />
            {errors.lName && <p className="error-text">{errors.lName}</p>}
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Enter email"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Enter password"
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Confirm password"
            />
            {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="input-group">
            <input
              type="submit"
              className="h-[40px] w-full bg-orange-600 text-white"
              value="SIGN UP"
            />
          </div>

          <p>
            Have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
