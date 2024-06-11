import { Link } from "@tanstack/react-router";

export default function Navbar() {
	return (
		<header className="py-6">
			<div className="max-w-6xl mx-auto flex items-center justify-between">
				<h1 className="text-2xl font-semibold">Tanstack Router</h1>
				<nav className="flex items-center gap-6">
					<Link
						to="/"
						activeProps={{
							style: {
								fontWeight: "bold",
							},
						}}
					>
						Home
					</Link>
					<Link to="/profile">Profile</Link>
				</nav>
			</div>
		</header>
	);
}
