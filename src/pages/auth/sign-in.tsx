import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const userSchema = z.object({
	email: z.email("E-mail inválido"),
	password: z.string().nonempty("Senha obrigatória"),
});

type userInput = z.infer<typeof userSchema>;

export function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<userInput>({
		resolver: zodResolver(userSchema),
	});

	function handleLogin(data: userInput) {
		console.log(data);
		toast.success("Usuário logado com sucesso!");
	}

	const isEmailValid = Boolean(watch("email"));
	const isPasswordValid = Boolean(watch("password"));

	const isFormValid = isEmailValid && isPasswordValid;

	return (
		<form
			className="flex flex-col md:max-w-[350px] w-[90%] space-y-4"
			onSubmit={handleSubmit(handleLogin)}
		>
			<div className="flex flex-col space-y-2 w-full">
				<Label id="email">E-mail</Label>
				<Input
					id="email"
					placeholder="Digite seu e-mail"
					{...register("email")}
					className={`${errors.email ? "border-red-400" : ""}`}
				/>
				{errors ? (
					<p className="text-red-400 text-sm">{errors.email?.message}</p>
				) : (
					""
				)}
			</div>

			<div className="flex flex-col space-y-2 w-full">
				<Label id="password">Senha</Label>
				<Input
					type="password"
					id="password"
					placeholder="Digite sua senha"
					{...register("password")}
					className={`${errors.password ? "border-red-400" : ""}`}
				/>
				{errors ? (
					<p className="text-red-400 text-sm">{errors.password?.message}</p>
				) : (
					""
				)}
			</div>

			<Button type="submit" className="w-full" disabled={!isFormValid}>
				Entrar
			</Button>

			<p className="text-center text-sm text-muted-foreground">
				Não tem uma conta?{" "}
				<Link
					to="/sign-up"
					className="font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
				>
					Registre-se
				</Link>
			</p>
		</form>
	);
}
