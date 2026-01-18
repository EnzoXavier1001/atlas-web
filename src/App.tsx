import { RouterProvider } from "react-router";
import { router } from "./routes/publicRoutes";
import "./styles/global.css";
import { Toaster } from "@/components/ui/sonner";

export function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
			<Toaster />
		</>
	);
}
