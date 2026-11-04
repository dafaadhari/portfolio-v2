import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiX } from 'react-icons/fi';
import { localize } from '../../data/portfolioData';

const FOCUSABLE = 'a[href], button, video[controls], [tabindex="0"]';

const MediaLightbox = ({ item, lang, onClose }) => {
  const { t } = useTranslation();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const caption = localize(item.caption, lang);
  const alt = localize(item.alt, lang);

  useEffect(() => {
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

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
  }, [onClose]);

  return (
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
      className="fixed inset-0 z-[60] overflow-y-auto bg-night text-paper"
    >
      {/* Stays on screen at any height, including landscape phones. */}
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="fixed z-10 top-4 right-4 inline-flex items-center gap-2 rounded-full bg-paper text-night px-4 py-2.5 text-[0.8125rem] font-medium"
      >
        <FiX aria-hidden="true" className="w-4 h-4" /> {t('media_close', 'Tutup')}
      </button>

      <div className="min-h-full flex flex-col items-center justify-center gap-3 px-4 py-20">
        <div onClick={(e) => e.stopPropagation()} className="max-w-full">
          {item.kind === 'video' ? (
            <video
              src={item.videoUrl}
              poster={item.thumb}
              controls
              autoPlay
              playsInline
              preload="none"
              className="max-h-[75dvh] max-w-full rounded-md"
            />
          ) : (
            <div
              tabIndex={item.images.length > 1 ? 0 : undefined}
              role={item.images.length > 1 ? 'group' : undefined}
              aria-label={item.images.length > 1 ? t('media_gallery', 'Galeri foto') : undefined}
              className="flex gap-3 overflow-x-auto snap-x snap-mandatory"
            >
              {item.images.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`${alt} (${index + 1}/${item.images.length})`}
                  className="max-h-[75dvh] max-w-[88vw] w-auto shrink-0 snap-center rounded-md"
                />
              ))}
            </div>
          )}
        </div>
        <p className="text-sm text-mist text-center">{caption}</p>
      </div>
    </motion.div>
  );
};

export default MediaLightbox;
