import type React from "react";
import { createContext, useState } from "react";
import useLocalStorage from "use-local-storage";
import type { Task } from "./tasks.context";



type IStarContext = {
  startedTaskId: Task['id'] | null;
  setStartedTaskId: (tasks: Task["id"] | null) => void;
};
export const StarContext = createContext<IStarContext>({
  startedTaskId:null,

  setStartedTaskId: () => {},
});
export function StarProvider({ children }: { children: React.ReactNode }) {
    const [startedTaskId, setStartedTaskId] = useState<null | Task["id"]>(null);
  
    return (
      <StarContext value={{ startedTaskId, setStartedTaskId }}>
        {children}
      </StarContext>
    );
}
