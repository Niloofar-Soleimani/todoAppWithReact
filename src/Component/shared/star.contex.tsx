import type React from "react";
import { createContext } from "react";
import * as useLocalStorage from "use-local-storage";
import type { Task } from "./tasks.context";

type IStarContext = {
	startedTaskId: Task["id"] | "null";
	setStartedTaskId: (tasks: Task["id"] | "") => void;
};
export const StarContext = createContext<IStarContext>({
	startedTaskId: "",

	setStartedTaskId: () => {},
});
export function StarProvider({ children }: { children: React.ReactNode }) {
	const useLocalstorage = useLocalStorage.default.default;
	const [startedTaskId, setStartedTaskId] = useLocalstorage<Task["id"]>(
		"stared-task-id",
		"",
	);

	return (
		<StarContext value={{ startedTaskId, setStartedTaskId }}>
			{children}
		</StarContext>
	);
}
