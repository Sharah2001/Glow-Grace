import React, { useState, useEffect, lazy, Suspense } from 'react';
import RootLayout from './app/layout';

// Lazy loaded client pages for ultra performance
const Home = lazy(() => import('./app/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const ServiceDetailPage = lazy(() => import('./app/services/[slug]/page'));
const AreasCoveredPage = lazy(() => import('./app/areas-we-cover/page'));
const EmergencyPage = lazy(() => import('./app/emergency/page'));
const QuotePage = lazy(() => import('./app/quote/page'));
const ReviewsPage = lazy(() => import('./app/reviews/page'));
const GalleryPage = lazy(() => import('./app/gallery/page'));

// Lazy loaded administrative portal pages
const AdminLoginPage = lazy(() => import('./app/admin/login/page'));
const AdminDashboardPage = lazy(() => import('./app/admin/page'));
const AdminBookingsPage = lazy(() => import('./app/admin/bookings/page'));
const AdminJobsPage = lazy(() => import('./app/admin/jobs/page'));
const AdminReviewsPage = lazy(() => import('./app/admin/reviews/page'));
const AdminSettingsPage = lazy(() => import('./app/admin/settings/page'));

// Seed Mock Data arrays from our constants sheet
import {
  MOCK_BOOKINGS,
  MOCK_JOBS,
  TESTIMONIALS,
  Booking,
  Job,
  Testimonial
} from './lib/constants';

function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] bg-paper text-ink select-none font-mono text-xs" aria-live="polite" aria-busy="true">
      <div className="relative w-12 h-12 flex items-center justify-center mb-4">
        {/* Spinning copper ring */}
        <div className="absolute inset-0 rounded-none border border-steel/10 pointer-events-none"></div>
        <div className="absolute inset-0 rounded-none border border-transparent border-t-copper animate-spin"></div>
        <div className="w-1.5 h-1.5 bg-copper"></div>
      </div>
      <p className="text-copper uppercase font-black tracking-widest animate-pulse">
        // BOOTING STATION GRIDS...
      </p>
    </div>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');
  
  // Shared Live Reactive Local state variables
  const [bookings, setBookings] = useState<Booking[]>(() => {
    try {
      const stored = localStorage.getItem('hydrohaus_bookings');
      return stored ? JSON.parse(stored) : MOCK_BOOKINGS;
    } catch {
      return MOCK_BOOKINGS;
    }
  });

  const [jobs, setJobs] = useState<Job[]>(() => {
    try {
      const stored = localStorage.getItem('hydrohaus_jobs');
      return stored ? JSON.parse(stored) : MOCK_JOBS;
    } catch {
      return MOCK_JOBS;
    }
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const stored = localStorage.getItem('hydrohaus_testimonials');
      return stored ? JSON.parse(stored) : TESTIMONIALS;
    } catch {
      return TESTIMONIALS;
    }
  });

  // Authorization token session state flag
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    try {
      return localStorage.getItem('hydrohaus_admin_session') === 'active';
    } catch {
      return false;
    }
  });

  // Track state changes to synchronize persistence
  useEffect(() => {
    try {
      localStorage.setItem('hydrohaus_bookings', JSON.stringify(bookings));
    } catch {}
  }, [bookings]);

  useEffect(() => {
    try {
      localStorage.setItem('hydrohaus_jobs', JSON.stringify(jobs));
    } catch {}
  }, [jobs]);

  useEffect(() => {
    try {
      localStorage.setItem('hydrohaus_testimonials', JSON.stringify(testimonials));
    } catch {}
  }, [testimonials]);

  // Route history popstates
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handleLocationChange);
    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State mutators passed down to components
  const handleAddBooking = (newBk: Booking) => {
    setBookings(prev => [newBk, ...prev]);
  };

  const handleUpdateBookingStatus = (id: string, status: 'New' | 'Confirmed' | 'Completed' | 'Cancelled') => {
    setBookings(prev => prev.map(bk => bk.id === id ? { ...bk, status } : bk));
  };

  const handleUpdateJobStatus = (id: string, status: 'Pending' | 'In Progress' | 'Completed') => {
    setJobs(prev => prev.map(jb => jb.id === id ? { ...jb, status } : jb));
  };

  const handleAddReview = (newRev: Testimonial) => {
    setTestimonials(prev => [newRev, ...prev]);
  };

  const handleRemoveReview = (id: string) => {
    setTestimonials(prev => prev.filter(rev => rev.id !== id));
  };

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
    try {
      localStorage.setItem('hydrohaus_admin_session', 'active');
    } catch {}
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    try {
      localStorage.removeItem('hydrohaus_admin_session');
    } catch {}
    navigate('/');
  };

  // Switch Page Router
  const renderPage = () => {
    const segments = currentPath.split('/');
    
    // Dynamic routing fallback match for service specification pages (/services/[slug])
    if (segments[1] === 'services' && segments[2]) {
      return (
        <ServiceDetailPage
          onNavigate={navigate}
          slug={segments[2]}
        />
      );
    }

    // Guard route access controls if they begin with /admin and the session is inactive
    if (currentPath.startsWith('/admin') && !isAdminLoggedIn && currentPath !== '/admin/login') {
      return (
        <AdminLoginPage
          onLogin={handleAdminLogin}
          onNavigate={navigate}
        />
      );
    }

    switch (currentPath) {
      case '/':
      case '/home':
        return <Home onNavigate={navigate} />;
      
      case '/services':
        return <ServicesPage onNavigate={navigate} />;
      
      case '/areas-we-cover':
        return <AreasCoveredPage onNavigate={navigate} />;
      
      case '/emergency':
        return <EmergencyPage onNavigate={navigate} />;
      
      case '/quote':
        return <QuotePage onNavigate={navigate} onAddBooking={handleAddBooking} />;
      
      case '/reviews':
        return <ReviewsPage onNavigate={navigate} onAddReview={handleAddReview} />;

      case '/gallery':
        return <GalleryPage onNavigate={navigate} />;

      // ADMIN PORTAL PAGES
      case '/admin/login':
        return (
          <AdminLoginPage
            onLogin={handleAdminLogin}
            onNavigate={navigate}
          />
        );

      case '/admin':
        return (
          <AdminDashboardPage
            currentPath={currentPath}
            onNavigate={navigate}
            onLogout={handleAdminLogout}
            bookings={bookings}
            jobs={jobs}
            testimonials={testimonials}
          />
        );

      case '/admin/bookings':
        return (
          <AdminBookingsPage
            currentPath={currentPath}
            onNavigate={navigate}
            onLogout={handleAdminLogout}
            bookings={bookings}
            onUpdateBookingStatus={handleUpdateBookingStatus}
          />
        );

      case '/admin/jobs':
        return (
          <AdminJobsPage
            currentPath={currentPath}
            onNavigate={navigate}
            onLogout={handleAdminLogout}
            jobs={jobs}
            onUpdateJobStatus={handleUpdateJobStatus}
          />
        );

      case '/admin/reviews':
        return (
          <AdminReviewsPage
            currentPath={currentPath}
            onNavigate={navigate}
            onLogout={handleAdminLogout}
            testimonials={testimonials}
            onRemoveReview={handleRemoveReview}
          />
        );

      case '/admin/settings':
        return (
          <AdminSettingsPage
            currentPath={currentPath}
            onNavigate={navigate}
            onLogout={handleAdminLogout}
          />
        );

      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <RootLayout currentPath={currentPath} onNavigate={navigate}>
      <div className="transition-all duration-300 ease-out min-h-[60vh]">
        <Suspense fallback={<PageLoader />}>
          {renderPage()}
        </Suspense>
      </div>
    </RootLayout>
  );
}
