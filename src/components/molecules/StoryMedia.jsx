import { useTranslation } from 'react-i18next';
import ScrollReveal from '../atoms/ScrollReveal';
import MediaStrip from './MediaStrip';
import ProofStack from './ProofStack';
import { localize, mediaItems } from '../../data/portfolioData';

// Tall enough on wide screens to fully cover the Construction App card stacked behind it,
// at every width from 1024px up and in both languages.
const PHOTO_WIDTH = 'w-[min(16.625rem,72vw)] lg:w-[23.25rem]';

const stripItems = (item, lang) => {
  const alt = localize(item.alt, lang);

  if (item.kind === 'video') {
    return [{ id: item.id, src: item.thumb, width: 1274, height: 717, alt, isVideo: true, lightbox: item }];
  }

  return item.thumbs.map((src, index) => ({
    id: src,
    src,
    width: 720,
    height: 956,
    alt: `${alt} (${index + 1}/${item.thumbs.length})`,
    lightbox: item,
    lightboxIndex: index,
  }));
};

// Takes the chapter's project cards as children, so they stack together with the media cards.
const StoryMedia = ({ lang, children }) => {
  const { t } = useTranslation();

  return (
    <ProofStack>
      {children}
      {mediaItems.map((item) => (
        <ScrollReveal key={item.id} direction="up">
          <div data-media-card={item.id} className="overflow-hidden rounded-lg border border-ink/20 bg-beton">
            <MediaStrip
              label={item.kind === 'video' ? t('media_video', 'Video') : t('media_photos', 'Photos')}
              items={stripItems(item, lang)}
              itemClassName={item.kind === 'video' ? 'w-full' : PHOTO_WIDTH}
              lang={lang}
            />
            <div className="p-4 lg:p-5">
              <h3 className="font-semibold">{localize(item.title, lang)}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{localize(item.description, lang)}</p>
              <p className="mt-1 text-sm text-ink-soft">{localize(item.tag, lang)}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </ProofStack>
  );
};

export default StoryMedia;
