import { BarChart, Store, User, Users, Wrench } from "lucide-react";
import { Card } from "@/components/card";
import { Input } from "@/components/ui/input";

export function Home() {
	return (
		<section className="grid grid-cols-[280px_1fr_360px] gap-6 min-h-screen">
			<aside className="p-4 bg-gray-50 border-r">
				<ul className="flex flex-col gap-2">
					<li className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors hover:bg-blue-100 hover:text-blue-600">
						<Wrench size={20} />
						<span className="font-medium">TI</span>
					</li>

					<li className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors hover:bg-blue-100 hover:text-blue-600">
						<Users size={20} />
						<span className="font-medium">RH</span>
					</li>

					<li className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors hover:bg-blue-100 hover:text-blue-600">
						<User size={20} />
						<span className="font-medium">Account</span>
					</li>

					<li className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors hover:bg-blue-100 hover:text-blue-600">
						<Store size={20} />
						<span className="font-medium">VTEX</span>
					</li>

					<li className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors hover:bg-blue-100 hover:text-blue-600">
						<BarChart size={20} />
						<span className="font-medium">AEM</span>
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
					<Card />
					<Card />
				</div>
			</main>

			<aside className="p-6 bg-gray-50 border-l flex flex-col gap-6">
				<div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-md">
					<p className="text-sm opacity-80">Esta semana</p>
					<h2 className="text-3xl font-bold mt-1">128 curtidas</h2>
					<span className="text-sm opacity-90">em posts publicados</span>
				</div>

				<div className="bg-white rounded-2xl p-6 shadow-sm">
					<h3 className="text-xl font-semibold text-gray-800 mb-5">
						🔥 Posts mais curtidos
					</h3>

					<ul className="space-y-5">
						<li className="flex gap-4">
							<span className="text-3xl font-bold text-blue-600">1</span>
							<div>
								<p className="font-medium text-gray-900 leading-tight">
									Como organizar chamados de TI com eficiência
								</p>
								<span className="text-sm text-gray-500">128 curtidas</span>
							</div>
						</li>

						<li className="flex gap-4">
							<span className="text-3xl font-bold text-blue-600">2</span>
							<div>
								<p className="font-medium text-gray-900 leading-tight">
									Como fazer registro de produto no AEM
								</p>
								<span className="text-sm text-gray-500">94 curtidas</span>
							</div>
						</li>

						<li className="flex gap-4">
							<span className="text-3xl font-bold text-blue-600">3</span>
							<div>
								<p className="font-medium text-gray-900 leading-tight">
									Como criar Vitrine na VTEX
								</p>
								<span className="text-sm text-gray-500">81 curtidas</span>
							</div>
						</li>
					</ul>
				</div>

				<div className="bg-white rounded-2xl p-6 shadow-sm">
					<h3 className="text-xl font-semibold text-gray-800 mb-5">
						👤 Usuários mais ativos
					</h3>

					<ul className="space-y-5">
						<li className="flex items-center justify-between">
							<div>
								<p className="font-medium text-gray-900">Enzo Costa</p>
								<span className="text-sm text-gray-500">
									12 posts publicados
								</span>
							</div>
							<span className="text-2xl font-bold text-blue-600">#1</span>
						</li>

						<li className="flex items-center justify-between">
							<div>
								<p className="font-medium text-gray-900">Mateus Pereira</p>
								<span className="text-sm text-gray-500">
									9 posts publicados
								</span>
							</div>
							<span className="text-2xl font-bold text-blue-600">#2</span>
						</li>

						<li className="flex items-center justify-between">
							<div>
								<p className="font-medium text-gray-900">Caio Leme</p>
								<span className="text-sm text-gray-500">
									7 posts publicados
								</span>
							</div>
							<span className="text-2xl font-bold text-blue-600">#3</span>
						</li>
					</ul>
				</div>
			</aside>
		</section>
	);
}
