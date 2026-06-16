import { ReactNode } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

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
  return (
    <div className="bg-ivory min-h-screen text-onyx selection:bg-blush/40 flex flex-col overflow-x-hidden">
      {/* Sticky header navbar */}
      <Navbar currentPath={currentPath} onNavigate={onNavigate} />

      {/* Core sections and footer wrapper */}
      <div className="flex-grow flex flex-col w-full">
        <main className="flex-grow w-full relative">
          {children}
        </main>

        {/* Corporate footer */}
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
