import { createContext, useContext } from "react";
import { User } from ".";

export const DashboardContext = createContext<User | null>(null)


// create a custom hook
export function useUserContext() {
    const user = useContext(DashboardContext);

    if (user === null){
        throw new Error("useUserContext must be used with a DashboardContext")
    }

    return user;
}