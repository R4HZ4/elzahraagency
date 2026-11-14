import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, Phone, Search, X } from 'lucide-react';
import logoWebp from '../assets/images/logo-el-zahra.webp';
import type { Language, SiteCopy } from '../data/siteContent';

interface HeaderProps {
  copy: SiteCopy;
  lang: Language;
  onChangeLang: (lang: Language) => void;
  onNavigateTopic: (href: string, topic?: string) => void;
  onOpenSearch: () => void;
}

export function Header({
  copy,
  lang,
  onChangeLang,
  onNavigateTopic,
  onOpenSearch,
}: HeaderProps) {
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<number | null>(0);
  const [activeAudience, setActiveAudience] = useState('individu');

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDesktopMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLinkClick = (href: string, topic?: string) => {
    setActiveDesktopMenu(null);
    setMobileOpen(false);
    onNavigateTopic(href, topic);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-card shadow-soft"
      onMouseLeave={() => setActiveDesktopMenu(null)}
    >
      {/* Top utility bar (desktop) */}
      <div className="hidden border-b border-border bg-ink text-ink-foreground lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            {copy.topBar.audiences.map((aud) => (
              <button
                key={aud.id}
                type="button"
                onClick={() => {
                  setActiveAudience(aud.id);
                  if (aud.id === 'korporat') {
                    handleLinkClick('#penyelesaian', copy.solutions[4]?.topic);
                  } else if (aud.id === 'perunding') {
                    handleLinkClick('#sorotan', copy.spotlight.topic);
                  }
                }}
                className={`whitespace-nowrap transition-opacity ${
                  activeAudience === aud.id
                    ? 'font-semibold text-accent'
                    : 'opacity-80 hover:opacity-100'
                }`}
              >
                {aud.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6 opacity-90">
            <a
              href={`tel:${copy.brand.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 whitespace-nowrap hover:text-accent"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="tabular-nums">{copy.brand.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => handleLinkClick('#hubungi', copy.contact.topics[10])}
              className="whitespace-nowrap hover:text-accent"
            >
              {copy.topBar.findBranch}
            </button>
            <div className="flex items-center gap-1.5" role="group" aria-label="Language switcher">
              <button
                type="button"
                onClick={() => onChangeLang('ms')}
                className={`px-1 transition-colors ${
                  lang === 'ms' ? 'font-bold text-accent' : 'opacity-70 hover:opacity-100'
                }`}
              >
                BM
              </button>
              <span aria-hidden="true" className="opacity-40">
                |
              </span>
              <button
                type="button"
                onClick={() => onChangeLang('en')}
                className={`px-1 transition-colors ${
                  lang === 'en' ? 'font-bold text-accent' : 'opacity-70 hover:opacity-100'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMobileOpen(false);
          }}
          className="flex shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <picture className="h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-white p-0.5 ring-1 ring-border/70">
            <source type="image/webp" srcSet={logoWebp} />
            <img
              src="/assets/aistudio/redesign-the-el-so-it-look-stunning_f3423146.png"
              alt={copy.brand.fullName}
              width={44}
              height={44}
              decoding="async"
              className="h-full w-full object-contain"
            />
          </picture>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold text-foreground whitespace-nowrap">
              {copy.brand.name}
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
              {copy.brand.sub}
            </span>
          </span>
        </a>

        {/* Desktop mega-menu triggers */}
        <nav className="hidden h-full items-stretch lg:flex" aria-label="Primary navigation">
          {copy.nav.map((item, idx) => {
            const isOpen = activeDesktopMenu === idx;
            return (
              <button
                key={item.label}
                type="button"
                onMouseEnter={() => setActiveDesktopMenu(idx)}
                onClick={() => setActiveDesktopMenu(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className={`relative flex items-center gap-1 whitespace-nowrap px-3.5 text-sm font-semibold transition-colors xl:px-4 ${
                  isOpen ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
                <span
                  className={`absolute inset-x-3.5 bottom-0 h-[3px] rounded-t bg-accent transition-opacity ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label={copy.topBar.searchLabel}
            className="grid h-10 w-10 place-items-center rounded-full text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>

          <a
            href="#hubungi"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hubungi');
            }}
            className="hidden whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 md:inline-flex"
          >
            {copy.topBar.loginCta}
          </a>

          <button
            type="button"
            aria-label={copy.topBar.menuLabel}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="grid h-11 w-11 place-items-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu Panel */}
      {activeDesktopMenu !== null && (
        <div className="hidden border-t border-border bg-card shadow-lift lg:block">
          <div className="container-x grid grid-cols-12 gap-10 py-10">
            <div className="col-span-4 border-r border-border pr-10">
              <p className="eyebrow">{copy.nav[activeDesktopMenu].label}</p>
              <p className="mt-3 font-serif text-2xl leading-snug text-foreground">
                {copy.nav[activeDesktopMenu].intro}
              </p>
              <button
                type="button"
                onClick={() => handleLinkClick('#penyelesaian')}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                {copy.topBar.viewAll} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {copy.nav[activeDesktopMenu].groups.map((group) => (
              <div key={group.title} className="col-span-4">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {group.title}
                </p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.href, link.topic);
                        }}
                        className="text-[15px] text-foreground transition-colors hover:text-primary"
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
      )}

      {/* Mobile-Friendly Navigation Menu */}
      {mobileOpen && (
        <div
          className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-border bg-card lg:hidden"
          role="dialog"
          aria-label={copy.topBar.menuLabel}
        >
          {/* Mobile quick audience + language bar */}
          <div className="container-x flex items-center justify-between border-b border-border bg-ink py-3 text-xs text-ink-foreground">
            <a
              href={`tel:${copy.brand.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 font-medium tabular-nums"
            >
              <Phone className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {copy.brand.phone}
            </a>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onChangeLang('ms')}
                className={`min-h-[32px] px-2 rounded ${
                  lang === 'ms' ? 'bg-accent font-bold text-accent-foreground' : 'opacity-80'
                }`}
              >
                BM
              </button>
              <button
                type="button"
                onClick={() => onChangeLang('en')}
                className={`min-h-[32px] px-2 rounded ${
                  lang === 'en' ? 'bg-accent font-bold text-accent-foreground' : 'opacity-80'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {copy.nav.map((cat, idx) => {
            const expanded = mobileAccordion === idx;
            return (
              <div key={cat.label} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setMobileAccordion(expanded ? null : idx)}
                  aria-expanded={expanded}
                  className="container-x flex min-h-[52px] w-full items-center justify-between py-3.5 text-left text-base font-semibold text-foreground"
                >
                  {cat.label}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      expanded ? 'rotate-180 text-primary' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {expanded && (
                  <div className="container-x space-y-5 bg-muted pb-5 pt-4">
                    {cat.groups.map((group) => (
                      <div key={group.title}>
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          {group.title}
                        </p>
                        <div className="space-y-1">
                          {group.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(link.href, link.topic);
                              }}
                              className="flex min-h-[44px] items-center text-sm font-medium text-foreground hover:text-primary"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="container-x py-5">
            <a
              href="#hubungi"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#hubungi');
              }}
              className="flex min-h-[48px] items-center justify-center rounded-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              {copy.topBar.contactCta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
