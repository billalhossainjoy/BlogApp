import { NavLink, useNavigate } from "react-router-dom";
import headerStyle from "./style";
import Button from "../Button";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import auth from "../../Appwrite/auth";

const Nav = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(UserContext)
  

  const navItems = [
    {
      name: "Home",
      path: "/",
      active: true,
    },
    {
      name: "All posts",
      path: "/all-posts",
      active: state.status,
    },
    {
      name: "Add post",
      path: "/add-post",
      active: state.status,
    },
    {
      name: "Login",
      path: "/login",
      active: !state.status,
    },
    {
      name: "Sign Up",
      path: "/signup",
      active: !state.status,
    },
  ];

  const Logout = () => {
    try {
      auth.UserLogout()
      dispatch({type:"logout"})
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className={headerStyle.nav}>
      <ul className={headerStyle.ul}>
        {navItems.map((navitem) => navitem.active ? (
          <li className={headerStyle.li} key={Math.random()}>
            <NavLink to={navitem.path} className={({isActive})=>headerStyle.link(isActive)}>
              {navitem.name}
            </NavLink>
          </li>
        ) : null) }
      </ul>
        {state.status ? (<Button bgColor="bg-red-400" color="text-white" onClick={Logout}>Logout</Button>): null}
    </nav>
  );
};

export default Nav;
