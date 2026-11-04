import { useEffect, useState } from 'react';

const MIN_HOLD_MS = 1200; // Long enough to read the name on a fast connection.
const MAX_WAIT_MS = 3000; // Never hold the page longer than this on a slow one.
const REVEAL_MS = 500; // The rest of the page fades in while the photo is still rising.
const SEEN_KEY = 'intro-seen';

const setIntroState = (state) => {
  document.documentElement.dataset.intro = state;
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// The keys of Ctrl+Shift+R or F5 are often still held when the reloaded page starts, and they
// repeat. Those must not count as the visitor choosing to skip.
const isDeliberate = (event) => {
  if (event.type !== 'keydown') return true;
  const isShortcut = event.ctrlKey || event.metaKey || event.altKey || event.key === 'Shift' || event.key === 'F5';
  return !event.repeat && !isShortcut;
};

// Runs the loading intro started by the inline scripts in index.html.
// Any scroll, click, or key press ends it at once, so nobody is ever held up.
export const useIntro = () => {
  const [phase, setPhase] = useState(() =>
    document.documentElement.dataset.intro === 'play' ? 'loading' : 'done'
  );
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    if (document.documentElement.dataset.intro !== 'play') {
      setIntroState('done');
      return undefined;
    }

    window.__introStep?.();

    let active = true;
    let revealTimer;
    const skipEvents = ['wheel', 'touchmove', 'pointerdown', 'keydown', 'scroll'];
    const removeSkipListeners = () => skipEvents.forEach((name) => window.removeEventListener(name, skip));

    const finish = () => {
      if (!active) return;
      active = false;
      clearTimeout(revealTimer);
      removeSkipListeners();
      setIntroState('done');
      setPhase('done');
      try {
        sessionStorage.setItem(SEEN_KEY, '1');
      } catch {
        // Without storage the intro simply plays again next time.
      }
    };

    function skip(event) {
      if (!active || !isDeliberate(event)) return;
      setSkipped(true);
      finish();
    }

    const reveal = () => {
      if (!active) return;
      setIntroState('reveal');
      setPhase('reveal');
      revealTimer = setTimeout(finish, REVEAL_MS);
    };

    skipEvents.forEach((name) => window.addEventListener(name, skip, { passive: true }));

    const elapsed = performance.now();
    const ready = Promise.all([window.__introReady, delay(Math.max(0, MIN_HOLD_MS - elapsed))]);
    Promise.race([ready, delay(Math.max(0, MAX_WAIT_MS - elapsed))]).then(reveal);

    return () => {
      active = false;
      clearTimeout(revealTimer);
      removeSkipListeners();
    };
  }, []);

  return { phase, skipped };
};
