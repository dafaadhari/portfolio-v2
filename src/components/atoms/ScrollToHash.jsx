import { useEffect } from 'react';

// The browser tries to scroll to the URL hash while loading, before the lazy sections exist.
// Render this as the last child of their <Suspense>: the effect runs once they are in the DOM.
const ScrollToHash = () => {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
  }, []);

  return null;
};

export default ScrollToHash;
