import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';
import ScrollReveal from '../atoms/ScrollReveal';
import MediaLightbox from './MediaLightbox';
import ProofStack from './ProofStack';
import { localize, mediaItems } from '../../data/portfolioData';

const StoryMedia = ({ lang }) => {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <>
      <ProofStack>
        {mediaItems.map((item) => (
          <ScrollReveal key={item.id} direction="up">
            <button
              type="button"
              onClick={() => setSelected(item)}
              className="group block w-full text-left overflow-hidden rounded-lg border border-ink/20 bg-beton"
            >
              <span className="relative block w-full aspect-video overflow-hidden bg-night">
                <img
                  src={item.thumb}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {item.kind === 'video' && (
                  <span className="absolute left-3 bottom-3 flex items-center justify-center w-11 h-11 rounded-full bg-paper text-night">
                    <FiPlay aria-hidden="true" className="w-5 h-5 ml-0.5" />
                  </span>
                )}
              </span>
              <span className="block px-4 lg:px-5 py-3 text-sm text-ink-soft">{localize(item.caption, lang)}</span>
            </button>
          </ScrollReveal>
        ))}
      </ProofStack>

      <AnimatePresence>
        {selected && <MediaLightbox key={selected.id} item={selected} lang={lang} onClose={close} />}
      </AnimatePresence>
    </>
  );
};

export default StoryMedia;
