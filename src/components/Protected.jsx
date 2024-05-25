import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, auth = true }) => {
	const { state } = useContext(UserContext)
	const navigate = useNavigate();

	useEffect(() => {
		if (auth && state.status !== auth) navigate('/login');
		if (!auth && state.status !== auth) navigate("/");
	},[auth,navigate,state]);
  return <>{children}</>;
};

export default Protected;
