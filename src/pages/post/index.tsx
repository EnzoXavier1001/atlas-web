export function Post() {
	const postTags = ["React", "Tailwind", "Frontend", "UI"];
	const authorTags = ["React", "TypeScript", "Design System", "Performance"];

	return (
		<article className="mx-auto max-w-7xl px-4 py-8">
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
				<section className="space-y-6">
					<img
						src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0xdibkdctto6n95pqzf1.png"
						alt=""
						className="rounded-2xl object-cover"
					/>

					<h1 className="text-3xl font-bold tracking-tight">
						Criando uma aplicação moderna com React e Tailwind
					</h1>

					<div className="flex flex-wrap gap-2">
						{postTags.map((tag) => (
							<span
								key={tag}
								className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-muted/70 cursor-pointer transition-colors"
							>
								#{tag}
							</span>
						))}
					</div>

					<p className="text-muted-foreground leading-relaxed">
						Neste post vamos explorar boas práticas para criar interfaces
						modernas utilizando React, Tailwind CSS e uma arquitetura limpa,
						pensando em escalabilidade e experiência do usuário.
					</p>

					<div className="prose prose-neutral max-w-none">
						<p>
							O Tailwind CSS permite construir interfaces rapidamente sem perder
							consistência visual. Quando combinado com React, o fluxo de
							desenvolvimento se torna muito mais produtivo.
						</p>

						<p>
							Neste artigo você vai aprender como estruturar seus componentes,
							definir padrões visuais e manter o código organizado.
						</p>
					</div>
				</section>

				<aside className="space-y-6">
					<div className="rounded-2xl border bg-white p-6 shadow-sm space-y-4">
						<header className="space-y-3">
							<div className="flex items-center gap-3">
								<img
									src="https://i.pravatar.cc/56"
									alt="User Avatar"
									className="h-14 w-14 rounded-xl object-cover"
								/>
								<div>
									<p className="font-semibold">Enzo Costa</p>
									<p className="text-sm text-muted-foreground">
										Frontend Developer
									</p>
								</div>
							</div>
						</header>

						<p className="text-sm text-muted-foreground leading-relaxed">
							Publisher e desenvolvedor frontend. Curto criar interfaces bem
							pensadas, limpas e com foco total na experiência do usuário.
						</p>
					</div>

					<div className="rounded-2xl border bg-white p-6 shadow-sm space-y-4">
						<h3 className="text-sm font-semibold text-foreground">
							Outros posts do autor
						</h3>

						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Como organizar projetos React de forma escalável
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Boas práticas com Tailwind CSS no dia a dia
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Arquitetura frontend: padrões que realmente funcionam
								</a>
							</li>
						</ul>
					</div>
				</aside>
			</div>
		</article>
	);
}
