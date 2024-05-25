import Nav from "./Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  
  return (
    <header className="bg-gray-100">
      <div className="container m-auto">
        <div className="headerWrapper flex justify-between ">
          <div className="brand">
            <h1 className=" h-full bg-red-400 text-xl font-bold flex items-center px-5 text-white">
              <NavLink>Paradox</NavLink>
            </h1>
           </div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
