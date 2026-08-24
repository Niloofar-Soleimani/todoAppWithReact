import { CircleIcon, PencilSimpleIcon, StarIcon, TrashIcon, UserSwitchIcon } from "@phosphor-icons/react";
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
import { BottomSheet } from "../Component/Sheet/Sheet";
import { Btn } from "../Component/Btn/Btn";
import { Switch } from "../Component/Switch/Switch";

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
	const [isTaskDetailsSheetOpen,setTaskDetailsSheetOpen]=useState(false)
	const IsCopmpletedIcon = isCompleted ? CheckCircleIcon : CircleIcon;
	const isThisTaskStared = startedTaskId === id;
	const handleCompletedBtnClick = () => {
		return toggleTaskCompleted(id);
	};
	const handleStarBtnClick = () => {
		return setStartedTaskId(isCompleted ? "" : isThisTaskStared ? "" : id);
	};
	 const closeTaskDetailsSheet=()=>setTaskDetailsSheetOpen(false)
	 const OpenTaskDetailsSheet=()=>setTaskDetailsSheetOpen(true)
	return (
    <>
      {isTaskDetailsSheetOpen && (
        <TaskDetailsSheet onClose={closeTaskDetailsSheet} id={id} title={title} isCompleted={isCompleted} />
      )}

      <div
        className={`flex w-full h-12 ${isCompleted ? "text-stone-600 line-through" : "text-stone-900"} `}
      >
        <button type="button" onClick={handleCompletedBtnClick}>
          <IsCopmpletedIcon size={24} />
        </button>

        <button
          type="button"
		  onClick={OpenTaskDetailsSheet}
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
    </>
  );
}
type TaskDetailsSheetProps={
	id:Task['id'],
	title:Task['title'],
	isCompleted:Task['isCompleted']
	onClose:()=>void
}

  function TaskDetailsSheet({ onClose , id , title, isCompleted }: TaskDetailsSheetProps) {
	const { toggleTaskCompleted } = use(TasksContext);
	// const [isOn , setIsOn]=useState(false)
	 const handleToggleClick=()=>toggleTaskCompleted(id)
    return (
      <BottomSheet
        onClose={onClose}
        topBar={<TopBar title=" مشخصات" onCloseBtnClick={onClose} />}
      >
        <p className="text-stone-900 font-bold text-2xl text-center">{title}</p>
        <div className="flex flex-col gap-2">
          <button
            onClick={handleToggleClick}
            type="button"
            className="p-2 ps-4 flex items-center justify-between border-2 border-dashed border-stone-300 rounded-full  text-stone-900 font-bold"
          >
            {" "}
            وضعیت :
            <Switch readOnly checked={isCompleted} />
          </button>
          <Btn
            title=" ویرایش"
            IconEnd={PencilSimpleIcon}
            style="light"
            color="neutral"
          />
          <Btn
            title=" حدف کن"
            IconEnd={TrashIcon}
            color="danger"
            style="light"
          />
        </div>
      </BottomSheet>
    );
  }