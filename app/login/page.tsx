"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, LogIn } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logowanie:", { email, password });
    // Tutaj później dodam komunikację z backendem 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md bg-[#111118] border border-[#1e1e2e] rounded-3xl p-10 shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold font-syne text-[#e8e8f0]">Witaj w Studiq</h1>
          <p className="text-[#6b6b85] mt-2">Zaloguj się, aby kontynuować naukę</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#b0b0c8] ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b85]" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl py-3 pl-12 pr-4 text-[#e8e8f0] focus:border-[#6c63ff] focus:outline-none transition-all"
                placeholder="twoj@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#b0b0c8] ml-1">Hasło</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b85]" size={18} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl py-3 pl-12 pr-4 text-[#e8e8f0] focus:border-[#6c63ff] focus:outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#6c63ff] hover:bg-[#5a52e0] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#6c63ff]/20"
          >
            <LogIn size={20} />
            Zaloguj się
          </button>
        </form>

        <p className="text-center text-[#6b6b85] mt-8 text-sm">
          Nie masz konta?{' '}
          <Link href="/register" className="text-[#6c63ff] hover:underline font-medium">
            Zarejestruj się za darmo
          </Link>
        </p>
      </div>
    </div>
  );
}