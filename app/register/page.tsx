"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, UserPlus } from "lucide-react";

export default function RegisterPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Rejestracja:", { name, email, password });
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-[80vh]">
			<div className="w-full max-w-md bg-[#111118] border border-[#1e1e2e] rounded-3xl p-10 shadow-2xl">
				<div className="text-center mb-10">
					<h1 className="text-3xl font-bold font-syne text-[#e8e8f0]">
						Stwórz konto
					</h1>
					<p className="text-[#6b6b85] mt-2">Dołącz do społeczności Studiq</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="space-y-2">
						<label className="text-sm font-medium text-[#b0b0c8] ml-1">
							Imię i nazwisko
						</label>
						<div className="relative">
							<User
								className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b85]"
								size={18}
							/>
							<input
								type="text"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl py-3 pl-12 pr-4 text-[#e8e8f0] focus:border-[#ff6584] focus:outline-none transition-all"
								placeholder="Jan Kowalski"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium text-[#b0b0c8] ml-1">
							Email
						</label>
						<div className="relative">
							<Mail
								className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b85]"
								size={18}
							/>
							<input
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl py-3 pl-12 pr-4 text-[#e8e8f0] focus:border-[#ff6584] focus:outline-none transition-all"
								placeholder="twoj@email.com"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium text-[#b0b0c8] ml-1">
							Hasło
						</label>
						<div className="relative">
							<Lock
								className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b85]"
								size={18}
							/>
							<input
								type="password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl py-3 pl-12 pr-4 text-[#e8e8f0] focus:border-[#ff6584] focus:outline-none transition-all"
								placeholder="Minimum 8 znaków"
							/>
						</div>
					</div>

					<button
						type="submit"
						className="w-full bg-[#ff6584] hover:bg-[#e85474] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#ff6584]/20">
						<UserPlus size={20} />
						Utwórz konto
					</button>
				</form>

				<p className="text-center text-[#6b6b85] mt-8 text-sm">
					Masz już konto?{" "}
					<Link
						href="/login"
						className="text-[#ff6584] hover:underline font-medium">
						Zaloguj się
					</Link>
				</p>
			</div>
		</div>
	);
}
