import type { ReactNode } from "react";
// CUSTOM COMPONENTS
import Navbar from "components/shared/navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
