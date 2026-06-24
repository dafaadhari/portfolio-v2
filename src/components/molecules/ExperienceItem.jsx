import { useTranslation } from 'react-i18next';

const ExperienceItem = ({ exp, isLast, isActive, onSelect }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';

  const circleGlow = isActive 
    ? "border-blue-500 bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
    : "border-white/10 bg-[#0B0F19] group-hover:border-blue-500 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group-active:border-blue-500 group-active:bg-blue-500/20";
    
  const titleColor = isActive ? "text-blue-500" : "text-white group-hover:text-blue-500 group-active:text-blue-500";
  const lineGlow = isActive ? "bg-blue-600/50" : "bg-white/5 group-hover:bg-blue-600/50 group-active:bg-blue-600/50";

  const currentRole = exp.role[lang];
  const currentPeriod = exp.period[lang];
  const currentDescription = exp.description[lang];

  return (
    <button
      type="button"
      onClick={onSelect}
      className="group relative flex w-full gap-6 pb-12 text-left cursor-pointer transition-all duration-300 focus:outline-none"
      aria-pressed={isActive}
    >
      
      {!isLast && (
        <div className={`absolute left-[11px] top-8 bottom-0 w-px transition-colors duration-500 ${lineGlow}`}></div>
      )}
      
      <div className="relative z-10 flex-shrink-0 mt-1.5">
        <div className={`w-6 h-6 rounded-full border-[3px] transition-all duration-500 ${circleGlow}`}></div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 gap-2 md:gap-0">
          <div>
            <h3 className={`text-xl md:text-2xl font-bold tracking-wide transition-colors duration-300 ${titleColor}`}>
              {currentRole}
            </h3>
            <h4 className="text-sm font-bold uppercase tracking-wider mt-2 text-neutral-500">
              {exp.company}
            </h4>
          </div>
          
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium rounded-full w-max">
            {currentPeriod}
          </span>
        </div>

        <div className={`mt-4 text-sm md:text-base font-light leading-relaxed transition-colors duration-300 ${isActive ? 'text-neutral-200' : 'text-neutral-400 group-hover:text-neutral-200 group-active:text-neutral-200'}`}>
          {currentDescription.length === 1 ? (
            <p>{currentDescription[0]}</p>
          ) : (
            <ul className="list-disc pl-5 space-y-2">
              {currentDescription.map((item, idx) => (
                <li key={idx} className="pl-1">{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </button>
  );
};

export default ExperienceItem;
