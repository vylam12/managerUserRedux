import { createContext, useState } from "react";


export const AdminContext = createContext();
export const AdminContextProvider = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <AdminContext.Provider value={[collapsed, setCollapsed]}>
            {children}
        </AdminContext.Provider>
    )
}
