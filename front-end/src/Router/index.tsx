import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

export default function RoutesPath() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
