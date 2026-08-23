import { CircleIcon, StarIcon } from "@phosphor-icons/react";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr/CheckCircle";
import { createFileRoute } from "@tanstack/react-router";
import { use, useState } from "react";
import useLocalStorage from "use-local-storage";
import arrowdown from "../assets/image/Arrow 1.png";
import noteImage from "../assets/image/undraw_no-data_ig65 1.png";
import { BottomBar } from "../Component/BottomBar/BottomBar";
import { StarContext } from "../Component/shared/star.contex";
import { type Task, TasksContext } from "../Component/shared/tasks.context";
import { TopBar } from "../Component/TopBar/TopBar";

export const Route = createFileRoute("/task")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="w-full h-dvh flex flex-col">
			<TopBar title={" کارها "} />
			<TasksList />

			<BottomBar />
		</div>
	);
}

function TasksList() {
	const { tasks } = use(TasksContext);
	const isEmpty = tasks.length <= 0;
	return isEmpty ? (
		<div className=" w-full flex flex-col p-4 gap-8 justify-center items-center flex-1">
			<img src={noteImage} alt=" لیست کار" />

			<p className=" text-stone-900 text-2xl font-bold text-center">
				فعلا کاری نداریم! 😁
			</p>
			<p className="text-stone-600 mt-3 text-center">
				میتونی از اون پایین <br />
				کار جدید تعریف کنی!
			</p>
			<img src={arrowdown} alt="کار جدید" />
		</div>
	) : (
		<div className=" w-full flex flex-col p-4 gap-8 justify-start items-center flex-1 overflow-y-auto">
			<div className="flex flex-col gap-2 w-full">
				{tasks.map((t) => (
					<TaskItem
						key={t.id}
						title={t.title}
						id={t.id}
						isCompleted={t.isCompleted}
					/>
				))}
			</div>
		</div>
	);
}

type TaskItemProps = {
	id: Task["id"];
	title: Task["title"];
	isCompleted: Task["isCompleted"];
};
function TaskItem({ id, title, isCompleted }: TaskItemProps) {
	const { toggleTaskCompleted } = use(TasksContext);
	const { startedTaskId, setStartedTaskId } = use(StarContext);
	const IsCopmpletedIcon = isCompleted ? CheckCircleIcon : CircleIcon;
	const isThisTaskStared = startedTaskId === id;
	const handleCompletedBtnClick = () => {
		return toggleTaskCompleted(id);
	};
	const handleStarBtnClick = () => {
		return setStartedTaskId(isCompleted ? "" : isThisTaskStared ? "" : id);
	};
	return (
		<div
			className={`flex w-full h-12 ${isCompleted ? "text-stone-600 line-through" : "text-stone-900"} `}
		>
			<button type="button" onClick={handleCompletedBtnClick}>
				<IsCopmpletedIcon size={24} />
			</button>

			<button
				type="button"
				className={`cursor-pointer flex-1 text-start px-3 ${isCompleted}`}
			>
				{title}
			</button>

			<button
				type="button"
				className={`cursor-pointer p-3 ${isThisTaskStared ? "text-orange-500" : null}`}
				onClick={handleStarBtnClick}
			>
				<StarIcon size={24} weight={isThisTaskStared ? "fill" : "regular"} />
			</button>
		</div>
	);
}
