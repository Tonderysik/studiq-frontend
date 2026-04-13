// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Studiq - Platforma E-learningowa",
	description: "Przygotuj się do egzaminów z AI",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body
				className={`${inter.className} bg-[#0a0a0f] text-[#e8e8f0] antialiased`}>
				<div className="flex">
					{/* Sidebar */}
					<Sidebar />

					{/* Kontener na treść podstron */}
					<main className="flex-1 ml-64 min-h-screen relative">
						{/* Tło z siatką (opcjonalne, dla klimatu z Twojej prezentacji) */}
						<div className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

						<div className="relative z-10 p-8">{children}</div>
					</main>
				</div>
			</body>
		</html>
	);
}
