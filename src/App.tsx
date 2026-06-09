import { useState, useEffect } from 'react';
import RootLayout from './app/layout';
import Home from './app/page';
import ServicesPage from './app/services/page';
import GalleryPage from './app/gallery/page';
import BookingPage from './app/booking/page';

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
        return <ServicesPage onNavigate={navigate} />;
      case '/gallery':
        return <GalleryPage />;
      case '/booking':
        return <BookingPage />;
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
