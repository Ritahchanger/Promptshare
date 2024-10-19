import { Link } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center login ">
      <div className="max-w-[600px] w-[90%] h-full flex items-center justify-center ">
        <form action="#" className="w-[100%] p-[1rem]  shadow-md">
          <p className="text-3xl text-orange-600 text-center">SIGN UP</p>
          <div className="input-group">
            <input
              type="text"
              name="fName"
              id=""
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Enter first name"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="lName"
              id=""
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Enter last name"
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              id=""
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Enter email"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              id=""
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Enter password"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              id=""
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Confirm password"
            />
          </div>
          <div className="input-group">
            <input
              type="submit"
              name=""
              id=""
              className="h-[40px] w-full bg-orange-600 text-white"
              value="SIGN UP"
            />
          </div>
          <p>
            Have account?<Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
