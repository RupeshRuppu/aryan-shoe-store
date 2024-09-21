import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
	const user = JSON.parse(localStorage.getItem("SLIPPER-BOSS-USER"));
	return user ? <Outlet /> : <Navigate to={"/auth"} />;
}
