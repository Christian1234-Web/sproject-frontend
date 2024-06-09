import React, { createContext, useState } from 'react';
export const Store = createContext();
const StoreContext = ({ children }) => {
  const [user,setUser] = useState(null);
  const [userType,setUserType] = useState("");


let state = {
    user: [user, setUser],
    userType: [userType,setUserType]
};
    return <Store.Provider value={state}>{children}</Store.Provider>
}
export default StoreContext;