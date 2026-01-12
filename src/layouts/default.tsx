import { Outlet } from "react-router";
import { Header } from "@/components/header";

export function DefaultLayout() {
	return (
		<>
			<Header />
			<div className="max-w-[1480px] mx-auto mt-4">
				<Outlet />
			</div>
		</>
	);
}
