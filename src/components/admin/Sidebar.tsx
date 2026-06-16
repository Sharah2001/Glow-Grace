import React from 'react';
import { Calendar, ListTodo, MessageSquare, Cog, LogOut, Wrench } from 'lucide-react';

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onLogout: () => void;
}

export default function Sidebar({ currentPath, onNavigate, onLogout }: SidebarProps) {
  const menuItems = [
    { name: 'Dashboard Home', path: '/admin', icon: Wrench },
    { name: 'Bookings Log', path: '/admin/bookings', icon: Calendar },
    { name: 'Active Job Board', path: '/admin/jobs', icon: ListTodo },
    { name: 'Reviews Desk', path: '/admin/reviews', icon: MessageSquare },
    { name: 'Station Settings', path: '/admin/settings', icon: Cog },
  ];

  return (
    <aside className="w-64 bg-charcoal text-bone border-r border-ash min-h-screen flex flex-col justify-between p-6 select-none font-mono">
      <div>
        {/* Brand logo details */}
        <div className="flex items-center gap-2 mb-8 border-b border-ash pb-5">
          <div className="w-8 h-8 rounded-none border border-copper flex items-center justify-center text-copper font-serif font-semibold">
            M
          </div>
          <div>
            <h2 className="font-serif font-semibold text-[13px] tracking-tight uppercase text-bone leading-none">
              MODFLOW
            </h2>
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest mt-0.5 block">Core Dispatch Desk</span>
          </div>
        </div>

        {/* Menu rows */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;

            return (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-[10px] uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-copper text-obsidian border-l-2 border-bone'
                    : 'text-smoke hover:text-bone hover:bg-obsidian'
                }`}
              >
                <Icon size={13} className={isActive ? 'text-obsidian' : 'text-zinc-500'} />
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer logoff button */}
      <div className="border-t border-ash pt-4">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3.5 text-[10px] uppercase font-bold tracking-widest text-[#C24A35] hover:bg-[#321210]/30 transition-colors focus:outline-none cursor-pointer"
        >
          <LogOut size={13} />
          SYSTEM EXIT
        </button>
      </div>
    </aside>
  );
}
