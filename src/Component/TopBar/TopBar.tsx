export function TopBar({ title }: { title: string }) {
	return (
		<div className="bg-stone-100 flex min-h-16 gap-2 py-2 px-4 items-center justify-center ">
			<p className="font-bold   text-stone-900">{title} </p>
		</div>
	);
}
