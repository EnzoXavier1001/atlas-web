import { Store, User, Users, Wrench } from "lucide-react";
import { Card } from "@/components/card";
import { Input } from "@/components/ui/input";

export function Home() {
	return (
		<section className="grid grid-cols-[240px_1fr_200px] gap-4 min-h-screen">
			<aside className="flex flex-col space-y-2">
				<ul className="flex flex-col gap-1">
					<li className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-500 hover:underline">
						<Wrench size={18} />
						TI
					</li>

					<li className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-500 hover:underline">
						<Users size={18} />
						RH
					</li>

					<li className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-500 hover:underline">
						<User size={18} />
						Account
					</li>

					<li className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-500 hover:underline">
						<Store size={18} />
						VTEX
					</li>
				</ul>
			</aside>

			<main className="p-6">
				<div className="bg-white p-3 rounded-sm">
					<Input type="text" placeholder="O que você está procurando hoje ?" />
				</div>

				<div className="flex flex-col">
					<Card />
					<Card />
				</div>
			</main>

			<aside className="p-4">aside direito</aside>
		</section>
	);
}
