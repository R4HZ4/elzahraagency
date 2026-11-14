import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import logoWebp from '../assets/images/logo-el-zahra.webp';
import type { SiteCopy } from '../data/siteContent';

interface FooterProps {
  copy: SiteCopy;
  onNavigateTopic: (href: string, topic?: string) => void;
}

export function Footer({ copy, onNavigateTopic }: FooterProps) {
  const socialIcons = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <picture className="h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-white p-0.5 shadow-soft">
              <source type="image/webp" srcSet={logoWebp} />
              <img
                src="/assets/aistudio/redesign-the-el-so-it-look-stunning_f3423146.png"
                alt={copy.brand.fullName}
                width={44}
                height={44}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </picture>
            <span className="font-serif text-xl">{copy.brand.fullName}</span>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-75">{copy.brand.tagline}</p>

          <ul className="mt-6 space-y-3 text-sm opacity-90">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="tabular-nums">
                {copy.brand.phone} ({copy.brand.hours})
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${copy.brand.email}`} className="hover:text-accent">
                {copy.brand.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{copy.brand.address}</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
          {copy.footer.columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-sm font-bold text-accent">{col.title}</p>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateTopic(link.href);
                      }}
                      className="opacity-75 transition-opacity hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-ink-foreground/15">
        <div className="container-x flex flex-col gap-5 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2 opacity-70">
            {copy.footer.legal.map((item) => (
              <a
                key={item}
                href="#hubungi"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateTopic('#hubungi');
                }}
                className="hover:opacity-100"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {socialIcons.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#hubungi"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateTopic('#hubungi');
                }}
                aria-label={`${copy.brand.fullName} ${label}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-foreground/25 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <p className="container-x pb-8 text-xs leading-relaxed opacity-55">
          {copy.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
