import { use } from "react";
import arrowdown from "../../assets/image/Arrow 1.png";
import noteImage from "../../assets/image/undraw_no-data_ig65 1.png";
import { TasksContext } from "../../Component/shared/tasks.context";
import { TaskItem } from "./-TaskItem";

export function TasksList() {
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
