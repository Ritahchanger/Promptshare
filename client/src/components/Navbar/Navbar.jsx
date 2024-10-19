import { FaUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="h-[50px] w-full fixed right-0 left-0 shadow-md ">
        <div className="max-w-[1200px] mx-auto  w-full h-full flex justify-between text-center items-center px-3">
          <a href="#" className="text-2xl font-semibold text-orange-500">
            SPLITTER
          </a>
          <div className="flex">
            <button>
              <span>
                <FaUser />
              </span>
            </button>
            <p className="ml-2">Ken Philip</p>
          </div>
        </div>
      </nav>
      <p className="h-[50px]"></p>
    </>
  );
};

export default Navbar;
