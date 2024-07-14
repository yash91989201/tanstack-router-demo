import { createFileRoute } from "@tanstack/react-router";

const PokemonPage = () => {
	const { id } = Route.useParams();
	return <>{id}</>;
};

const PokemonPageLoader = async () => {
	return <>loading</>;
};

export const Route = createFileRoute("/pokemon/$id")({
	component: PokemonPage,
	loader: PokemonPageLoader,
});
