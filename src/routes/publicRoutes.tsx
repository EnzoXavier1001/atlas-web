import { createBrowserRouter } from "react-router";
import { AuthLayout } from "@/layouts/auth";
import { DefaultLayout } from "@/layouts/default";
import { SignIn } from "@/pages/auth/sign-in";
import { Home } from "@/pages/home";
import { Post } from "@/pages/post";

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
	{
		element: <DefaultLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/post/:id",
				element: <Post />,
			},
		],
	},
]);
