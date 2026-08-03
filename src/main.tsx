import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "./style.css";

const router = createRouter({ routeTree });
const container = document.getElementById("root");
if (container == null) {
	throw new Error(" root element not found");
}

const root = createRoot(container);

root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
