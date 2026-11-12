import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../atoms/ScrollReveal';
import PillLink from '../atoms/PillLink';
import { socialLinks } from '../../data/portfolioData';

const FIELD_CLASS =
  'w-full bg-white/5 border border-white/25 rounded-lg px-4 py-3.5 text-paper placeholder:text-mist/80 focus:border-paper focus:bg-white/10 transition-colors';

const Contact = () => {
  const { t } = useTranslation();
  const [statusKey, setStatusKey] = useState("contact_btn_send");
  const isSending = statusKey === "contact_btn_sending";
  const hasResult = statusKey === "contact_btn_success" || statusKey === "contact_btn_error";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setStatusKey("contact_btn_sending");

    const formData = new FormData(e.target);
    formData.append("access_key", "51772b50-2bb2-4261-a569-79b304699acd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatusKey("contact_btn_success");
        e.target.reset();
        setTimeout(() => setStatusKey("contact_btn_send"), 3000);
      } else {
        console.error("Error:", data);
        setStatusKey("contact_btn_error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatusKey("contact_btn_error");
    }
  };

  return (
    <section id="contact" className="relative z-10 bg-night text-paper border-t border-white/15">
      <div className="px-5 lg:px-10 pt-24 pb-16 lg:pb-24 grid lg:grid-cols-2 gap-x-14 gap-y-10">
        <ScrollReveal direction="right">
          <h2 className="font-display font-normal uppercase text-6xl lg:text-8xl leading-[1.1]">
            {t('contact_title', 'Get In Touch')}
          </h2>
          <p className="mt-4 text-lg text-mist">
            {t('contact_subtitle', "Whether it's a job, a project, or just a quick hello, I'd be happy to hear from you.")}
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <PillLink href={socialLinks.email} variant="outlineDark">
              <FiMail aria-hidden="true" className="w-3.5 h-3.5" /> {t('contact_social_email', 'Email')}
            </PillLink>
            <PillLink href={socialLinks.linkedin} external variant="outlineDark">
              <FiLinkedin aria-hidden="true" className="w-3.5 h-3.5" /> {t('contact_social_linkedin', 'LinkedIn')}
            </PillLink>
            <PillLink href={socialLinks.github} external variant="outlineDark">
              <FiGithub aria-hidden="true" className="w-3.5 h-3.5" /> {t('contact_social_github', 'GitHub')}
            </PillLink>
            <PillLink href={socialLinks.instagram} external variant="outlineDark">
              <FiInstagram aria-hidden="true" className="w-3.5 h-3.5" /> {t('contact_social_instagram', 'Instagram')}
            </PillLink>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-mist">
                {t('contact_label_name', 'Name')}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="name"
                placeholder={t('contact_ph_name', 'Your name')}
                className={FIELD_CLASS}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-mist">
                {t('contact_label_email', 'Email')}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                placeholder={t('contact_ph_email', 'your@email.com')}
                className={FIELD_CLASS}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-mist">
                {t('contact_label_message', 'Message')}
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="4"
                placeholder={t('contact_ph_message', 'Write your message here')}
                className={`${FIELD_CLASS} resize-none`}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              aria-busy={isSending}
              className="w-full bg-accent text-ink font-semibold py-3.5 rounded-lg transition-colors duration-200 hover:bg-paper disabled:opacity-70"
            >
              {t(statusKey)}
            </button>

            {/* Announces the result to screen readers, since only the button text changes. */}
            <p role="status" className="sr-only">
              {hasResult ? t(statusKey) : ''}
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
