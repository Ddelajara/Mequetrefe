import { createContext } from "react";

export const UserContext = createContext({
    token: null,
    // ... otros valores iniciales
});