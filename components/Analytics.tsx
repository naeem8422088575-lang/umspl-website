'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Analytics() {
  const currentPath = usePathname();

  useEffect(() => {
    if (window.performance) {
      const entries = window.performance.getEntriesByType('navigation');
      if (entries.length > 0) {
        const navEntry = entries[0];
        if (navEntry && 'duration' in navEntry) {
          const duration = navEntry.duration as number;
          if (process.env.NODE_ENV === 'development') {
            console.info(`[Telemetry] Path: ${currentPath} | Load: ${duration.toFixed(0)}ms`);
          }
        }
      }
    }
  }, [currentPath]);

  return null;
}