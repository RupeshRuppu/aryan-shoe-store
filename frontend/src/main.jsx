import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";
import UserProvider from "./UserContext";
import Cart from "./components/Cart";
import OrderDone from "./components/OrderDone";
import ProtectedRoute from "./components/ProtectedRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<UserProvider>
			<Routes>
				<Route exact element={<Home />} path="/" />
				<Route exact element={<Auth />} path="/auth" />
				<Route exact element={<ProtectedRoute />} path="/home">
					<Route exact path="/home" element={<Home />} />
				</Route>
				<Route exact element={<ProtectedRoute />} path="/cart">
					<Route exact path="/cart" element={<Cart />} />
				</Route>
				<Route exact element={<ProtectedRoute />} path="/order-done">
					<Route exact element={<OrderDone />} path="/order-done" />
				</Route>
			</Routes>
		</UserProvider>
	</BrowserRouter>
);
