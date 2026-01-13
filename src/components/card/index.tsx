import { CalendarDays, Crown, Heart } from "lucide-react";
import { useState } from "react";
export function Card() {
	const [likes, setLikes] = useState<number>(12);

	return (
		<article className="mt-4 bg-white p-5 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
			<header className="flex items-center justify-between">
				<div className="flex items-center gap-4">
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

					<div className="flex flex-col gap-1">
						<span className="text-sm font-medium text-gray-900">
							Enzo Costa
						</span>

						<div className="flex gap-1 flex-wrap">
							<span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium flex items-center gap-1">
								<Crown className="w-3 h-3" />
								ADM #01
							</span>

							<span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
								Publisher
							</span>
						</div>
					</div>
				</div>

				<span className="flex items-center gap-1 text-xs text-gray-400">
					<CalendarDays size={14} />
					12 Jan 2026
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

			<footer className="mt-4 flex items-center justify-between">
				<button
					type="button"
					className={`
						flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer
						${likes ? "text-red-500" : "text-gray-500 hover:text-red-500"}
					`}
					onClick={() => setLikes((prevState: number) => prevState + 1)}
				>
					<Heart size={18} className={likes ? "fill-red-500" : ""} />
					<span>{likes}</span>
				</button>
			</footer>
		</article>
	);
}
