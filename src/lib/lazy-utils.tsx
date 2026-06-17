import React, { Suspense } from 'react';

interface LazyComponentLoaderProps {
  children: React.ReactNode;
}

export function ComponentSkeleton() {
  return (
    <div 
      className="w-full animate-pulse bg-steel/10 rounded-lg" 
      style={{ minHeight: '300px' }}
    />
  );
}

export function LazyComponentLoader({ children }: LazyComponentLoaderProps) {
  return (
    <Suspense fallback={<ComponentSkeleton />}>
      {children}
    </Suspense>
  );
}

export function lazyComponent<P extends object>(
  Component: React.ComponentType<P>,
  delay: number = 0
) {
  return React.lazy(async () => {
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    return { default: Component };
  });
}
