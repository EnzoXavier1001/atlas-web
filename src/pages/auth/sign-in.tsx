import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import connectedWorldImg from "../../assets/Illustration.svg";

export function SignIn() {
	return (
		<div className="grid grid-cols-2 min-h-screen">
			<div className="bg-blue-600 flex flex-col justify-center px-20 space-y-4">
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
				<h1 className="text-2xl text-muted-foreground">Acessar sua conta</h1>
				<form className="flex flex-col max-w-[350px] space-y-4">
					<div className="flex flex-col space-y-2 w-100">
						<Label id="email">E-mail</Label>
						<Input type="text" id="email" placeholder="Digite seu e-mail" />
					</div>

					<div className="flex flex-col space-y-2 w-100">
						<Label id="password">Senha</Label>
						<Input type="text" id="password" placeholder="Digite sua senha" />
					</div>

					<Button type="submit" className="w-100">
						Entrar
					</Button>
				</form>
			</div>
		</div>
	);
}
