import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div className="w-[50%] bg-amber-400 h-dvh"> خوش آمدی!</div>;
}
