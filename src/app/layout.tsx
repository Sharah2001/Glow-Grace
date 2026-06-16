import React, { ReactNode } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CallBar from '../components/layout/CallBar';

interface RootLayoutProps {
  children: ReactNode;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function RootLayout({
  children,
  currentPath,
  onNavigate,
}: RootLayoutProps) {
  const isAdmin = currentPath.startsWith('/admin');

  if (isAdmin) {
    return (
      <div className="bg-obsidian min-h-screen text-bone flex flex-col overflow-x-hidden">
        <main className="flex-grow w-full relative">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="bg-obsidian min-h-screen text-bone flex flex-col overflow-x-hidden">
      {/* Slim top live ticker phone register */}
      <CallBar />

      {/* Sticky header navbar */}
      <Navbar currentPath={currentPath} onNavigate={onNavigate} />

      {/* Core sections and footer wrapper */}
      <div className="flex-grow flex flex-col w-full">
        {/* We add padding-top to compensate for the fixed CallBar and Navbar height (10 + 16 = about 104px) */}
        <main className="flex-grow w-full relative pt-24 md:pt-26">
          {children}
        </main>

        {/* Corporate footer */}
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
