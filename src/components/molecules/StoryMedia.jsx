import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';
import ScrollReveal from '../atoms/ScrollReveal';
import MediaLightbox from './MediaLightbox';
import { localize, mediaItems } from '../../data/portfolioData';

const StoryMedia = ({ lang }) => {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <>
      <ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_3fr] sm:grid-rows-2 gap-x-4 gap-y-6 max-w-4xl">
          {mediaItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item)}
              className={`group flex flex-col text-left ${index === 0 ? 'sm:row-span-2' : ''}`}
            >
              <span
                className={`relative block w-full overflow-hidden rounded-md bg-night sm:aspect-auto sm:flex-1 ${
                  index === 0 ? 'aspect-[3/4] sm:min-h-[28rem]' : 'aspect-video sm:min-h-52'
                }`}
              >
                <img
                  src={item.thumb}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {item.kind === 'video' && (
                  <span className="absolute left-3 bottom-3 flex items-center justify-center w-11 h-11 rounded-full bg-paper text-night">
                    <FiPlay aria-hidden="true" className="w-5 h-5 ml-0.5" />
                  </span>
                )}
              </span>
              <span className="mt-2 text-sm text-ink-soft">{localize(item.caption, lang)}</span>
            </button>
          ))}
        </div>
      </ScrollReveal>

      <AnimatePresence>
        {selected && <MediaLightbox key={selected.id} item={selected} lang={lang} onClose={close} />}
      </AnimatePresence>
    </>
  );
};

export default StoryMedia;
