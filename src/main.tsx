import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "./style.css";
import { NotFound } from "./routes/-NotFound";
import { pending } from "./routes/-pending";
import { TasksProvider } from "./Component/shared/tasks.context";
import { StarProvider } from "./Component/shared/star.contex";

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
  </StrictMode>
);
