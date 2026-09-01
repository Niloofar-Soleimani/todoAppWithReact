import {
	CheckSquareIcon,
	HouseIcon,
	PlusCircleIcon,
	PlusIcon,
} from "@phosphor-icons/react";
import { Link, useLocation } from "@tanstack/react-router";
import { use, useState } from "react";
import { Btn } from "../Btn/Btn";
import { Input } from "../Input/Input";
import { BottomSheet } from "../Sheet/Sheet";
import { TasksContext } from "../shared/tasks.context";
import { TopBar } from "../TopBar/TopBar";

export function BottomBar() {
	const location = useLocation();
	const [iscreateTasskSheetOpen, setCreatetaskSheetOpen] = useState(false);
	const openCreateTaskSheet = () => setCreatetaskSheetOpen(true);
	const closeCreateTaskSheet = () => setCreatetaskSheetOpen(false);

	return (
		<>
			{iscreateTasskSheetOpen && (
				<CreateTaskSheet onClose={closeCreateTaskSheet} />
			)}
			<nav className="w-full flex items-center justify-between h-16 bg-stone-100 py-2 px-4">
				<Link
					to="/home"
					activeProps={{ className: "font-bold text-stone-900 " }}
					className="font-bold text-xs flex-1 h-full text-stone-600 flex flex-col items-center justify-center gap-1"
				>
					<HouseIcon
						weight={location.pathname === "/home" ? "fill" : "regular"}
						size={24}
					/>
					خانه
				</Link>
				<div className=" flex flex-1 h-full justify-center items-center">
					<button
						onClick={openCreateTaskSheet}
						type="button"
						className=" cursor-pointer p-2 size-12 flex items-center justify-center bg-orange-500 rounded-full"
					>
						<PlusIcon size={24} />
					</button>
				</div>
				<Link
					to="/tasks/"
					activeProps={{ className: "font-bold text-stone-900" }}
					className="flex-1 h-full text-xs text-stone-600 flex flex-col items-center justify-center gap-1"
				>
					<CheckSquareIcon
						size={24}
						weight={location.pathname === "/tasks/" ? "fill" : "regular"}
					/>
					کارها
				</Link>
			</nav>
		</>
	);
}

type CreateTasksheetProps = {
	onClose: () => void;
};

function CreateTaskSheet({ onClose }: CreateTasksheetProps) {
	const { createTask } = use(TasksContext);
	const [taskName, setTaskName] = useState("");
	const handleCreateTaskBtnClick = () => {
		createTask(taskName);
		setTaskName("");
		if (taskName === "") {
			alert(" مقدار تسک را وارد کنید");
			return createTask(taskName);
		}
	};
	return (
		<BottomSheet
			onClose={onClose}
			topBar={<TopBar title=" کار جدید " onCloseBtnClick={onClose} />}
		>
			<div className="flex flex-col p-4 gap-8">
				<label className="flex flex-col gap-2 ">
					<span className="text-stone-600"> اسم کار : </span>
					<Input
						value={taskName}
						onChange={(e) => setTaskName(e.target.value)}
					/>
				</label>
				<Btn
					title="  ایجاد کار "
					color="brand"
					style="filled"
					IconEnd={PlusCircleIcon}
					onclick={handleCreateTaskBtnClick}
				/>
			</div>
		</BottomSheet>
	);
}
