import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// style
import "./_main.scss";

// chemin des pages
import RoutesPath from "./Router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RoutesPath />
	</StrictMode>
);
