import { createFileRoute } from "@tanstack/react-router";

const HomePage = () => {
	return <div>Hello /!</div>;
};

export const Route = createFileRoute("/")({
	component: HomePage,
});
