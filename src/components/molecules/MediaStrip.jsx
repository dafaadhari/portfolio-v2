import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi';
import MediaLightbox from './MediaLightbox';

const ARROW_CLASS =
  'flex items-center justify-center w-9 h-9 rounded-full border border-white/25 transition-colors duration-200 hover:bg-paper hover:text-night';

// The dark panel at the top of a project or media card. Items scroll sideways, with arrows for
// mouse users who can't swipe, and tapping one opens item.lightbox at item.lightboxIndex.
const MediaStrip = ({ label, items, itemClassName = 'w-40', lang }) => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const labelId = useId();
  const stripRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [canScroll, setCanScroll] = useState(false);
  const close = useCallback(() => setSelected(null), []);

  // The arrows only appear when there is somewhere to scroll to.
  useEffect(() => {
    const strip = stripRef.current;
    const observer = new ResizeObserver(() => setCanScroll(strip.scrollWidth > strip.clientWidth + 1));
    observer.observe(strip);
    return () => observer.disconnect();
  }, []);

  const move = (direction) => {
    const strip = stripRef.current;
    strip.scrollBy({ left: direction * strip.clientWidth * 0.75, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <div role="group" aria-labelledby={labelId} className="bg-night text-paper">
      <div className="flex items-center justify-between gap-4 min-h-9 px-4 lg:px-5 pt-3.5 box-content">
        <p id={labelId} className="text-[0.8125rem] font-medium text-mist">
          {label}
        </p>
        {canScroll && (
          <div className="flex gap-2">
            <button type="button" onClick={() => move(-1)} aria-label={t('media_strip_prev', 'Scroll left')} className={ARROW_CLASS}>
              <FiChevronLeft aria-hidden="true" className="w-4 h-4" />
            </button>
            <button type="button" onClick={() => move(1)} aria-label={t('media_strip_next', 'Scroll right')} className={ARROW_CLASS}>
              <FiChevronRight aria-hidden="true" className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <ul
        ref={stripRef}
        data-media-strip
        className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory scroll-px-4 lg:scroll-px-5 px-4 lg:px-5 pt-3.5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <li key={item.id} className={`shrink-0 snap-start ${itemClassName}`}>
            <button type="button" onClick={() => setSelected(item)} className="group relative block w-full text-left">
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-[0.875rem] ring-1 ring-white/20 transition-[translate] duration-300 group-hover:-translate-y-1"
              />
              {item.isVideo && (
                <span className="absolute left-3 bottom-3 flex items-center justify-center w-11 h-11 rounded-full bg-paper text-night">
                  <FiPlay aria-hidden="true" className="w-5 h-5 ml-0.5" />
                </span>
              )}
              {item.caption && <span className="mt-2.5 block text-xs text-mist">{item.caption}</span>}
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {selected && (
          <MediaLightbox
            key={selected.lightbox.id}
            item={selected.lightbox}
            startIndex={selected.lightboxIndex}
            lang={lang}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaStrip;
