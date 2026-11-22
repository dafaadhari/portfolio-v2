import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiCopy } from 'react-icons/fi';

// The demo login of a live project, as two chips that copy their value when clicked.
const DemoAccount = ({ credentials, dark = false }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(null);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const fields = [
    { key: 'email', label: t('project_demo_email', 'Email'), value: credentials.email },
    { key: 'password', label: t('project_demo_password', 'Password'), value: credentials.password },
  ];

  const copy = async (field) => {
    try {
      await navigator.clipboard.writeText(field.value);
    } catch {
      return; // No clipboard access: the value is still there to select by hand.
    }
    setCopied(field.key);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(null), 1600);
  };

  const muted = dark ? 'text-mist' : 'text-ink-soft';
  const chip = dark ? 'border-white/20 hover:bg-white/10' : 'border-ink/20 hover:bg-ink/5';

  return (
    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm">
      <span className={muted}>{t('project_demo_account', 'Demo account')}:</span>
      {fields.map((field) => (
        <button
          key={field.key}
          type="button"
          onClick={() => copy(field)}
          aria-label={t('project_demo_copy', { label: field.label, value: field.value, defaultValue: 'Copy {{label}}: {{value}}' })}
          className={`inline-flex max-w-full items-center gap-1.5 rounded-md border px-2 py-1 text-[0.8125rem] transition-colors duration-200 ${chip}`}
        >
          <span className={muted}>{field.label}</span>
          <span className="font-medium break-all">{field.value}</span>
          {copied === field.key ? (
            <FiCheck aria-hidden="true" className="w-3.5 h-3.5 shrink-0" />
          ) : (
            <FiCopy aria-hidden="true" className={`w-3.5 h-3.5 shrink-0 ${muted}`} />
          )}
        </button>
      ))}
      {/* Tells screen readers the copy worked, since only an icon changes. */}
      <span role="status" className="sr-only">
        {copied ? t('project_demo_copied', 'Copied') : ''}
      </span>
    </div>
  );
};

export default DemoAccount;
