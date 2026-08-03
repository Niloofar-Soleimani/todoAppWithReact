import { CaretLeft, PlusIcon } from "@phosphor-icons/react";
import { CheckSquareIcon } from "@phosphor-icons/react/dist/ssr/CheckSquare";
import { HouseIcon } from "@phosphor-icons/react/dist/ssr/House";
import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { BottomBar } from "../Component/BottomBar/BottomBar";
import { Btn } from "../Component/Btn/Btn";
import { TopBar } from "../Component/TopBar/TopBar";

export const Route = createFileRoute("/home")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col w-full h-dvh  ">
			<TopBar title="یه چیز" />
			<div className="flex flex-col p-4 gap-8 items-center justify-center flex-1 text-center">
				<p className="font-bold text-stone-900">
					«چیز» بعدی‌مون چیه؟
					<br />
					(برو و از توی لیست کارها انتخابش کن!)
				</p>

				<Btn
					title={" مشاهده لیست کارها"}
					IconEnd={CaretLeft}
					color="brand"
					style="light"
				/>
			</div>

			<BottomBar />
		</div>
	);
}
