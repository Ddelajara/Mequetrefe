import { UserContext } from "./userContext";
import { userReducer } from "./userReducer";
import { useReducer } from "react";

const IncializaReducer = () =>{
    const tokenLS = localStorage.getItem('token')
    const token = JSON.parse(tokenLS)
    return {token}
}

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, null, IncializaReducer)

    return(
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}