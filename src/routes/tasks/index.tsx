import {
	CircleIcon,
	PencilSimpleIcon,
	StarIcon,
	TrashIcon,
	UserSwitchIcon,
} from "@phosphor-icons/react";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr/CheckCircle";
import { createFileRoute } from "@tanstack/react-router";

import { use, useState } from "react";
import useLocalStorage from "use-local-storage";
import arrowdown from "../../assets/image/Arrow 1.png";
import noteImage from "../../assets/image/undraw_no-data_ig65 1.png";
import { BottomBar } from "../../Component/BottomBar/BottomBar";
import { Btn } from "../../Component/Btn/Btn";
import { BottomSheet } from "../../Component/Sheet/Sheet";
import { Switch } from "../../Component/Switch/Switch";
import { StarContext } from "../../Component/shared/star.contex";
import { type Task, TasksContext } from "../../Component/shared/tasks.context";
import { TopBar } from "../../Component/TopBar/TopBar";
import { TasksList } from "../../routes/tasks/-TaskList";

export const Route = createFileRoute("/tasks/")({
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
