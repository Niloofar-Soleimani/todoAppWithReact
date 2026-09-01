import { PencilSimpleIcon } from "@phosphor-icons/react";
import { use, useState } from "react";
import { Btn } from "../../Component/Btn/Btn";
import { Input } from "../../Component/Input/Input";
import { BottomSheet } from "../../Component/Sheet/Sheet";
import { type Task, TasksContext } from "../../Component/shared/tasks.context";
import { TopBar } from "../../Component/TopBar/TopBar";


type EditTasksheetProps = {
	taskId: Task["id"];
	title: Task["title"];
	onClose: () => void;
};

export function EditTaskSheet({ onClose ,taskId , title}: EditTasksheetProps) {
	const { editTask } = use(TasksContext);
	const [newTaskTitle, setNewTaskTitle] = useState(title);
	const handleEditTaskBtnClick = () => {
    editTask(taskId, newTaskTitle);
    console.log("taskId:",taskId);
    console.log("newtask:",newTaskTitle);
    
    setNewTaskTitle("");
    onClose();
  
  };
	return (
		<BottomSheet
        className="z-10"
			onClose={onClose}
			topBar={<TopBar title="ویرایش کار " onCloseBtnClick={onClose} />}
		>
			<div className="flex flex-col p-4 gap-8">
				<label className="flex flex-col gap-2 ">
					<span className="text-stone-600"> اسم کار : </span>
					<Input
						value={newTaskTitle}
						onChange={(e) => setNewTaskTitle(e.target.value)}
                        
					/>
				</label>
				<Btn
             
					title=" ویرایش کار "
					color="brand"
					style="filled"
					IconEnd={PencilSimpleIcon}
					onclick={handleEditTaskBtnClick}
				/>
			</div>
		</BottomSheet>
	);
}
