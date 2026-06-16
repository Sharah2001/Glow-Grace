import { useState, useEffect, lazy, Suspense } from 'react';
import RootLayout from './app/layout';
import Home from './app/page';

// Lazy load secondary subpages to minimize the main JS bundle and optimize FCP, LCP, and TBT
const ServicesPage = lazy(() => import('./app/services/page'));
const GalleryPage = lazy(() => import('./app/gallery/page'));
const BookingPage = lazy(() => import('./app/booking/page'));

// Elegant, brand-consistent loading component to avoid Layout Shifts (CLS) while ensuring high Accessibility
function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white text-onyx" aria-live="polite" aria-busy="true">
      <div className="relative w-12 h-12 flex items-center justify-center mb-4">
        {/* Elegant spinning gold ring */}
        <div className="absolute inset-0 rounded-full border-2 border-gold/10 pointer-events-none"></div>
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold animate-spin"></div>
        <div className="w-2 h-2 bg-gold rounded-full"></div>
      </div>
      <p className="font-accent text-[11px] tracking-widest text-[#7D610E] uppercase font-semibold animate-pulse">
        Lumière Sanctuary
      </p>
    </div>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');

  // Listen to browser history navigation (back/forward keys)
  useEffect(() => {
    const handleLocationChange = () => {
      // Use clean routes path
      const path = window.location.pathname || '/';
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handleLocationChange);
    // Initialize current path
    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Soft navigation transitions
  const navigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
      case '/home':
        return <Home onNavigate={navigate} />;
      case '/services':
        return (
          <Suspense fallback={<PageLoader />}>
            <ServicesPage onNavigate={navigate} />
          </Suspense>
        );
      case '/gallery':
        return (
          <Suspense fallback={<PageLoader />}>
            <GalleryPage />
          </Suspense>
        );
      case '/booking':
        return (
          <Suspense fallback={<PageLoader />}>
            <BookingPage />
          </Suspense>
        );
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <RootLayout currentPath={currentPath} onNavigate={navigate}>
      <div className="transition-all duration-500 ease-out">
        {renderPage()}
      </div>
    </RootLayout>
  );
}
