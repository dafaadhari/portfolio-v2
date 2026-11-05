import { useTranslation } from 'react-i18next';
import ScrollReveal from '../atoms/ScrollReveal';
import MediaStrip from '../molecules/MediaStrip';
import { localize, mediaItems } from '../../data/portfolioData';

// On wide screens both cards sit side by side, so the photos take the height of the 16:9 video:
// (717 / 1274) * (720 / 956) of the strip's inner width, which is the card minus its 2.5rem padding.
const PHOTO_WIDTH = 'w-[min(16.625rem,72vw)] lg:w-[calc((100cqw_-_2.5rem)*0.42385)]';

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

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'id' ? 'id' : 'en';

  return (
    <section id="gallery" className="relative z-10 bg-night text-paper border-t border-white/15">
      <div className="px-5 lg:px-10 pt-24 pb-16 lg:pb-24">
        <ScrollReveal direction="right">
          <h2 className="font-display font-normal uppercase text-6xl lg:text-8xl leading-[1.1]">
            {t('gallery_title', 'Outside the Code')}
          </h2>
          <p className="mt-4 text-lg text-mist">
            {t('gallery_subtitle', "What I like to make when I'm not coding.")}
          </p>
        </ScrollReveal>

        <div className="mt-10 grid lg:grid-cols-2 gap-5">
          {mediaItems.map((item) => (
            <ScrollReveal key={item.id} direction="up">
              <div
                data-media-card={item.id}
                className="@container h-full overflow-hidden rounded-lg border border-white/15 bg-white/[0.03] transition-colors duration-300 hover:border-white/40"
              >
                <MediaStrip
                  label={item.kind === 'video' ? t('media_video', 'Video') : t('media_photos', 'Photos')}
                  items={stripItems(item, lang)}
                  itemClassName={item.kind === 'video' ? 'w-full' : PHOTO_WIDTH}
                  lang={lang}
                />
                <div className="p-4 lg:p-5">
                  <h3 className="font-semibold">{localize(item.title, lang)}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-mist">{localize(item.description, lang)}</p>
                  <p className="mt-1 text-sm text-mist">{localize(item.tag, lang)}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
