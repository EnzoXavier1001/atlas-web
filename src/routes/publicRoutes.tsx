import { createBrowserRouter } from "react-router";
import { AuthLayout } from "@/layouts/auth";
import { SignIn } from "@/pages/auth/sign-in";

export const router = createBrowserRouter([
	{
		element: <AuthLayout />,
		children: [
			{
				path: "/sign-in",
				element: <SignIn />,
			},
		],
	},
]);
