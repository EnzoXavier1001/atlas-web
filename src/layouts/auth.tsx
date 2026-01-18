import { Outlet } from "react-router";
import connectedWorldImg from "../assets/Illustration.svg";

import logoImg from "../assets/logo.png";

export function AuthLayout() {
	return (
		<div className="grid grid-cols-1 min-h-screen md:grid-cols-2">
			<div className="bg-blue-600 hidden flex-col justify-center px-20 space-y-4 md:flex">
				<img src={connectedWorldImg} alt="" className="w-80" />

				<div className="space-y-2 flex flex-col">
					<h2 className="text-4xl text-white font-bold">
						Toda pergunta tem uma resposta.
					</h2>
					<p className="text-gray-200 text-2xl">
						Aprenda e compartilhe conhecimento com outros colaboradores.
					</p>
				</div>
			</div>
			<div className="bg-white flex flex-col justify-center items-center space-y-4">
				<img src={logoImg} alt="Logo atlas" className="w-40" />

				<Outlet />
			</div>
		</div>
	);
}
