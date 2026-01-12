import { CalendarDays } from "lucide-react";

export function Card() {
	return (
		<article className="mt-4 bg-white p-5 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
			<header className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<button
						type="button"
						className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center hover:shadow-sm transition-shadow"
					>
						<img
							src="https://i.pravatar.cc/40"
							alt="User Avatar"
							className="w-full h-full object-cover"
						/>
					</button>

					<div className="flex flex-col">
						<span className="text-sm font-medium">Enzo Costa</span>
						<span className="flex items-center gap-1 text-xs text-gray-500">
							<CalendarDays size={14} />
							12 Jan 2026
						</span>
					</div>
				</div>

				<span className="bg-gray-100 text-gray-700 px-3 py-1 text-xs font-medium rounded-full">
					TI
				</span>
			</header>

			<main className="mt-4 space-y-2">
				<h3 className="text-lg font-semibold text-gray-900 hover:underline cursor-pointer">
					Como organizar chamados de TI com eficiência
				</h3>

				<p className="text-sm text-gray-600 line-clamp-2">
					Um guia prático para estruturar o fluxo de atendimento, priorizar
					chamados e melhorar a comunicação entre equipes técnicas e usuários.
				</p>
			</main>
		</article>
	);
}
