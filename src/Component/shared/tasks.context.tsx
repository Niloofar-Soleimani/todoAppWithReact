import type React from "react";
import { createContext } from "react";
// import useLocalStorage from "use-local-storage";
import * as useLocalStorage from "use-local-storage";

export type Task = {
	id: string;
	title: string;
	isCompleted: boolean;
};

export const sampleTasks: Task[] = [
	{
		id: "b5d88b24-1c59-4ef4-9f5d-c4a5f2d9f001",
		title: "خرید مواد غذایی",
		isCompleted: false,
	},
	{
		id: "2f9a3b61-8e76-4a4d-9d2b-91c2d9e8a002",
		title: "مطالعه ری‌اکت",
		isCompleted: true,
	},
	{
		id: "7c1d8f35-0b7e-4a91-9e3f-5d4a8f7b3003",
		title: "تمرین تایپ‌اسکریپت",
		isCompleted: false,
	},
	{
		id: "91e4d2a7-6c38-4d58-8f72-4c8b2d5e1004",
		title: "انجام تمرینات ورزشی",
		isCompleted: true,
	},
	{
		id: "d4b8f5c2-2e71-45f6-90d4-7f2a3b8c5005",
		title: "مرتب کردن اتاق",
		isCompleted: false,
	},
	{
		id: "3e7c1a94-9b5d-4c81-a4d8-6e1f2b7c9006",
		title: "خرید نان",
		isCompleted: false,
	},
	{
		id: "f9b2d6e8-4a17-4d83-b2c6-8d5f7a9e0007",
		title: "مطالعه مستندات React",
		isCompleted: true,
	},
	{
		id: "4c5d8e91-7a24-4b7d-8e3a-2d6f1b9c1008",
		title: "ارسال ایمیل کاری",
		isCompleted: false,
	},
	{
		id: "8a1f3c7d-5b92-4d61-9a4c-3e7b2d8f2009",
		title: "تماس با خانواده",
		isCompleted: true,
	},
	{
		id: "6d2b9a48-3c71-4f95-b7d2-5a8e1c3f3010",
		title: "مطالعه جاوااسکریپت",
		isCompleted: false,
	},
	{
		id: "1b7e4d95-8c32-4a6f-a2d9-7c5e3f8b4011",
		title: "نوشتن یادداشت روزانه",
		isCompleted: false,
	},
	{
		id: "5f8a2c71-9d43-4b5e-b6a3-2d7c9e1f5012",
		title: "آبیاری گل‌ها",
		isCompleted: true,
	},
	{
		id: "9c4e7b15-6f28-4d91-8c5b-1a3d7e2f6013",
		title: "تمیز کردن میز کار",
		isCompleted: false,
	},
	{
		id: "2a8d5f93-1b67-4c8e-9f2d-6b4e1c7a7014",
		title: "برنامه‌ریزی برای فردا",
		isCompleted: true,
	},
	{
		id: "7e3b1a64-5d29-4f87-a3c8-9d2b6e4f8015",
		title: "مطالعه الگوریتم‌ها",
		isCompleted: false,
	},
	{
		id: "c1f5d8a2-4e73-4b9d-8a6c-5f2e7b9d9016",
		title: "تمرین حل مسئله",
		isCompleted: true,
	},
	{
		id: "4d9b2e76-8a15-4c3f-b9d7-2e6a1f5c1017",
		title: "مرتب کردن فایل‌ها",
		isCompleted: false,
	},
	{
		id: "8f3c7d21-5b64-4e98-a2d5-7c1b9e4f2018",
		title: "خرید میوه",
		isCompleted: true,
	},
	{
		id: "3a6e1f84-9d25-4b7c-8f3a-4d2e7b5c3019",
		title: "تماشای ویدئوی آموزشی",
		isCompleted: false,
	},
	{
		id: "e7b2c5d9-1f48-4a63-b8d2-9c5e3a7f4020",
		title: "استراحت و گوش دادن به موسیقی",
		isCompleted: false,
	},
];

type ITasksContext = {
	tasks: Task[];
	setTasks: (tasks: Task[]) => void;
	toggleTaskCompleted: (taskId: Task["id"]) => void;
};
export const TasksContext = createContext<ITasksContext>({
	tasks: [],
	setTasks: () => {},
	toggleTaskCompleted: () => {},
});
export function TasksProvider({ children }: { children: React.ReactNode }) {
	console.log(useLocalStorage);
	const useLocalstorage=useLocalStorage.default.default;
	const [tasks, setTasks] = useLocalstorage<Task[]>("tasks", [...sampleTasks]);
	const toggleTaskCompleted = (taskId: Task["id"]) => {
		const cloneTasks = [...tasks];
		const changeTasks = cloneTasks.map((ct) =>
			ct.id === taskId ? { ...ct, isCompleted: !ct.isCompleted } : ct,
		);
		setTasks(changeTasks);
	};
	return (
		<TasksContext value={{ tasks, setTasks, toggleTaskCompleted }}>
			{children}
		</TasksContext>
	);
}
