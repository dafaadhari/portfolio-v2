const base =
  'inline-flex items-center gap-2 rounded-full px-[1.125rem] py-2.5 text-[0.8125rem] font-medium whitespace-nowrap transition-colors duration-200';

const variants = {
  ink: 'bg-ink text-paper hover:bg-ink-soft',
  white: 'bg-white text-ink hover:bg-paper',
  outline: 'border border-ink/25 text-ink hover:bg-ink hover:text-paper',
  paper: 'bg-paper text-night hover:bg-white',
  outlineDark: 'border border-white/25 text-paper hover:bg-paper hover:text-night',
};

export const pillClass = (variant = 'ink') => `${base} ${variants[variant]}`;
