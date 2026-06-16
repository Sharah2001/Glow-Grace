import React, { useState } from 'react';
import { ShieldCheck, Pin, KeyRound } from 'lucide-react';

interface AdminLoginPageProps {
  onLogin: () => void;
  onNavigate: (path: string) => void;
}

export default function AdminLoginPage({ onLogin, onNavigate }: AdminLoginPageProps) {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && pin === '1234') {
      onLogin();
      onNavigate('/admin');
    } else {
      setError('ACCESS REJECTED: INVALID ENGINEER CREDENTIALS');
    }
  };

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center p-4">
      <div className="bg-charcoal border border-ash max-w-md w-full p-8 sm:p-10 relative">
        {/* Glowing visual accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-copper"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-copper"></div>

        <div className="text-center space-y-3 select-none mb-8">
          <div className="inline-flex w-12 h-12 bg-obsidian border border-copper text-copper items-center justify-center font-serif font-semibold text-xl mb-1">
            M
          </div>
          <span className="font-mono text-copper text-[10px] font-bold block uppercase tracking-widest">
            // SECURE DISPATCH TERMINAL
          </span>
          <h1 className="font-serif text-2xl text-bone uppercase tracking-tight font-medium">
            ModFlowPlumbing Sign-On
          </h1>
          <p className="font-sans text-xs text-smoke leading-relaxed font-light">
            Secure administrative control interface. Enter operator credentials below to manage live queues, bookings, job dispatches and active reviews.
          </p>
        </div>

        {error && (
          <div className="p-3.5 mb-6 bg-[#321210] border border-ember-red/45 text-orange-200 font-mono text-[9px] text-center uppercase tracking-wider">
             {error}
          </div>
        )}

        <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
          <div className="space-y-1.5">
            <label className="text-zinc-500 uppercase font-bold block tracking-wider text-[9px]">Operator username</label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="e.g., admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-obsidian border border-ash py-3.5 pl-10 pr-4 text-bone focus:outline-none focus:border-copper h-11"
              />
              <KeyRound size={13} className="absolute left-3.5 top-[14px] text-zinc-500" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-zinc-500 uppercase font-bold block tracking-wider text-[9px]">Terminal PIN Pass</label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="e.g., 1234"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full bg-obsidian border border-ash py-3.5 pl-10 pr-4 text-bone focus:outline-none focus:border-copper h-11 tracking-widest text-sm"
              />
              <Pin size={13} className="absolute left-3.5 top-[14px] text-zinc-500" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-copper hover:bg-[#e49c6d] text-obsidian font-mono font-bold text-[10px] tracking-widest py-4 uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer focus:outline-none border-0 mt-6"
          >
            <ShieldCheck size={14} />
            AUTHORIZE SECURE OVERRIDE
          </button>
        </form>

        <div className="text-center mt-6 text-[9px] text-zinc-500 font-mono uppercase tracking-wider">
          OP DEMO BYPASS: USER <span className="font-bold text-copper">admin</span> | PIN <span className="font-bold text-copper">1234</span>
        </div>
      </div>
    </div>
  );
}
