import { useEffect } from "react";
import { useLocation } from "react-router";

interface ScrollToTopProps {
  smooth?: boolean;
}

/**
 * ScrollToTop Component
 * 
 * Automatically scrolls to the top of the page when the route changes.
 * This is essential for single-page applications to provide native-like navigation.
 * 
 * @param smooth - Enable smooth scrolling animation (default: true)
 */
export function ScrollToTop({ smooth = true }: ScrollToTopProps) {
  const location = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      // Instant scroll for better mobile compatibility
      window.scrollTo(0, 0);
      
      // Also scroll the document element and body (for different browsers)
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, [location.pathname]);

  // This component doesn't render anything
  return null;
}