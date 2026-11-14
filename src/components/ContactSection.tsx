import { useEffect, useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import type { SiteCopy } from '../data/siteContent';

interface ContactSectionProps {
  copy: SiteCopy;
  selectedTopic: string;
  onSelectTopic: (topic: string) => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactSection({
  copy,
  selectedTopic,
  onSelectTopic,
}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (!copy.contact.topics.includes(selectedTopic)) {
      onSelectTopic(copy.contact.topics[0]);
    }
  }, [copy.contact.topics, selectedTopic, onSelectTopic]);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      next.name = copy.contact.errors.nameRequired;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = copy.contact.errors.emailInvalid;
    }
    if (phone.trim().replace(/[^0-9]/g, '').length < 8) {
      next.phone = copy.contact.errors.phoneInvalid;
    }
    if (!message.trim() || message.trim().length < 8) {
      next.message = copy.contact.errors.messageRequired;
    }
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      const code = `EZ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmitting(false);
      setSubmittedRef(code);
    }, 350);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrors({});
  };

  return (
    <section id="hubungi" className="container-x pb-20 md:pb-28">
      {/* Original Primary CTA Banner */}
      <div className="flex flex-col items-start gap-6 rounded-2xl bg-primary px-8 py-12 text-primary-foreground md:flex-row md:items-center md:justify-between md:px-14">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">{copy.ctaBanner.title}</h2>
          <p className="mt-2 opacity-85">{copy.ctaBanner.subtitle}</p>
        </div>
        <a
          href="#borang-hubungi"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('borang-hubungi')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition hover:gap-3"
        >
          {copy.ctaBanner.button} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      {/* Contact Form & Office Details */}
      <div
        id="borang-hubungi"
        className="mt-12 grid gap-10 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12"
      >
        {/* Left info column */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <p className="eyebrow">{copy.contact.eyebrow}</p>
            <h3 className="mt-3 text-balance text-2xl font-semibold text-foreground md:text-3xl">
              {copy.contact.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {copy.contact.subtitle}
            </p>
          </div>

          <div className="mt-8 space-y-5 border-t border-border pt-8">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              {copy.contact.officeTitle}
            </p>

            <div className="flex items-start gap-3 text-sm text-foreground">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold tabular-nums">{copy.brand.phone}</p>
                <p className="text-xs text-muted-foreground">{copy.brand.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-foreground">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold">{copy.brand.email}</p>
                <p className="text-xs text-muted-foreground">El Zahra Agency Careline</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-foreground">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold">{copy.brand.address}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {copy.contact.officeHoursLabel}: {copy.brand.hours}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right form column */}
        <div className="lg:col-span-7">
          {submittedRef ? (
            <div
              role="status"
              aria-live="polite"
              className="flex h-full flex-col items-start justify-center rounded-xl border border-primary/20 bg-secondary p-8"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
              </span>
              <h4 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                {copy.contact.success.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {copy.contact.success.description}
              </p>
              <div className="mt-6 rounded-lg border border-border bg-card px-4 py-3 text-sm">
                <span className="text-muted-foreground">{copy.contact.success.refLabel}: </span>
                <span className="font-semibold tabular-nums text-primary">{submittedRef}</span>
                <span className="mx-2 text-border">·</span>
                <span className="font-medium text-foreground">{selectedTopic}</span>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                {copy.contact.success.newMessage}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-semibold text-foreground"
                  >
                    {copy.contact.fields.name}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder={copy.contact.fields.namePlaceholder}
                    aria-invalid={Boolean(errors.name)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs font-medium text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1.5 block text-sm font-semibold text-foreground"
                  >
                    {copy.contact.fields.phone}
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    placeholder={copy.contact.fields.phonePlaceholder}
                    aria-invalid={Boolean(errors.phone)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs font-medium text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-semibold text-foreground"
                  >
                    {copy.contact.fields.email}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder={copy.contact.fields.emailPlaceholder}
                    aria-invalid={Boolean(errors.email)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs font-medium text-destructive">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-topic"
                    className="mb-1.5 block text-sm font-semibold text-foreground"
                  >
                    {copy.contact.fields.topic}
                  </label>
                  <select
                    id="contact-topic"
                    value={selectedTopic}
                    onChange={(e) => onSelectTopic(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  >
                    {copy.contact.topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-semibold text-foreground"
                >
                  {copy.contact.fields.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  placeholder={copy.contact.fields.messagePlaceholder}
                  aria-invalid={Boolean(errors.message)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs font-medium text-destructive">{errors.message}</p>
                )}
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex min-h-[46px] items-center gap-2 whitespace-nowrap rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
                >
                  {submitting ? copy.contact.fields.submitting : copy.contact.fields.submit}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
