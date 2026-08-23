import { CheckSquareIcon, HouseIcon, PlusIcon } from "@phosphor-icons/react";
import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";

export function BottomBar() {
	const location = useLocation();
	const [iscreateTasskSheet, setCreatetaskSheet] = useState(false);
	return (
		<>
			{iscreateTasskSheet && <createTaskSheet />}
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
						type="button"
						className=" cursor-pointer p-2 size-12 flex items-center justify-center bg-orange-500 rounded-full"
					>
						<PlusIcon size={24} />
					</button>
				</div>
				<Link
					to="/task"
					activeProps={{ className: "font-bold text-stone-900" }}
					className="flex-1 h-full text-xs text-stone-600 flex flex-col items-center justify-center gap-1"
				>
					<CheckSquareIcon
						size={24}
						weight={location.pathname === "/task" ? "fill" : "regular"}
					/>
					کارها
				</Link>
			</nav>
		</>
	);
}

function createTaskSheet() {
	return <div>task sheet creaat</div>;
}
