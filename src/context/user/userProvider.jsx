import { UserContext } from "./userContext";
import { userReducer } from "./userReducer";
import { useReducer } from "react";


export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer)

    return(
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}