import { RouterProvider } from "react-router";
import { router } from "./routes/publicRoutes";
import "./styles/global.css";

export function App() {
	return <RouterProvider router={router} />;
}
