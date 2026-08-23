import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "./style.css";
import { StarProvider } from "./Component/shared/star.contex";
import { TasksProvider } from "./Component/shared/tasks.context";
import { NotFound } from "./routes/-NotFound";
import { pending } from "./routes/-pending";

const router = createRouter({
	routeTree,
	defaultNotFoundComponent: NotFound,
	defaultPendingComponent: pending,
});
const container = document.getElementById("root");
if (container == null) {
	throw new Error(" root element not found");
}

const root = createRoot(container);

root.render(
	<StrictMode>
		<TasksProvider>
			<StarProvider>
				<RouterProvider router={router} />
			</StarProvider>
		</TasksProvider>
	</StrictMode>,
);
