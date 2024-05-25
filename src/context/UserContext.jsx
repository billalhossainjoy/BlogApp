import { createContext, useReducer } from "react";
import { reducer } from "./userReducer";


const UserContext = createContext();

export default UserContext;

const init = {
	status: false,
	user: null,
}

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, init)
	return (
        <UserContext.Provider value={{state,dispatch}}>
            {children}
        </UserContext.Provider>
    );
}

