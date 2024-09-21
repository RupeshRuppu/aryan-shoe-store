import { useState, createContext, useContext } from "react";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const LOGGEDIN_USER =
	JSON.parse(localStorage.getItem("SLIPPER-BOSS-USER"))?.data?._id || null;

function UserProvider({ children }) {
	const [user, setUser] = useState(LOGGEDIN_USER);
	const value = { user, setUser };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
