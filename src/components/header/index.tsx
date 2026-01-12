import { Link } from "react-router";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImg from "../../assets/logo.png";

export function Header() {
	return (
		<header className="border-b border-b-gray-200 bg-white">
			<div className="max-w-[1480px] mx-auto flex items-center justify-between py-4 px-4 lg:px-0">
				<Link to="/">
					<img src={logoImg} alt="Logo" className="w-40" />
				</Link>

				<div className="flex-1 flex justify-center space-x-6">
					<Link
						to="/"
						className="text-gray-700 hover:text-gray-900 font-medium"
					>
						Home
					</Link>
					<Link
						to="/posts"
						className="text-gray-700 hover:text-gray-900 font-medium"
					>
						Posts
					</Link>
					<Link
						to="/about"
						className="text-gray-700 hover:text-gray-900 font-medium"
					>
						Sobre
					</Link>
				</div>

				<div className="flex items-center space-x-4">
					<Link
						to="/create-post"
						className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
					>
						Criar Post
					</Link>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<button
								type="button"
								className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center hover:shadow-md transition-shadow"
							>
								<img
									src="https://i.pravatar.cc/40"
									alt="User Avatar"
									className="w-full h-full object-cover"
								/>
							</button>
						</DropdownMenuTrigger>

						<DropdownMenuContent
							align="end"
							className="w-64 bg-white rounded-md shadow-lg border border-gray-200 p-2"
						>
							<div className="px-3 py-2">
								<p className="text-sm font-medium text-gray-900">Enzo Costa</p>
								<p className="text-xs text-gray-500 truncate">
									enzo.x@cheil.com
								</p>
							</div>

							<DropdownMenuSeparator />

							<DropdownMenuItem
								className="px-3 py-2 rounded hover:bg-gray-100"
								asChild
							>
								<Link to="/profile">Perfil</Link>
							</DropdownMenuItem>
							<DropdownMenuItem className="px-3 py-2 rounded hover:bg-gray-100">
								Sair
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
}
