import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center login ">
      <div className="max-w-[600px] w-[90%] h-full flex items-center justify-center ">
        <form action="#" className="w-[100%] p-[1rem]  shadow-md">
          <p className="text-3xl text-orange-600 text-center">LOGIN</p>
          <div className="input-group">
            <input
              type="email"
              name=""
              id=""
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Enter email"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name=""
              id=""
              className="h-[40px] w-full border-slate-500 px-2"
              placeholder="Enter password"
            />
          </div>
          <div className="input-group">
            <input
              type="submit"
              name=""
              id=""
              className="h-[40px] w-full bg-orange-600 text-white"
              value="LOGIN"
            />
          </div>
          <p>
            Forgot password ?<Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
