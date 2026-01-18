import { Cake, FileText, Heart, Linkedin, MessageCircle } from "lucide-react";
import { Card } from "@/components/card";

export function Profile() {
	return (
		<section className="px-4 py-6 max-w-6xl mx-auto space-y-8">
			<div className="relative rounded-2xl bg-white shadow-sm border overflow-hidden">
				<div className="h-36 bg-gradient-to-r from-black to-zinc-800" />

				<div className="absolute left-1/2 top-20 -translate-x-1/2">
					<img
						src="https://i.pravatar.cc/120"
						alt="Avatar"
						className="h-28 w-28 rounded-full border-4 border-white object-cover"
					/>
				</div>

				<div className="pt-20 pb-8 px-6 text-center space-y-4">
					<div className="space-y-2">
						<h1 className="text-2xl font-bold">Enzo Costa</h1>

						<p className="text-sm text-muted-foreground">
							<span className="font-medium text-foreground">Publisher</span>
							{" · "}
							<span>WPC BR</span>
						</p>

						<div className="flex justify-center">
							<span className="rounded-full bg-black/90 px-3 py-1 text-xs font-semibold text-white">
								Administrador
							</span>
						</div>
					</div>

					<p className="mx-auto max-w-xl text-sm text-muted-foreground leading-relaxed">
						Desenvolvedor frontend focado em React, UI e boas práticas.
					</p>

					<div className="flex flex-wrap justify-center gap-6 pt-2 text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<Cake className="h-4 w-4" />
							28 de março
						</div>

						<a
							href="https://linkedin.com/in/seu-perfil"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2 hover:text-foreground transition"
						>
							<Linkedin className="h-4 w-4" />
							LinkedIn
						</a>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
				<aside className="h-fit rounded-2xl border bg-white p-6 shadow-sm space-y-5">
					<h3 className="text-sm font-semibold text-foreground">Atividade</h3>

					<div className="space-y-2 text-sm text-muted-foreground">
						<p className="flex items-center gap-2 text-sm text-muted-foreground">
							<FileText className="h-4 w-4" />
							<span>
								<span className="font-semibold text-foreground">54</span>{" "}
								publicações
							</span>
						</p>

						<div className="flex items-center gap-2">
							<Heart className="h-4 w-4" />
							<span>
								<span className="font-semibold text-foreground">1.2k</span>{" "}
								curtidas
							</span>
						</div>

						<div className="flex items-center gap-2">
							<MessageCircle className="h-4 w-4" />
							<span>
								<span className="font-semibold text-foreground">320</span>{" "}
								comentários
							</span>
						</div>
					</div>
				</aside>

				<section className="space-y-4">
					<Card />
					<Card />
					<Card />
				</section>
			</div>
		</section>
	);
}
