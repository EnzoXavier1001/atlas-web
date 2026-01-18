import { createBrowserRouter } from "react-router";
import { AuthLayout } from "@/layouts/auth";
import { DefaultLayout } from "@/layouts/default";
import { SignIn } from "@/pages/auth/sign-in";
import { Home } from "@/pages/home";
import { Post } from "@/pages/post";
import { Profile } from "@/pages/profile";

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
			{
				path: "/profile/:id",
				element: <Profile />,
			},
		],
	},
]);
