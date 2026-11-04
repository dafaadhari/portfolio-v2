import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiX } from 'react-icons/fi';
import { localize } from '../../data/portfolioData';

const FOCUSABLE = 'a[href], button, video[controls], [tabindex="0"]';

// Rendered on <body>, since the story panels create stacking contexts below the navbar.
const MediaLightbox = ({ item, startIndex = 0, lang, onClose }) => {
  const { t } = useTranslation();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const galleryRef = useRef(null);
  const caption = localize(item.caption, lang);
  const alt = localize(item.alt, lang);
  const isGallery = item.kind === 'photos' && item.images.length > 1;

  useEffect(() => {
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Focusing the tapped photo widens it on wide screens. Phones swipe instead, and focus alone
    // doesn't move the snapping gallery, so it scrolls there explicitly.
    const photo = galleryRef.current?.children[startIndex];
    if (photo) {
      photo.focus({ preventScroll: true });
      photo.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'instant' });
    } else {
      closeRef.current?.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      // Keep keyboard focus inside the dialog.
      const focusable = [...dialogRef.current.querySelectorAll(FOCUSABLE)];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      opener?.focus?.();
    };
  }, [onClose, startIndex]);

  return createPortal(
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[110] overflow-y-auto bg-night text-paper"
    >
      {/* Stays on screen at any height, including landscape phones. */}
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="fixed z-10 top-4 right-4 inline-flex items-center gap-2 rounded-full bg-paper text-night px-4 py-2.5 text-[0.8125rem] font-medium"
      >
        <FiX aria-hidden="true" className="w-4 h-4" /> {t('media_close', 'Close')}
      </button>

      <div className="min-h-full flex flex-col items-center justify-center gap-3 px-4 py-20">
        <div onClick={(e) => e.stopPropagation()} className="max-w-full">
          {item.kind === 'video' && (
            <video
              src={item.videoUrl}
              poster={item.thumb}
              controls
              autoPlay
              playsInline
              preload="none"
              className="max-h-[75dvh] max-w-full rounded-md"
            />
          )}

          {item.kind === 'photos' && !isGallery && (
            <img src={item.images[0]} alt={alt} className="max-h-[75dvh] max-w-full rounded-md" />
          )}

          {/* Photo accordion: hover or focus a photo to widen it. Phones swipe sideways instead. */}
          {isGallery && (
            <div
              ref={galleryRef}
              role="group"
              aria-label={t('media_gallery', 'Photo gallery')}
              className="flex gap-1.5 w-[92vw] max-w-6xl h-[70dvh] overflow-x-auto snap-x snap-mandatory md:overflow-hidden md:snap-none"
            >
              {item.images.map((src, index) => (
                <div
                  key={src}
                  tabIndex={0}
                  // The gallery clips anything outside it, so the keyboard focus ring sits inside the photo.
                  className="group/photo relative h-full shrink-0 basis-[85%] snap-center overflow-hidden rounded-md transition-[flex-grow] duration-500 ease-out focus-visible:-outline-offset-3! md:shrink md:basis-0 md:flex-1 md:hover:flex-[4] md:focus:flex-[4]"
                >
                  <img src={src} alt={`${alt} (${index + 1}/${item.images.length})`} className="w-full h-full object-cover" />
                  <div aria-hidden="true" className="hidden md:block absolute inset-0 bg-night/50 transition-colors duration-500 md:group-hover/photo:bg-night/0 md:group-focus/photo:bg-night/0" />
                </div>
              ))}
            </div>
          )}
        </div>
        <p className="text-sm text-mist text-center">{caption}</p>
      </div>
    </motion.div>,
    document.body
  );
};

export default MediaLightbox;
