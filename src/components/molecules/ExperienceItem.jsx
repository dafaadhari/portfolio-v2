import { localize } from '../../data/portfolioData';

// The filled dot marks work that is still going on.
const ExperienceItem = ({ item, lang, isLast }) => (
  <div className="group relative grid grid-cols-[0.75rem_minmax(0,1fr)] gap-x-4 xl:grid-cols-[9.5rem_0.75rem_minmax(0,1fr)] xl:gap-x-5 pb-10">
    {!isLast && (
      <span aria-hidden="true" className="absolute top-5 -bottom-1 left-[5.5px] xl:left-[calc(9.5rem+1.25rem+5.5px)] xl:top-6 w-px bg-white/20" />
    )}

    <span
      aria-hidden="true"
      className={`col-start-1 row-start-1 xl:col-start-2 w-3 h-3 mt-1 xl:mt-2 rounded-full border-2 border-paper transition-colors duration-300 ${
        item.current ? 'bg-paper' : 'bg-night group-hover:bg-paper'
      }`}
    />

    <p className="col-start-2 xl:col-start-1 xl:row-start-1 text-[0.8125rem] text-mist xl:pt-1.5">{localize(item.period, lang)}</p>

    <div className="col-start-2 xl:col-start-3 xl:row-start-1 min-w-0">
      <h3 className="text-xl xl:text-[1.375rem] font-semibold tracking-tight leading-snug mt-0.5 xl:mt-0">{localize(item.role, lang)}</h3>
      <p className="text-sm text-mist mt-0.5">{localize(item.org, lang)}</p>
      <ul className="mt-2.5 list-disc pl-4.5 space-y-1 text-[0.9375rem] leading-relaxed text-mist transition-colors duration-300 group-hover:text-paper">
        {item.description[lang].map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default ExperienceItem;
