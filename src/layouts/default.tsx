import { Outlet } from "react-router";
import { Header } from "@/components/header";

export function DefaultLayout() {
	return (
		<div className=" bg-gray-50">
			<Header />
			<div className="max-w-[1280px] mx-auto mt-4">
				<Outlet />
			</div>
		</div>
	);
}
