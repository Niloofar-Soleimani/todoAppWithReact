import { XIcon } from "@phosphor-icons/react";

type TopBarProps = {
	title: string;
	onCloseBtnClick?: () => void;
};

export function TopBar({ title, onCloseBtnClick }: TopBarProps) {
	return (
		<div className="bg-stone-100 flex min-h-16 gap-2 py-2 px-4 items-center justify-between ">
			{onCloseBtnClick ? (
				<button
					type="button"
					onClick={onCloseBtnClick}
					className="p-3 size-12 flex justify-center items-center cursor-pointer"
				>
					<XIcon size={24} className="text-stone-700" />
				</button>
			) : (
				<div className="size-12" />
			)}

			<p className="font-bold   text-stone-900 ">{title} </p>
			<div className="size-12" />
		</div>
	);
}
